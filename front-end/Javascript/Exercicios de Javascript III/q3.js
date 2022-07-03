document.getElementById('q3').innerHTML = `
<h2>QUESTAO 3</h2>
<button onClick='questao03().imprimirRelatorio()'>Criar Relatorio</button>
<h3 id='titulo_questao3'></h3>
<div id='divResultados'></div>
<p id='pEstatistica'></p>
`
let questao03 = () => {
    let _alunos = [];
    let _qtdAprovados = 0;
    let _qtdReprovados = 0;

    function Aluno() {
        const nr = Symbol();
        const nota = Symbol();
        const situacao = Symbol();
        this._nr;
        this._nota;
        this._situacao;

    };
    let _popularAlunos = () => {
        i = 1;
        while (i <= 20) {
            let rand = Math.floor(Math.random() * 101);
            let aluno = new Aluno();

            Object.defineProperties(aluno,
                {
                    'getNr': { get: function () { return this.nr } },
                    'getNota': { get: function () { return this.nota } },
                    'setNr': { set: function (nr) { this.nr = nr } },
                    'setNota': { set: function (nota) { this.nota = nota } }
                }
            );

            aluno.setNr = i
            aluno.setNota = rand
            if (rand >= 70) {
                aluno.situacao = "Aprovado";
                ++_qtdAprovados;
            }
            else {
                aluno.situacao = "Reprovado"
                ++_qtdReprovados;
            }
            _alunos.push(aluno);
            i++;
        }
        console.log(_alunos);
    };
    let _imprimirRelatorio = () => {
        _popularAlunos();
        console.log(_qtdAprovados);
        console.log(_qtdReprovados);
        let divResultados = document.getElementById('divResultados')
        document.getElementById('titulo_questao3').innerHTML = 'Relatorio de Alunos:'

        for (aluno of _alunos) {
            let pAluno = document.createElement('p');
            pAluno.innerText = `Aluno nr ${aluno.getNr} - Nota: ${aluno.getNota} [${aluno.situacao}]`;
            divResultados.appendChild(pAluno);
        }

        let media = `
        <strong>Estatistica:</strong>
        <p>Aprovados: ${_qtdAprovados} (${_qtdAprovados / 20 * 100}%) | Reprovados: ${_qtdReprovados} (${_qtdReprovados / 20 * 100}%)</p>
        `

        document.getElementById('pEstatistica').innerHTML = media;
    };

    return {
        imprimirRelatorio: _imprimirRelatorio
    };
};

