function print5() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
}

function myClickFunctionOne() {
    var element = document.getElementById('text');
    element.firstChild.nodeValue = 'Eden Brawn';
}

function myClickFunctionTwo() {
    var pelement = document.getElementById('text2');
    pelement.firstChild.nodeValue = 'Student';
}

function myLoadFunction() {
    var element = document.getElementById('text');
    element.addEventListener('click', myClickFunctionOne); //Changes onclick instead of when page loads
    var pelement = document.getElementById('text2');
    pelement.addEventListener('click', myClickFunctionTwo); 
}

document.addEventListener('DOMContentLoaded', myLoadFunction); //DOMContentLoaded calls the function until the page has loaded