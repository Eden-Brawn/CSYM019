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

var internal = 0;
function myKeyDown(event){
    console.log(event.keyCode);//logs the value of the key pressed to the console
    if (event.keyCode == 37){//moves button left
        interval = setInterval(moveLeft, 10);//it times the function call
    }
    if (event.keyCode == 39){//moves button right
        interval = setInterval(moveRight, 10);
    }
    if (event.keyCode == 38){//moves button up
        interval = setInterval(moveUp, 10);
    }
    if (event.keyCode == 40){//moves button down
        interval = setInterval(moveDown, 10);
    }
}

function moveUp(){
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
}
function moveDown(){
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 1 + 'px';
}
function moveLeft(){
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
}
function moveRight(){
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
}

var myVariable = 0;//global variable

function myClickEvent(){//adds clicks and prints to console
    myVariable = myVariable + 1;
    console.log(myVariable);
}

function myLoadFunction(){
    var element = document.getElementById('circle');
    //document.addEventListener('keydown', styleChange);//calls style change when any key is pressed
    element.style.opacity = '1';

    var opacityValue = element.style.opacity;
    console.log(opacityValue);

    document.addEventListener('click', myClickEvent);

    //var element = document.getElementById('circle');
    //var positionTop = element.offsetTop; //Gets the distance form the top of the screen to the element in pixels
    //var positionLeft = element.offsetLeft; //Gets the distance form the left of the screen to the element in pixels
    //console.log(positionTop);
    //console.log(positionLeft);
}
document.addEventListener('keydown', myKeyDown);
document.addEventListener('DOMContentLoaded', myLoadFunction);

