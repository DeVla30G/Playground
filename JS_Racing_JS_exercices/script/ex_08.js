window.onload = function(){

    
    var orange2 = document.getElementsByTagName('footer')[0].getElementsByTagName('canvas')[4];
    var orange3 = document.getElementsByTagName('footer')[0].getElementsByTagName('canvas')[7];
    var orange4 = document.getElementsByTagName('footer')[0].getElementsByTagName('canvas')[10];
    var purple1 = document.getElementsByTagName('footer')[0].getElementsByTagName('canvas')[3];
    var purple3 = document.getElementsByTagName('footer')[0].getElementsByTagName('canvas')[9];
    var black = document.getElementsByTagName('footer')[0].getElementsByTagName('canvas')[0];
    var green1 = document.getElementsByTagName('footer')[0].getElementsByTagName('canvas')[2];
    var green2 = document.getElementsByTagName('footer')[0].getElementsByTagName('canvas')[5];


    var ctx = black.getContext('2d');
    ctx.fillStyle = '#FFA500';
    ctx.fillRect(5, 5, 300, 300);
   
   
    var ctx1 = green1.getContext('2d');
    ctx1.fillStyle = '#FFA500';
    ctx1.fillRect(5, 5, 300, 300);
    

    var ctx2 = purple1.getContext('2d');
    ctx2.fillStyle = '#FFA500';
    ctx2.fillRect(5, 5, 300, 300);
    

    var ctx3 = orange2.getContext('2d');
    ctx3.fillStyle = 'purple';
    ctx3.fillRect(5, 5, 300, 300);
    
    
    var ctx4 = green2.getContext('2d');
    ctx4.fillStyle = 'purple';
    ctx4.fillRect(5, 5, 300, 300);
   

    var ctx5 = orange3.getContext('2d');
    ctx5.fillStyle = 'black';
    ctx5.fillRect(5, 5, 300, 300);
    

    var ctx6 = purple3.getContext('2d');
    ctx6.fillStyle = 'olive';
    ctx6.fillRect(5, 5, 300, 300);
 

    var ctx7 = orange4.getContext('2d');
    ctx7.fillStyle = 'olive';
    ctx7.fillRect(5, 5, 300, 300);
 
  
}

/* 
  function reorder(){
        orange1.style.order = "1";
        orange2.style.order = "2";
        orange3.style.order = "3";
        orange4.style.order = "4";
        purple1.style.order = "5";
        purple2.style.order = "6";
        purple3.style.order = "7";
        black.style.order = "8";
        green1.style.order = "9";
        green2.style.order = "10";
        green3.style.order = "11";
        green4.style.order = "12";
       
    }
    click.onclick = reorder; 
 */