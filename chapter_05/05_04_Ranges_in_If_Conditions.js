/**
 * ============================================================
 * RANGES IN IF CONDITIONS - COMPLETE GUIDE
 * ============================================================
 * A "range" means checking if a value is BETWEEN two numbers.
 * Syntax: if (value >= min && value <= max)
 * ============================================================
 */

console.log("=== 1. BASIC SYNTAX: Age Range ===");

let age = 25;

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}
// Output: Adult (because 25 is between 20 and 59)


console.log("\n=== 2. INCLUSIVE vs EXCLUSIVE RANGES ===");

let score = 85;

// INCLUSIVE: includes both boundaries (>= and <=)
if (score >= 80 && score <= 100) {
    console.log("Grade: A (80-100 inclusive)");
}

// EXCLUSIVE: does NOT include boundaries (> and <)
if (score > 80 && score < 90) {
    console.log("Score is strictly between 80 and 90");
}

// Mixed: include lower, exclude upper
let index = 5;
if (index >= 0 && index < 10) {
    console.log("Valid index (0 to 9)");
}


console.log("\n=== 3. GRADE CALCULATOR (Classic Example) ===");

function getGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        return "A+";
    } else if (marks >= 80 && marks < 90) {
        return "A";
    } else if (marks >= 70 && marks < 80) {
        return "B";
    } else if (marks >= 60 && marks < 70) {
        return "C";
    } else if (marks >= 50 && marks < 60) {
        return "D";
    } else if (marks >= 0 && marks < 50) {
        return "F (Fail)";
    } else {
        return "Invalid Marks";
    }
}

console.log("Score 95 ->", getGrade(95));
console.log("Score 82 ->", getGrade(82));
console.log("Score 45 ->", getGrade(45));
console.log("Score 105 ->", getGrade(105));


console.log("\n=== 4. TEMPERATURE RANGES ===");

function checkTemperature(tempCelsius) {
    if (tempCelsius <= 0) {
        return "Freezing";
    } else if (tempCelsius > 0 && tempCelsius <= 15) {
        return "Cold";
    } else if (tempCelsius > 15 && tempCelsius <= 25) {
        return "Pleasant";
    } else if (tempCelsius > 25 && tempCelsius <= 35) {
        return "Hot";
    } else {
        return "Very Hot";
    }
}

console.log("-5°C ->", checkTemperature(-5));
console.log("10°C ->", checkTemperature(10));
console.log("22°C ->", checkTemperature(22));
console.log("30°C ->", checkTemperature(30));
console.log("40°C ->", checkTemperature(40));


console.log("\n=== 5. SALARY / TAX BRACKETS ===");

function calculateTax(income) {
    let tax = 0;
    if (income <= 300000) {
        tax = 0; // No tax
    } else if (income > 300000 && income <= 600000) {
        tax = (income - 300000) * 0.05; // 5%
    } else if (income > 600000 && income <= 900000) {
        tax = 15000 + (income - 600000) * 0.10; // 10%
    } else if (income > 900000 && income <= 1200000) {
        tax = 45000 + (income - 900000) * 0.15; // 15%
    } else {
        tax = 90000 + (income - 1200000) * 0.30; // 30%
    }
    return tax;
}

console.log("Income ₹2,50,000 -> Tax: ₹", calculateTax(250000));
console.log("Income ₹5,00,000 -> Tax: ₹", calculateTax(500000));
console.log("Income ₹8,00,000 -> Tax: ₹", calculateTax(800000));
console.log("Income ₹15,00,000 -> Tax: ₹", calculateTax(1500000));


console.log("\n=== 6. CHECK IF NUMBER IS IN RANGE (Function) ===");

function isInRange(value, min, max) {
    return value >= min && value <= max;
}

console.log("Is 15 in range [10, 20]?", isInRange(15, 10, 20)); // true
console.log("Is 5 in range [10, 20]?", isInRange(5, 10, 20));   // false
console.log("Is 10 in range [10, 20]?", isInRange(10, 10, 20)); // true (inclusive)
console.log("Is 20 in range [10, 20]?", isInRange(20, 10, 20)); // true (inclusive)


console.log("\n=== 7. COMBINING MULTIPLE RANGES (OR condition) ===");

// Check if day is a weekend OR a holiday
let day = "Saturday";
let isHoliday = false;

if ((day === "Saturday" || day === "Sunday") || isHoliday) {
    console.log("It's a day off!");
} else {
    console.log("It's a working day.");
}

// Check if number is in range A OR range B
let num = 75;
if ((num >= 1 && num <= 10) || (num >= 70 && num <= 80)) {
    console.log(`${num} is in Range 1 (1-10) or Range 2 (70-80)`);
}


console.log("\n=== 8. VALIDATING INPUT RANGES ===");

function validateInput(value) {
    // Must be a number
    if (typeof value !== "number" || isNaN(value)) {
        return "Error: Please enter a valid number";
    }

    // Must be positive
    if (value < 0) {
        return "Error: Value cannot be negative";
    }

    // Must be within acceptable range
    if (value < 1 || value > 100) {
        return "Error: Value must be between 1 and 100";
    }

    return "Valid input!";
}

console.log(validateInput(50));
console.log(validateInput(-5));
console.log(validateInput(150));
console.log(validateInput("hello"));


console.log("\n=== 9. BMI RANGE CLASSIFICATION ===");

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else if (bmi >= 30) {
        return "Obese";
    } else {
        return "Invalid BMI";
    }
}

console.log("BMI 17.0 ->", getBMICategory(17.0));
console.log("BMI 22.5 ->", getBMICategory(22.5));
console.log("BMI 27.0 ->", getBMICategory(27.0));
console.log("BMI 32.0 ->", getBMICategory(32.0));


console.log("\n=== 10. TIME RANGES ===");

function greetByTime(hour) {
    if (hour >= 5 && hour < 12) {
        return "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
        return "Good Evening";
    } else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour < 5)) {
        return "Good Night";
    } else {
        return "Invalid hour";
    }
}

console.log("Hour 8 ->", greetByTime(8));
console.log("Hour 14 ->", greetByTime(14));
console.log("Hour 19 ->", greetByTime(19));
console.log("Hour 23 ->", greetByTime(23));
console.log("Hour 25 ->", greetByTime(25));


console.log("\n=== 11. ARRAY FILTERING BY RANGE ===");

let numbers = [5, 12, 18, 25, 3, 40, 8, 15];
let filtered = numbers.filter(n => n >= 10 && n <= 20);
console.log("Numbers between 10 and 20:", filtered);


console.log("\n=== 12. COMMON MISTAKE TO AVOID ===");

// ❌ WRONG: This is a syntax error, NOT a range check
// let x = 15;
// if (10 < x < 20) { ... }  // THIS DOES NOT WORK AS EXPECTED!

// Explanation of why it's wrong:
let x = 15;
console.log("10 < x < 20 evaluated as:", 10 < x < 20);
// JS does: (10 < 15) = true, then true < 20 = 1 < 20 = true
// It happens to be true here, but:
let y = 5;
console.log("10 < 5 < 20 evaluated as:", 10 < y < 20); // Also true! (WRONG!)

// ✅ CORRECT: Always use &&
console.log("Correct check (5 >= 10 && 5 <= 20):", y >= 10 && y <= 20); // false


console.log("\n=== 13. SHORT SUMMARY ===");
console.log(`
To check if value is IN RANGE [min, max]:
  ✅ if (value >= min && value <= max)   // Inclusive
  ✅ if (value > min && value < max)     // Exclusive

To check if value is OUT OF RANGE:
  ✅ if (value < min || value > max)

Remember:
  ❌ NEVER write: if (min < value < max)  // Bug!
  ✅ ALWAYS write: if (value >= min && value <= max)
`);
