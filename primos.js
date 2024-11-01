// 2 - Números primos

//     -- Criar uma função em sua linguagem preferida. 
//     A função deve receber um numero N > 1 (validar o input), 
//     e retornar todos os números primos até o número 
//     N. EX. p(2) = [2]; p(3) = [2, 3]; p(10) = [2, 3, 5, 7];

//     --- Criar uma função recursiva que resolva p

//     --- Criar uma função linear que resolva p


//linear

function primo(n) {

    const primos = []

    if (n <= 1) {
        return `Insira um numero primo`    
    }

    for (let numero = 2; numero <= n; numero++) {
        let ePrimo = true; 

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ePrimo = false; 
                break;
            }
        }

        if (ePrimo) {
            primos.push(numero);
        }
    }

    return primos; 
}

console.log(primo(2));  
console.log(primo(3));  
console.log(primo(10))

//recursiva 

function verificaPrimo (n) {
    if (n <= 1) return false; 
    if (n === 2) return true; 
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        
        }
    }

    return true;
}

function primosRec(num, contador = 2, primos = []) {
    if (contador > num) return primos;

    if (verificaPrimo(contador)) {

        primos.push(contador)
    }

    return primosRec(num, contador + 1, primos);
    
}

console.log(primosRec(2));  
console.log(primosRec(3));  
console.log(primosRec(10))