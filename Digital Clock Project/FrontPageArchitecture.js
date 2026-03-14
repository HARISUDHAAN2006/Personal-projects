function updateClock(){
    const timeNowObject = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let hours = timeNowObject.getHours();
    let minutes = timeNowObject.getMinutes();
    let seconds = timeNowObject.getSeconds();
    let day = days[timeNowObject.getDay()];
    let date = timeNowObject.getDate();
    let month = months[timeNowObject.getMonth()];
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    date = String(date).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dayString = `${day} ${date}, ${month}`;
    document.querySelector('.time-display-paragraph').innerHTML = timeString;
    document.querySelector('.day-display-paragraph').innerHTML = dayString;
}
setInterval(updateClock, 1000);
updateClock();
