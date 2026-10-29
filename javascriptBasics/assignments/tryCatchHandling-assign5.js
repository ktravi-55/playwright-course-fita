//Try/Catch and Error Handling
//Create a function that accepts marks. If marks are less than 0 or greater than 100, throw an error. Use try/catch to handle the error.
function checkMarks(marks) {
    try {
        if (marks < 0 || marks > 100) {
            throw new Error("Invalid marks. Please enter a value between 0 and 100.");
        }
        console.log("Valid marks entered.");
    } catch (error) {
        console.error(error.message);
    }
}
checkMarks(75);
checkMarks(-10);
checkMarks(150);