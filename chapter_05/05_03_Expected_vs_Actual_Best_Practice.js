/**
 * ============================================================
 * BETTER WAY: COMPARING EXPECTED vs ACTUAL RESULTS (Test Assertions)
 * ============================================================
 * 
 * PROBLEMS WITH THE BASIC EXAMPLE:
 * 1. ActualResult is hardcoded — no real logic is tested
 * 2. The else block shows a DIFFERENT ActualResult than the variable
 * 3. No function being tested — just comparing two strings
 * 4. Username/Password are declared but never used
 * 5. Not reusable for multiple test cases
 * ============================================================
 */

console.log("=== ❌ BAD EXAMPLE (Original) ===");
// DON'T DO THIS — it's just comparing two hardcoded strings
let expectedResult = "Login Successful";
let ActualResult = "Login Successful"; // Hardcoded!
let UserName = "Ajay";
let Password = "JavaScript"; // Never used!

if (expectedResult === ActualResult) {
    console.log(`expected = "${expectedResult}"\nActual = "${ActualResult}"\noutput :✅ Test Passed`);
} else {
    // Bug: Uses a HARDCODED string instead of the ActualResult variable!
    console.log(`expected = "${expectedResult}"\nActual = "Invaid Credentials"\noutput:❌ Test Failed`);
}


console.log("\n\n=== ✅ BETTER EXAMPLE: With Real Login Function ===");

// Step 1: Create the function you want to test
function login(username, password) {
    const validUser = "Ajay";
    const validPass = "JavaScript";

    if (!username || !password) {
        return "Error: Username and Password are required";
    }
    if (username === validUser && password === validPass) {
        return "Login Successful";
    }
    return "Invalid Credentials";
}

// Step 2: Create a reusable test helper
function runTest(testName, expected, actual) {
    const status = expected === actual ? "✅ PASSED" : "❌ FAILED";
    console.log(`\n--- ${testName} ---`);
    console.log(`Expected : ${expected}`);
    console.log(`Actual   : ${actual}`);
    console.log(`Result   : ${status}`);
    return expected === actual;
}

// Step 3: Run multiple test cases
let allPassed = true;

// Test Case 1: Valid Login
allPassed &= runTest(
    "TC01 - Valid Login",
    "Login Successful",
    login("Ajay", "JavaScript")
);

// Test Case 2: Wrong Password
allPassed &= runTest(
    "TC02 - Wrong Password",
    "Invalid Credentials",
    login("Ajay", "WrongPass")
);

// Test Case 3: Wrong Username
allPassed &= runTest(
    "TC03 - Wrong Username",
    "Invalid Credentials",
    login("Ravi", "JavaScript")
);

// Test Case 4: Empty Credentials
allPassed &= runTest(
    "TC04 - Empty Password",
    "Error: Username and Password are required",
    login("Ajay", "")
);

// Test Case 5: Both Empty
allPassed &= runTest(
    "TC05 - Both Empty",
    "Error: Username and Password are required",
    login("", "")
);

console.log(`\n========================================`);
console.log(`Final Result: ${allPassed ? "🎉 ALL TESTS PASSED" : "⚠️ SOME TESTS FAILED"}`);
console.log(`========================================`);


console.log("\n\n=== 🚀 EVEN BETTER: Using a Simple Test Framework Pattern ===");

class SimpleTester {
    constructor() {
        this.passed = 0;
        this.failed = 0;
        this.results = [];
    }

    assertEquals(description, expected, actual) {
        const isPass = expected === actual;
        if (isPass) {
            this.passed++;
        } else {
            this.failed++;
        }

        this.results.push({
            description,
            expected,
            actual,
            isPass
        });

        // Print immediately
        const icon = isPass ? "✅" : "❌";
        console.log(`${icon} ${description}`);
        if (!isPass) {
            console.log(`   Expected: ${expected}`);
            console.log(`   Actual  : ${actual}`);
        }
    }

    summarize() {
        const total = this.passed + this.failed;
        console.log(`\n📊 Test Summary: ${this.passed}/${total} passed`);
        if (this.failed > 0) {
            console.log(`⚠️  ${this.failed} test(s) failed`);
        } else {
            console.log("🎉 All tests passed!");
        }
    }
}

// Run with the class
const tester = new SimpleTester();

tester.assertEquals("Valid user login", "Login Successful", login("Ajay", "JavaScript"));
tester.assertEquals("Invalid password", "Invalid Credentials", login("Ajay", "12345"));
tester.assertEquals("Invalid username", "Invalid Credentials", login("Hacker", "JavaScript"));
tester.assertEquals("Empty username", "Error: Username and Password are required", login("", "JavaScript"));
tester.assertEquals("SQL Injection attempt", "Invalid Credentials", login("' OR '1'='1", "JavaScript"));

tester.summarize();


console.log("\n\n=== 💡 KEY TAKEAWAYS ===");
console.log(`
1. TEST A FUNCTION, not hardcoded strings
   Bad :  ActualResult = "Login Successful"
   Good:  ActualResult = login("Ajay", "JavaScript")

2. USE VARIABLES in both pass and fail cases
   Bad :  console.log(..."Invaid Credentials"...)
   Good:  console.log(...ActualResult...)

3. MAKE IT REUSABLE
   Bad :  Copy-paste if-else for every test
   Good:  A runTest() or assertEquals() helper

4. TEST EDGE CASES
   - Valid input
   - Wrong password
   - Wrong username
   - Empty values
   - Special characters / injection

5. REPORT CLEARLY
   - Test name/description
   - Expected value
   - Actual value
   - Pass/Fail status
`);
