// Test Case 1
let numZero = 9; // "009"
if (numZero < 10) {
    console.log(`00${numZero}`);
}

// Test Case 2
let numOne = 20; // "020"
if (numOne >= 10 && numOne < 100) {
    console.log(`0${numOne}`);
}

// Test Case 3
let numTwo = 110; // "110"
if (numTwo >= 100) {
    console.log(`${numTwo}`);
}
