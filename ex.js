// exercicio 01 
function fibonacci(n) {
    let a = 0;
    let b = 1; 
    let c = a + b;

    // Calcula a sequência de Fibonacci até ultrapassar ou atingir n
    while (a < n) {
        c = a + b;
        a = b;
        b = c;
    }

    // Verifica se o número informado é igual ao valor da sequência
    if (a === n) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso:
let numero = parseInt(prompt("Informe um número: "));
alert(fibonacci(numero));

// exercicio 02 

function verificarLetraA(str) {
   
    let letraA = str.toLowerCase();
    let contador = 0;

    // Contar quantas vezes a letra 'a' aparece
    for (let i = 0; i < letraA.length; i++) {
        if (letraA[i] === 'a') {
            contador++;
        }
    }

    // Verificar se a letra 'a' existe e mostrar a quantidade
    if (contador > 0) {
        return `A letra "a" aparece ${contador} vez(es) na string.`;
    } else {
        return `A letra "a" não aparece .`;
    }
}

// Exemplo de uso:
let texto = prompt("Digite ulguma palavra: ");
alert(verificarLetraA(texto));

// exercicio 03

let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

/* exercicio 04 

  a) 9       b) 128   c) 49    d) 100   e) 13     f)20

**/

/* exercicio 05 

    Iria ligar um Interruptor(1) por alguns minutos e desligaria, então logo ligaria o segundo interruptor(2) e iria até
    a sala onde estão as lampadas, la estaria uma lampada ligada referente ao  interrupitor(2 ligado), 
    uma lampada quente pois estava ligada referente ao (interruptor 1), e uma lampada desligada referente ao interruptor(3)
**/