function styleChange(){
    var element = document.getElementById('button');
    //element.style.color = 'blue';//Alloes you to change CSS
    //element.style.width = '100%';
    //element.style.height = '50%';
    //element.style.fontFamily = 'Verdana, Helvetica, Sans-serif';
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
}

function myLoadFunction(){
    var element = document.getElementById('button');
    element.addEventListener('click', styleChange);
    element.style.opacity = '0.5';
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
