import { conectaApi } from "./conectaApi.js";

//Função para construir o produto inserindo o nome, valor e imagem no formulário
const formulario = document.querySelector("[data-formulario]");

 async function criarProduto(evento) {
    evento.preventDefault();

const nome = document.getElementById("nome").value;
const valor = document.getElementById("valor").value;
 const imagem = document.getElementById("imagem").value;
  
// const nome = document.querySelector("[data-nome]").value;
// const imagem = document.querySelector("[data-imagem]").value;
// const preco = document.querySelector("[data-valor]").value;

await conectaApi.criarProduto(nome, imagem, valor);
alert('Produto guardado com sucesso!');

listaProdutos();
  
}
//inserindo um novo produto na lista
formulario.addEventListener("submit", evento => criarProduto(evento));

//Deletando o que foi digitado no formulario:

const inputNome = document.getElementById('nome');
const inputImagem = document.getElementById('imagem');
const inputValor = document.getElementById('valor');

// Função para limpar os campos
function limparFormulario(){
    inputNome.value = '';
    inputImagem.value = '';
    inputValor.value = '';
}
// Adicionando um evento de clique ao botão "Limpar"
const limpar = document.getElementById('limpar');
limpar.addEventListener('click', limparFormulario);