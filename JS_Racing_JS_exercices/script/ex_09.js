window.onload = function() {
	
	var x = 0, y = 0;
    var posX;
	var posY;
    var footer = document.getElementsByTagName("footer")[0];
    var div0 = footer.children[0];
    var div1 = footer.children[1];
    
    var carre = div0.children[0];
	carre.draggable =true;

	const pos = carre.style.position = "relative";
   
	carre.addEventListener(`dragstart`, event => {
	  	event.dataTransfer.setData('text', "");
		posX = event.pageX;
		posY = event.pageY;
	});
	div0.addEventListener(`drop`, event => {		
        x += posX - event.pageX;
    	y += posY - event.pageY;
    	carre.style.bottom = `${y}px`;	
    	carre.style.right = `${x}px`;
	});
    div0.addEventListener(`dragover`, event => {
        var x = event.screenX;
        var y = event.screenY; 
		event.preventDefault();
        div1.innerText = ` New coordinates => {x:${x}, y:${y}}`;	 

    });
	
}
/* Test 2: 

window.onload = () => {
  
    var footer = document.getElementsByTagName("footer")[0];
    var div = footer.getElementsByTagName("div")[0];
    var coord = footer.getElementsByTagName("div")[1];
    var canvas = div.getElementsByTagName("canvas")[0];
   
    canvas.onmousedown = function(){
        this.setAttribute('draggable','true');
        pressed = true;
    }
    //getcanvas
    document.onmouseup = function(){
        pressed = false;
    }
    canvas.onmouseemove = function(event){
        if(pressed){
        coord.innerText = "New coordinates => {x:" + event.pageX + ", y:" + event.pageY +"}";
        }
    }
    canvas.ondragstart = function(event){
        event.dataTransfer.setData("text", event.target.id);
    
    }
    
    //getcanvas
    div.ondragover = function(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        var offsetX = 0;
        var offsetY = 0;
        canvas.style.position = 'static';
        canvas.style.left = event.pageX+offsetX+"px";
        canvas.style.top = event.pageY+offsetY+"px";
        coord.innerText = "New coordinates => {x:"+event.pageX+", y:"+ event.pageY+"}";
    }
    
    div.ondrop = function(event){
        //e.preventDefault();
        var data = event.dataTransfer.getData("text");
        var offsetX = 0;
        var offsetY = 0;
        canvas.style.position = 'static';
        if(boxed(event.pageX+offsetX,event.pageY+offsetY)){
        canvas.style.left = event.pageX+offsetX+"px";
        canvas.style.top = event.pageY+offsetY+"px";
        }
    }
   


    }*/