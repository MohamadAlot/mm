let counter = 0;
// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
// numbers
let displayE1 = document.getElementById("display");
let plus1Btn = document.getElementById("plus1");
let plus10Btn = document.getElementById("plus10");
let minus10Btn = document.getElementById("minus10");
let plus50 = document.getElementById("plus50");
let minus50 = document.getElementById("minus50");
let minus1Btn = document.getElementById("minus1");

// strings
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
//.addEventListener("click", ----);
plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
plus10Btn.addEventListener("click", add10);
minus1Btn.addEventListener("click", sub1);
plus50.addEventListener("click", add50);
minus50.addEventListener("click", sub50);

function add1() {
  counter += 1;
  displayE1.innerHTML = counter;
}
function add10() {
  counter += 10;
  displayE1.innerHTML = counter;
}
function add50() {
  counter += 50;
  displayE1.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayE1.innerHTML = counter;
}
function sub1() {
  counter -= 1;
  displayE1.innerHTML = counter;
}
function sub50() {
  counter -= 50;
  displayE1.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = " ";
  // clears the input
  story += newWord + " ";
  stringOutEl.innerHTML = story;
}
// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}
function showRand2() {
  var rand = Math.random() * 100;
  rand = rand.toFixed(3);
  rand2OutEl.innerHTML = rand;
}
function showRand3() {
  var rand = Math.random() * 10 - 5;
  rand = rand.toFixed(3);
  rand3OutEl.innerHTML = rand;
}

var rand4Btn = document.getElementById("rand4");
rand4Btn.addEventListener("click", showRand4);

function showRand4() {
  var randIn1 = +document.getElementById("rand-in1").value;
  var randIn2 = +document.getElementById("rand-in2").value;
  let rand = Math.floor(Math.random() * (randIn2 - randIn1 + 1) + randIn1);
  outPut4.innerHTML = rand;
}
var outPut4 = document.getElementById("rand4-out");

var reset = document.getElementById("reset");
reset.addEventListener("click", reset1);

function reset1() {
  displayE1.innerHTML = "0";
  stringOutEl.innerHTML = "Once upon a time,";
  rand2OutEl.innerHTML = "----------";
  rand3OutEl.innerHTML = "----------";
  rand1OutEl.innerHTML = "----------";
  outPut4.innerHTML = "----------";
  counter = 0;
}

randSize = document.getElementById("random-size");
randSize.addEventListener("click", randomFontSize);

function randomFontSize() {
  // Process
  let rand = Math.floor(Math.random() * 21 + 5);

  bodyEl = document.getElementById("the-body");
  // Output
  bodyEl.style.fontSize = `${rand}px`;
}

randColor = document.getElementById("random-rgb");
randColor.addEventListener("click", randomColor);

function randomColor() {
  // Process
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  htmlEl = document.getElementById("HTML");
  // Output
  htmlEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
