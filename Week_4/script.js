function print5() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
}


function myLoadFunction() {
    var element = document.getElementById('text');
    element.firstChild.nodeValue = 'Eden Brawn';
    var pelement = document.getElementById('text2');
    pelement.firstChild.nodeValue = 'Student';
}

document.addEventListener('DOMContentLoaded', myLoadFunction); //DOMContentLoaded calls the function until the page has loaded

