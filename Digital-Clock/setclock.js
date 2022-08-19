const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


const weekdaysEl = document.getElementById("weekdays");
const dateEl = document.getElementById("date");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");



function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "PM";

    if(h > 24){ 
        h = h - 24;
        ampm = "AM";
    }

    h = h < 10? "0" + h : h;
    m = m < 10? "0" + m : m;
    s = s < 10? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000)

}

updateClock()

function updateDate(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const wd = new Date();
    let w = weekday[wd.getDay()];
    let d = new Date().getDate();
    let mt = new Date();
    let month = months[mt.getMonth()];
    let y = new Date().getFullYear();


    d = d < 10? "0" + d : d;

    weekdaysEl.innerText = w;
    dateEl.innerText = d;
    monthEl.innerText = month;
    yearEl.innerText = y;
}

updateDate()

