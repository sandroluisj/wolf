/*
Crie uma função chamada getEvenNumbers que aceite um array de números e
retorne um novo array contendo apenas os números pares do array original.

Dica: Para filtrar os números pares, você pode usar o operador módulo (%).
Um número é par se o resto da divisão desse número por 2 é zero (num % 2 === 0).
Tente utilizar o método filter para criar um novo array contendo apenas os
números que atendem a essa condição.

Programa desenvolvido por:
 - Sheldon
 - Sandro
 - Suhaila
 - Kauany
*/

function getEvenNumbers(numerosDaArray){
    let pares = [] 
    for (let i = 0; i < numerosDaArray.length; i++){
        if (numerosDaArray [i] % 2 === 0) {
            pares.push(numerosDaArray[i]);
        }
    }
        return pares;
}

console.log (getEvenNumbers([2, 3, 5, 10]));
