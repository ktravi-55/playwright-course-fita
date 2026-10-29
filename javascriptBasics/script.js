const heading =
document.getElementById('heading');

const nameInput =
document.getElementById('studentName');

const button = 
document.getElementById('changeButton');

const message=
document.getElementById('message');

button.addEventListener('click',function(){
    const studentName =nameInput.value;
    heading.textContent = 'Welcome' + studentName;
    message.textContent ='Name updated successfully';

});