// variável local
var teste = 1;

// variável global | ATENÇÃO! ela pode sobrescrever outras variáveis globais, usar com cautela
nome = 'joão'

teste = 'Gabriel'

// esses são os unicos caracteres especiais que funcionam nas variáveis no js
var $nome = 'ASD';
var _nome = 'ASD2';

console.log(teste);
console.log(nome);
console.log($nome);
console.log(_nome);

// outros tipos de variável
let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);