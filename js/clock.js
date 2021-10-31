const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
  const day = days[date.getDay()-1];
  clock.innerText = `${hours}:${minutes}:${seconds} ${day}`;
  console.log(clock);
}

getClock();
setInterval(getClock,1000);