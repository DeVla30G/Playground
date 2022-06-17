window.onload = function(){

    var link = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0].getElementsByTagName('a')[0];
    var box = document.getElementsByTagName("div")[2];
    var text = box.textContent;


function setCookie(name, value, date) {
    var name = "acceptsCookies";
    var value = true;
    var date = new Date();
    expires = 'expires=';
    date.setTime(date.getTime() + 1);
    expires += date.toGMTString();
    document.cookie = name + '=' + value + '; ' + expires + '; path=/';

    if(value = true){
    box.innerHTML = null; 
}
        var element = document.createElement('div');
        box.parentNode.appendChild(element);
        element.style.background = "white";

        var button = document.createElement('button');
        button.innerHTML = "Delete cookie";
        element.appendChild(button);
        button.onclick = deleteCookie;
      
}
link.onclick = setCookie; 


function deleteCookie(){

if(value = true){
    document.cookie="name=acceptCookies; expires=Sun, 20 Aug 2000 12:00:00 UTC"; 
}
var element = document.getElementsByTagName('div')[3];
box.parentNode.removeChild(element);
    
box.innerHTML = text; 
}


}