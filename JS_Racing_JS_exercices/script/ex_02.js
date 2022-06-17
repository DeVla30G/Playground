


window.onload = function(){

    var box = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];
    var click = 1;

    function count(){
        box.innerHTML = click;
        click ++;
    
    }
box.onclick = count;
}
    
    
    

