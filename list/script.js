// Array que armazena os itens
let listaCompras = [];

// Função para atualizar a lista na tela
function atualizarLista() {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";

    for (let i = 0; i < listaCompras.length; i++) {
        let li = document.createElement("li");
        li.textContent = i + " - " + listaCompras[i];
        ul.appendChild(li);
    }
}

// Função para adicionar item
function adicionarItem() {
    let item = document.getElementById("item").value.trim();

    if (item === "") {
        alert("Digite um item!");
        return;
    }

    listaCompras.push(item);
    atualizarLista();
    document.getElementById("item").value = "";
}

// Função para remover item pelo nome
function removerItem() {
    let item = document.getElementById("item").value.trim();
    let posicao = listaCompras.indexOf(item);

    if (posicao === -1) {
        alert("Item não encontrado!");
    } else {
        listaCompras.splice(posicao, 1);
        atualizarLista();
        alert("Item removido com sucesso!");
    }

    document.getElementById("item").value = "";
}

// Função para pesquisar pelo nome
function pesquisarNome() {
    let item = document.getElementById("item").value.trim();
    let posicao = listaCompras.indexOf(item);

    if (posicao === -1) {
        document.getElementById("resultado").innerText = "Item não encontrado!";
    } else {
        document.getElementById("resultado").innerText =
            "Item encontrado na posição: " + posicao;
    }
}

// Função para pesquisar pela posição
function pesquisarPosicao() {
    let pos = prompt("Digite a posição que deseja pesquisar:");

    if (pos === null) return;

    pos = Number(pos);

    if (isNaN(pos) || pos < 0 || pos >= listaCompras.length) {
        document.getElementById("resultado").innerText = "Posição inválida!";
    } else {
        document.getElementById("resultado").innerText =
            "Item na posição " + pos + ": " + listaCompras[pos];
    }
}