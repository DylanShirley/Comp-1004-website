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
    const datesArray = getDates(year, month);

    calendar.innerHTML = '';    //clear the calendar div of the short test values I put in there
    const firstDate = datesArray[0].day;
    const weekdayMap = {    //set how many empty squares there will be at the start of the month based on first day of month
        "Monday" :0,
        "Tuesday":1,
        "Wednesday":2,
        "Thursday":3,
        "Friday":4,
        "Saturday":5,
        "Sunday":6
    };
    const emptyDivs = weekdayMap[firstDate];
    for (let i= 0;i < emptyDivs; i++){  //I'm not sure why this is working but I'm not going to look horse in the mouth
        const dateDiv = document.createElement('div');
        calendar.appendChild(dateDiv);
    };

    datesArray.forEach(entry =>{    //print each date on to the webpage
        const dateDiv = document.createElement('div');//put them inside divs
        dateDiv.textContent = `${entry.date}, ${entry.day}`; 
        calendar.appendChild(dateDiv);
    });

}

function saveEvent() {
    var date = document.getElementById('event_date').value;
    var eventData = {"date" : date};
    var blob = new Blob([JSON.stringify(eventData)], {type: "text/plain"});//make into blob
    
    var link = document.createElement("a");//create element('a')
    link.href = URL.createObjectURL(blob);//give url using url.create object.url
    link.download = "eventdata.json";//download property be name of file to save to
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);

    //reference of 'a' to url
    //simulate "a" click
    //revoke url
}
function loadFile() {
    
}

var year = 2025; //set default year to 2025
var month = 0;  //set default month to 0, january
displayDates(year, month);  //display all of the dates for the given month and year
document.getElementById('monthSelect').addEventListener('click',() =>{  //when the drop down menu changes
    var monthSelect = document.getElementById('monthSelect');           //get the selected month from the dropdown
    var month = parseInt(monthSelect.value) -1;                         //month - 1 due to the way the dropdown selects the months ie january = 1 not 0
    var yearSelect = document.getElementById('yearSelect');
    var year = parseInt(yearSelect.value);
    displayDates(year, month);                                          //display the dates again
});
document.getElementById('yearSelect').addEventListener('click',() =>{  //when the drop down menu changes
    var monthSelect = document.getElementById('monthSelect');           //get the selected month from the dropdown
    var month = parseInt(monthSelect.value) -1;                         //month - 1 due to the way the dropdown selects the months ie january = 1 not 0
    var yearSelect = document.getElementById('yearSelect');
    var year = parseInt(yearSelect.value);
    displayDates(year, month);                                          //display the dates again
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('inputfile').addEventListener("change", function(event){
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var filecontent = e.target.result;

                try {
                    var jsondata = JSON.parse(filecontent);
                    document.getElementById("output").textContent = "loaded date: "+ jsondata.date;
                    var savedDate = jsondata.date;
                }   catch (error) {
                    document.getElementById("output").textContent = "failed";
                }
            };
            reader.readAsText(file);
        }
    })
})

//make blob to store json