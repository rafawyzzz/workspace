let contagem = 0;

console.log("Iniciando Algoritimo Nr 01")
for (i = 0; i < 1000000; i++) {
    if (i != 1) {
        if (i % 2 === 0 && i % 3 === 0) {
            ++contagem;
        }
    }
}
console.log(`O total de numeros multiplos de 2 e 3 simultaneamente são: ${contagem}`);

console.log("Iniciando Algoritimo Nr 02");

let start;
function tempoDecorrido() {
    let fim = new Date().getMilliseconds();
    return fim - start
}

function calcularFatorial(fatorial) {
    start = new Date().getMilliseconds();
    let primeiroMultiplo = fatorial - 1
    for (i = primeiroMultiplo; i > 1; i--) {
        fatorial *= i;
    }
    let tempo = tempoDecorrido();
    return console.log(`53! = ${fatorial} (${tempo.toFixed(2)} milessegundos)`);
}
calcularFatorial(53);

console.log("Iniciando Algoritimo Nr 03");

let qtdAprovados = 0;
let qtdReprovados = 0;
function registrarNota() {
    let registroDeNotas = [];

    for (i = 1; i <= 20; i++) {
        nota = Math.floor(Math.random() * 101);
        situacao = nota >= 70 ? "Aprovado" : "Reprovado"
        if (situacao === "Aprovado") {
            qtdAprovados += 1;
        }
        else {
            qtdReprovados += 1;
        }
        registroDeNotas.push([i, nota, situacao])
    }

    return registroDeNotas;
}

function registrarMedias(pAprovados, pReprovados) {
    aprovados = pAprovados / 20 * 100;
    reprovados = pReprovados / 20 * 100;
    arrayMedias = [aprovados, reprovados]
    return arrayMedias;
}

function imprimirRelatorio() {
    relatorioConsolidado = registrarNota();
    mediasAprovacaoReprovacao = registrarMedias(qtdAprovados, qtdReprovados);
    relatorioConsolidado.forEach((aluno) => {
        console.log(`Aluno nr ${aluno[0]} - Nota ${aluno[1]} [${aluno[2]}]`)
    });
    console.log(`APROVADOS: ${qtdAprovados} (${mediasAprovacaoReprovacao[0].toFixed(0)}%) | REPROVADOS: ${qtdReprovados} (${mediasAprovacaoReprovacao[1].toFixed(0)}%)`);
}

imprimirRelatorio();

console.log("Iniciando Algoritimo Nr 04");
let numeros = [];
let contador = 0;

iAlg04 = 1;
while (iAlg04 <= 1000) {
    let numeroAtual = Math.floor(Math.random() * 5001)
    if (numeros.includes(numeroAtual) == false) {
        numeros.push(numeroAtual);
        iAlg04++;
    }
}
numeros.sort((a, b) => {
    return a - b;
})
numeros.forEach((elemento) => {
    contador = contador + 1;
    console.log(`${contador}nº - ${elemento}`)
});

console.log("Iniciando Algoritimo Nr 05");

function calcularTriangulo(a, b, c){
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && a === c) {
        return "É possível formar um triangulo Equilatero";
    }
    else if (a === b || a === c || b == c) {
        return "É possível formar um triangulo Isosceles";
    }
    else{
        return "É possível formar um triangulo Escaleno";
    }
}
else{
    return "Não é possível formar um triangulo com os valores listados!";
}
}
console.log(`Resultado da função para os valores (5,5,5): ${calcularTriangulo(5,5,5)}`);
console.log(`Resultado da função para os valores (45,45,90): ${calcularTriangulo(45,45,90)}`);
console.log(`Resultado da função para os valores (25,35,5): ${calcularTriangulo(25,35,5)}`);
