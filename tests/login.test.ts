import { test, expect, vi } from 'vitest';

// Simulando login lento
function loginLento(usuario: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`BEM-VINDO, ${usuario}!`);
        }, 5000);
    });
}

test('Simular login usando fake timers', async () => {
    // Ligando a máquina do tempo
    vi.useFakeTimers();

    console.log('INICIANDO CENÁRIO DE TESTE');

    // Chamando o usuário sem await
    const promessaLogin = loginLento('Dona Redonda');

    // Avançando o tempo em 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;

    // Verificar o resultado
    expect(resultado).toBe('BEM-VINDO, Dona Redonda!');

    console.log('Sucesso!!! Teste realizado na velocidade da luz');

    // Desligando a máquina do tempo
    vi.useRealTimers();
});
