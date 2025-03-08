/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let i = 0; 

for (; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
}

document.write(`<div>We Have ${i} Admins</div>`);
document.write(`<hr>`);

for (let j = 0; j < i; j++) { // Using 'i' since it holds the count of valid admins
  document.write(`<div> The Admin for Team ${j + 1} is: ${myAdmins[j]}`);
  document.write(`<h3>Team Members:</h3>`);

  let counter = 1;
  for (let k = 0; k < myEmployees.length; k++) {
    if (myAdmins[j][0] === myEmployees[k][0]) {
      document.write(`<p>${counter}: ${myEmployees[k]}</p>`);
      counter++;
    }
  }

  // If no employees matched, show a message
  if (counter === 1) {
    document.write(`<p>No team members available.</p>`);
  }

  document.write(`</div>`);
  document.write(`<hr>`);
}
