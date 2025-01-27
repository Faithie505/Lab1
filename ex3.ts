//creating a string variable called fname
let fname: string = "Sarah";
console.log("Hello, your name is "+ fname); //printing to screen

//creating a number variable called age
let age: number = 32;
console.log("You are "+age +" years old");//print toscreen

//creating a variable called flag of type boolean
let flag: boolean = true;
console.log("You are assigned to flag: "+ flag); //print tos creen

//a number array called myArray with 3 values
let myArray: number[] = [1, 2, 3];
//print each array value to screen
console.log("My Array[0]: " +myArray[0] + "\nMyArray[1]: " +myArray[1]+"\nMyArray[2]: " +myArray[2]);

//using a foreach to print the values to the screen
myArray.forEach((val)=>{
    console.log("Value is: "+ val);
    
})

//creating an any (generic) variable called things that contains the number 23
let things: any = 23;
console.log("The value of things is: "+things); //print to screen