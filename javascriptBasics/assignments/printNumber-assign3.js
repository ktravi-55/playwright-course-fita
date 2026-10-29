//Description: Conditions and Loops
//Write a program to print numbers from 1 to 10. For each number, print whether it is even or odd.
let i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
    i++;
}