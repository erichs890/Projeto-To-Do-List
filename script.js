const botaoAdd = document.querySelector("#addButton")
const divTarefas = document.querySelector('#tarefas')
botaoAdd.addEventListener('click',()=>{
    const tarefas = document.querySelector("#addInput").value
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    const li = document.createElement('li')
    li.textContent = tarefas
    
    checkbox.addEventListener('change', ()=>{
        if(checkbox.checked){
            li.style.textDecoration = "line-through"
            li.style.color = "grey"
        }else{
            li.style.textDecoration = "none"
            li.style.color = "black"

        }
    })

    const botaoRemover = document.createElement('button')
    botaoRemover.textContent="Remover tarefa"
    botaoRemover.addEventListener('click', ()=>{
        divTarefas.removeChild(li)
        alert("Tarefa removida com sucesso!")
    })
    li.appendChild(checkbox)
    li.appendChild(botaoRemover)
    divTarefas.appendChild(li)

    alert("Tarefa adicionada com sucesso!")
    document.querySelector("#addInput").value = "";
})
