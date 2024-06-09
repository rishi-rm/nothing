let date;
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let weekDay = document.querySelector(".weekDay");

let months = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']
let weekDays = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
let monthNum; 

function updateClock() {
    date = new Date();
    hours.textContent = String(date.getHours()).padStart(2, '0');
    minutes.textContent = String(date.getMinutes()).padStart(2, '0');
    seconds.textContent = String(date.getSeconds()).padStart(2, '0');
    day.textContent = String(date.getDate()).padStart(2, '0');
    monthNum = (date.getMonth())-1
    month.textContent = months[monthNum] + " , ";
    year.textContent = String(date.getFullYear());
    dayNum = date.getDay();
    weekDay.textContent = weekDays[dayNum]
}

updateClock();

setInterval(updateClock, 1000);