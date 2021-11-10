
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  function palindrome(word) {
    let newWord = word.split('').reverse().join('');
    if (newWord === word) {
      return true;
    } else {
      return false;
    }
  }
  
  function getCircumference(radius) {
    return `The circumference is ${2 * Math.PI * radius}`;
  }
  
  function getArea(radius) {
    return `The area is ${Math.PI * radius * radius}`;
  }
  
  
  module.exports = {
    getFullName,
    palindrome,
    getCircumference,
    getArea,
  };