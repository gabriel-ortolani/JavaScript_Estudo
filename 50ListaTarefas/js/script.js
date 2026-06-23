var btn = document.querySelector("#btn");

// função de adicionar tarefa
function adicionarTarefa(){

    var tarefa = document.querySelector(".tarefa").value;
    if(tarefa){

        // clona template
        var template = document.querySelector(".template");

        var novaTarefa = template.cloneNode(true);

        // adicionar titulo
        novaTarefa.querySelector(".tarefa").textContent = tarefa;

        // remover as classes desnecessárias
        novaTarefa.classList.remove("template");
        novaTarefa.classList.remove("hide");

        // adicionar tarefa na lista
        var lista = document.querySelector("#lista");

        lista.appendChild(novaTarefa);

        // adicionar evento de remover
        var removeBtn = novaTarefa.querySelector(".delete-btn").addEventListener("click", function(){
            removerTarefa(this);
        })

        // adicionar evento de check
        var checkBtn = novaTarefa.querySelector(".check-btn").addEventListener("click", function(){
            checkTarefa(this);
        })

        // limpar texto
        document.querySelector(".tarefa").value = "";
    }

}

// função de remover tarefa
function removerTarefa(tarefa){
    tarefa.parentNode.remove(true);
}

// função de check
function checkTarefa(tarefa){
    var tarefaCheck = tarefa.parentNode;

    tarefaCheck.classList.toggle("check")
}


// evento de adicionar tarefa
btn.addEventListener("click", function(e){
    
    e.preventDefault();

    adicionarTarefa();
})