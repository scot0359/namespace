/********************************
Filename: namespace.js
Author: @scot0359
Description: namespace excercise
Date: oct 24 2018
*********************************/

var SCOT0359 = {

    init: function () {

        let div = document.createElement("div");
        div.className = "box";
        div.textContent = "scot0359";

        let boxes = document.getElementById("boxes");
        boxes.appendChild(div);

        div.addEventListener("click", function () {

            div.style.borderColor = "blue";
            div.style.backgroundColor = "red";

        });

        div.addEventListener("mouseover", function () {

            div.classList.toggle("highlight");

        });
        div.addEventListener("mouseout", function () {

            div.classList.toggle("highlight");
            div.removeAttribute("style");

        });

    }
}
