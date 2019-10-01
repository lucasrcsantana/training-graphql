const Operacoes = require('../../infraestrutura/operations')

const Servicos = new Operacoes('servico')

const resolvers = {
    Mutation: {
        adicionarServico: (root, params) => Servicos.adiciona(params)
    }
} 


module.exports = resolvers