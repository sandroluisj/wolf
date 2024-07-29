/*
Crie uma função chamada isPrime que aceite um número e retorne true se o
número for primo e false caso contrário.

Dica: Um número primo é um número maior que 1 que não tem divisores positivos
além de 1 e ele mesmo. Para verificar se um número é primo, você pode testar
se ele é divisível por qualquer número entre 2 e a raiz quadrada do número.
Você pode usar a função sqrt() da biblioteca Math para calcular isso.

Programa desenvolvido por:
 - Sheldon
 - Sandro
 - Suhaila
 - Kauany
*/
    
let array = [1,2,3,4,5,6,7,8,9,10]
    function isPrime(number){
      for (let i = 2; number > i; i++){
        if (number % i === 0) {
            return false;
        }
}
    return number > 1;
}

console.log (`${array.filter(isPrime)}`);
console.log(isPrime(5))
