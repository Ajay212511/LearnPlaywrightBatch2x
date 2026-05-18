console.log(greetings);
var greetings = "Hello World";
console.log(greetings);

// In the above code, we are trying to access the variable 'greetings' before it has been declared and assigned a value. 
// Due to hoisting, the declaration of 'greetings' is moved to the top of the scope, but its assignment remains in place. 
// Therefore, when we try to log 'greetings' before the assignment, it will output 'undefined' instead of throwing an error. 
// After the assignment, when we log 'greetings' again, it will output "Hello World".   

function printhello()
{

console.log(a);
var a=100; // a is a local variable
console.log("value of a local variable :"+a);   
}
printhello();




