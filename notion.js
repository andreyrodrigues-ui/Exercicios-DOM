                                        /* EXERCÍCIO 1 - NOMES COM A */
const inputNomes1 = document.getElementById('nomes1');
const botao1 = document.getElementById('btn1');
const resultado1 = document.getElementById('resultado1');

botao1.addEventListener("click", function() {

    const nomes = inputNomes1.value
        .split(',')
        .map(nome => nome.trim());

    const nomesA = nomes.filter(nome => nome.startsWith('A'));

    resultado1.textContent = nomesA.join(', ');

});




                                          /* EXERCÍCIO 2 - NOTAS MAIORES QUE 7 */
const inputNotas2 = document.getElementById('notas2');
const botao2 = document.getElementById('btn2');
const resultado2 = document.getElementById('resultado2');

botao2.addEventListener("click", function() {

    const notas = inputNotas2.value
        .split(',')
        .map(nota => Number(nota.trim()));

    const notas7 = notas.filter(nota => nota >= 7);

    resultado2.textContent = notas7.join(', ');

});




                                                /* EXERCÍCIO 3 - MÚLTIPLOS DE 3 */
const inputMultiplos3 = document.getElementById('multiplos3');
const botao3 = document.getElementById('btn3');
const resultado3 = document.getElementById('resultado3');

botao3.addEventListener("click", function() {

    const numeros = inputMultiplos3.value
        .split(',')
        .map(numero => Number(numero.trim()));

    const multiplos3 = numeros.filter(numero => numero % 3 === 0);

    resultado3.textContent = multiplos3.join(', ');

});




                                       /* EXERCÍCIO 4 - ENCONTRAR NÚMERO NEGATIVO */
const inputNegativo4 = document.getElementById('negativo4');
const botao4 = document.getElementById('btn4');
const resultado4 = document.getElementById('resultado4');

botao4.addEventListener("click", function() {

    const numeros = inputNegativo4.value
        .split(',')
        .map(numero => Number(numero.trim()));

    const negativo = numeros.find(numero => numero < 0);

    resultado4.textContent = negativo !== undefined
        ? negativo
        : "Nenhum número negativo encontrado.";

});




                                    /* EXERCÍCIO 5 - PRIMEIRO PREÇO ACIMA DE 100 */
const inputPrecos5 = document.getElementById('precos5');
const botao5 = document.getElementById('btn5');
const resultado5 = document.getElementById('resultado5');

botao5.addEventListener("click", function() {

    const precos = inputPrecos5.value
        .split(',')
        .map(preco => Number(preco.trim()));

    const preco = precos.find(preco => preco > 100);

    resultado5.textContent = preco !== undefined
        ? preco
        : "Nenhum preço acima de 100 encontrado.";

});




                                     /* EXERCÍCIO 6 - PRIMEIRA PALAVRA COM Z */
const inputPalavras6 = document.getElementById('palavras6');
const botao6 = document.getElementById('btn6');
const resultado6 = document.getElementById('resultado6');

botao6.addEventListener("click", function() {

    const palavras = inputPalavras6.value
        .split(',')
        .map(palavra => palavra.trim());

    const palavra = palavras.find(palavra =>
        palavra.toLowerCase().includes('z')
    );

    resultado6.textContent = palavra !== undefined
        ? palavra
        : "Nenhuma palavra com a letra Z encontrada.";

});




                                     /* EXERCÍCIO 7 - MÉDIA DAS IDADES */
const inputIdades7 = document.getElementById('idades7');
const botao7 = document.getElementById('btn7');
const resultado7 = document.getElementById('resultado7');

botao7.addEventListener("click", function() {

    const idades = inputIdades7.value
        .split(',')
        .map(idade => Number(idade.trim()));

    const soma = idades.reduce((total, idade) => total + idade, 0);

    const media = soma / idades.length;

    resultado7.textContent = media;

});




                                         /* EXERCÍCIO 8 - PRODUTO DOS NÚMEROS */
const inputNumeros8 = document.getElementById('numeros8');
const botao8 = document.getElementById('btn8');
const resultado8 = document.getElementById('resultado8');

botao8.addEventListener("click", function() {

    const numeros = inputNumeros8.value
        .split(',')
        .map(numero => Number(numero.trim()));

    const produto = numeros.reduce(
        (total, numero) => total * numero,
        1
    );

    resultado8.textContent = produto;

});




                                             /* EXERCÍCIO 9 - JUNTAR NOMES */
const inputNomes9 = document.getElementById('nomes9');
const botao9 = document.getElementById('btn9');
const resultado9 = document.getElementById('resultado9');

botao9.addEventListener("click", function() {

    const nomes = inputNomes9.value
        .split(',')
        .map(nome => nome.trim());

    const nomesJuntos = nomes.reduce(
        (total, nome) => total + nome + " ",
        ""
    );

    resultado9.textContent = nomesJuntos;

});




                                      /* EXERCÍCIO 10 - FRUTAS */
const inputFrutas10 = document.getElementById('frutas10');
const botao10 = document.getElementById('btn10');
const resultado10 = document.getElementById('resultado10');

botao10.addEventListener("click", function() {

    const frutas = inputFrutas10.value
        .split(',')
        .map(fruta => fruta.trim());

    const frases = frutas.map(
        fruta => `Eu gosto de ${fruta}`
    );

    resultado10.innerHTML = frases.join('<br>');

});




                                       /* EXERCÍCIO 11 - PREÇOS COM DESCONTO */
const inputPrecos11 = document.getElementById('precos11');
const botao11 = document.getElementById('btn11');
const resultado11 = document.getElementById('resultado11');

botao11.addEventListener("click", function() {

    const precos = inputPrecos11.value
        .split(',')
        .map(preco => Number(preco.trim()));

    const precosDesconto = precos.map(
        preco => preco * 0.90
    );

    resultado11.innerHTML = precosDesconto.join('<br>');

});




                                   /* EXERCÍCIO 12 - APROVADO OU REPROVADO */
const inputNotas12 = document.getElementById('notas12');
const botao12 = document.getElementById('btn12');
const resultado12 = document.getElementById('resultado12');

botao12.addEventListener("click", function() {

    const notas = inputNotas12.value
        .split(',')
        .map(nota => Number(nota.trim()));

    const situacao = notas.map(nota =>
        nota >= 7 ? "Aprovado" : "Reprovado"
    );

    resultado12.innerHTML = situacao.join('<br>');

});