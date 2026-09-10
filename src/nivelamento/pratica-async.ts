// Importar nossa função utilitária de aguardar tempo (delay)
import { aguardar } from "../../utils/helpers";

// SIMULANDO UMA API DE LOGIN

function simularLogin(usuario: string, senha: string): Promise<string> {
    return new Promise((resolve, reject) => {
        if (usuario === "admin" && senha === "123456") {
            resolve("token-secreto-aprovado-123");
        } else {
            reject("ERRO 401 - USUÁRIO OU SENHA INVÁLIDOS!");
        }
    });
}

// Função principal testando com async/await

async function executarCT() {
    console.log("INICIANDO CENÁRIO DE TESTE");

    try {
        console.log("Passo 1: abrindo tela de login...");
        await aguardar(2000);

        console.log("Passo 2: inserindo credenciais...");
        await aguardar(3000);

        const token = await simularLogin("admin", "123456");

        console.log("Login realizado com sucesso!");
        console.log(`Token recebido: ${token}`);
    } catch (erro) {
        console.error(`Falha no login: ${erro}`);
    }finally{
        console.log('passo final: Fechando navegador e limpando dados.');
    }
}

// Executar o teste
executarCT();
