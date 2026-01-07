/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here
function sum(arr) {
    if (arr === null || arr.length === 0)
    return 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            total += arr[i];
        }
    }
    return total;
}

module.exports = sum;
