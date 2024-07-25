/*
Crie uma função chamada alphabeticalOrder que aceite uma string e retorne uma nova
string com as letras ordenadas em ordem alfabética.

Dica: Utilize o método split para converter a string em um array de caracteres.
Utilize o método sort para ordenar os caracteres. Utilize o método join para
juntar os caracteres em uma nova string.

Programa desenvolvido por:
 - sandro
 - kauany
 - sheldon
 - suhaila

*/

function alphabeticalOrder(c){
    let b = c.split('').sort().join('')
    return b 
}
console.log(alphabeticalOrder("v d"))