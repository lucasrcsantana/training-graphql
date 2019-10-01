const executaQuery = require('../database/queries')

class Atendimento {
  lista() {
    const sql = 'SELECT * FROM Atendimentos'

    return executaQuery(sql)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${parseInt(id)}`

    executaQuery(sql)
  }

  adiciona(item) {
    const { clienteId, petId, servicoId, status, observacoes } = item
    const data = new Date().toLocaleDateString()

    const sql = `INSERT INTO Atendimentos(clienteId, petId, servicoId, data, status, observacoes) VALUES(${clienteId}, ${petId}, ${servicoId}, '${data}', '${status}', '${observacoes}') SELECT * FROM Clientes WHERE Clientes.id = ${clienteId}; SELECT * FORM Pets Where Pets.id = ${petId}; SELECT * FROM Servicos WHERE Servicos.id = ${servicoId}`

    return executaQuery(sql).then(resposta => 
    {
      const dados = resposta[0]
      const cliente = resposta[1][0]
      const pet = resposta[2][0]
      const servico = resposta[3][0]

      return ({
        id: dados.insertId,
        cliente,
        pet,
        servico,
        data,
        status,
        observacoes
    })
  })
  }

  atualiza(novoItem) {
    const { id, clienteId, petId, servicoId, status, observacoes } = item
    const data = new Date.toLocaleDateString()
  
    const sql = `UPDATE Atendimentos SET clienteId=${clienteId}, petId=${petId}, servicoId=${servicoId}, data='${data}', status='${status}' observacoes='${observacoes}' WHERE id=${id}`

    executaQuery(sql)
  }

  deleta(id) {
    const sql = `DELETE FROM Atendimentos WHERE id=${id}`

    executaQuery(sql)
  }
}

module.exports = new Atendimento
