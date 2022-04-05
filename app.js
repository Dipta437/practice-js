var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-text");
var outputTxt = document.querySelector("#output-text");
var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text= " + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with the server! Try again after some time")
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
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);