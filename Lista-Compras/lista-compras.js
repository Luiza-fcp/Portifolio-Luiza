let compras = JSON.parse(localStorage.getItem("compras")) || [];

function mostrarInput() {
  const inputArea = document.getElementById("inputArea");
  inputArea.style.display = "block";
  document.getElementById("novoItem").focus();
}

function adicionarItem() {
  const input = document.getElementById("novoItem");
  const item = input.value.trim();
  if (item) {
    compras.push(item);
    localStorage.setItem("compras", JSON.stringify(compras));
    atualizarLista();
    input.value = ""; // limpa o campo
    input.focus();
  } else {
    alert("Digite algum item antes de adicionar!");
  }
}

function atualizarLista() {
  const lista = document.getElementById("listaCompras");
  lista.innerHTML = "";
  compras.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${item}`;
    lista.appendChild(li);
  });
}

function limparLista() {
  compras = [];
  localStorage.removeItem("compras");
  atualizarLista();
  // Esconder área de input quando limpar
  document.getElementById("inputArea").style.display = "none";
}

window.addEventListener("DOMContentLoaded", atualizarLista);
