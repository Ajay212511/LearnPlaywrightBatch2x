/**
 * ============================================================
 * TRIANGLE CHECK: IF-ELSE vs FOR LOOP
 * ============================================================
 * 
 * For a SINGLE triangle, if-else is BEST.
 * For loop doesn't make sense for one triangle because:
 * - For loop = REPEAT something multiple times
 * - If-else = CHOOSE between options (one time decision)
 * 
 * BUT... we CAN use for loop when checking MANY triangles!
 * ============================================================
 */

console.log("=== 1. ORIGINAL: Single Triangle (Best Way) ===");

let a = 3, b = 4, c = 5;

if (a === b && a === c && b === c) {
    console.log("Triangle is equilateral");
} else if ((a === b) || (b === c) || (a === c)) {
    console.log("Triangle is isosceles");
} else {
    console.log("Triangle is scalene");
}


console.log("\n=== 2. WHY FOR LOOP DOESN'T HELP FOR ONE TRIANGLE ===");
console.log(`
For loop is for REPEATING actions.
You only have ONE triangle with 3 sides (a, b, c).
There's nothing to repeat!

❌ WRONG approach (makes no sense):
for (let i = 0; i < 3; i++) {
    if (a === b && a === c...)  // Same check 3 times!
}
`);


console.log("\n=== 3. ✅ USE FOR LOOP FOR MULTIPLE TRIANGLES ===");

let triangles = [
    { a: 3, b: 3, c: 3 },   // Equilateral
    { a: 5, b: 5, c: 8 },   // Isosceles
    { a: 3, b: 4, c: 5 },   // Scalene
    { a: 7, b: 7, c: 7 },   // Equilateral
    { a: 10, b: 6, c: 10 }  // Isosceles
];

for (let i = 0; i < triangles.length; i++) {
    let t = triangles[i];
    let type;

    if (t.a === t.b && t.b === t.c) {
        type = "Equilateral";
    } else if (t.a === t.b || t.b === t.c || t.a === t.c) {
        type = "Isosceles";
    } else {
        type = "Scalene";
    }

    console.log(`Triangle ${i + 1} (${t.a}, ${t.b}, ${t.c}): ${type}`);
}


console.log("\n=== 4. ✅ USING FOR...OF LOOP (Cleaner) ===");

let moreTriangles = [
    [2, 2, 2],   // Equilateral
    [4, 4, 7],   // Isosceles
    [6, 8, 10],  // Scalene
    [9, 9, 9]    // Equilateral
];

for (let [sideA, sideB, sideC] of moreTriangles) {
    let type;

    if (sideA === sideB && sideB === sideC) {
        type = "Equilateral";
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        type = "Isosceles";
    } else {
        type = "Scalene";
    }

    console.log(`Sides [${sideA}, ${sideB}, ${sideC}]: ${type}`);
}


console.log("\n=== 5. ✅ FUNCTION + LOOP (Most Reusable) ===");

function getTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

// Now check many triangles easily
let testCases = [
    [5, 5, 5],
    [3, 4, 4],
    [7, 8, 9],
    [2, 2, 3]
];

for (let triangle of testCases) {
    let [x, y, z] = triangle;
    console.log(`[${x}, ${y}, ${z}] -> ${getTriangleType(x, y, z)}`);
}


console.log("\n=== 6. ✅ COUNT TRIANGLE TYPES USING LOOP ===");

let allTriangles = [
    [3, 3, 3],
    [4, 4, 5],
    [5, 5, 5],
    [6, 7, 8],
    [9, 9, 9],
    [2, 3, 4],
    [5, 5, 8]
];

let counts = { equilateral: 0, isosceles: 0, scalene: 0 };

for (let [s1, s2, s3] of allTriangles) {
    if (s1 === s2 && s2 === s3) {
        counts.equilateral++;
    } else if (s1 === s2 || s2 === s3 || s1 === s3) {
        counts.isosceles++;
    } else {
        counts.scalene++;
    }
}

console.log("Triangle Type Counts:");
console.log(`  Equilateral: ${counts.equilateral}`);
console.log(`  Isosceles: ${counts.isosceles}`);
console.log(`  Scalene: ${counts.scalene}`);


console.log("\n=== 7. ✅ VALIDATE TRIANGLES IN A LOOP ===");

// Check if sides can actually form a valid triangle
// Rule: sum of any 2 sides must be greater than the 3rd side
let shapes = [
    [3, 4, 5],   // Valid
    [1, 2, 10],  // Invalid!
    [5, 5, 5],   // Valid
    [2, 3, 6]    // Invalid!
];

for (let [p, q, r] of shapes) {
    let isValid = (p + q > r) && (q + r > p) && (p + r > q);

    if (!isValid) {
        console.log(`[${p}, ${q}, ${r}] -> ❌ Not a valid triangle`);
        continue; // Skip to next iteration
    }

    let type = getTriangleType(p, q, r);
    console.log(`[${p}, ${q}, ${r}] -> ✅ Valid ${type} triangle`);
}


console.log("\n=== 8. USING ARRAY METHODS (No For Loop Needed) ===");

let trianglesList = [
    [3, 3, 3],
    [4, 5, 4],
    [7, 8, 9]
];

trianglesList.forEach(([a, b, c], index) => {
    let type;
    if (a === b && b === c) type = "Equilateral";
    else if (a === b || b === c || a === c) type = "Isosceles";
    else type = "Scalene";

    console.log(`Triangle ${index + 1}: ${type}`);
});


console.log("\n========================================");
console.log("SUMMARY:");
console.log("========================================");
console.log(`
For ONE triangle:
  ✅ Use if-else (your original code is correct!)
  ❌ For loop is unnecessary

For MANY triangles:
  ✅ Use for loop with an array
  ✅ Or use for...of loop
  ✅ Or use array methods like .forEach(), .map(), .filter()

Best Practice:
  1. Put the logic in a FUNCTION
  2. Use a LOOP to call the function for each triangle
`);
