function methodByCalendar() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

   // console.log("Enter the year of birth:");
    const enteredYear = document.getElementById('age').value;

    const newYear = year - enteredYear;
    const newMonth = month - 1;

    const resultString=(`Your age is ${day} days, ${newMonth} months, and ${newYear} years old.`);
    var displayElement=document.getElementById('div');
    displayElement.innerHTML = resultString;

}

methodByCalendar();

//var displayElement = document.getElementById('resultDiv');

// Set the innerHTML property of the element to display the result


