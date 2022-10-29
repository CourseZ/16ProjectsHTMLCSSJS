const hourElem = document.getElementById('hour');
const minuteElem = document.getElementById('minutes');
const secondElem = document.getElementById('seconds');
const ampmElem = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourElem.innerText = h;
    minuteElem.innerText = m;
    secondElem.innerText = s;
    ampmElem.innerText = ampm;
    setTimeout(() => {
        updateClock();
    },1000)
}

updateClock();