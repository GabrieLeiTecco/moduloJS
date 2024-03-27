const moduloA = require('./moduleA') // transforma o conteudo de outro arquivo em um objeto nesse arquivo
const moduloB = require('./moduleB')

numAlea = moduloA.randomico.randomico(1,300)

moduloB.obj.coincidencia(2, numAlea)
