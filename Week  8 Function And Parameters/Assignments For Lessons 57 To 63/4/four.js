function checkStatus(a, b, c) {
  let name, age, available;

  
  [a, b, c].forEach(param => {
    if (typeof param === "string") name = param;
    else if (typeof param === "number") age = param;
    else if (typeof param === "boolean") available = param;
  });

  
  const status = available ? "Available" : "Not Available";
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status} For Hire`);
}


checkStatus("Osama", 38, true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true);  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama");  // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"