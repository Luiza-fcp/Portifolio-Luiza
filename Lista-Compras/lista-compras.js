let compras = JSON.parse(localStorage.getItem("compras")) || [];

function comprar() {
  let continuar = true;
  while (continuar) {
    let item = prompt("Digite um item:");
    if (item && item.trim() !== "") {
      compras.push(item.trim());
    }
    let resposta = prompt("Adicionar outro item? (s/n)");
    if (!resposta || resposta.toLowerCase() !== "s") continuar = false;
  }
  localStorage.setItem("compras", JSON.stringify(compras));
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
}

window.addEventListener("DOMContentLoaded", atualizarLista);