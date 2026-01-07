/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here
function abbreviate(name) {
    const names = name.split(' ');
    let i = 0;
    let initials = '';
    while (i < names.length) {
        initials += names[i][0].toUpperCase();$
        if (i < names.length - 1) {
            initials += '.';
        }
        i++;
    }
    return initials;
}
module.exports = abbreviate;
