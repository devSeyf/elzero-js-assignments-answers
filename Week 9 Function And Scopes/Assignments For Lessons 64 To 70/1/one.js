function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let result = zName.split(" ");
    return `${result[0]} ${result[1][0]}.`; 
  }
  function ageWithMessage(zAge) {
    let result = parseInt(zAge); 
    return `Your Age Is ${result}`; 
  }
  function countryTwoLetters(zCountry) {
    let result = zCountry.slice(0, 2).toUpperCase();; 
    return `You Live In ${result}`; 
  } 
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`; 
  }
  return fullDetails(); 
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY