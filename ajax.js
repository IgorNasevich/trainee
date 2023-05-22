document.forms.ajaxForm.onsubmit = function(e){
    e.preventDefault();

let userInput = document.forms.ajaxForm.ajaxForm__inp.value;
userInput = encodeURIComponent(userInput);

const request = new XMLHttpRequest();

// request.open('GET', "server.js?" + "ajaxForm__inp=" + userInput);
request.open('GET', "form.php");
request.setRequestHeader('Content-Type', 'application/x-www-form-url');

request.addEventListener("readystatechange", () => {

	if (request.readyState === 4 && request.status === 200) {
        let elements = document.querySelectorAll(".mark");
        for(let elem of elements){
            elem.classList.remove("disappear")
        }
      // выводим в консоль то что ответил сервер
	  console.log( 10 );
    }
});

request.send("ajaxForm__inp=" + userInput);
};

// buttons click
function closeWindow (){
    let elements = document.querySelectorAll(".mark");
    for(let elem of elements){
        elem.classList.add("disappear")
    }
}

let crossButton = document.querySelector(".cross");
crossButton.addEventListener('click', closeWindow);

let closeButton = document.querySelector(".button_note");
crossButton.addEventListener('click', closeWindow);