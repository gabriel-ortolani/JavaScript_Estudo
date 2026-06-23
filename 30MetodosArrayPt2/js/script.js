// splice
var arr = [1,2,3,4,5];

//local onde vai mudar/deletar/adicionar
arr.splice(2,0, 2.5);

console.log(arr);

// No quarto algarismo, deleter um
arr.splice(4,1);

console.log(arr);

// indexOf

console.log(arr.indexOf(5));

// join
var arr2 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"];

// adiciona algo entre os componentes do arry
console.log(arr2.join(","));

// reserve
console.log(arr2.reverse());