let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().join("").slice(arr2.indexOf("E") + arr2.indexOf("Y")).toLowerCase();
console.log(allArrs);
