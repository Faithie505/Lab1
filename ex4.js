// function that takes in a string and returns a number
function countString(value) {
    return value.length;
}
function countTrim(value) {
    return value.trim().length;
}
function combineCount(space, word) {
    //is the user wants to include leading and trailing spaces, calls method countString
    if (space == true) {
        return word.length;
    }
    //if the user wants to exclude them, calls the method to remove the spaces
    else if (space == false) {
        return word.trim().length;
    }
    return word.length;
}
//display the 
///console.log(countString(" test "));
//console.log(countTrim(" test "));
console.log(combineCount(true, " test "));
console.log(combineCount(false, " test "));
