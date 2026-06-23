// Inserir o elemento no body
var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do paragráfo");

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");

body.appendChild(novoParagrafo);

// inserino em um conteiner
var contant = document.querySelector("#content");

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

contant.appendChild(el);