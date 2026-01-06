/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/
function min(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  
  let y = arr[0];
  let i = 1;
  
  while (i < arr.length) {
    if (arr[i] < y) {
      y = arr[i];
    }
    i++;
  }
  
  return y;
}

// TODO add your code here

module.exports = min;
