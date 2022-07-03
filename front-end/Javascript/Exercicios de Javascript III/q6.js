let questao06 = () => {
    let cenarioDeslogado = `
<h2>QUESTAO 6</h2>


<form>
<fieldset>
<div class="allForm">
<div class="flex divForm">
<legend class="flex">>>>>>>>>>>> Login <<<<<<<<<<<</legend>
</div>
<div class="flex divForm">
<input type="email" name="nEmail" id="iEmail" placeholder="Email"> 
</div>
<div class="flex divForm">
<input type="password" name="eSenha" id="iSenha" placeholder="Senha">
</div>
<div class="flex divForm divbtn1"><button href="iEmail" id="iLogar" onClick='questao06().logar()'>Entrar</button></div>
<div class="flex divForm"><button href="iEmail" id="iCriarConta" onClick='questao06().cadastrar()'>Criar nova conta</button></div>
</div>
</fieldset>
</form>
<center><p>Para o cadastro de novos usuarios basta preencher os campos acima.</p></center>
`;

    let cenarioLogado = `
    <h2>QUESTAO 6</h2>
    <h3>Usuario Logado</h3>
<div>
    <p id='iEmailLogado'></p>
    <p id='iSenhaLogada'></p>
    <button type='button' onClick='questao06().deslogar()'>Deslogar</button>
</div>`;

    let _getCenarioDeslogado = () => {
        return cenarioDeslogado
    }

    let _getCenarioLogado = () => {
        return cenarioLogado
    }

    let _telaApresentada = (cenario) => {
        document.getElementById('q6').innerHTML = cenario;
    };

    let _autenticar = (pEmail, pSenha) => {
        if (!Object.keys(localStorage).includes(pEmail)) {
            window.alert('Usuário não cadastrado!');
            return false
        }
        else if (localStorage.getItem(pEmail) != pSenha) {
            window.alert("Senha Invalida!");
            return false
        }
        else {
            _telaApresentada(cenarioLogado);
            document.getElementById('iEmailLogado').innerHTML = `Email: ${pEmail}`;
            document.getElementById('iSenhaLogada').innerHTML = `Senha: ${pSenha}`;
            return true
        }
    };

    let _logar = () => {
        let email = document.getElementById("iEmail").value;
        let senha = document.getElementById("iSenha").value;

        if (!email) {
            window.alert("Campo obrigatorio nao preenchido: Email**")
            return false
        }
        else if (!senha) {
            window.alert("Campo obrigatorio nao preenchido: Senha**")
            return false
        }
        else {
            _autenticar(email, senha);
            return true
        }
    };

    let _deslogar = () => {
        return _telaApresentada(cenarioDeslogado);
    };

    let _cadastrarDados = (pEmail, pSenha) => {
        if (Object.keys(localStorage).includes(pEmail)) {
            window.alert("Este email ja se encontra cadastrado!");
            return false
        }
        else {
            localStorage.setItem(pEmail, pSenha);
            window.alert("Cadastro realizado com sucesso!");
            window.alert(Object.keys(localStorage))
            _telaApresentada(cenarioDeslogado);
            return true
        }
    };

    let _cadastrar = () => {
       
        let email = document.getElementById("iEmail").value;
        let senha = document.getElementById("iSenha").value;
       
        if (!email) {
            window.alert("Para cadastrar um novo email e preciso preencher o campo Email** ")
            return false
        }
        else if (!senha) {
            window.alert("Para cadastrar um novo email e preciso preencher o campo Senha**")
            return false
        }
        else {
            _cadastrarDados(email, senha);
            return true
        }
    };

    return {
        apresentar: _telaApresentada,
        getCenarioDeslogado: _getCenarioDeslogado,
        getCenarioLogado: _getCenarioLogado,
        logar: _logar,
        deslogar: _deslogar,
        cadastrar: _cadastrar
    };
};
questao06().apresentar(questao06().getCenarioDeslogado());