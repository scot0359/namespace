/********************************
Filename: namespace.js
Author: @scot0359
Description: namespace excercise
Date: oct 24 2018
*********************************/

var SCOT0359 = {

    init: function () {

        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "scot0359";

        document.getElementById("boxes").appendChild("div");

        div.addEventListener("click", clickIt);
        div.addEventListener("mouseover", mouseOver);
        div.addEventListener("mouseout", mouseOut);
        
        
    }
    
    

};

function clickIt() {
    this.style.borderColor("blue");
    this.style.backgroundColor("lightblue");
}

function mouseOver() {
    this.target.classList.toggle("highlight");
}

function mouseOut() {
    this.target.classList.toggle("highlight");
    this.target.removeAttribute("style");
}


