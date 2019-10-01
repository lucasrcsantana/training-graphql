const Operacoes = require('../../infraestrutura/operations')

const Servicos = new Operacoes('servico')

const resolvers = {
    Query: {
        servico: (root, {id}) => Servicos.buscaPorId(id),
        servicos: () => Servicos.lista(),
    },
    Mutation: {
        adicionarServico: (root, params) => Servicos.adiciona(params),
        atualizarServico: (root, params) => Servicos.atualiza(params),
        deletarServico: (root, {id}) => Servicos.deleta(id),
    }
} 


module.exports = resolvers