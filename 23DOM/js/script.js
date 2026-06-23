var lista = ["Laranja", "Maçã", "Pera", "Jaca", "Limão"];

var listaul = document.createElement('ul');

var body = document.getElementsByTagName('body');

// console.log(body[0]);

body[0].appendChild(listaul);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}