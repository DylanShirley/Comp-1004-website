/*
const div = document.getElementById("demo"); 
var current_date = new Date();
document.getElementById("demo").innerHTML = "<p>THIS</p>";
div.textContent = current_date;*///this code could be used later in some way to get the current date for dynacmic date on the calendar


function getDates(year, month) {        //get the dates for a given month and year
    const datesarray = [];              //creates an array, datesarray
    let date = new Date(year, month, 1);// date is equal to a date value equal to month and year
    while (date.getMonth() === month) { //while the date variable is still equal to the selected month
        datesarray.push({               //push to the array the date number and the day of week
            date:date.toDateString(),
            day: date.toLocaleString('default', {weekday: 'long'}), 
        });

        date.setDate(date.getDate() + 1);//increase the date by 1 to check the next day of the month
    }
    return datesarray;                  //return array after function completed
}

function displayDates(year, month) {    //this function print all of the dates stored in the datesarray on the webpage
    const calendar = document.getElementById('calendar');   //
    const datesarray = getDates(year, month);

    calendar.innerHTML = '';
    //const list = document.createElement("div");
    datesarray.forEach(entry =>{
        const dateDiv = document.createElement('div');
        //dateDiv.classList.add('date-entry');
        dateDiv.textContent = `${entry.date}`; //${entry.day}
        calendar.appendChild(dateDiv);
    });
    //calendar.appendChild(list);
}

function saveEvent() {
    const eventName = document.getElementById("event_name").value;
    const eventDate = document.getElementById("event_date").value;

    const eventData = {
        event_name:eventName,
        event_date:eventDate
    };


}

var year = 2025; //set default year to 2025
var month = 0;  //set default month to 0, january
displayDates(year, month);  //display all of the dates for the given month and year
document.getElementById('monthSelect').addEventListener('click',() =>{  //when the drop down menu changes
    var monthSelect = document.getElementById('monthSelect');           //get the selected month from the dropdown
    var month = parseInt(monthSelect.value) -1;                         //month - 1 due to the way the dropdown selects the months ie january = 1 not 0
    displayDates(year, month);                                          //display the dates again
});


