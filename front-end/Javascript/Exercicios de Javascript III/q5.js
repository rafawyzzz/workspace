document.getElementById('q5').innerHTML = `<h2> QUESTAO 5</h2>
<div>
<label for="iA">Lado A</label>
<input type="number" name="nA" id="iA">
</div>
<div>
<label for="iB">Lado B</label>
<input type="number" name="nB" id="iB">
</div>
<div>
<label for="iC">Lado C</label>
<input type="number" name="nC" id="iC">
</div>
<button onclick="questao05().imprimir()">Calcular</button>
<h3>resultado:<h3><p id='resultado_q5'></p>
`

let questao05 = () => {
    let _ladoA;
    let _ladoB;
    let _ladoC;

    let _validarEntradas = () => {

        if (!_ladoA || _ladoA <= 0) {
            window.alert('Lado A não pode estar vazio ou ser menor ou igual a 0.')
            return false
        }

        else if (!_ladoB || _ladoB <= 0) {
            window.alert('Lado B não pode estar vazio ou ser menor ou igual a 0.')
            return false
        }

        else if (!_ladoC || _ladoC <= 0) {
            window.alert('Lado C não pode estar vazio ou ser menor ou igual a 0.')
            return false
        }
        else{
            return true
        }
    }

    let _setValores = () => {
        _ladoA = document.getElementById("iA").value;
        _ladoB = document.getElementById("iB").value;
        _ladoC = document.getElementById("iC").value;
    }

    let _calcularTriangulo = () => {
        if (_ladoA == _ladoB && _ladoB == _ladoC) {
            return "Triangulo Equilatero"
        } else if ((_ladoA == _ladoB && _ladoB != _ladoC) || (_ladoB == _ladoC && _ladoC != _ladoA) || (_ladoA == _ladoC && _ladoC != _ladoB)) {
            return "Triangulo Isosceles"
        } else {
            return "Triangulo Escaleno"
        }
    };

    let _imprimir = () => {
        _setValores();
        let status = _validarEntradas();
        if (status === true) {
            let resultado = _calcularTriangulo();
            document.getElementById("resultado_q5").innerHTML = '';
            return document.getElementById("resultado_q5").innerHTML = resultado;
        }
    }

    return {
        imprimir: _imprimir
    }
};