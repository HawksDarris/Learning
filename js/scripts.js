function otherFunction() {
    $("h2").attr("style","color:green");//.html("hello");
}


function mOver(obj) {
    obj.innerHTML = "See? It changed."
}

function mOut(obj) {
    obj.innerHTML = "Click on this text and it will change when you unclick."
}

var imgIndex = 0;

setTimeout(timedEvent, 1000); // 1000 is milliseconds
function timedEvent() {
    let image = document.getElementById("timedImage");
    let imgArray = ["Black-Logo-Hawks-Legal.png","drawing.jpg","drawing.png"];
    timedImage.setAttribute("src", imgArray[imgIndex]);
    if (imgIndex > 0) {
        timedImage.setAttribute("style", "background-color:black");
    }
    else {
        timedImage.setAttribute("style", "background-color:white");
    }
    imgIndex ++;

    if (imgIndex >= imgArray.length) {
        imgIndex = 0;
    }
    setTimeout(timedEvent, 1000);
}

function changeImage() {
let image = document.getElementById("myImage");
if (image.src.match("Black-Logo-Hawks-Legal.png")){
    image.src = "drawing.jpg"
}
else{
    image.src = "Black-Logo-Hawks-Legal.png"
}
}

/* document.addEventListener('click', myFunction, false); // Pretty much always "false". "false" is an optional parameter.

function myFunction() {
    alert("Click anywhere for this code to execute: document.addEventListener('click', myFunction, false);")
}

var myElement = document.getElementById('myElement')
myElement.onclick = function() {
    alert("Hello World!")
};
*/

//document.getElementById("myElement").addEventListener("mouseover",function() {alert("addEventListener('mouseover',function() {alert('This Message')})");});
//document.getElementById("myElement").addEventListener("click",function() {alert("document.getElementById('myElement').addEventListener('click',function() {alert('hello');});");});
