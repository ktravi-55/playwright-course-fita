//Description:Promises and Async/Await
//Create a Promise that displays "Student data loaded" after 2 seconds. Use async and await to handle the Promise.
function loadStudentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Student data loaded");
        }, 2000);
    });
}

async function main() {
    const result = await loadStudentData();
    console.log(result);
}

main();