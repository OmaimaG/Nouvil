
let title=document.getElementById('title')

let price=document.getElementById('price')

let taxes=document.getElementById('taxes')

let discount=document.getElementById('discount')

let total=document.getElementById('total')

let ads=document.getElementById('ads')

let category=document.getElementById('category')

let submit=document.getElementById('submit')

let count=document.getElementById('count')

//console.log(title,price,taxes,discount,total,ads,category,submit, count)

//get total

function getTotal(){

if(price.value != ''){

    let result =(+price.value + +taxes.value + +ads.value)
    - +discount.value ;
    total.innerHTML = result ;
   

}
else {
    total.innerHTML = '' ;
}

}





//create product 

//save local storage
//cree tableau 
let dataPro ;
 if (localStorage.product !=null){
dataPro=JSON.parse(localStorage.product)

 } else{
    dataPro = [];
 }


submit.onclick = function(){
let newPro ={
    title :title.value.toLowerCase(),
    price: price.value,
    taxes :taxes.value,
    ads :ads.value,
    discount :discount.value,
    total :total.innerHTML ,
    count:count.value,
    category :category.value.toLowerCase(),
}
dataPro.push(newPro)
localStorage.setItem('product', JSON.stringify(dataPro))


clearData()
showData();

}



//clears inputs
function clearData() {
    title.value ='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML="";
    count.value='';
    category.value='';
}


//read 

function showData(){

    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `
            <tr scope="row">
                <th>${i}</th>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button class="up">update</button></td>
                <td><button class="up" onclick="deleteDta(${i})">delete</button></td>
            </tr>`;
    }
    
document.getElementById('tbody').innerHTML=table

}
showData();



//count
//delete
function deleteDta () {
    var i = 0;
dataPro.splice(i,1)
localStorage.product= JSON.stringify(dataPro)
showData();

}


//update
//serch

let searchMood = 'title';



function getsearchMood(id) {
    let search = document.getElementById('search');
    let value; // Déclarez la variable value ici

    if (id == 'searchTitle') {
        searchMood = 'title';
        search.placeholder = 'Search by title';
        value = search.value; // Obtenez la valeur de l'élément de recherche
    } else {
        searchMood = 'category';
        search.placeholder = 'Search by category';
        value = search.value; // Obtenez la valeur de l'élément de recherche
    }
    search.focus();
   // Passez la valeur en argument à searchData
}

// Reste du code inchangé...


function searchData(value) {
   let table = ''; // Déclaration de la variable 'table'
    if (searchMood == 'title') {
        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].title.includes(value)) {
                table += `
                <tr scope="row">
                    <th>${i}</th>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button class="up">update</button></td>
                    <td><button class="up" onclick="deleteDta(${i})">delete</button></td>
                </tr>`;
            }
            
        }}
  else {
    for (let i = 0; i < dataPro.length; i++) {
        if (dataPro[i].category.includes(value)) {
            table += `
            <tr scope="row">
                <th>${i}</th>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button class="up">update</button></td>
                <td><button class="up" onclick="deleteDta(${i})">delete</button></td>
            </tr>`;
        }
        
    }
 }
    
   document.getElementById('tbody').innerHTML=table

    // Faites quelque chose avec la variable 'table' ici, par exemple, l'ajouter à une table existante.
}
