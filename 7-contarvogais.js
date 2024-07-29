/*
Crie uma função chamada countVowels que aceite uma string e retorne o número
de vogais na string. As vogais que devem ser contadas são 'a', 'e', 'i',
'o', 'u' (tanto maiúsculas quanto minúsculas).

Dica: Você pode usar um conjunto de vogais para verificar se cada caractere da
string é uma vogal. Utilize um laço para percorrer (você pode usar uma função
chamada .length para saber o tamanho da string, e vowels.includes para ver
se o caracter faz parte da string) cada caractere da string e um contador
para contar quantas vezes uma vogal aparece.

Programa desenvolvido por:
 -kauany
-Sandro
-Sheldon
-Suhaila
*/

function countVowels (palavra){
    const vogais = 'aeiou';
    let contagem = 0;
    let encontradas =[];
    palavra = palavra.toLowerCase()
 
 for (let i = 0;i < palavra.length;i++){
    let letra = palavra[i];
    if (vogais.includes(letra)){
       contagem ++;
    if(!encontradas.includes(letra)){ 
       encontradas.push(letra);
    }
 }
 }
 console.log(`Total de vogais:${contagem}`)
 console.log(`Vogais encontradas:${encontradas}`)
 }
 countVowels('abcde')
 