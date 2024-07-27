// Seletor do botão
const botao = document.getElementById('botao');

// Função para mudar a cor do botão
function mudarCor() {
    // Gerar uma cor aleatória
    const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
    botao.style.backgroundColor = corAleatoria;
}

// Adicionar um evento de clique no botão
botao.addEventListener('click', mudarCor);