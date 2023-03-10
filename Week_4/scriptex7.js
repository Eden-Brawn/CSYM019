function buttonClick(){
    var element = document.getElementById('text');
    var divElement = document.getElementById('new');
    divElement.firstChild.nodeValue = element.value;
}
function myLoadFunction(){
    var element = document.getElementById('button');
    element.addEventListener('click', buttonClick);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);