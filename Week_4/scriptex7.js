function buttonClick(){
    var element = document.getElementById('text');
    window.alert(element.value);
}
function myLoadFunction(){
    var element = document.getElementById('button');
    element.addEventListener('click', buttonClick);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);