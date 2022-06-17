window.onload = function(){

    var box = document.getElementsByTagName('div')[2];

    localStorage.setItem("ex12_img", "https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");
    localStorage.getItem("ex12_img");

    
        box.style.width = "100%";
        box.style.height = "100%";

    box.innerHTML = "<img src=" +localStorage.getItem("ex12_img") + " width='300px' height='auto'>"; 
}