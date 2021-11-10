
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  function palindrome(word) {
    let Word = word.split('').reverse().join('');
    if (Word === word) {
      return true;
    } else {
      return false;
    }
  }
  
  function getCircumfrence() {
    return `The Circumference is ${2 * Math.PI * radius}`;
  }
  
  function getArea(radius) {
    return `The area is ${Math * radius * radius}`;
  }
  
  module.exports = {
    getFullName,
    palindrome,
    getCircumfrence,
    getArea,
  };