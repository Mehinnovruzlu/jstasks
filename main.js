// function registration() {
//     const lastName = prompt(`Please enter your last name`);
//     const firstName = prompt(`Please enter your first name`);
//     const email = prompt(`Please enter your email`);

//     const response = `${email} - ${lastName}  ${firstName}`;
//     return response;
// }
// console.log(registration());



// function delivery() {
//     const distance = prompt("How many kilometers from your location?");

//     const tip = 5 + (0.25 * Number(distance));

//     return `${tip} AZN`;
// }
// console.log(delivery())



// function calculateAmount(name, unitPrice, quantity, promotion){
//     let amount = unitPrice * quantity

//     if(quantity >=5) {
//         amount *= 0.9
//     }

//     if(promotion){
//         amount *= 0.85;
//     }

//     return amount;

// }
// console.log(calculateAmount("tshirt", 99.99, 10, true ))



// function suggestTable(count) {
//   if (count <= 2) {
//     return "Small table";
//   } else if (count <= 4) {
//     return "Medium table";
//   } else if (count <= 8) {
//     return "Large table";
//   } else {
//     return "404 No Table Found";
//   }
// }
// const guestCount = prompt("How many people are you?");
// console.log(suggestTable(guestCount));



// function temperature() {
//   const temperature1 = prompt("first temperature");
//   const temperature2 = prompt("second temperature");
//   const temperature3 = prompt("third temperature");

//   const temperatureSort = [temperature1, temperature2, temperature3];
//   temperatureSort.sort(function(a, b) {return b - a});
//   console.log(`${temperatureSort}`);
// }

// temperature();



// function storeInformation( name, age, count, totalAmount){

//     if((age >= 60) || (count >=4 && totalAmount >=100)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(storeInformation("Mehin", 20, 4, 130));



// function isItSmall(length, width, height, weight, distance) {
//   if (
//     Number(length) + Number(width) + Number(height) <= 150 &&
//     weight <= 10 &&
//     distance >= 3 &&
//     distance <= 10 &&
//     length &&
//     width &&
//     height <= 100
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isItSmall(50, 75, 70, 3, 5));



// function numberToText(number) {
//     const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//     const specialCases = {
//       10: 'ten',
//       11: 'eleven',
//       12: 'twelve',
//       13: 'thirteen',
//       14: 'fourteen',
//       15: 'fifteen',
//       16: 'sixteen',
//       17: 'seventeen',
//       18: 'eighteen',
//       19: 'nineteen'
//     };
  
//     const tensDigit = Math.floor(number / 10);
//     const onesDigit = number % 10;
  
//     if (number in specialCases) {
//       return specialCases[number];
//     } else {
//       return `${tens[tensDigit]} ${ones[onesDigit]}`;  
//     }
//   }

//   const number = 10;
//   const text = numberToText(number);
//   console.log(text);



// function divisibleNumbers (number){
//     for (let i = 1; i <=1000; i++){
//         if (i % number === 0)
//         console.log(i) 
//     }
// }
// divisibleNumbers(2);



// function deposit (initialAmount, duration, percentage){
//     for (let i=0; i <duration; i++ ){
//         initialAmount += initialAmount * (percentage / 100);
//     }
//     return initialAmount;
// }
// console.log(deposit(1000, 2, 10))

