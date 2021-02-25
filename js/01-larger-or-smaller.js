
let num1, num2;
num1 = prompt('Input the first number');
num2 = prompt('Input the second number');
                                                 
if(parseFloat(num1, 10) > parseInt(num2, 10)) {
    prompt("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }
  if(parseFloat(num2, 10) > parseInt(num1, 10)) {
      prompt("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  } else {
      prompt("The values "+ num1+ " and "+num2+ " are equal.");
  }
    