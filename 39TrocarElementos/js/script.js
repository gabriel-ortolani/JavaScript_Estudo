// criar um elemento
var el = document.createElement("h3");
el.classList = "testando-classe";

el.appendChild(document.createTextNode("Este é o texto"));

console.log(el);

// selecionar o elemento que quer trocar
var title = document.querySelector("#title");

// selecionar o pai do elemento
var pai = title.parentNode;

// trocar os elementos

pai.replaceChild(el, title);