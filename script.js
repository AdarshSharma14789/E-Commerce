// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
bar.addEventListener('click', () =>{nav.classicList.add('active');})
}

if(close) {
close.addEventListener('click', () =>{nav.classicList.remove('active');})
}

