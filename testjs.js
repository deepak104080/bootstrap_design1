// methods to reach to elements
// DOM - https://www.geeksforgeeks.org/explain-various-type-of-html-dom-methods/
// HTMLCollection vs NodeList

//methods to read content
let content1 = document.getElementById('heading1').innerHTML;
let content2 = document.getElementById('heading1').innerText
let content3 = document.getElementById('heading1').textContent
//diff b/w all 3 methods

console.log('--------------------------')
console.log(content1);
console.log('--------------------------')
console.log(content2);
console.log('--------------------------')
console.log(content3);
console.log('--------------------------')


document.getElementById('heading3').innerHTML = "This is the new text."

// document.write('content')


// setAttribute
// getAttribute


document.getElementById('button1').style.color = "red"
// display : none - hide
// display: block - show

document.getElementById('button1').style.display = "none";
document.getElementById('button1').style.display = "block";

// window.onload


// DOM Events - day


function clickFunction() {
    document.getElementById('button1').style.display = "none";
}


//show hide
//content update
//form input handling


//ES6 - day
//async js
//api call - promise


// React


let cars = ['bmw', 'honda', 'maruti']

let newCars = cars.map((item) => {
    return item+1
})

console.log(newCars);



////////////////////////////////
// api call

// setTimeout(fn, 2000) - fn is a callback function

// Traditional JS
// XMLHttpRequest - Callback
// ajax (jQuery) - Callback


// ES6
// fetch - Promise/async await
// axios - Promise/async await


// API - Application Programming Interface

// CRUD - REST API
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

// function apiCallFetchPromise() {
//     fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//     .then(res => res.json())
//     .then(data => console.log('API Call - ', data));
// }

// apiCallFetchPromise()


const apiCallFetchAsyncAwait = async () => {
    let res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    let data = await res.json();
    console.log('API Data from async await - ', data);
}

apiCallFetchAsyncAwait()

