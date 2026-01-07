const countChar = require("./count-letters");

test("countChar function exists", () => {
  expect(typeof countChar).toBe("function");
});

test("countChar as two parameters", () => {
  expect(countChar.length).toBe(2);
});

// TODO add your tests here
test('counts occurrences of a character in a string', () => {
  expect(countChar("aaaaabbbaa", "a")).toBe(7);
  expect(countChar("bbacbaaa", "c")).toBe(1);
});