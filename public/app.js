

// Mostrar o modal do login
function mostraModal() {
    document.getElementById('login-modal').style.display = 'block';
}

// fechar o modal do login
function fecharModal() {
    const modal = document.getElementById('login-modal')
    modal.style.display = 'none'; // Centifique-se que estamos acessando o modal correto 
}