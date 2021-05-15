var input = document.querySelector("#input");
var output = document.querySelector("#output");
var transbtn = document.querySelector("#transbtn");
var url = "	https://api.funtranslations.com/translate/groot.json?text=";

function errorHandler() {
    alert("The server is not responding, kindly try again later!")
}

function printb() {
    var inputvalue = input.value;
    fetch(url+inputvalue)
    .then(response => response.json())
    .then(json => {
        var outputtext = json.contents.translated;
        output.innerText = outputtext;
    })
    .catch(errorHandler)
}

transbtn.addEventListener("click", printb);