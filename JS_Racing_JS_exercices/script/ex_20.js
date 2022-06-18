window.onload = () => {
    var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    var fichier = box.getElementsByTagName("input")[0];
    var validation = box.getElementsByTagName("input")[1];
 
   fichier.onclick = () =>{
     const file = document.createElement('a')
     link.href = URL.createObjectURL(blobFile);
     link.download='';
     link.click();
   }
 }