// keydown
document.addEventListener("keydown", function(event){

    if(event.key === " "){
        console.log("apertou o Enter");
    }

})

// keyup
document.addEventListener("keyup", function(e){

    if(event.key === " "){
        console.log("Soltou o Enter")
    }

})