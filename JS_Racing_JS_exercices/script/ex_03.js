window.onload = function(){

  var box = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];
  
  function hello(){ 
    let user = prompt(" What is your name?", "");
    let text = "Are you sure " + user + "!";
     if(confirm(text) == true ){
     
          alert("Hello " + user + "!"); 
          box.innerHTML = "Hello " + user + "!";
        }
  
  }
box.onclick = hello;

}
  