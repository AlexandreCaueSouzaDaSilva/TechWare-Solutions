// Função para alternar o tema claro/escuro
function alternarTema() {
    document.body.classList.toggle('modo-escuro');
}

// Adiciona o evento de clique ao botão de alternar tema
document.querySelector('.alternar-tema').addEventListener('click', alternarTema);

// Seleciona todos os botões/imagens com a classe 'botaomenu'
const botoesMenu = document.querySelectorAll('.botaomenu');

// Adiciona o evento de clique para alterar a opacidade
botoesMenu.forEach(botao => {
    botao.addEventListener('click', () => {
        botao.style.opacity = '70%'; // Define a opacidade para 70%
    });
});

function Log(tipo, messagem)
{
    alert(`Tipo de mensagem ${tipo}\nMensagem: ${messagem}`);
}