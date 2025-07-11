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

    compras.push({ texto: item, feito: false });
    localStorage.setItem("compras", JSON.stringify(compras));
    atualizarLista();
    input.value = ""; // limpa o campo
    input.focus();
  } else {
    alert("Digite algum item antes de adicionar!");
  }
}

function atualizarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  compras.forEach((item, i) => {
    const li = document.createElement("li");

    //checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.feito; //marca o checkbox se item.feito = true
    checkbox.classList.add("checkboxCustom"); //personalizacao

    //salva o estado quando marcado/desmarcado
    checkbox.addEventListener("change", () => {
      compras[i].feito = checkbox.checked;
      localStorage.setItem("compras", JSON.stringify(compras));
      
      //adiciona/Remove o risco no texto
      label.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    //cria o label com o nome do item
    const label = document.createElement("label");
    label.textContent = item.texto;
    label.style.marginLeft = "10px";

    //se estiver marcado adiciona o risco
    if (item.feito) label.style.textDecoration = "line-through";

    //adiciona o checkbox e o texto no <li>
    li.appendChild(checkbox);
    li.appendChild(label);
    lista.appendChild(li);
  });
}

function limparLista() {
  compras = [];
  localStorage.removeItem("compras");
  atualizarLista();
  document.getElementById("inputArea").style.display = "none";
}

/* deixa a lista aberta/fechada ao sair
window.addEventListener("DOMContentLoaded", atualizarLista);  */