/********************************
Filename: namespace.js
Author: @scot0359
Description: namespace excercise
Date: oct 24 2018
*********************************/

var SCOT0359 = {

    init: function () {

        let div = document.createElement("box");
        div.className("box");
        div.textContent("scot0359");

        let boxes = document.getElementById("box");
        boxes.appendChild("div");

        div.addEventListener("click", clickIt);
        div.addEventListener("mouseover", mouseOver);
        div.addEventListener("mouseout", mouseOut);
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
