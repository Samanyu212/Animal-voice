function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O-iKEbKdM/model.json',modelReady );
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
console.error(error);
}
else{
    console.log(results);
    document.getElementById("Heard").innerHTML="I CAN HEAR-"+results[0].label;
    document.getElementById("accuracy").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%"
img1=document.getElementById("Ear");

if(results[0].label=="barking"){
img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IhRAA3rF9UWh7nnCxvkeMeMZw2kbVXo2CP-r7WKg&s";

}
else if(results[0].label=="meow"){
    img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4Dwhy9VGLo5V4g5ODrnEC9AuoXFVlrpv6y2wBjv89Q&s";
   
    }
    else if(results[0].label=="chirping"){
        img1.src="https://clipart-library.com/img/1239162.jpg";
        
        }
        else{
            img1.src="https://i.pinimg.com/736x/f2/a1/a9/f2a1a9230e8a57ff1855ee44c436bca6.jpg"
        }
            
            r=Math.floor(Math.random()*255)+1;
            g=Math.floor(Math.random()*255)+1;
            b=Math.floor(Math.random()*255)+1;
            document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
            document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
}
}