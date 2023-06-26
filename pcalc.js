//Percentage Calculator
//Created by Cephas Cardozo

var input_p = prompt("Input a Percent Below: ");
var input_a = prompt("Input a Amount Below: ");

var input_P = Number(input_p);
var input_A = Number(input_a);

function getPercentage(input_p, input_a){
  return input_P*input_A / 100;
}

const user_i = getPercentage();
console.log(user_i);
