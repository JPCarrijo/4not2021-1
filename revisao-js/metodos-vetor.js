const pets = [
    {
        nome: 'Mel',
        especie: 'cão',
        idade: 2,
        sexo: 'F',
        peso: 5.2
    },
    {
        nome: 'Paçoca',
        especie: 'gato',
        idade: 8,
        sexo: 'F',
        peso: 3.2
    },
    {
        nome: 'Cerberus',
        especie: 'cão',
        idade: 6,
        sexo: 'M',
        peso: 22
    },
    {
        nome: 'Matusalém',
        especie: 'tartaruga',
        idade: 102,
        sexo: 'M',
        peso: 30
    },
    {
        nome: 'Paco',
        especie: 'papagaio',
        idade: 56,
        sexo: 'M',
        peso: 1
    },
    {
        nome: 'Mingau',
        especie: 'gato',
        idade: 4,
        sexo: 'M',
        peso: 2.5
    }
]

// find(): Retorna a primeira ocorrência que corresponde ao critério informado

console.log(pets.find(elemento => elemento.peso > 10) )

console.log(pets.find(pet => pet.idade < 4));

console.log(pets.find(pet => pet.especie === 'Gato' && pet.sexo == 'M'))

console.log(pets.find(pet => pet.especie == 'calopsita'))


console.log('_______________________________________________')

// some(): retorna true caso haja ALGUM elemento que corresponda ao critério
// ou false caso contrário

console.log(pets.some(pet => pet.nome === 'Cerberus'));

console.log(pets.some(pet => pet.especie === 'tartaruga' && pet.sexo === 'F'))


console.log('_______________________________________________')

// every(): Retorna true caso TODOS os elementos coreespondem ao critério
// ou false caso contrário

console.log(pets.every(pet => pet.especie === 'cão'));

console.log(pets.every(pet => pet.peso >= 1))

console.log('_______________________________________________')

// filter(): Retorna um novo vetor contendo apenas os elemntos que 
// correspondem ao critério passado

console.log(pets.filter(x => x.especie === 'gato'));

console.log(pets.filter(x => x.idade > 20));

console.log(pets.filter(x => x.sexo === 'F' && x.especie === 'papagaio'));

console.log('_______________________________________________')

// map(): Cria um novo vetor COM MESMO NÚMERO do vetor original,
// correspondendo a algum tipo de transformação nos elementos originais

// Novo vetor contendo apenas o nome dos pets, em maiúslucas

console.log(pets.map(e => e.nome.toUpperCase()))

console.log('_______________________________________________')

const numeros = [2, 6, -3, 9, 5, -7, 1, 4]
console.log(numeros)


// Criando um novo vetor em que cada elemento corresponde ao elemento do
// vetor original elevando ao quadrado

console.log(numeros.map(x => x ** 2));


console.log('_______________________________________________')

// reduce(): Reduz um vetor de valores a um único valor.
// Parâmetros:
// Acumulador: resultado parcial até o momento
// Valor atual: o resultado corresponde ao elemento atual, que
// integrará o acumulador

// Soma
console.log(numeros.reduce((acum, val) => acum + val));

// Multiplicação
console.log(numeros.reduce((acum, val) => acum * val));

console.log('_______________________________________________')

// Concatenação
let p1 = 'Bom'
let p2 = 'galera!'

console.log([p1, ' dia ', p2].reduce((a, v) => a + v))

/****************************************************************
    Somar o peso de todos os pets
*/

// Abordagem 1: criando um vetor auxiliar contendo apenas os pesos dos pets

console.log('_______________________________________________')

let pesos = pets.map(pet => pet.peso)

console.log(pesos);

console.log(pesos.reduce((acum, val) => acum + val));

console.log('_______________________________________________')

// Abordagem 2: fazendo map() + reduce() em uma linha só

console.log(pets.map(pet => pet.peso).reduce((acum, val) => acum + val));

console.log('_______________________________________________')

// Abordagem 3: reduce() com parâmetros extras
// 2º parâmetro do reduce(): valor inicial do acumulador

console.log(pets.reduce((acum, val) => acum + val.peso, 0))

console.log('_______________________________________________')


// includes(): Retorna true caso o vetor inclua o valor informado

console.log(numeros.includes(6));
console.log(numeros.includes(11));

// Diferença de some() e includes() 
// some() -> recebe uma função para testar a existência de uma condição
// includes() -> recebe um valor simples (primitivo) para testar a existência