document.getElementById('q4').innerHTML = `
<h2>QUESTAO 4</h2>
<div>
    <label for='iQtdNum'>Quantidade de numeros</label>
    <input type="number" name='nQtdNum' id='iQtdNum'/>
</div>
<div>
    <label for='iQt04Min'>Valor Minimo</label>
    <input type="number" name='nQt04Min' id='iQt04Min'/>
</div>
<div>
    <label for='iQt04Max'>Valor Maximo</label>
    <input type="number" name='nQt04Max' id='iQt04Max'/>
</div>
<button onClick='questao04().imprimir()'>Calcular</button>
<h3>resultado:</h3>
<div id='divResposta_questao04'></div>
`
let questao04 = () => {
    let _numeros = [];
    let _qtdElementos = 0;
    let _qtdNumeros;
    let _vMinimo;
    let _vMaximo;


    let _setQuantidade = ()=>{
        _qtdNumeros = parseInt(document.getElementById("iQtdNum").value);
        return _qtdNumeros
    }
    let _setMin = () => {
        _vMinimo = parseInt(document.getElementById('iQt04Min').value);
        return _vMinimo
    };

    let _setMax = () => {
        _vMaximo = parseInt(document.getElementById('iQt04Max').value);
        return _vMaximo
    };
    let _validarEntradas = () => {;
        if (!_qtdNumeros || _qtdNumeros <= 0) {
            window.alert('Quantidade de numeros nao pode estar vazio ou ser menor ou igual a 0.')
            return false
        }
        else if (!_vMinimo && _vMinimo != 0) {
            window.alert('Valor minimo nao pode estar vazio.')
            return false
        }
        else if (!_vMaximo && _vMaximo != 0) {
            window.alert('Valor maximo nao pode estar vazio.')
            return false
        }
        else if (_vMinimo >= _vMaximo) {
            window.alert('Valor minimo devera ser menor que o valor maximo.')
            return false
        }
        else if (_qtdNumeros - 1 >= _vMaximo - _vMinimo) {
            window.alert(`Quantidade de numero deve estar entre 1 e ${_vMaximo - _vMinimo}.`)
            return false
        }
        else {
            return true
        }
    };



    let _randonNumber = () => {
        let i = 1;
        while (i <= _qtdNumeros) {
            let numeroAtual = Math.floor(Math.random() * (_vMaximo - _vMinimo) + _vMinimo);
            if (_numeros.includes(numeroAtual) == false) {
                _numeros.push(numeroAtual);
                i++;
            }
            else {
                continue;
            }
        }
    };

    let _ordernar = () => {
        _numeros.sort((a, b) => {
            return a - b;
        });
    };

    let _imprimir = () => {
        _setQuantidade();
        _setMin();
        _setMax();
        let status = _validarEntradas();
        if (status === true) {
            let divResultado = document.getElementById("divResposta_questao04");
            divResultado.innerText ='';
            _qtdElementos = 1;
            _randonNumber();
            _ordernar();
            _numeros.forEach((elemento) => {
                let pNumero = document.createElement('p');
                divResultado.appendChild(pNumero);
                pNumero.innerText = `Elemento nr ${_qtdElementos}  - Valor: ${elemento}`;
                ++_qtdElementos;
            });
        };
    };
    return {
        imprimir: _imprimir,
    };
};