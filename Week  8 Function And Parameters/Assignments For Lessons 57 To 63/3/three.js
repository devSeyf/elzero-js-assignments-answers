function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    let months = theAge * 12;
    let days = months * 30;   
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;

    console.log(`Months Example => ${months} Months`);
    console.log(`Days => ${days} Days`);
    console.log(`Hours => ${hours} Hours`);
    console.log(`Minutes => ${minutes} Minutes`);
    console.log(`Seconds => ${seconds} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}


ageInTime(110); // Age Out Of Range
ageInTime(38);  // Months Example => 456 Months