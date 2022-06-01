'use strict';


let scoreButton = document.getElementsByClassName("scoreButton");
for(let i = 0; i < 5; i++){
    document.getElementById(`${i}`).onclick = function(){
        document.getElementById("selection").innerHTML = "You selected " + scoreButton[i].innerHTML + " out of 5";
    };
};


document.getElementById("submitButton").onclick = function()
{
    if (document.getElementById("selection").innerHTML == "You selected  out of 5")
    {
        alert("Please, pick a score before submitting.")
    }else{
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
    }
};

// document.getElementById(".second").style.display = "show"

// document.getElementById(".first").style.display = "none"