function copiarTexto(id) {
    const texto = document.getElementById(`mensagem-${id}`).innerText;
    navigator.clipboard.writeText(texto)
        .then(() => {
            const botao = document.getElementById(`botao-${id}`);
            botao.textContent = "Copiado!";
            botao.classList.add("copiado");
            setTimeout(() => {
                botao.textContent = "Copiar";
                botao.classList.remove("copiado");
            }, 2000);
        })
        .catch(err => {
            console.error("Erro ao copiar o texto: ", err);
        });
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ampliarImagem(imagem) {
    const overlay = document.getElementById('overlay');
    const imagemAmpliada = document.getElementById('imagem-ampliada');

    // Define o src da imagem ampliada como o src da imagem clicada
    imagemAmpliada.src = imagem.src;

    // Exibe o overlay
    overlay.style.display = 'flex';
}

function fecharImagem() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

