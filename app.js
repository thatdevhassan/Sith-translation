// connecting

var intext = document.querySelector(".in-textarea");
var btn = document.querySelector(".in-button");
var outtext = document.querySelector(".out-textarea");


var serverUrl = 'https://api.funtranslations.com/translate/sith.json?text='

// error handling function
function errorHandler(error){
    console.log("There is a problem", error)
    alert("Something Bad Happened😥😥 TRY AGAIN!")

}


// if there is a click event, this function will execute
function afterClick(){
    var readyURL = serverUrl + intext.value;
    // console.log(readyURL);

    fetch(readyURL).then(response=> response.json()).then(json=>{
        var outTranslation = json.contents.translated;
        outtext.innerHTML = outTranslation;
}).catch(errorHandler)


    // fetching URL.

}


// listening to events
btn.addEventListener("click", afterClick);

