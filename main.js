let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain4 = document.getElementById('mountain4')
let river = document.getElementById('river')
let mountain7 = document.getElementById('mountain7')
let boat = document.getElementById ('boat')
window .onscroll = function(){

let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value * 1 + 'px';
mountain4.style.top = value * 0.5 + 'px';

boat.style.left = value *1 + 'px';



}