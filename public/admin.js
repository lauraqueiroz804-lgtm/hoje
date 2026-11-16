const ADMIN_USUARIO = "admin"      // troque pelo usuário do administrador
const ADMIN_SENHA = "admin123"     // troque pela senha do administrador

function entrarAdmin() {
    var usuario = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value

    if (usuario === ADMIN_USUARIO && senha === ADMIN_SENHA) {
        sessionStorage.setItem('admin', 'true')
        window.location.href = 'get.html'
    } else {
        document.getElementById('erro').innerText = 'Usuário ou senha incorretos!'
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        entrarAdmin()
    }
})