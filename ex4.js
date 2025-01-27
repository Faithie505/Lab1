// function that takes in a string and returns a number
function countString(value) {
    return value.length; //returns a number (the fulllength of the word)
}
//function that removes any leading/ending white space from a string
function countTrim(value) {
    return value.trim().length; //returns length of strig without first or last spaces
}
//function takes in bool (a true or false) and string (a word)
function combineCount(space, word) {
    //if the boolean is true, the user wants to include leading and trailing spaces
    if (space == true) {
        return word.length;
    }
    //if the boolean is false, the user wants to exclude them, calls the method to remove the spaces
    else if (space == false) {
        return word.trim().length; //trims the length of the string
    }
    else {
        return word.length;
    }
}
//display the length of the strings
console.log(countString(" test "));
console.log(countTrim(" test "));
console.log(combineCount(true, " test "));
console.log(combineCount(false, " test "));
