                                    /*EXERCÍCIO 1 - SAUDAÇÃO */
let nome1 = document.querySelector("#nome1");
let botao1 = document.querySelector("#botao1");
let mensagem1 = document.querySelector("#mensagem1");

botao1.addEventListener("click", function() {

    mensagem1.textContent = "Olá, "+ nome1.value +"! Seja bem vindo!";
});



                                    /*EXERCÍCIO 2 - ALTERANDO O TÍTULO */
let titulo2 = document.querySelector("#titulo2");
let btn2 = document.querySelector("#btnAlterar2");

btn2.addEventListener("click", function() {

    titulo2.textContent = "Desenvolvimento de Sistemas - SENAI";
});



                                     /*EXERCÍCIO 3 - CONTADOR DE CLIQUES */
let btnContador3 = document.querySelector("#btnContador3");
let contador3 = document.querySelector("#contador3");

let contagem3 = 0;

btnContador3.addEventListener("click", function() {

    contagem3++;

    contador3.textContent =  contagem3;
});



                                 /*EXERCÍCIO 4 - ALTERANDO UMA MENSAGEM */
let status4 = document.querySelector("#status4");
let abrir4 = document.querySelector("#abrir4");

abrir4.addEventListener("click", function() {

    status4.textContent = "Status: Atendimento aberto";
    status4.style.color = "green";
})



                                 /*EXERCÍCIO 5 - CALCULADORA SIMPLES */
let produto5 = document.querySelector("#produto5");
let quantidade5 = document.querySelector("#quantidade5");        
let preco5 = document.querySelector("#preco5");
let calcular5 = document.querySelector("#calcular5");
let resultado5 = document.querySelector("#resultado5");

calcular5.addEventListener("click", function() {
    let quantidadeValor5 = Number(quantidade5.value);
    let precoValor5 = Number(preco5.value);

    let total5 = quantidadeValor5 * precoValor5;

    resultado5.textContent = "Total: R$"+ total5;
})



                                        /*EXERCÍCIO 6 - SISTEMA DE NOTAS */
let nota1_6 = document.querySelector("#nota1_6");
let nota2_6 = document.querySelector("#nota2_6");
let nota3_6 = document.querySelector("#nota3_6");
let calcular6 = document.querySelector("#calcular6");
let situacao6 = document.querySelector("#situacao6");

calcular6.addEventListener("click", function() {
    let media6 = (Number(nota1_6.value) + Number(nota2_6.value) + Number(nota3_6.value)) / 3;
    
    let resultado6 = document.querySelector("#resultado6");

    resultado6.textContent = "Média: "+ media6;
    
    if (media6 >= 6) {
       situacao6.textContent = " Situação: Aprovado!";
    } else {
       situacao6.textContent = " Situação: Reprovado!";
    }
})



                                 /* EXERCÍCIO 7 - VALIDAÇÃO DE FORMULÁRIO */
let nome7 = document.querySelector("#nome7");
let email7 = document.querySelector("#email7");
let senha7 = document.querySelector("#senha7");
let cadastrar7 = document.querySelector("#cadastrar7");
let resultado7 = document.querySelector("#resultado7");

cadastrar7.addEventListener("click", function() {

    if (nome7.value == "" || email7.value == "" || senha7.value == "") {
        resultado7.textContent = "Preencha todos os campos.";
    } else {
        resultado7.textContent = "Cadastro realizado com sucesso!";
    }
});



                               /* EXERCÍCIO 8 - SISTEMA DE ESTOQUE */
let produto8 = document.querySelector("#produto8");
let disponivel8 = document.querySelector("#disponivel8");
let solicitada8 = document.querySelector("#solicitada8");
let verificar8 = document.querySelector("#verificar8");
let resultado8 = document.querySelector("#resultado8");

verificar8.addEventListener("click", function() {

    let quantidadeDisponivel8 = Number(disponivel8.value);
    let quantidadeSolicitada8 = Number(solicitada8.value);

    if (quantidadeDisponivel8 >= quantidadeSolicitada8) {

        resultado8.textContent = "Pedido disponível para separação.";
        resultado8.style.color = "green";
    } else {
        resultado8.textContent = "Estoque insuficiente.";
        resultado8.style.color = "red";
    }
});



                                 /* EXERCÍCIO 09 - LISTA DE TAREFAS */
let tarefa9 = document.querySelector("#tarefa9");
let adicionar9 = document.querySelector("#adicionar9");
let lista9 = document.querySelector("#lista9");

adicionar9.addEventListener("click", function() {

    let novaTarefa9 = document.createElement("li");

    novaTarefa9.textContent = tarefa9.value;

    lista9.appendChild(novaTarefa9);

    tarefa9.value = "";
});




                                    /* EXERCÍCIO 10 - CALCULADORA DE DESCONTO */
let produto10 = document.querySelector("#produto10");
let preco10 = document.querySelector("#preco10");
let desconto10 = document.querySelector("#desconto10");
let calcular10 = document.querySelector("#calcular10");
let resultadoDesconto10 = document.querySelector("#resultadoDesconto10");
let resultadoFinal10 = document.querySelector("#resultadoFinal10");

calcular10.addEventListener("click", function() {

    let precoValor10 = Number(preco10.value);
    let descontoValor10 = Number(desconto10.value);

    let valorDesconto10 = precoValor10 * descontoValor10 / 100;

    let precoFinal10 = precoValor10 - valorDesconto10;

    resultadoDesconto10.textContent = "Desconto: R$ " + valorDesconto10;

    resultadoFinal10.textContent = "Total: R$ " + precoFinal10;
});



                                    /* EXERCÍCIO 11 - SISTEMA DE LOGIN */
let usuario11 = document.querySelector("#usuario11");
let senha11 = document.querySelector("#senha11");
let entrar11 = document.querySelector("#entrar11");
let resultado11 = document.querySelector("#resultado11");
let formulario11 = document.querySelector("#formulario11");
let area11 = document.querySelector("#area11");

entrar11.addEventListener("click", function() {

    if (usuario11.value == "aluno" && senha11.value == "1234") {

        resultado11.textContent = "Login realizado com sucesso!";

        formulario11.style.display = "none";

        area11.style.display = "block";
    } else {
        resultado11.textContent = "Usuário ou senha inválidos.";
    }
});



                                    /* EXERCÍCIO 12 - CARRINHO DE COMPRAS */
let produto12 = document.querySelector("#produto12");
let preco12 = document.querySelector("#preco12");
let adicionar12 = document.querySelector("#adicionar12");
let carrinho12 = document.querySelector("#carrinho12");
let quantidade12 = document.querySelector("#quantidade12");
let total12 = document.querySelector("#total12");

let produtos12 = [];
let totalCompra12 = 0;

adicionar12.addEventListener("click", function() {

    let nomeProduto12 = produto12.value;
    let precoProduto12 = Number(preco12.value);

    let novoProduto12 = document.createElement("li");

    novoProduto12.textContent = nomeProduto12 + " - R$ " + precoProduto12 + " ";

    let remover12 = document.createElement("button");

    remover12.textContent = "Remover";

    novoProduto12.appendChild(remover12);

    carrinho12.appendChild(novoProduto12);

    produtos12.push(novoProduto12);

    totalCompra12 += precoProduto12;

    quantidade12.textContent = produtos12.length;

    total12.textContent = "Total: R$ " + totalCompra12;

    remover12.addEventListener("click", function() {

        novoProduto12.remove();

        totalCompra12 -= precoProduto12;

        quantidade12.textContent = produtos12.length - 1;

        total12.textContent = "Total: R$ " + totalCompra12;
    });

    produto12.value = "";
    preco12.value = "";
});



                                    /* EXERCÍCIO 13 - SISTEMA DE CADASTRO DE ALUNOS */
let nome13 = document.querySelector("#nome13");
let idade13 = document.querySelector("#idade13");
let curso13 = document.querySelector("#curso13");
let cadastrar13 = document.querySelector("#cadastrar13");
let tabela13 = document.querySelector("#tabela13");

cadastrar13.addEventListener("click", function() {

    let novaLinha13 = document.createElement("tr");

    let colunaNome13 = document.createElement("td");
    let colunaIdade13 = document.createElement("td");
    let colunaCurso13 = document.createElement("td");
    let colunaExcluir13 = document.createElement("td");

    colunaNome13.textContent = nome13.value;
    colunaIdade13.textContent = idade13.value;
    colunaCurso13.textContent = curso13.value;

    let excluir13 = document.createElement("button");

    excluir13.textContent = "Excluir";

    colunaExcluir13.appendChild(excluir13);

    novaLinha13.appendChild(colunaNome13);
    novaLinha13.appendChild(colunaIdade13);
    novaLinha13.appendChild(colunaCurso13);
    novaLinha13.appendChild(colunaExcluir13);

    tabela13.appendChild(novaLinha13);

    excluir13.addEventListener("click", function() {

        novaLinha13.remove();
    });

    nome13.value = "";
    idade13.value = "";
    curso13.value = "";
});



                                    /* EXERCÍCIO 14 - DASHBOARD DE VENDAS */
let produto14 = document.querySelector("#produto14");
let quantidade14 = document.querySelector("#quantidade14");
let valor14 = document.querySelector("#valor14");
let adicionar14 = document.querySelector("#adicionar14");
let pesquisa14 = document.querySelector("#pesquisa14");
let tabela14 = document.querySelector("#tabela14");

let faturamento14 = document.querySelector("#faturamento14");
let itens14 = document.querySelector("#itens14");
let vendas14 = document.querySelector("#vendas14");

let vendasLista14 = [];

let faturamentoTotal14 = 0;
let quantidadeTotal14 = 0;

adicionar14.addEventListener("click", function() {

    let nomeProduto14 = produto14.value;
    let quantidadeProduto14 = Number(quantidade14.value);
    let valorProduto14 = Number(valor14.value);

    let totalVenda14 = quantidadeProduto14 * valorProduto14;

    let venda14 = {
        produto: nomeProduto14,
        quantidade: quantidadeProduto14,
        valor: valorProduto14,
        total: totalVenda14
    };

    vendasLista14.push(venda14);

    faturamentoTotal14 += totalVenda14;

    quantidadeTotal14 += quantidadeProduto14;

    mostrarVendas14();

    produto14.value = "";
    quantidade14.value = "";
    valor14.value = "";
});

function mostrarVendas14() {
    tabela14.textContent = "";

    for (let venda of vendasLista14) {

        let linha14 = document.createElement("tr");

        let colunaProduto14 = document.createElement("td");
        let colunaQuantidade14 = document.createElement("td");
        let colunaValor14 = document.createElement("td");
        let colunaTotal14 = document.createElement("td");

        colunaProduto14.textContent = venda.produto;
        colunaQuantidade14.textContent = venda.quantidade;
        colunaValor14.textContent = "R$ " + venda.valor;
        colunaTotal14.textContent = "R$ " + venda.total;

        linha14.appendChild(colunaProduto14);
        linha14.appendChild(colunaQuantidade14);
        linha14.appendChild(colunaValor14);
        linha14.appendChild(colunaTotal14);

        tabela14.appendChild(linha14);
    }

    faturamento14.textContent = "Faturamento: R$ " + faturamentoTotal14;

    itens14.textContent = "Itens vendidos: " + quantidadeTotal14;

    vendas14.textContent = "Vendas realizadas: " + vendasLista14.length;
}

pesquisa14.addEventListener("input", function() {

    let pesquisa = pesquisa14.value.toLowerCase();
    let linhas14 = tabela14.querySelectorAll("tr");

    for (let linha of linhas14) {

        let produto = linha.children[0].textContent.toLowerCase();

        if (produto.includes(pesquisa)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    }
});




                                    /* EXERCÍCIO 15 - MINI SISTEMA ACADÊMICO */
let nome15 = document.querySelector("#nome15");
let ra15 = document.querySelector("#ra15");
let curso15 = document.querySelector("#curso15");
let nota1_15 = document.querySelector("#nota1_15");
let nota2_15 = document.querySelector("#nota2_15");

let cadastrar15 = document.querySelector("#cadastrar15");

let pesquisa15 = document.querySelector("#pesquisa15");

let tabela15 = document.querySelector("#tabela15");

let contadorAlunos15 = document.querySelector("#contadorAlunos15");
let contadorAprovados15 = document.querySelector("#contadorAprovados15");
let contadorReprovados15 = document.querySelector("#contadorReprovados15");

let alunos15 = [];

cadastrar15.addEventListener("click", function() {

    let nomeAluno15 = nome15.value;
    let raAluno15 = ra15.value;
    let cursoAluno15 = curso15.value;

    let nota1Aluno15 = Number(nota1_15.value);
    let nota2Aluno15 = Number(nota2_15.value);

    let media15 = (nota1Aluno15 + nota2Aluno15) / 2;

    let situacao15;

    if (media15 >= 6) {
        situacao15 = "Aprovado";
    } else if (media15 >= 4) {
        situacao15 = "Recuperação";
    } else {
        situacao15 = "Reprovado";
    }

    let aluno15 = {

        nome: nomeAluno15,
        ra: raAluno15,
        curso: cursoAluno15,
        media: media15,
        situacao: situacao15
    };

    alunos15.push(aluno15);

    mostrarAlunos15();

    nome15.value = "";
    ra15.value = "";
    curso15.value = "";
    nota1_15.value = "";
    nota2_15.value = "";
});

function mostrarAlunos15() {

    tabela15.textContent = "";

    let aprovados15 = 0;
    let reprovados15 = 0;

    for (let aluno of alunos15) {

        let linha15 = document.createElement("tr");

        let colunaNome15 = document.createElement("td");
        let colunaRa15 = document.createElement("td");
        let colunaCurso15 = document.createElement("td");
        let colunaMedia15 = document.createElement("td");
        let colunaSituacao15 = document.createElement("td");
        let colunaExcluir15 = document.createElement("td");

        colunaNome15.textContent = aluno.nome;
        colunaRa15.textContent = aluno.ra;
        colunaCurso15.textContent = aluno.curso;
        colunaMedia15.textContent = aluno.media.toFixed(1);
        colunaSituacao15.textContent = aluno.situacao;

        if (aluno.situacao == "Aprovado") {
            aprovados15++;
        }

        if (aluno.situacao == "Reprovado") {
            reprovados15++;
        }

        let excluir15 = document.createElement("button");

        excluir15.textContent = "Excluir";

        colunaExcluir15.appendChild(excluir15);

        linha15.appendChild(colunaNome15);
        linha15.appendChild(colunaRa15);
        linha15.appendChild(colunaCurso15);
        linha15.appendChild(colunaMedia15);
        linha15.appendChild(colunaSituacao15);
        linha15.appendChild(colunaExcluir15);

        tabela15.appendChild(linha15);

        excluir15.addEventListener("click", function() {

            let posicao15 = alunos15.indexOf(aluno);

            alunos15.splice(posicao15, 1);

            mostrarAlunos15();
        });
    }

    contadorAlunos15.textContent = "Alunos: " + alunos15.length;

    contadorAprovados15.textContent = "Aprovados: " + aprovados15;

    contadorReprovados15.textContent = "Reprovados: " + reprovados15;
}

pesquisa15.addEventListener("input", function() {

    let pesquisa = pesquisa15.value.toLowerCase();

    let linhas15 = tabela15.querySelectorAll("tr");

    for (let linha of linhas15) {

        let nomeAluno15 = linha.children[0].textContent.toLowerCase();

        if (nomeAluno15.includes(pesquisa)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    }
});