// storing URL to a variable
var serverURL = "https://api.funtranslations.com/translate/morse.json";

// initialising btn-translate
var btnTranslate = document.querySelector("#btn-translate");

// initialising inputText
var inputText = document.querySelector("#txtInput");

// initialising output div
var outputText = document.querySelector("#output");

//adding event to button on every click
btnTranslate.addEventListener("click", clickHandler);

//callback funtion for click
function clickHandler(){

    // fetching data from mock URL
    fetch(getTranslationUrl(inputText)).
    then(response => response.json())
    .then(json => {

        // storing output in a variable
        var translatedText = json.contents.translated;

        // outputing the translated text to div 
        outputText.innerText = translatedText;
    })
    .catch(errorHandler)  //handling exception
}

// wiring input text with mock URL
function getTranslationUrl(text){
    return serverURL+"?"+"text="+text;
}

// callback function for Exception Handling
function errorHandler(error){
    console.log("error occured ",error);
    alert("Something's wrong with the server. Please try in some Time.");
}
