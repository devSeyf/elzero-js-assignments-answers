let myVar = "100.56789 Views";

console.log(parseInt(myVar), typeof parseInt(myVar)); // 100 'number'

console.log(Number(parseFloat(myVar).toFixed(2)), typeof Number(parseFloat(myVar).toFixed(2))); // 100.57 'number'
