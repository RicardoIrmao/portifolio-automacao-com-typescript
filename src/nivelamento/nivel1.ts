// formas de tipar
// forma 1
let idade : number;
const nome = "Seu Zezo";
// forma 2 nao usual
const sobrenome : string = "Seu Zezo";
// tipagem especial
type usuario = {'nick':string, 'age':number }

let jogador:usuario = {nick: 'Ricardo', age:18};

let jogadorVelho:usuario = {nick:'Toin', age:76};

function verificarIdade (usuarioAtual: usuario){
    if (usuarioAtual.age>=21) {
        console.log(`Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos...`);
} else {
    console.log(`EI, ${usuarioAtual.nick}, Você é de menor e pode dá pei pei. Você não tem nem ${usuarioAtual.age} anos. É um bebe`);

    }

}
verificarIdade(jogador);
verificarIdade(jogadorVelho);
