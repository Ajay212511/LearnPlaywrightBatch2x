let expectedResult="Login Successful";
let ActualResult="Login Successful";

if(expectedResult===ActualResult)
{
    console.log(`expected = "${expectedResult}"\nActual = "${ActualResult}"\noutput :✅TestPassed`)
}else {
    console.log(`expected = "${expectedResult}"\nActual = "Invaid Credentials"\noutput:❌Test Failed — Expected: Login Successful, Got: Invalid Credentials`)
}