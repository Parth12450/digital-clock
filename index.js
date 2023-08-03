const hourel = document.getElementById("hours");

const minutesel = document.getElementById("minutes");

const secondsel = document.getElementById("seconds");

const ampmel = document.getElementById("ampm");

function updateClock(){
   let h = new Date().getHours();

   let m = new Date().getMinutes();

   let s = new Date().getSeconds();

   let ampm = "AM";
   if(h > 12){
    h = h-12;
    ampm = "PM";
   }

   hourel.innerText = h;
   minutesel.innerText = m;
   secondsel.innerText = s;
    ampmel.innerText = ampm;
   setTimeout(()=>{
    updateClock()
   },1000)
}

updateClock();