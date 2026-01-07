/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/
function isPalindrome(word) {
  if (word === null || word === '') {
    return true;
  }
  const normalizedWord = word.toLowerCase();
  const reversedWord = normalizedWord.split('').reverse().join('');
  return normalizedWord === reversedWord;

if (normalizedWord === reversedWord) {
  return true;
} else {
  return false;
}
}
// TODO add your code here

module.exports = isPalindrome;
