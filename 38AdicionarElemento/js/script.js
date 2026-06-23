// criar elemento
var el = document.createElement("div");

el.classList = "div-criada";

var content = document.querySelector("#content")

// inserindo elemento filho
content.appendChild(el);

// inserBefore - insire antes

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#content .div-criada");

content.insertBefore(el2, el3);