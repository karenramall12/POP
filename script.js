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

