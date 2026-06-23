var verdadeiro = true;
var falso = false;

console.log(verdadeiro);
console.log(typeof verdadeiro);
console.log(falso);
console.log(typeof falso);

console.log(typeof true);
console.log(typeof false);

if(verdadeiro && falso){
    document.write("verdade");
}else if(verdadeiro && !falso){
    document.write("mentira? te digo verdade");
}else{
    document.write("mentira");
}