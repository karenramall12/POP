function copiarTexto(id) {
    const texto = document.getElementById(`mensagem-${id}`).innerText;
    navigator.clipboard.writeText(texto)
        .then(() => {
            const botao = document.getElementById(`botao-${id}`);
            botao.innerText = "Copiado!";
            setTimeout(() => {
                botao.innerText = "Copiar";
            }, 2000);
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
            alert('Não foi possível copiar o texto. Tente novamente.');
        });
}