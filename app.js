var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-text");
console.log(inputTxt);

function clickHandler(){
    console.log("Clicked!");
    console.log("input", inputTxt.value);
}

btnTranslate.addEventListener("click", clickHandler);