var btn = document.querySelector('#btn');
var title = document.querySelector('#title');

console.log(btn);

btn.addEventListener("click", function(){
    console.log("clicou");

    console.log(this);

    this.style.color = "red";
})

// click alterando outros elementos
title.addEventListener("click", function(){

    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";
})

// double click
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){

    console.log("click duplo!");

})