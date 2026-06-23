var podeBeber;
var idade = null;
var frase;

console.log(podeBeber);
console.log(typeof podeBeber);
console.log(idade);
console.log(typeof idade);

idade = 18;

if(idade >= 18){
    podeBeber = true;
}else{
    podeBeber = false;
}

console.log(idade);
if(podeBeber){
    frase = "Pode beber, pois você é maior de idade";
}else{
    frase = "Não pode beber, pois você é menos de idade";
}
console.log(frase);