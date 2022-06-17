window.onload = function(){


    var txt = document.getElementsByTagName('section')[0];
    var button1 = document.getElementsByTagName('footer')[0].getElementsByTagName('button')[0];
    var button2 = document.getElementsByTagName('footer')[0].getElementsByTagName('button')[1];
    var select = document.getElementsByTagName('select')[0];

    function plusSize() {
        style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize + 1) + 'px';
    }
button1.onclick = plusSize;

    function minusSize() {
        style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize - 1) + 'px';
    }
button2.onclick = minusSize; 

function changeBackground(){
     
    let color = select.options[select.selectedIndex].value; 
    txt.style.backgroundColor = color;

}
select.onclick = changeBackground;

}; 
