const objs = [
    {
        "nome": "Gabriel",
        "idade": 18,
        "esta_estudando": true,
        "detalhes_estudo": {
            "estudo": "JavaScript"
        },
        "hobbies": ["programar", "jogar"]
    },
    {
       "nome": "João",
        "idade": 19,
        "esta_estudando": false,
        "detalhes_estudo": {
            "estudo": "Python"
        },
        "hobbies": ["academia", "jogar"] 
    }
]

// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})