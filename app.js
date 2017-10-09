'use strict';

Product.allProducts = [];
Product.render = document.getElementById('images');
Product.totalClicks = 0;
var clickStorage = [];

if (localStorage.clickStorage) {
  clickStorage = JSON.parse(localStorage.clickStorage);
  localStorage.clear();
}

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
  }
  oldArray = [];
  oldArray.push(numbOne);
  oldArray.push(numbTwo);
  oldArray.push(numbThree);
};

function renderProduct() {
  var imgEl = document.getElementById('click1');
  imgEl.src = Product.allProducts[numbOne].filepath;
  imgEl.alt = Product.allProducts[numbOne].alt;
  Product.allProducts[numbOne].timesRendered++;
  var imgEl2 = document.getElementById('click2');
  imgEl2.src = Product.allProducts[numbTwo].filepath;
  imgEl2.alt = Product.allProducts[numbTwo].alt;
  Product.allProducts[numbTwo].timesRendered++;
  var imgEl3 = document.getElementById('click3');
  imgEl3.src = Product.allProducts[numbThree].filepath;
  imgEl3.alt = Product.allProducts[numbThree].alt;
  Product.allProducts[numbThree].timesRendered++;
}

function clickChoice(e) {
  if(e.target.id === 'images') {
    return alert('Please click on an image itself');
  }
  Product.totalClicks += 1;
  for(var i = 0; i < Product.allProducts.length; i++) {
    if(e.target.alt === Product.allProducts[i].alt) {
      Product.allProducts[i].clickCounter += 1;
    }
  }
  if(Product.totalClicks >= 25) {
    for (i = 0; i < Product.allProducts.length; i++) {
      clickStorage.push(Product.allProducts[i].clickCounter);
    };
    console.log(clickStorage);
    localStorage.clickStorage = JSON.stringify(clickStorage);
    // Product.render.removeEventListener('click', handleClick);
    return showResults();
  }
  randomProduct();
  renderProduct();
};

function showResults(){
  document.getElementById('images').innerHTML = '';
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Product.allProducts.name,
      datasets: [{
        label: '# of Votes',
        data: Product.allProducts.clickCounter,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

Product.render.addEventListener('click', clickChoice);
randomProduct();
renderProduct();
