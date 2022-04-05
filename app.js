var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-text");
var outputTxt = document.querySelector("#output-text");
var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text= " + text
}


function clickHandler(){
    // Taking Input
    var textInput = inputTxt.value;

    // calling server for processing

    fetch(getTranslationURL(textInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputTxt.innerText = translatedText;
    })
}

btnTranslate.addEventListener("click", clickHandler);