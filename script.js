
Webcam.attach("#camara");
div=document.getElementById("camara");
Webcam.set({
    width:350,
    heigth:300,
    image_format:"png",
    png_quality:90
})
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+ data_uri +"' id='foto'>"
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bpGi4jjN1/model.json",consola);
function consola(){
    console.log("modelo cargado");
}
function check(){
    foto=document.getElementById("foto");
    classifier.classify(foto,got_result);
}
function got_result(error,results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}