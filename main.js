function startClassification () {
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier= ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/FMZ-0qGZX/model.json',{probabilityThreshold: 0.7}, modelReady);
}
 
function modelReady ()
{
    classifier.classify(gotResults);
}

var dog=0;
var cat=0;
var horse=0;
var lion=0;

function gotResults (error,results)
{
    if (error){
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}