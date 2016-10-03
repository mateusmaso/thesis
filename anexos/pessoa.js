var pessoa = {
  nome: "Mateus Maso"
}

class Query {
  pessoa() {
    return pessoa
  }
}

class Pessoa {
  nome(pessoa) {
    return pessoa.nome
  }
}
