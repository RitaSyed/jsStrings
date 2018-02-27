console.log ("Hello");

var numOfSandwhiches=4*2;

console.log("numOfSandwhiches", numOfSandwhiches);

// challange #2

var name = "Rita";
var string = "Hello, " + name + " how are you doing today?";
console.log("string:", string);

// challange #3

var DNA= "GCAT";
var RNA = DNA.replace('T', 'U');
var RNA = DNA.replace(/T/g, 'U');
console.log("RNA", RNA);

// challange #4

// var animal = "Goat";
// if (animal === "AlliGATor"){
//   console.log("small")
// } else {
//   console.log("wide")
// }

var animal = "AlliGATor";
if (animal.toLowerCase() == "alligator"){
  console.log("small")
} else {
  console.log("wide")
}