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

    const sql = `INSERT INTO Atendimentos(clienteId, petId, servicoId, data, status, observacoes) VALUES(${clienteId}, ${petId}, ${servicoId}, '${data}', '${status}', '${observacoes}')`

    return executaQuery(sql).then(dados => ({
      id: dados.insertId,
      clienteId,
      petId,
      servicoId,
      data,
      status,
      observacoes
    }))
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
