/********************************
Filename: namespace.js
Author: @scot0359
Description: namespace excercise
Date: oct 24 2018
*********************************/

var SCOT0359 = {

    init: function () {

        let myDiv = document.createElement("div");
        myDiv.className("box");
        myDiv.textContent("scot0359");

        let boxes = document.getElementById("boxes");
        boxes.appendChild("div");

        myDiv.addEventListener("click", clickIt);
        myDiv.addEventListener("mouseover", mouseOver);
        myDiv.addEventListener("mouseout", mouseOut);
    }

}

function clickIt(e) {
    e.style.borderColor("blue");
    e.style.backgroundColor("lightblue");
}

function mouseOver(e) {
    e.target.classList.toggle("highlight");
}

function mouseOut(e) {
    e.target.classList.toggle("highlight");
    e.target.removeAttribute("style");
}
