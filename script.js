const whatsappNumero = "11939586226";

let tipoAtacado = "";
let carrinho = [];

const products = [
  {
    id: 1,
    nome: "Camiseta Masculina Dry Fit",
    categoria: "Masculino",
    estacao: "Primavera/Verão",
    subcategoria: "Camisetas",
    tipoVenda: "grade",
    quantidadeMinima: 24,
    preco: 28
  },
  {
    id: 2,
    nome: "Shorts Masculino Tactel",
    categoria: "Masculino",
    estacao: "Primavera/Verão",
    subcategoria: "Shorts",
    tipoVenda: "caixa",
    quantidadeMinima: 200,
    preco: 38
  },
  {
    id: 3,
    nome: "Jaqueta Puffer Feminina",
    categoria: "Feminino",
    estacao: "Outono/Inverno",
    subcategoria: "Puffers",
    tipoVenda: "grade",
    quantidadeMinima: 24,
    preco: 110
  }
const products = [
  {
    id: 4,
    nome: "Moleton Masculino",
    categoria: "Masculino",
   estacao: "Outono/Inverno",
    subcategoria: "Moleton",
    tipoVenda: "grade",
    quantidadeMinima: 24,
    preco: 85
  },
  {
    id: 5,
    nome: "Jaqueta de Couro",
    categoria: "Masculino",
    estacao: "Outono/Inverno",
    subcategoria: "Jaquetas de Couro",
    tipoVenda: "caixa",
    quantidadeMinima: 200,
    preco: 79
  },
  {
    id: 6,
    nome: "Jaqueta Puffer Feminina",
    categoria: "Feminino",
    estacao: "Outono/Inverno",
    subcategoria: "Puffers",
    tipoVenda: "grade",
    quantidadeMinima: 24,
    preco: 1800
  }
];
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
