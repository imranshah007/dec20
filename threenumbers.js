var num1 =prompt("Enter first number: ");
var num2 =prompt("Enter second number: ");
var num3 = prompt("Enter third number: ");
//var largest;

if(num1>=num2 && num1>=num3) {
    largest = num1;
}
else if (num2>=num1 && num2>=num3) {
    largest = num2;
}
else {
    largest = num3;
}

alert("The largest number is " + largest);