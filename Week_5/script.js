function styleChange(){
    var element = document.getElementById('circle');
    //element.style.color = 'blue';//Alloes you to change CSS
    //element.style.width = '100%';
    //element.style.height = '50%';
    //element.style.fontFamily = 'Verdana, Helvetica, Sans-serif';
    //element.style.backgroundColor = 'blue';
    //element.style.color = 'white';
    //element.style.opacity = '1';
    //var cirleOpacity = parseFloat(element.style.opacity); //decreases opacity
    //element.style.opacity = cirleOpacity - 0.1;
   
    var positionLeft = element.offsetLeft; 
    element.style.left = positionLeft - 10 + 'px';
}

//function timer(){
//    setInterval( styleChange, 1000); //Calls stylechange every 1 second
//}


function myLoadFunction(){
    var element = document.getElementById('circle');
    //document.addEventListener('keydown', styleChange);//calls style change when any key is pressed
    element.style.opacity = '1';

    var opacityValue = element.style.opacity;
    console.log(opacityValue);

    //var element = document.getElementById('circle');
    //var positionTop = element.offsetTop; //Gets the distance form the top of the screen to the element in pixels
    //var positionLeft = element.offsetLeft; //Gets the distance form the left of the screen to the element in pixels
    //console.log(positionTop);
    //console.log(positionLeft);
}

function myKeyDown(event){
    console.log(event.keyCode);//logs the value of the key pressed to the console
}
document.addEventListener('keydown', myKeyDown);
document.addEventListener('DOMContentLoaded', myLoadFunction);
