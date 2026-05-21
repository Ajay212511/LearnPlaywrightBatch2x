/**
 * ============================================================
 * NEW LINES IN JAVASCRIPT - COMPLETE GUIDE
 * ============================================================
 * There are multiple ways to create new lines in JS output & code.
 * ============================================================
 */

// ==========================================
// 1. NEW LINE IN STRINGS: \n (Escape Sequence)
// ==========================================
console.log("=== 1. Using \\\\n in Strings ===");

let message = "Hello, World!\nWelcome to JavaScript.";
console.log(message);
// Output:
// Hello, World!
// Welcome to JavaScript.

let address = "123 Main Street\nApt 4B\nNew York, NY 10001";
console.log(address);


// ==========================================
// 2. TEMPLATE LITERALS (Backticks ``) - BEST WAY
// ==========================================
console.log("\n=== 2. Template Literals for Multi-line ===");

let poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;
console.log(poem);

let name = "Ajay";
let age = 25;
let info = `Name: ${name}
Age: ${age}
Status: Active`;
console.log(info);


// ==========================================
// 3. MULTIPLE console.log() CALLS
// ==========================================
console.log("\n=== 3. Multiple console.log() ===");

console.log("Line 1");
console.log("Line 2");
console.log("Line 3");


// ==========================================
// 4. console.log() WITH MULTIPLE ARGUMENTS
// ==========================================
console.log("\n=== 4. console.log with Multiple Args ===");

console.log("Name:", "Ajay");
console.log("Age:", 25);
// Each argument is separated by a space, not a new line


// ==========================================
// 5. BREAKING LONG CODE ACROSS LINES
// ==========================================
console.log("\n=== 5. Breaking Long Code Lines ===");

// Method 1: Automatic (after operators)
let sum = 10 + 20 + 30 +
          40 + 50 + 60;
console.log("Sum:", sum);

// Method 2: Breaking inside parentheses (function calls)
let result = Math.max(
    10, 20, 30,
    40, 50
);
console.log("Max:", result);

// Method 3: String concatenation across lines
let longString = "This is a very long sentence that " +
                 "spans across multiple lines in code, " +
                 "but prints as one line.";
console.log(longString);


// ==========================================
// 6. ARRAY / OBJECT OUTPUT WITH NEW LINES
// ==========================================
console.log("\n=== 6. Joining Arrays with New Lines ===");

let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log(fruits.join("\n"));
// Output:
// Apple
// Banana
// Cherry
// Date


// ==========================================
// 7. CREATING HTML WITH NEW LINES
// ==========================================
console.log("\n=== 7. HTML String with New Lines ===");

let html = `<div>
    <h1>Title</h1>
    <p>This is a paragraph.</p>
</div>`;
console.log(html);


// ==========================================
// 8. TABLE FORMAT WITH NEW LINES
// ==========================================
console.log("\n=== 8. Formatted Table Output ===");

let students = [
    { name: "Ajay", score: 95 },
    { name: "Ravi", score: 88 },
    { name: "Sita", score: 92 }
];

let output = "Name    | Score\n" +
             "--------|------\n" +
             students.map(s => `${s.name.padEnd(7)} | ${s.score}`).join("\n");
console.log(output);


// ==========================================
// 9. COMPARISON: \n vs Template Literals
// ==========================================
console.log("\n=== 9. Comparison ===");

// Old way (hard to read)
let oldWay = "Line 1\n" +
             "Line 2\n" +
             "Line 3";
console.log("Old way:");
console.log(oldWay);

// Modern way (clean)
let modernWay = `Line 1
Line 2
Line 3`;
console.log("\nModern way:");
console.log(modernWay);


// ==========================================
// 10. REAL WORLD: Receipt / Invoice Format
// ==========================================
console.log("\n=== 10. Receipt Format Example ===");

let item1 = "Laptop";
let price1 = 85000;
let item2 = "Mouse";
let price2 = 1500;
let total = price1 + price2;

let receipt = `========================================
           INVOICE
========================================
Item              Qty    Price
----------------------------------------
${item1.padEnd(16)}  1      ₹${price1}
${item2.padEnd(16)}  1      ₹${price2}
----------------------------------------
Total                    ₹${total}
========================================
Thank you for shopping!`;

console.log(receipt);


// ==========================================
// 11. WINDOWS vs UNIX LINE ENDINGS
// ==========================================
console.log("\n=== 11. Platform Line Endings ===");

// \n   = Unix/Linux/Mac (LF - Line Feed)
// \r\n = Windows (CRLF - Carriage Return + Line Feed)
// In Node.js, use \\n - it works everywhere for console output
console.log("Line 1\nLine 2 (works on all platforms in console)");


// ==========================================
// 12. TRICK: console.log with \n in single log
// ==========================================
console.log("\n=== 12. Single console.log with New Lines ===");

console.log("First Line\nSecond Line\nThird Line");
