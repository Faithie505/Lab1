// function that takes in a string and returns a number
function countString(value:string) :number
{
    return value.length;//returns a number (the fulllength of the word)
}
//function that removes any leading/ending white space from a string
function countTrim(value:string): number //takes in string/returns number
{
    return value.trim().length //returns length of strig without first or last spaces
}

//function takes in bool (a true or false) and string (a word)
function combineCount(space: boolean, word: string): number
{
    //if the user wants to include leading and trailing spaces, calls method countString
    if(space == true)
    {
        return word.length;
    }
    //if the user wants to exclude them, calls the method to remove the spaces
    else if(space == false)
    {
        return word.trim().length

    }
    return word.length;
}
    

//display the 
///console.log(countString(" test "));
//console.log(countTrim(" test "));
console.log(combineCount(true, " test "))
console.log(combineCount(false, " test "))
