/* 
//Scenario 1: Sum numbers

import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "firstNumber",
    type: "number",
    message: "Enter your 1st number: "},
    {
        name: "secondNumber",
        type: "number",
        message: "Enter Your 2nd number: "}
]);

console.log ("Sum of your numbers is : " + (answers.firstNumber + answers.secondNumber));
*/

/* 
//Scenario 2: Check Even or Odd

import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "firstNumber",
    type: "integer",
    message: "Enter any number: "}
]);
if (answers.firstNumber%2 === 0) console.log("Your Number is even.");
else console.log("Your number is odd.");
*/

/*
//Scenario 3: Calculate Area

import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "length",
    type: "number",
    message: "Enter the length of recangle : "},
    {
        name: "width",
        type: "number",
        message: "Enter the width of rectangle : "}
]);

console.log ("Area of Rectangle is : " + (answers.length * answers.width));
*/

/* 
//Scenario 4: String Reversal
let string = ".reehaz si eman yM";

let reverseString = string.split('').reverse().join('');
console.log(reverseString);
*/

/* Scenario 5: Temperature Conversion
import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "celsius",
    type: "number",
    message: "Enter the temperature in celsius : "}
]);
let fahrenheit = answers.celsius*9/5 + 32;
console.log("The temperature "+(answers.celsius)+" is equal to "+(fahrenheit)+" in fahrenheit.");
*/