window.onload = function() {
    
    var footer = document.getElementsByTagName("footer")[0];
    var div0 = footer.children[0];
    var div1 = footer.children[1];
    
    var submit = div0.getElementsByTagName("input")[1]
    
    function fileCheck() {
        var fileInput = div0.getElementsByTagName("input")[0]
        var filePath = fileInput.value.substring(xyz.value.lastIndexOf('.') + 1).toLowerCase();
        
        console.log(filePath); 
       
        var fileRegex =  /(\.txt)$/i;

        
        if(filePath === '.txt'){
            alert('it is a text');
            return true;
          
        }

    }
    submit.onclick = fileCheck();
}

/**
 *    function fileValidation() {
            var fileInput =
                document.getElementById('file');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
                    /(\.jpg|\.jpeg|\.png|\.gif)$/i;
             
            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid file type');
                fileInput.value = '';
                return false;
            }
            else
            {
             
                // Image preview
                if (fileInput.files && fileInput.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById(
                            'imagePreview').innerHTML =
                            '<img src="' + e.target.result
                            + '"/>';
                    };
                     
                    reader.readAsDataURL(fileInput.files[0]);
                }
            }
        }
 */