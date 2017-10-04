'use strict';

Product.allProducts = [];
Product.render = document.getElementById('images');
Product.totalClicks = 0;

function Product(name, filepath, alt){
  this.name = name;
  this.filepath = filepath;
  this.alt = alt;
  this.timesRendered = 0;
  this.clickCounter = 0;
  Product.allProducts.push(this);
};

new Product('bag', 'img/bag.jpg', 'bag');
new Product('banana', 'img/banana.jpg', 'banana');
new Product('bathroom', 'img/bathroom.jpg', 'bathroom');
new Product('boots', 'img/boots.jpg', 'boots');
new Product('breakfast', 'img/breakfast.jpg', 'breakfast');
new Product('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
new Product('chair', 'img/chair.jpg', 'chair');
new Product('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
new Product('dog-duck', 'img/dog-duck.jpg', 'dog-duck');
new Product('dragon', 'img/dragon.jpg', 'dragon');
new Product('pen', 'img/pen.jpg', 'pen');
new Product('pet sweep', 'img/pet-sweep.jpg', 'pet sweep');
new Product('scissors', 'img/scissors.jpg', 'scissors');
new Product('shark', 'img/shark.jpg', 'shark');
new Product('sweep', 'img/sweep.png', 'sweep');
new Product('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
new Product('unicorn', 'img/unicorn.jpg', 'unicorn');
new Product('usb', 'img/usb.gif', 'usb');
new Product('water can', 'img/water-can.jpg', 'water can');
new Product('wine glass', 'img/wine-glass.jpg', 'wine glass');

var numbOne;
var numbTwo;
var numbThree;
var oldArray = [];

function randomProduct(){
  numbOne = (Math.floor(Math.random() * Product.allProducts.length));
  numbTwo = (Math.floor(Math.random() * Product.allProducts.length));
  numbThree = (Math.floor(Math.random() * Product.allProducts.length));
  while ((numbOne === numbTwo) || (numbOne === numbThree) || (numbTwo === numbThree) || ((oldArray.indexOf(numbOne) !== -1) || (oldArray.indexOf(numbTwo) !== -1) || (oldArray.indexOf(numbThree) !== -1))) {
    numbOne = (Math.floor(Math.random() * Product.allProducts.length));
    numbTwo = (Math.floor(Math.random() * Product.allProducts.length));
    numbThree = (Math.floor(Math.random() * Product.allProducts.length));
    console.log('test');
  }
  oldArray = [];
  oldArray.push(numbOne);
  oldArray.push(numbTwo);
  oldArray.push(numbThree);
};

function renderProduct() {
  var imgEl = document.getElementById('click1');
  imgEl.src = Product.allProducts[numbOne].filepath;
  Product.allProducts[numbOne].timesRendered++;
  var imgEl2 = document.getElementById('click2');
  imgEl2.src = Product.allProducts[numbTwo].filepath;
  Product.allProducts[numbTwo].timesRendered++;
  var imgEl3 = document.getElementById('click3');
  imgEl3.src = Product.allProducts[numbThree].filepath;
  Product.allProducts[numbThree].timesRendered++;
  console.log('render runs');
}

function clickChoice(e) {
  if(e.target.id === 'images') {
    return alert('Please click on an image itself');
  }
  Product.totalClicks += 1;
  for(var i = 0; i < Product.allProducts.length; i++) {
    if(event.target.alt === Product.allProducts[i].alt) {
      Product.allProducts[i].clickCounter += 1;
    }
  }
  randomProduct();
  renderProduct();
  if(Product.totalClicks >= 25) {
    Product.allProducts.removeEventListener('click', handleClick);
    // display the results
    showResults();
  }
};

function showResults(){

}

randomProduct();
renderProduct();
Product.render.addEventListener('click', clickChoice);
