// identifiers ,literals,operators
var a=10; //Var is a keyword
//a is an identifier
// 10 is a literal
//= Operator
//; is a statement terminator ,In JS it is optional but it is a good practice to use it
var b=20;
console.log(a);
console.log(b);

c=a+b;
console.log(c);//console is an identifier
//log is an identifier
//Variable name=Identifier a (name whihc is given to a containe)
console.log(5 == '5')
console.log('5' - 3)
console.log(true + true)
console.log(0 ?? 'hello')
if ('') { console.log('yes'); } else { console.log('no')};4
console.log(Boolean([]))
for (let i = 0; i < 5; i++) { if (i === 3) break; } console.log(i);
//Variable value =literal 10 (value which is stored in a container)

var Name="Ajay";
var name="jaiswal";
//In JS variable name is case sensitive

console.log(Name);
console.log(name);
var _name="Ajay Jaiswal";
var $name="Ajay want to become a software engineer";
var _ ="Ajay is a engineer";
console.log(_name);
console.log($name);
console.log(_); 

//Keywords like let, const, class, async, await, import, export,
//  function, return, if, else, switch, case, break, continue,
//  for, while, do, try, catch, finally, throw, var, this, super,
//  new, delete, typeof, void, yield
//  cannot be used as variable names or identifiers.
// Avoid using reserved words as variable names or identifiers.

// ✅ Valid
let name1 = "Ajay";
let $price = 99;
let _score = 100;
let userName2 = "test";
// ❌ Invalid
//let 2name = "Ajay";      // starts with number
//let my-name = "Ajay";    // hyphen not allowed
//let my name = "Ajay";    // space not allowed
//let class = "JS";        // reserved keyword