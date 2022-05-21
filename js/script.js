'use strict'

const display = document.getElementById('display')
const numero = document.querySelectorAll('[id*=botao]')
const operadores = document.querySelectorAll('[id*=operador')
const igual = document.getElementById('igual')
let operador;
let valorUm;
let valorDois;
let resultado;
let aux;


function adicionarNumero(event) {
    if (aux == 1) {
        limparTela()
        display.innerHTML += event.target.textContent
        aux = 0
    } else {
        display.innerHTML += event.target.textContent
    }

}

function adicionarOperador(event) {
    valorUm = parseFloat(display.innerHTML.toString().replace(',', '.'))
    operador = event.target.textContent;
    limparTela();
}

function fazerOperacao() {

    if (!isNaN(valorUm) && !isNaN(valorDois)) {
        switch (operador) {
            case '+':
                resultado = (valorUm + valorDois).toString().replace('.', ',')
                break;
            case '-':
                resultado = valorUm - valorDois
                break
            case '*':
                resultado = valorUm * valorDois
                break
            case '/':
                resultado = valorUm / valorDois
                break
            default:
                console.log('erro')
                break;
        }
        display.innerHTML = resultado
    }

}

function limparTela() {
    display.innerHTML = '';
}

numero.forEach(Element => {
    Element.addEventListener('click', adicionarNumero)
})

operadores.forEach(Element => {
    Element.addEventListener('click', adicionarOperador)
})

igual.addEventListener('click', () => {
    valorDois = parseFloat(display.innerHTML.toString().replace(',', '.'))
    aux = 1
    fazerOperacao()

})
document.getElementById('limparDisplay').addEventListener('click', () => {
    limparTela();
    valorUm = 0;
    valorDois = 0;
})
document.getElementById('limparCalculo').addEventListener('click', () => {
    valorUm = 0;
    valorDois = 0;
})
document.getElementById('apagar').addEventListener('click', () => {
    display.innerHTML = display.innerHTML.slice(0,-1)
})

document.getElementById('virgula').addEventListener('click', () => {
    if (display.innerHTML == '') {
        display.innerHTML = '0'
        aux = 0
    }
    if (aux == 1) {
        limparTela()
        display.innerHTML += ","
        aux = 0
    } else {
        display.innerHTML += ','
        aux = 0
    }
})