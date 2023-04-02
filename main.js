Webcam.set({
    width:350 ,
    height:350 ,
    image_format: 'png' ,
    png_quality: 90 
});

camera = document.getElementById("camera")
Webcam.attach("camera")

function Take_Snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>'; 
    });
}

console.log("ml5_version",ml5.version);
classifier = ml5.imgClassifier("https://teachablemachine.withgoogle.com/models/RO--HKukJ/model.json",modelLoaded)