var date =document.querySelector("#date");
var number = document.querySelector("#number");
var btnCheck = document.querySelector("#btn-check");
var privacy = document.querySelector("#privacy");
var btnprivacy= document.querySelector("#btn-privacy");
var output = document.querySelector("#output");

function clickHandler(){
    inputDate = date.value;
    newInputDate = inputDate.replaceAll("-","0");
    var sum = 0;
    for (var num of newInputDate) {
        sum = sum + Number(num);
    }
    return sum;
  }
  function findBithdateIsLucky() {

    if (date.value && number.value > 0) {
        var sum = clickHandler(date.value);

        if (sum % number.value == 0) {
            output.innerText= "YAY! Your birthday is lucky!! 😍";
        } else {
            output.innerText = "Oops!! Your birthday is not that lucky!! 😔";
        }
    }
    else{
        output.innerText = "Please enter valid values";
    }

}

btnprivacy.addEventListener("click", () => {
    privacy.style.display = "none";
});
btnCheck.addEventListener("click",findBithdateIsLucky);
