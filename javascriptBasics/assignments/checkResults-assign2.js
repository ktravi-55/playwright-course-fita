//Description: Create a function checkResult(marks).
//Requirements: Marks greater than or equal to 40 is Pass, Marks below 40 is Fail. Call the function with 75, 30 and 40.
function checkResult(marks) {
    if (marks >= 40) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}
checkResult(75);
checkResult(30);
checkResult(40);