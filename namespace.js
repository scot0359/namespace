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

        div.addEventListener("click", function () {

            div.style.borderColor = "blue";
            div.style.backgroundColor = "red";

        });

        div.addEventListener("mouseover", function () {

            div.target.classList.toggle("highlight");

        });
        div.addEventListener("mouseout", function () {

            div.target.classList.toggle("highlight");
            div.target.removeAttribute("style");

        });

    }
};
