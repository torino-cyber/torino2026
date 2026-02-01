let carrinho = [];
let total = 0;
let tipoAtacado = "";

function selecionarAtacado(tipo) {
  tipoAtacado = tipo;
  document.getElementById("tipoAtacado").style.display = "none";
  document.body.classList.add(tipo === "grade" ? "modo-grade" : "modo-caixa");
}

function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  renderCarrinho();
}

function renderCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent =
    "Total: R$ " + total.toFixed(2);
}

function abrirCheckout() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio");
    return;
  }
  document.getElementById("checkout").classList.remove("hidden");
}

function finalizarPedido() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const envio = document.getElementById("envio").value;

  if (!nome || !email || !envio) {
    alert("Preencha todos os campos");
    return;
  }

  let msg =
`Pedido Atacado Torino
Cliente: ${nome}
Email: ${email}
Tipo de envio: ${envio}
Atacado: ${tipoAtacado}

Itens:
`;

  carrinho.forEach(item => {
    msg += `- ${item.nome} | R$ ${item.preco.toFixed(2)}\n`;
  });

  msg += `\nTotal: R$ ${total.toFixed(2)}`;

  window.open(
    `https://wa.me/5511939586226?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
