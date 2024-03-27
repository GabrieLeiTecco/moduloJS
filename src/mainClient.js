const moduloA = require('./moduleA') // transforma o conteudo de outro arquivo em um objeto nesse arquivo
const moduloB = require('./moduleB')

numAlea = moduloA.randomico(1,300)

moduloB.obj(2, numAlea)
