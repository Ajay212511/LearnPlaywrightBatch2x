//number==string
console.log(10==10); //true
console.log(10=="10"); //true //loose comparison operator (==) is used to compare the value of two operands and return true if they are equal and false if they are not equal


console.log(10==="10"); //false //Strict equality operator (===) is used to compare the value and type of two operands and 
// return true if they are equal and false if they are not equal

console.log(10!==10); //false
console.log(10!==9); //true 

console.log(5==5); //true
console.log(5=="5"); //true
console.log(5===5); //true
console.log(5==="5"); //false

console.log(0=="0"); //true
console.log(0==="0"); //false

console.log(0==""); //true
console.log(0===""); //false //blanK value is a value that is considered false when encountered in a boolean context.
//  In JavaScript, the following values are considered falsy: false, 0, -0, 0n, "", null, undefined, and NaN. 
// When using the loose equality operator (==), JavaScript performs type coercion and considers 0 and "" to be equal,
//  which is why 0=="" returns true. However, when using the strict equality operator (===), no type coercion occurs, 
// and since 0 is a number and "" is a string, they are not considered equal, resulting in 0==="" returning false.

console.log(false==0); //true
console.log(false===0); //false

console.log(false==""); //true
console.log(false===""); //false    

console.log(null==undefined); //true
console.log(null===undefined); //false

console.log(NaN==NaN);
console.log(NaN===NaN);

console.log(true==1); //true
console.log(true===1); //false

console.log(false==0); //true
console.log(false===0); //false

console.log(false==false); //true
console.log(false===false); //true

console.log(true==true); //true
console.log(true===true); //true

console.log(true==1); //false
console.log(true===1); //false

console.log(""=="0") //Transtivity broken
console.log(""===0) //Transtivity broken
