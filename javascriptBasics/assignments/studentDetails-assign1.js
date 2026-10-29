//Description: Create a Javascript program to store student details using let and const.
//Requirements: Student name, Age, Marks, Pass/Fail Status. Display all details using console.log().
let studentName = "John Doe";
let studentAge = 20;
let studentMarks = 85;
const passMark = 40;

let passStatus = studentMarks >= passMark ? "Pass" : "Fail";

console.log("Student Name: " + studentName);
console.log("Student Age: " + studentAge);
console.log("Student Marks: " + studentMarks);
console.log("Pass/Fail Status: " + passStatus);