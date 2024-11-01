// // 1 - Fibonacci

// //     -- Criar uma função em sua linguagem preferida. A função deve receber um numero 
// N >= 0 
// (deve validar o input para a função), e retornar o valor correspondente 
// desse número na sequência Fibonacci. 
// EX. fib(0) =0; fib(1) = 1; fib(2) = 1; fib(3) = 2; fib(5) = 5; fib(6) = 8.

// //     --- Criar uma função recursiva que resolva Fibonacci

// //     --- Criar uma função linear que resolva Fibonacci


//linear
function fibonacci(n) {
    let inicioFib = 0
    let segundoFib = 1
    let fibN 

    if (n === 0) {
        return inicioFib;
    }
    
    if (n === 1) {
        return segundoFib; 
    }

    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            fibN = inicioFib + segundoFib
            inicioFib = segundoFib
            segundoFib = fibN
        }

        return fibN
        
    } else {
        return `Insira um numero maior que zero`
    }

}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(6))


//recursiva
function fibonacciRec(n) {

    if (n < 0) {
        return `Insira um número maior ou igual a zero.`
    }
    if (n <= 1) {
        return n; 
    }

    return fibonacciRec(n - 1) + fibonacciRec(n - 2); //ele encontra o numero antes dele e o numero anterior para somar
}

console.log(fibonacciRec(0))
console.log(fibonacciRec(1))
console.log(fibonacciRec(2))
console.log(fibonacciRec(3))
console.log(fibonacciRec(5))
console.log(fibonacciRec(6))
