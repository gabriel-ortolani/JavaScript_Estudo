var idade = 18;
var idadeMinima = 18;
var anos;

console.log("Antes do if");

if(idade >= idadeMinima){
    console.log("Pode fazer a carteira de habilitação");
}

if(idade < idadeMinima){
    anos = idadeMinima - idade
    console.log("precisa esperar " + anos + " anos ainda");
}

console.log("Depois do if");