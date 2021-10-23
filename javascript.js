const h6doc= document.querySelector(".italic");
const timer=document.querySelector(".time");
const showdate=document.querySelector('.Date');
const mininp = document.querySelector('.min').value;
const secinp = document.querySelector('.sec').value;
const alarm = document.querySelector('.alarm');
console.log('hello');
const Days=['SUN','MON','TUE','WED','THU','FRI','SAT'];
const Months=['01','02','03','04','05','06','07','08','09','10','11','12'];
const d = new Date();
console.log(d);
console.log(d.getTime());
const presenthour=d.getHours().toString();
const presentmin=d.getMinutes().toString().padStart(2,"0");
const presentsec=d.getSeconds().toString().padStart(2,"0");
showdate.innerHTML =`${d.getFullYear()}-${Months[d.getMonth()]}-${d.getDate()}  ${Days[d.getDay()]}`;
setInterval(() => {
    const de = new Date();
    // timer.innerHTML=`${de.toLocaleTimeString('it-IT')}`;
        timer.innerHTML=` ${de.getHours().toString().padStart(2,"0")}   :   ${de.getMinutes().toString().padStart(2,"0")}   :   ${de.getSeconds().toString().padStart(2,"0")} `;

}, 1000);
function ringalarm()
{
        var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();
        
}
document.querySelector('.buttons').addEventListener('click',function(){
    const hourinp = document.querySelector('.hour').value;
    const alarmdate = document.querySelector('.dateset').value;
    const mininp = document.querySelector('.min').value;
    const secinp = document.querySelector('.sec').value;
    console.log(alarmdate);
    // console.log(hourinp, typeof(hourinp),mininp,secinp);
    const alarmtobeset= new Date(`${alarmdate} ${hourinp}:${mininp}:${secinp}`);
    console.log(alarmtobeset);
    // const diffintime=`${(presenthour - hourinp)} ${(presenthour-hourinp > 1) ? 'hrs':'hr'}
    //  ${(presentmin - mininp)}  ${(presentmin-mininp > 1) ? 'mins':'min'}   ${d.getSeconds() -secinp} 
    //  ${(presenthour-hourinp > 1) ? 'secs':'sec'}`;
    const dateconst=new Date();
     const datedifference = alarmtobeset - dateconst;
     console.log(dateconst,alarmtobeset,datedifference);

if(datedifference >= 0)
{
        setTimeout(() => {
        console.log("ringing");
        ringalarm();

    }, datedifference);
    //  alarm.insertAdjacentHTML('afterend',` <div class="TimeDiff"> Time left : ${diffintime}</div>`);

}
    
});