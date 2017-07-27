var button = document.getElementsByTagName("button");
var body = document.getElementsByTagName("body");

button[0].addEventListener("click", function () {
    if(body[0].getAttribute("style") != "background: purple") {
        body[0].setAttribute("style", "background: purple");
    }
    else {
        body[0].setAttribute("style", "background: white");
    }});

