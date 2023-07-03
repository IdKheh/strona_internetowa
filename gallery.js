var number=0;
var amountOfPhotos=7;
var timer1=0;
var timer2=0;
function hidePhoto(){
    var element = "dot" + number;
    if(document.getElementById(element) != null){
        document.getElementById(element).style.background = "white";
        document.getElementById(element).style.border = "2px #666 solid";
    }
    $("#gallery").fadeOut(500);
}
function start(){
    var cyrcle ="";
    for(i=1;i<=amountOfPhotos;i++){
        cyrcle= cyrcle + '<div class="dots" onclick="clickPhoto('+i+')" id="dot'+i+'"></div>';		

    }
    var costam = document.getElementById("dot").innerHTML=cyrcle;
    changePhoto();
}
function changePhoto(){
    number++;
    if(number>amountOfPhotos) number=1;

    var photo="<img src=\"gallery/photo"+number+".png\" style=\"height:90vh; width:80%;margin-left:10%;\"/>";
    var field = document.getElementById("gallery").innerHTML=photo;
    $("#gallery").fadeIn(500);

    var element = "dot" + number;
	document.getElementById(element).style.background = "goldenrod";
    document.getElementById(element).style.border = "2px white solid";

    timer1=setTimeout("changePhoto()",5000);
    timer2=setTimeout("hidePhoto()",4500);
}

function clickPhoto(clicked){
    clearTimeout(timer1);
    clearTimeout(timer2);
    var element = "dot" + number;
    if(document.getElementById(element) != null){
        document.getElementById(element).style.background = "white";
        document.getElementById(element).style.border = "2px #666 solid";
    }
    number=clicked-1;
    hidePhoto();
    setTimeout("changePhoto()", 500);
}
