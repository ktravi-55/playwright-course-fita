let student1 = {
    name: "Ravi",
    age: 20,
    marks: 85
};

let student2 = {
    name: "Bhumi",
    age: 22,
    marks: 92
};

let student3 = {
    name: "John",
    age: 19,
    marks: 78
};

//Displaying First Student Name
console.log(`Student Name: ${student1.name}`);

//Update student2 marks
student2.marks = 95;
console.log(`Updated Marks of ${student2.name}: ${student2.marks}`);

//Add Student4
let student4 = {
    name: "Alice",
    age: 21,
    marks: 88
};

//Display all students using loop
let students = [student1, student2, student3, student4];

for (let i = 0; i < students.length; i++) {
    console.log(`Student Name: ${students[i].name}, Age: ${students[i].age}, Marks: ${students[i].marks}`);
}
 