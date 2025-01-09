/*
const div = document.getElementById("demo"); 
var current_date = new Date();
document.getElementById("demo").innerHTML = "<p>THIS</p>";
div.textContent = current_date;*/


function getDates(year, month) {
    const datesarray = [];
    let date = new Date(year, month, 1);
    while (date.getMonth() === month) {
        datesarray.push({
            date:date.toDateString(),
            day: date.toLocaleString('default', {weekday: 'long'}), 
        });

        date.setDate(date.getDate() + 1);
    }
    return datesarray;
}

function displayDates(year, month) {
    const calendar = document.getElementById('demo');
    const datesarray = getDates(year, month);

    calendar.innerHTML = '';
    const list = document.createElement("ul");
    datesarray.forEach(entry =>{
        const listitem = document.createElement('li');
        listitem.textContent = `${entry.date} - ${entry.day}`;
        list.appendChild(listitem);
    });
    calendar.appendChild(list);
}

var year = 2025;
var month = 0;
displayDates(year, month);
document.getElementById('monthSelect').addEventListener('click',() =>{
    var monthSelect = document.getElementById('monthSelect');
    var month = parseInt(monthSelect.value) -1;
    displayDates(year, month);
});


