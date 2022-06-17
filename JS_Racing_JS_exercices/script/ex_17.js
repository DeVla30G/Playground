function combineImages () {
    var images = [
    'https://images.freeimages.com/images/premium/small-comps/6142/6142484-sunset-over-mosque-in-morocco.jpg',
    'https://images.freeimages.com/images/premium/small-comps/6317/6317524-crane-against-a-stormy-sky-in-seville.jpg',
    'https://images.freeimages.com/images/premium/small-comps/3178/317869-rainy-day-on-the-deck.jpg',
    'https://images.freeimages.com/images/premium/small-comps/1172/11728265-the-beaches-and-coves-of-southern-california.jpg',
    'https://images.freeimages.com/images/premium/small-comps/3942/3942083-sand-dunes-landscape.jpg',
    'https://images.freeimages.com/images/premium/small-comps/6986/6986664-lightning-over-the-ocean.jpg'
]

}


    var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
        
    var canvas = document.createElement("canvas");
    context = canvas.getContext('2d');
    box.appendChild(canvas);
    canvas.style.height = "600px"
    canvas.style.width = "600px"
    canvas.style.background = "white"

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

images.forEach(function(url, index, originalArray){
var img = document.createElement('img');
img.src = url;
canvas.appendChild(img)
})




/**
 * 

var loadImage = new Image();
loadImage.onload = combineImages();

var image = div;
var downloadingImage = new Image();
downloadingImage.onload = function(){
    image.src = this.src;   
};
downloadingImage.src = "http://an.image/to/aynchrounously/download.jpg";


function nextImage(canvas)
{
    var img = canvas;

    for(var i = 0; i < images.length;i++)
    {
        if(images[i].src == img.src) // << check this
        {
            if(i === images.length){
                canvas.src = images[0].src;
                break;
            }
            canvas.src = images[i+1].src;
            break;
        }
    }
} */