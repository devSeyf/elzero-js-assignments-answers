let start = 0;
let swappedName = "elZerO";
let holder = []
for (let i = start; i < swappedName.length; i++) {
  
    swappedName[i] === swappedName[i].toUpperCase()
      ? holder+= swappedName[i].toLowerCase()
      : holder += swappedName[i].toUpperCase()
  
}
console.log(holder);

// Output
// "ELzERo"
