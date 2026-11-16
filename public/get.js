fetch(':/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        var tabelaCorpo = document.getElementById('tabela-corpo')

        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var valores = [
                objeto.nome + ' ' + objeto.sobrenome,
                objeto.cpf,
                objeto.email,
                objeto.cidade + '/' + objeto.estado,
                objeto.telefone
            ]

            valores.forEach(v => {
                var td = document.createElement('td')
                td.innerText = v
                tr.appendChild(td)
            })

            tabelaCorpo.appendChild(tr)
        })
    })
    .catch(() => alert('Não foi possível conectar ao servidor.'))