let userName = prompt("İsminizi girin.");
let isName = (userName.length > 0) ? userName : (alert("İsim girmeyi unuttunuz"), 'İsimsiz kişi');  
document.querySelector("#myName").innerHTML = isName
const weekDays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]


function showTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds(); 
    let day = weekDays[now.getDay()-1];
    hours = (hours) < 10 ? hours.padStart(2, "0") : hours;
    minutes = (minutes) < 10 ? minutes.padStart(2, "0") : minutes;
    seconds = (seconds) < 10 ? seconds.padStart(2, "0") : seconds;
    let clock = `${hours}  : ${minutes} : ${seconds} ${day}`
    document.querySelector("#myClock").innerHTML = clock;
    setTimeout(showTime, 1000)
}

showTime()