const isPalindrome = require("./palindrome");

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toBe("function");
});

test("isPalindrome as one parameter", () => {
  expect(isPalindrome.length).toBe(1);
});

// TODO add your tests here
test("isPalindrome with 'rotor' should return true", () => {
  expect(isPalindrome("rotor")).toBe(true);
});

test("isPalindrome with 'tacos' should return false", () => {
  expect(isPalindrome("tacos")).toBe(false);
}); 