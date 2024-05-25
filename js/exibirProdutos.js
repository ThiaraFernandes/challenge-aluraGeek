import { conectaApi } from "./conectaApi.js";
// import { deletarProduto } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function mostrarCard(id, nome, preco, imagem) {
  const produtos = document.createElement("li");
  produtos.className = "card";
  produtos.innerHTML = `
    <div>
      <img src="${imagem}" alt="${nome}" width="176" height="176">
      <h2>${nome}</h2>
      <p>R$ ${preco}</p>
      <img class="delete-icone" src="imagens/Vector-delete.png" alt="Ícone do delete" data-id="${id}">
    </div>`;

    // Adiciona o evento de clique ao ícone de delete
    const deleteIcone = produtos.querySelector(".delete-icone");
    deleteIcone.addEventListener("click", async () => {
      await conectaApi.excluirProduto(id);
      produtos.remove(); // Remove o elemento da lista
    });
    
  return produtos;
}

async function listaProdutos() {
  const listaApi = await conectaApi.listaProdutos();
  listaApi.forEach((elemento) =>
    lista.appendChild(
      mostrarCard(elemento.id, elemento.nome, elemento.preco, elemento.imagem)
    )
  );
}

// async function deletarProduto(id) {
//   try {
//     await conectaApi.deletarProduto(id);
//     alert(`Produto com ID ${id} excluído com sucesso.`);
//   } catch (error) {
//     console.error(`Erro ao excluir produto com ID ${id}:`, error);
//   }
// }

// listaProdutos();
document.addEventListener("DOMContentLoaded", listaProdutos); // Garante que os produtos serão carregados quando a página for carregada