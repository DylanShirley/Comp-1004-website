/*let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

document.getElementById("demo").innerHTML = 
obj.employees[1].firstName + " " + obj.employees[1].lastName;*/

const div = document.getElementById("demo"); 
var current_date = new Date();
document.getElementById("demo").innerHTML = "<p>THIS</p>";
div.textContent = current_date;

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
