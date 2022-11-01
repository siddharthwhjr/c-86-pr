var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
    image_object = Img;

    image_object.scaleToWidth(700);
    image_object.scaleToHeight(510);
    image_object.set({
        top:0, 
        left:0
    })
    canvas.add(image_object);
    })
	
}

function playSound(){
	x.play();
}
