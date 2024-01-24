

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
        })
        classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-cViUA7kd/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResult)
}

var Meowing=0
var Barking=0
var Roaring=0
var Mooing=0
var Background_Noise=0


function gotResult(error, results){
    if (error){
        console.error(error);      
    } else{
        console.log(results)

        if(results[0].label=="Background Noise"){
            Background_Noise=Background_Noise + 1
            document.getElementById("cat").src="people.jpg"
        }
        else if(results[0].label=="Barking"){
            Barking=Barking + 1
            document.getElementById("cat").src="dog-png-30.png"
        }
        else if(results[0].label=="Roaring"){
            Roaring=Roaring + 1
            document.getElementById("cat").src="lion-29.png"
        }
        else if(results[0].label=="Mooing"){
            Mooing=Mooing + 1
            document.getElementById("cat").src="cow.png"
        }
        else if(results[0].label=="Meowing"){
            Meowing=Meowing + 1
            document.getElementById("cat").src="cat-png-1.png"
        }
        
        document.getElementById("result_label").innerHTML="detected voice is of " + results[0].label
        document.getElementById("result_confidence").innerHTML="detected dog " + Barking + ", detected cat " + Meowing + ", detected lion " + Roaring + ", detected cow " + Mooing + ", detected background noise " + Background_Noise
        
    }
}















