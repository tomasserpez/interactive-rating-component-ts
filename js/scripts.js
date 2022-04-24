// submitButton.addEventListener("click", document.getElementById("first").style.display="show");

document.getElementById("uno").onclick = function(){
    document.getElementById("selection").innerHTML = "You selected 1 out of 5";
};
document.getElementById("dos").onclick = function(){
    document.getElementById("selection").innerHTML = "You selected 2 out of 5";
};
document.getElementById("tres").onclick = function(){
    document.getElementById("selection").innerHTML = "You selected 3 out of 5";
};
document.getElementById("cuatro").onclick = function(){
    document.getElementById("selection").innerHTML = "You selected 4 out of 5";
};
document.getElementById("cinco").onclick = function(){
    document.getElementById("selection").innerHTML = "You selected 5 out of 5";
};

document.getElementById("submitButton").onclick = function()
{
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
};

// document.getElementById(".second").style.display = "show"

// document.getElementById(".first").style.display = "none"