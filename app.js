'use strict';

Product.allProducts = [];

function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.clickCounter = 0;
  Product.allProducts.push(this);
};

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water can', 'img/water-can.jpg');
new Product('wine glass', 'img/wine-glass.jpg');

var numbOne;
var numbTwo;
var numbThree;
var oldArray = [];

var randomIndex = function(){
  numbOne = (Math.floor(Math.random() * Product.allProducts.length));
  numbTwo = (Math.floor(Math.random() * Product.allProducts.length));
  numbThree = (Math.floor(Math.random() * Product.allProducts.length));
};

function randomProduct(){
  randomIndex();
  while ((numbOne === numbTwo) || (numbOne === numbThree) || (numbTwo === numbThree) || ((oldArray.indexOf(numbOne) !== -1) || (oldArray.indexOf(numbTwo) !== -1) || (oldArray.indexOf(numbThree) !== -1))) {
    randomIndex();
  }
  oldArray = [];
  var imgEl = document.getElementById('render1');
  imgEl.addEventListener('click', randomProduct);
  // var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
  imgEl.src = Product.allProducts[numbOne].filepath;
  Product.allProducts[numbOne].clickCounter += 1;
  var imgEl2 = document.getElementById('render2');
  imgEl2.addEventListener('click', randomProduct);
  imgEl2.src = Product.allProducts[numbTwo].filepath;
  Product.allProducts[numbTwo].clickCounter += 1;
  var imgEl3 = document.getElementById('render3');
  imgEl3.addEventListener('click', randomProduct);
  imgEl3.src = Product.allProducts[numbThree].filepath;
  Product.allProducts[numbThree].clickCounter += 1;
  oldArray.push(numbOne);
  oldArray.push(numbTwo);
  oldArray.push(numbThree);
}

// next steps: check that randomProduct() only loops x25, then create new function that uses innerHTML to blank out images and then replaces that content with new getElementById on an <ul> that appends .clickCounter and iterates through Product.allProducts[x].clickCounter!
var i = 0;
while (i < 25) {
  randomProduct();
  i++;
}
