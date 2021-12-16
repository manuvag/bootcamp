console.log('Hola mundo')

//VARIABLES
let firstName = 'Emmanuel' // Nos permite reasignar los valores de la variable en ejecución
const lastName = 'Valenzuela' // Constante que no cambia su valor durante la ejecución
var age = 29 // No usar más

console.log(firstName, lastName, age)
//TIPADO
const types = [ //Los tipos primitivos son inmutables, quiere decir que no podemos cambiar su valor
	2, //int
	'string', //Cadenas de texto
	true, // Booleanos que pueden ser true o false
	undefined, //Indefinidos
	null,//Nulo
]

firstNameWithUpper = firstName.toUpperCase()
console.log(firstNameWithUpper)

const list = []

list.push(1)

list[0] = 25

const anotherList = list.concat(157)

console.log(list)
console.log(anotherList)

const persona = {
	name: 'Emmanuel',
	twitter: '@Manu2527',
	age: 29,
	isDeveloper: true,
}

console.log(persona.name, persona.age, 'años')
const field = 'twitter'
console.log(persona[field])

//Funciones

//Function Expretion (Fat Arrow Funtion)
const sumar = (a,b /*Parametros*/) => {
	return a + b
}

console.log(sumar(1,2 /*Argumentos*/))

//Funtion declaration

function restar(a,b){
	return a - b
}

console.log(restar(5,1))
