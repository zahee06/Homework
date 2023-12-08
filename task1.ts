/*

import inquirer from "inquirer";

// Choosing items
let j=1;
let bill1=0, bill2=0, bill3=0;
while(j != 0){
let answers = await inquirer.prompt([{
    name: "choice",
    type: "number",
    message: "What do you want to buy? \n1) Press 1 for Fruits.\n2) Press 2 for Vegetables.\n3) Press 3 for Groceries.\n Press the desired number: "}
]);


if (answers.choice == 1){

let answer1 = await inquirer.prompt([{
    name: "apple",
    type: "number",
    message: "We have apples, oranges & mangoes.\nPrice of 1kg apples is Rs. 200.\nPrice of 1kg orange is Rs. 150.\nPrice of 1kg mango is Rs. 300. \nSelect the quantity of apples in kg: "},{
    name: "orange",
    type: "number",
    message: "Select the quantity of oranges in kg: "}, {
    name: "mango",
    type: "number",
    message: "Select the quantity of mango in kg: "}
    
]) 
 bill1= answer1.apple*200+answer1.orange*150+answer1.mango*300
console.log("Total bill of fruits is = Rs. " + bill1)

}
else if (answers.choice == 2){
    let answer2 = await inquirer.prompt([{
        name: "carrot",
        type: "number",
        message: "We have carrot, mushroom & tomato.\nPrice of 1kg carrot is Rs. 130.\nPrice of 1kg mushroom is Rs. 450.\nPrice of 1kg tomato is Rs. 280. \nSelect the quantity of carrots in kg: "},{
        name: "mushroom",
        type: "number",
        message: "Select the quantity of mushrooms in kg: "}, {
        name: "tomato",
        type: "number",
        message: "Select the quantity of tomato in kg: "}
        
    ]) 
     bill2= answer2.carrot*130+answer2.mushroom*450+answer2.tomato*280
    console.log("Total bill of vegetables is = Rs. " + bill2)
}
else if (answers.choice == 3){
    let answer3 = await inquirer.prompt([{
        name: "bread",
        type: "number",
        message: "We have bread, flour & bagel.\nPrice of 1 pack of bread is Rs. 100.\nPrice of 1kg flour is Rs. 230.\nPrice of 1 pack of bagel is Rs. 210. \nSelect the packets of bread in kg: "},{
        name: "flour",
        type: "number",
        message: "Select the quantity of flour in kg: "}, {
        name: "bagel",
        type: "number",
        message: "Select the packets of bagels: "}
        
    ]) 
     bill3= answer3.bread*100+answer3.flour*230+answer3.bagel*210
    console.log("Total bill of groceries is = Rs. " + bill3)
}

else console.log ("PLEASE select the correct number !")
let answer = await inquirer.prompt([{
    name: "choose",
    type: "number",
    message: "Press any button to continue shopping OR 0 to checkout",}
])
j=answer.choose;
}

// discount calculation
let totalBill:number= bill1 + bill2 + bill3
if (totalBill>2000){
    console.log("As your total bill was Rs. "+totalBill+", So you are awarded with 20% discount because your purchase is more than Rs.2000.")
    console.log("Now Payable Bill after discount = Rs. " + (totalBill*0.8))
}
else console.log("Your total bill was Rs. "+totalBill)

// Payement method
let pay = await inquirer.prompt([{
    name: "choose",
    type: "number",
    message: "Choose your payment method.\n 1) Press 1 for Cash \n 2) Press 2 for Card \n Press 1 or 2 : ",}
])
if (pay.choose == 1){
    console.log("Please Proceed to the Cash Counter & Thankyou for shopping at HM Super Market.")
}
else if (pay.choose == 2){
    let card= await inquirer.prompt([{
        name: "enter",
        type: "number",
        message: "Enter your card number without dashes and spaces : ",}
    ])
    console.log("Your payment has been proceeded successfully. Thankyou for shopping at HM Super Market.")
}
else ("Please select correct number for payment method !!")

*/