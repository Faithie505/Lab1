//creating a string variable called fname
var fname = "Sarah";
console.log("Hello, your name is " + fname); //printing to screen
//creating a number variable called age
var age = 32;
console.log("You are " + age + " years old"); //print toscreen
//creating a variable called flag of type boolean
var flag = true;
console.log("You are assigned to flag: " + flag); //print tos creen
//a number array called myArray with 3 values
var myArray = [1, 2, 3];
//print each array value to screen
console.log("My Array[0]: " + myArray[0] + "\nMyArray[1]: " + myArray[1] + "\nMyArray[2]: " + myArray[2]);
myArray.forEach(function (val) {
    console.log("Value is: " + val);
});
//creating an any (generic) variable called things that contains the number 23
var things = 23;
console.log("The value of things is: " + things); //print to screen
