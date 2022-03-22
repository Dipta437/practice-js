var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-text");
var outputTxt = document.querySelector("#output-text");

function clickHandler(){
    outputTxt.innerText = inputTxt.value + " awesome"
}

btnTranslate.addEventListener("click", clickHandler);