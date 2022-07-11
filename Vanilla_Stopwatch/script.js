window.onload = function () {

    let minutes = 00;
    let seconds = 00;
    let tens = 00;
    let appTens = document.getElementById('tens');
    let appSec = document.getElementById('seconds');
    let appMin = document.getElementById('minutes');
    let Start = document.getElementById('start');
    let Stop = document.getElementById('stop');
    let Reset = document.getElementById('reset');

    let Interval;


    Start.onclick = function (){
        Interval = setInterval(startTimer, 10);
    }

    Stop.onclick = function () {
        clearInterval(Interval);
    }

    Reset.onclick = function () {
        clearInterval(Interval);
        minutes = '00';
        seconds = '00';
        tens = '00';
        appMin.innerHTML = minutes;
        appSec.innerHTML = seconds;
        appTens.innerHTML = tens; 
        
    }

    function startTimer () {

        tens ++;

        if (tens <= 9) {
            appTens.innerHTML = '0' + tens;
        }
        if (tens > 9){
            appTens.innerHTML = tens;
        }
        if (tens > 99){
            console.log('second')
            seconds ++;
            appSec.innerHTML = '0' + seconds;
            tens = 0;
            appTens.innerHTML = '0' + 0;
        }
        if (seconds > 9) {
            appSec.innerHTML = seconds;
        }
        if (seconds > 59){
            console.log('minute')
            minutes ++;
            appMin.innerHTML = '0' + minutes;
            seconds = 0;
            appSec.innerHTML = '0' + 0;
        }
        if (minutes > 59) {
            console.log('hour')
            clearInterval(Interval);
        minutes = '00';
        seconds = '00';
        tens = '00';
        }
    }
}
 //         