const cards = document.querySelectorAll('.memory-card');

let cartaVirada = false; /*indica se a primeira carta ja foi virada*/
let travarTabuleiro = false; /*evita que o jogador vire mais cartas enquanto duas estão sendo comparadas*/
let primeiraCarta, segundaCarta; /*armazena as cartas atualmente viradas*/

function virarCarta() { /*comeca a rodar quando uma carta é selecionada*/
  console.log('Carta virada:', this);
  if (travarTabuleiro || this === primeiraCarta) return;

  this.classList.add('flip');

  if (!cartaVirada) {
    cartaVirada = true;
    primeiraCarta = this;
    return;
  }

  segundaCarta = this;
  verificarPar();
}


function verificarPar() {
  console.log('Verificando par:', primeiraCarta.dataset.fruta, segundaCarta.dataset.fruta);
  const éPar = primeiraCarta.dataset.fruta === segundaCarta.dataset.fruta;

  éPar ? desativarCartas() : desvirarCartas();
}


function desativarCartas() {
  primeiraCarta.removeEventListener('click', virarCarta);
  segundaCarta.removeEventListener('click', virarCarta);
  resetarTabuleiro();
}

function desvirarCartas() {
  travarTabuleiro = true;

  setTimeout(() => {
    primeiraCarta.classList.remove('flip');
    segundaCarta.classList.remove('flip');
    resetarTabuleiro();
  }, 1000);
}

function resetarTabuleiro() {
  [cartaVirada, travarTabuleiro] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null];
}

// Embaralhar as cartas
(function embaralhar() {
  cards.forEach(card => {
    let posicaoAleatoria = Math.floor(Math.random() * 12);
    card.style.order = posicaoAleatoria;
  });
})();

// Adicionar evento de clique
cards.forEach(card => card.addEventListener('click', virarCarta));