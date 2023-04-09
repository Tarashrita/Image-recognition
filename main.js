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
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RO--HKukJ/model.json",modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function Check() {
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}