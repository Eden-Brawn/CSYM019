function buttonClick(){
    var element = document.getElementById('text');
    var divElement = document.getElementById('new');
    divElement.firstChild.nodeValue = element.value;
}
function myLoadFunction(){
    var element = document.getElementById('text');
    element.addEventListener('keyup', buttonClick);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);