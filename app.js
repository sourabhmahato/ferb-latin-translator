var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn-translate");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong with server.")
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)