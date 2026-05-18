/*Let me create a comprehensive file covering:
1. What is undefined
2. What is null
3. Comparison table
4. typeof behavior (including the famous bug)
5. == vs === comparisons
6. Real-world examples
7. Best practices
8. Common pitfalls

*/
// ============================================================
// 01_09_Null_vs_Undefined.js
// Understanding the Difference Between null and undefined
// ============================================================
console.log("=== PART 1: WHAT IS undefined? ===");
console.log("undefined means a variable has been declared but has not been assigned a value.");
console.log("It is automatically assigned by JavaScript.\n");
// Example 1: Variable declared but not initialized
let a;
console.log("let a; → a =", a);              // undefined
// Example 2: Function with no return statement
function doNothing() {}
console.log("Function with no return:", doNothing());  // undefined
// Example 3: Accessing a non-existent object property
let person = { name: "Ajay" };
console.log("person.age:", person.age);      // undefined (property doesn't exist)
// Example 4: Function parameter not provided
function greet(name) {
    console.log("Parameter 'name':", name); // undefined if no argument passed
}
greet();                                     
console.log("\n=== PART 2: WHAT IS null? ===");
console.log("null is an intentional absence of any object value.");
console.log("It is explicitly assigned by the developer.\n");
// Example 1: Intentionally setting a variable to "no value"
let user = null;
console.log("let user = null; → user =", user);        // null
// Example 2: Intentionally clearing an object property
let car = { model: "Toyota", year: 2020 };
car.year = null;
console.log("car.year set to null:", car.year);        // null
// Example 3: Placeholder for later assignment
let data = null;  // "I will assign real data later"
console.log("Placeholder data:", data);                // null
console.log("\n=== PART 3: SIDE-BY-SIDE COMPARISON TABLE ===");
/*
| Feature           | undefined                    | null                        |
|-------------------|------------------------------|-----------------------------|
| Meaning           | Declared but not assigned    | Intentional absence of value|
| Type              | "undefined"                  | "object" (known JS bug!)    |
| Set by            | JavaScript automatically     | Developer manually          |
| == comparison     | null == undefined → true     | null == undefined → true    |
| === comparison    | null === undefined → false   | null === undefined → false  |
*/
console.log("\n=== PART 4: typeof OPERATOR BEHAVIOR ===");
console.log("typeof undefined:", typeof undefined);     // "undefined"
console.log("typeof null:", typeof null);               // "object" (BUG in JS since 1995!)
// How to properly check for null
console.log("\nProper null check:");
console.log("user === null:", user === null);           // true
console.log("a === undefined:", a === undefined);       // true
console.log("\n=== PART 5: == vs === COMPARISONS ===");
// Loose equality (==) - performs type coercion
console.log("null == undefined:", null == undefined);   // true
console.log("undefined == null:", undefined == null);   // true
// Strict equality (===) - checks value AND type
console.log("null === undefined:", null === undefined); // false
// Other confusing comparisons with undefined
console.log("undefined == false:", undefined == false); // false
console.log("undefined == 0:", undefined == 0);         // false
console.log("undefined == ''", undefined == '');        // false
// Other confusing comparisons with null
console.log("null == false:", null == false);           // false
console.log("null == 0:", null == 0);                   // false
console.log("null == ''", null == '');                  // false
// The famous trap: null behaves differently with >= and <=
console.log("\n=== PART 6: THE NULL COMPARISON TRAP ===");
console.log("null >= 0:", null >= 0);                   // true  (null coerced to 0)
console.log("null <= 0:", null <= 0);                   // true  (null coerced to 0)
console.log("null == 0:", null == 0);                   // false (!! == does NOT coerce null to 0)
console.log("null > 0:", null > 0);                     // false
console.log("null < 0:", null < 0);                     // false
console.log("\nundefined with comparisons:");
console.log("undefined >= 0:", undefined >= 0);         // false
console.log("undefined <= 0:", undefined <= 0);         // false
console.log("undefined == 0:", undefined == 0);         // false
console.log("undefined > 0:", undefined > 0);           // false
console.log("undefined < 0:", undefined < 0);           // false
console.log("\n=== PART 7: REAL-WORLD USE CASES ===");
// Use Case 1: Checking if a variable has been set
let config = null;  // Config will be loaded later
function loadConfig() {
    return { theme: "dark", lang: "en" };
}
if (config === null) {
    config = loadConfig();
    console.log("Config loaded:", config);
}
// Use Case 2: Distinguishing between "not set" and "empty"
let searchResult;
// Simulate API call that returns no results
function fetchData(query) {
    if (!query) return null;  // Intentionally no results
    return ["result1", "result2"];
}
searchResult = fetchData("");  // Returns null
if (searchResult === null) {
    console.log("Search returned no results (intentional null)");
}
searchResult = fetchData("js"); // Returns array
if (searchResult !== null) {
    console.log("Search results:", searchResult);
}
// Use Case 3: JSON serialization difference
console.log("\nJSON.stringify({ a: undefined, b: null }):");
console.log(JSON.stringify({ a: undefined, b: null })); 
// Output: {"b":null}  -> undefined is stripped, null is preserved!
console.log("\n=== PART 8: COMMON PITFALLS ===");
// Pitfall 1: Using == instead of ===
let value = null;
if (value == undefined) {
    console.log("This matches both null and undefined!");
}
// Pitfall 2: typeof null === "object"
function isNull(v) {
    return v === null;  // Correct way
}
function isObject(v) {
    return typeof v === "object" && v !== null;  // Must exclude null!
}
console.log("isNull(null):", isNull(null));           // true
console.log("isObject({}):", isObject({}));           // true
console.log("isObject(null):", isObject(null));       // false (correct!)
// Pitfall 3: Default parameters behavior
function testDefault(a = "default") {
    console.log("Value:", a);
}
testDefault(undefined);  // Uses default: "default"
testDefault(null);       // null is passed, NOT using default!
console.log("\n=== PART 9: BEST PRACTICES ===");
/*
1. Use === (strict equality) always, never == 
2. Check for undefined:  if (x === undefined)
3. Check for null:       if (x === null)
4. Check for either:     if (x == null)  // covers both null and undefined
5. Use ?? (nullish coalescing) for default values
*/
// Modern approach with nullish coalescing (??)
let input = null;
let result = input ?? "default value";
console.log("nullish coalescing:", result);  // "default value"
input = undefined;
result = input ?? "default value";
console.log("nullish coalescing:", result);  // "default value"
input = 0;
result = input ?? "default value";
console.log("nullish coalescing with 0:", result);  // 0 (0 is NOT nullish!)
input = "";
result = input ?? "default value";
console.log("nullish coalescing with '':", result);  // "" (empty string is NOT nullish!)
console.log("\n=== SUMMARY ===");
console.log("undefined = JavaScript says 'this has no value yet'");
console.log("null      = Developer says 'this intentionally has no value'");
console.log("Always use === for predictable comparisons!");
console.log("Remember: typeof null === 'object' is a bug, not a feature!");
// Quick Reference
console.log("\n=== QUICK REFERENCE ===");
console.log("Check for null:           value === null");
console.log("Check for undefined:      value === undefined");
console.log("Check for null/undefined: value == null");
console.log("Default value:            value ?? 'default'");