const Operacoes = require('../../infraestrutura/operations')

const Pets = new Operacoes('pet')

const resolvers = {
  Query : {
    pets: () => Pets.lista(),
    pet: (root, {id}) => Pets.buscaPorId(id),
  },
  Mutation: {
    adicionarPet: (root, params) => Pets.adiciona(params),
    deletarPet: (root, {id}) => Pets.deleta(id),
    atualizarPet: (root, params) => Pets.atualiza(params)
  }
}

module.exports = resolvers