

var addBtn = function(){
    var btn=document.createElement("button");
    btn.innerHTML="NON CLICCARE";
    document.getElementById("body1").append(btn);
    btn.addEventListener("click", changeColor);
}

var changeColor = function(){
    console.log("BUONGIORNISSIMO");
    document
    .getElementById("div1")
    .setAttribute("style", "background-color: blue");
    document.getElementById("span1").innerHTML="CUCU";
    document.getElementById("div1").innerHTML="<h1>TI AVEVO DETTO DI NON PREMERE!!!!</h1>";   
}
document.addEventListener("DOMContentLoaded", addBtn);


// var span1= document.getElementById("span1");
// console.log("document: ", document);
// console.log("span: ", span1);
// var testo= span1.innerHTML;
// console.log("testo: ", testo);
// document.getElementById("span1").innerHTML="CUCU";
// var button= document.getElementById("btn1");

