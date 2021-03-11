Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:100,
    constraints:{facingMode:"environment"}
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img  id="img_captured" src="'+data_uri+'">';
    });
    }
    console.log("ml5_version",ml5.version);
    classifier=ml5.imageClassifier('MobileNet',modelLoaded);

    function modelLoaded(){
        console.log("model is loaded");
    }

    function check_image(){
        img=document.getElementById("img_captured");
        classifier.classify(img,gotResult);
    }

    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("object_name").innerHTML=results[0].label;
        }
    }

