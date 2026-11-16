// Bloqueia páginas de cliente para quem não fez login
function exigirCliente() {
    if (!sessionStorage.getItem('clienteNome')) {
        window.location.href = 'login.html'
    }
}

// Bloqueia páginas de admin para quem não é administrador
function exigirAdmin() {
    if (sessionStorage.getItem('admin') !== 'true') {
        window.location.href = 'admin-login.html'
    }
}

// Encerra a sessão e volta para a página inicial
function sair() {
    sessionStorage.clear()
    window.location.href = 'inicio.html'
}