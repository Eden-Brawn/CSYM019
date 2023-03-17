function styleChange(){
    var element = document.getElementById('circle');
    //element.style.color = 'blue';//Alloes you to change CSS
    //element.style.width = '100%';
    //element.style.height = '50%';
    //element.style.fontFamily = 'Verdana, Helvetica, Sans-serif';
    //element.style.backgroundColor = 'blue';
    //element.style.color = 'white';
    //element.style.opacity = '1';
    var cirleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = cirleOpacity - 0.1;
}

function myLoadFunction(){
    var element = document.getElementById('circle');
    element.addEventListener('click', styleChange);
    element.style.opacity = '0.5';

    var opacityValue = element.style.opacity;
    console.log(opacityValue);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
