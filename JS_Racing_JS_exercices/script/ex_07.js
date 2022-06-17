window.onload = function(){

    var canvas = document.getElementsByTagName('canvas')[0]; 
    var ctx = canvas.getContext('2d');
    
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'white';
            ctx.beginPath();
            ctx.moveTo(6, 6);
            ctx.lineTo(14, 10);
            ctx.lineTo(6, 14);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
    
    var x = document.getElementsByTagName(""); 
    
    
    const audio = new Audio();
    audio.src="./triangle.ogg"; 
    var pause_butt = document.getElementsByTagName('footer')[0].getElementsByTagName('button')[0];
    var stop_butt = document.getElementsByTagName('footer')[0].getElementsByTagName('button')[1];
    var mute_butt = document.getElementsByTagName('footer')[0].getElementsByTagName('button')[2];
    
    function play(){
        audio.play();
    }
    canvas.onclick = play;
    
    function pause(){
        audio.pause();
    }
    pause_butt.onclick = pause;
    
    function stop(){
    
        audio.pause();
        audio.currentTime = 0;
    }
    stop_butt.onclick = stop; 
    
    function mute(){
        if(mute_butt = true){
            audio.muted = true;
        }else if (mute_butt = false){
            audio.muted = false;
        }
    }
    mute_butt.onclick = mute;
    
    }