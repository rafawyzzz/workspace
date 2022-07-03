document.getElementById('q1').innerHTML = `
    <div>
    <h2>QUESTAO 01</h2>
    <div>
    <section class="flex">
        <article class="flex flex-column"">
        <label for='iMin'>Valor Minimo</label>
        <input type="number" name='nMin' id='iMin' placeholder="Somente numerais. Ex: 178"/>
        <label for='iMax'>Valor Maximo</label>
        <input type="number" name='nMax' id='iMax' placeholder="Somente numerais. Ex: 178"/>
        </article>
        </section>
        </div>
        <div>
        <button onClick='questao01().exibirDivisores()'>Calcular</button>
        <h3>resultado:</h3>
        <p id='resultado_q1'></p>
        <div>
    </div>
    
    `
let questao01 = () => {
    let _min;
    let _max;

    let _setMin = () => {
        _min = parseInt(document.getElementById('iMin').value);
        return _min
    };

    let _setMax = () => {
        _max = parseInt(document.getElementById('iMax').value);
        return _max
    };
    let _validarMinMax = () => {
        if (!_min && _min != 0) {
            window.alert('O valor minimo nao pode estar em vazio.')
            return false
        }
        else if (!_max && _max != 0) {
            window.alert('O valor maximo nao pode estar em vazio.')
            return false
        }
        else {
            return true
        }
    };

    let _calcular = () => {
        _setMin();
        _setMax();
        let validacaoEntradas = _validarMinMax();
        if (validacaoEntradas === false) {
            return false
        }
        else if (validacaoEntradas === true && _min >= _max) {
            return window.alert('Valor minimo devera ser menor que o valor maximo.')
        }
        else {
            let array = [];
            for (i = _min + 1; i < _max; i++) {
                if (i % 2 == 0 && i % 3 == 0) {
                    array.push(i)
                }
            }
            return array
        }
    };


    let _exibirDivisores = () => {
        let resultado = _calcular();
        let mensagem = "";
        console.log(resultado.length);
        if (resultado === false) {
            mensagem = ""
        }
        else if (resultado.length === 0) {
            mensagem = `Nao existem numeros multiplos de 2 e 3, de maneira simultanea, neste intervalo!`;
        }
        else if (resultado.length != 0) {
            mensagem = `O(s) numero(s) multiplos de 2 e 3 simultaneamente sao: ${resultado}`;
        }

        return document.getElementById("resultado_q1").innerHTML = mensagem;
    };



    return {
        exibirDivisores: _exibirDivisores,
        setMin: _setMin,
        setMax: _setMax
    };
};