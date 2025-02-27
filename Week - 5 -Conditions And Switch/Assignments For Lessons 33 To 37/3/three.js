let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 != typeof num2) {
  console.log(+num3 + " " + "Is Larger Than" + " " + num1 + " " + "And  Type of string is Not The Same As Type of number")
} else if (num3 > num1 && num3 == num2 && typeof num3 != typeof num2) {
  console.log(`${num3} Is Larger Than ${num1}, And Value Is The Same As ${num2} And Type of string is Not The Same As Type of number`)
} else if (num3 == num1 && typeof num3 == typeof num1 && typeof num3 != typeof num2) {
  console.log(`${num3} Value And Type Is Not The Same As ${num1} And it's Type Is Not The Same As ${num2}"`)
}
