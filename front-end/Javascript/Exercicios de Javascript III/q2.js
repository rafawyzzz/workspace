document.getElementById('q2').innerHTML = `
    <div>
        <h2>QUESTAO 2</h2>
        <label for='iFatorial'>Calcular o fatorial de</label>
        <input type='number' name='nNumero' id='iNumero' placeholder="Somente numeros. Ex: 53" />
    </div>
    <button onClick='questao02().exibirFatorial()'>Calcular</button>
    <h3>resultado:</h3>
    <p id='resultado_q2'></p>
        `
let questao02 = () => {
    let _numero = 0;
    let _fatorial;
    let _tempoCalculoFatorial;

    let _setNumero = () => {
        _numero = parseInt(document.getElementById("iNumero").value);
        return _numero
    };

    let _calcularFatorial = () => {
        _setNumero();
        const start = new Date();
        let fatorial = _numero;
        let primeiroMultiplo = _numero - 1

        for (i = primeiroMultiplo; i > 1; i--) {
            fatorial *= i;
        }
        _fatorial = fatorial;
        const end = new Date();
        _tempoCalculoFatorial = end - start;
        return [_fatorial, _tempoCalculoFatorial]
    };


    let _exibirFatorial = () => {
        _calcularFatorial();
        document.getElementById("resultado_q2").innerHTML = `!${_numero} = ${_fatorial} (${_tempoCalculoFatorial} milessegundos)`;
    };

    return {
        exibirFatorial: _exibirFatorial
    };
};