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
// var RNA = DNA.replace(/T/g, 'U');
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

var animal = "AlliGATor";
if (animal.toLowerCase() == "alligator"){

  console.log("small")
} else {
  console.log("wide")
}


var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4"

var myDiv = document.getElementById("yarn-holder");
myDiv.innerHTML = domString;

// challange #5

var str= "IBMWLOVEbmcatsbmw";
var display= "<h2>" + str.replace(/bmw]/gi, "") + "</h2>";
// if (str.toLowerCase().indexOf === [bmw]){
//   str.replace(/"bmw"/g, "")
// }

var div = document.getElementById("holder");
div.innerHTML = display; 
