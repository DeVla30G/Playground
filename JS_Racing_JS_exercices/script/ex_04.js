window.onload = function(){

    let box = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];
    let txt= "";

    document.addEventListener('keydown', function(press){

        txt = txt + (press.key);
        box.innerHTML = (txt.slice(txt.length - 42));
    });
}; 




  


    
