function boton() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NxI4xmcsq/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error,igual) {
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;
    document.getElementById("sescucho").innerHTML = "Se escucha" + igual[0].label;
    document.getElementById("omun").innerHTML = "La seguridad es de" + (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("sescucho").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("omun").style.color = "rgb("+r+","+g+","+b+")";
}