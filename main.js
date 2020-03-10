
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];




/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}



/******************
 * BUTTON QUERIES *
 ******************/
const d6Image = document.querySelector('#d6-roll');
const doubleD6Image1 = document.querySelector("#double-d6-roll-1");
const doubleD6Image2 = document.querySelector("#double-d6-roll-2");
const d12Image = document.querySelector('#d12-roll');
const d20Image = document.querySelector('#d20-roll');

/******************
 * CLICK HANDLERS *
 ******************/
const rollD6 = function(){
  let result = getRandomNumber(6);
  sixes.push(result);
  d6Image.src = `images/d6/${result}.png`;

  let d6MedianResult = median(sixes);
  const d6MedianElementSpot = document.querySelector('#d6-rolls-median')
  d6MedianElementSpot.innerText = d6MedianResult;

  let d6MeanResult = mean(sixes);
  const d6MeanElementSpot = document.querySelector('#d6-rolls-mean')
  d6MeanElementSpot.innerText = d6MeanResult;
  
};

const rollD6Twice = function(){
  let result1 = getRandomNumber(6);
  let result2 = getRandomNumber(6);
  doubleSixes.push(result1, result2);
  doubleD6Image1.src = `images/d6/${result1}.png`;
  doubleD6Image2.src = `images/d6/${result2}.png`;


  let double6MedianResult = median(doubleSixes);
  const double6MedianElementSpot = document.querySelector('#double-d6-rolls-median')
  double6MedianElementSpot.innerText = double6MedianResult;

  let double6MeanResult = mean(doubleSixes);
  const double6MeanElementSpot = document.querySelector('#double-d6-rolls-mean')
  double6MeanElementSpot.innerText = double6MeanResult;
  
};

const rollD12 = function(){
  let result = getRandomNumber(12);
  twelves.push(result);
  d12Image.src = `images/numbers/${result}.png`;

  let d12MedianResult = median(twelves);
  const d12MedianElementSpot = document.querySelector('#d12-rolls-median')
  d12MedianElementSpot.innerText = d12MedianResult;

  let d12MeanResult = mean(twelves);
  const d12MeanElementSpot = document.querySelector('#d12-rolls-mean')
  d12MeanElementSpot.innerText = d12MeanResult;
  
};


const rollD20 = function(){
  let result = getRandomNumber(20);
  twenties.push(result);
  d20Image.src = `images/numbers/${result}.png`;

  let d20MedianResult = median(twenties);
  const d20MedianElementSpot = document.querySelector('#d20-rolls-median')
  d20MedianElementSpot.innerText = d20MedianResult;

  let d20MeanResult = mean(twenties);
  const d20MeanElementSpot = document.querySelector('#d20-rolls-mean')
  d20MeanElementSpot.innerText = d20MeanResult;
  
};


/*******************
 * EVENT LISTENERS *
 *******************/
d6Image.addEventListener('click', rollD6);
doubleD6Image1.addEventListener('click', rollD6Twice);
doubleD6Image2.addEventListener('click', rollD6Twice);
d12Image.addEventListener('click', rollD12);
d20Image.addEventListener('click', rollD20);

/****************
 * MATH SECTION *
 ****************/
const median = function(arr) {
  arr.sort( function(a,b) {return a - b;} );
  let midpoint = Math.floor(arr.length/2);
  if(arr.length % 2)
      return arr[midpoint];
  else
      return ((arr[midpoint-1] + arr[midpoint]) / 2);
};

const mean = function(arr){
  let total = 0;
for(let i = 0; i < arr.length; i++) {
    total += arr[i];
}
let avg = total / arr.length;
return avg;
};


/********************
* MATH-AREA QUERIES *
********************/


