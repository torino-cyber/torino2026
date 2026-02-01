const whatsappNumero = "11939586226";

let tipoAtacado = "";
let carrinho = [];

const produtos = [
  { id: 1, nome: "Camiseta Masculina", precoGrade: 480, precoCaixa: 3800, qtdCaixa: 200 },
  { id: 2, nome: "Jaqueta Puffer", precoGrade: 960, precoCaixa: 7200, qtdCaixa: 150 }
];

const listaProdutos = document.getElementById("produtos");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalEl = document.getElementById("total");

function setTipo(tipo) {
  tipoAtacado = tipo;
  renderProdutos();
}

function renderProdutos() {
  listaProdutos.innerHTML = "";
  produtos.forEach(p => {
    const preco = tipoAtacado === "grade" ? p.precoGrade : p.precoCaixa;
    listaProdutos.innerHTML += `
      <div class="produto">
        <h4>${p.nome}</h4>
        <p>Preço: R$ ${preco}</p>
        <button onclick="addCarrinho(${p.id})">Adicionar</button>
      </div>
    `;
  });
}

function addCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach(p => {
    const valor = tipoAtacado === "grade" ? p.precoGrade : p.precoCaixa;
    total += valor;
    listaCarrinho.innerHTML += `<li>${p.nome} - R$ ${valor}</li>`;
  });

  totalEl.textContent = total;
}

function abrirCheckout() {
  document.getElementById("checkout").classList.remove("hidden");
}

function enviarWhats() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const envio = document.getElementById("envio").value;

  let msg = `🧾 *PEDIDO ATACADO TORINO*%0A%0A`;
  msg += `👤 Nome: ${nome}%0A`;
  msg += `📧 Email: ${email}%0A`;
  msg += `🚚 Envio: ${envio}%0A%0A`;
  msg += `📦 Itens:%0A`;

  let total = 0;
  carrinho.forEach(p => {
    const valor = tipoAtacado === "grade" ? p.precoGrade : p.precoCaixa;
    total += valor;
    msg += `- ${p.nome} | R$ ${valor}%0A`;
  });

  msg += `%0A💰 *Total: R$ ${total}*`;

  window.open(`https://wa.me/55${whatsappNumero}?text=${msg}`, "_blank");
}
