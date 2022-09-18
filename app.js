var date =document.querySelector("#date");
var number = document.querySelector("#number");
var btnCheck = document.querySelector("#btn-check");

function clickHandler(){
    console.log("clicked");
}

btnCheck.addEventListener("click",clickHandler);