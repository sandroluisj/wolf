/*
Crie uma função chamada drawTriangle que aceite um número n e desenhe um triângulo de
altura n no console usando asteriscos (*).

Dica: Utilize um laço de repetição para iterar desde 1 até n. Em cada iteração,
imprima uma linha com um número crescente de asteriscos, começando com 1 asterisco
na primeira linha e adicionando um asterisco a cada linha subsequente.
Você pode usar a função .repeat().

Programa desenvolvido por:
-kauany
-Sandro
-Sheldon
-Suhaila
*/
function drawTriangle (n){
    for (let linha = 1;linha <= n;linha++){ 
    let linhaAsteriscos = '*'.repeat(linha)
    console.log(linhaAsteriscos)
    }
}
drawTriangle(5)