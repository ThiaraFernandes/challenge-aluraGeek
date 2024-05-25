async function listaProdutos() {
    try {
        const conexao = await fetch("http://localhost:3000/produtos");
        if (!conexao.ok) {
            throw new Error(`HTTP error! status: ${conexao.status}`);
        }
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
    }
}

async function criarProduto(nome, imagem, preco) {
    try {
        const conexao = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                imagem: imagem,
                preco: preco,
                status: true
            })
        });
        if (!conexao.ok) {
            throw new Error(`HTTP error! status: ${conexao.status}`);
        }

        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;

    } catch (error) {
        console.error('Erro ao criar produto:', error);
    }
}

async function excluirProduto(id) {
    try {
        const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "DELETE"
        });
        if (!conexao.ok) {
            throw new Error(`HTTP error! status: ${conexao.status}`);
        }
        console.log(`Produto com ID ${id} excluído com sucesso.`);
    } catch (error) {
        console.error(`Erro ao excluir produto com ID ${id}:`, error);
    }
}

export const conectaApi = {
    listaProdutos,
    criarProduto,
    excluirProduto
};
