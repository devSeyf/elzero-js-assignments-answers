/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// ["Osama", "Elham", "Mazero", "Ahmed"];
let two = my.length / counter;
let challengeOne = my.reverse().slice(two);
console.log(challengeOne);
let one = counter - two;
console.log(challengeOne.slice(one, counter)); // ["Elham", "Mazero"]

let four = counter + one;

console.log(my[counter].slice(zero, two) + my[four].slice(two)); // "Elzero"

console.log(my); // "Elzero"
console.log(my[zero].slice(four) + my[two][zero]); // "rO"

