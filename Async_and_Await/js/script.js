// sintaxe
function primeiraFuncao(){

    return new Promise((resolve) =>{
        
        setTimeout(() => {
            console.log("esperou isso aqui!");
            resolve();
        }, 1000)
    })

}

async function segundaFuncao() {
    console.log("iniciou");

    await primeiraFuncao()

    console.log("Terminou")
}

// segundaFuncao()

// prático
function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json());
}

async function showUserName(id) {
    try{
        const user = await getUser(id);

        console.log(`O nome do usuário é: ${user.name}`);
    } catch(err){
        console.log(`Erro: ${err}`)
    }

}

showUserName(1);