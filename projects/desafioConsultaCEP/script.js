
const regexCep = /^[0-9]{5}-?[0-9]{3}$/gm;

//  ------- Tokens storage -------
const formulario = document.querySelector('.formulario')
const lista = document.querySelector('.lista')
const inputCep = document.querySelector('.cepField').children[1]
const inputs = document.getElementsByName('array[]');
const textoErro = document.querySelector('.divErro').children[0]
//--------------------------------


// ------- Functions -------
function exibirConsole(dados) {
    console.log(dados);
}

function transformarEmJson(response) {
    return response.json()
}

function consultarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const dados = fetch(url)
        .then(transformarEmJson)
        .then(preencherCampos)
        .catch(erroConexao)
        

}

function ajustaLargura() {
    inputs.forEach(element => {
        element.style.width = (element.value.length + 2.5) + 'ex';
    });
}

function preencherCampos(obj) {
    const erro = obj.erro;

    if(!erro) {
        inputs[0].value = obj.cep
        inputs[1].value = obj.logradouro
        inputs[2].value = obj.bairro
        inputs[3].value = obj.localidade
        inputs[4].value = obj.uf
        inputs[5].value = obj.ibge
        ajustaLargura()
    }
    erroDeCep(erro);
}

function erroDeCep(boolean) {
    if(boolean) {
        textoErro.innerHTML = 'CEP informado inválido ou inexistente.'
        textoErro.parentElement.style.opacity = '1'
        inputCep.style.border = '2px solid red'
    }
    else {
        textoErro.innerHTML = ''
        textoErro.parentElement.style.opacity = '0'
        inputCep.style.border = '2px solid black'
    }
}

function erroConexao() {
    textoErro.innerHTML = 'Erro de conexão com o serviço!'
    textoErro.parentElement.style.opacity = '1'
}

function formataCep(cep) {
    let saida
    if(cep.match(regexCep) !== null) {
        saida = cep.replace('-', '')
    }
    else {
        throw true
    }
    console.log(saida)
    return saida
}
//--------------------------

formulario.onsubmit = (event) => {
    event.preventDefault();

    try {
        const cep = formataCep(inputCep.value)
        consultarCep(cep);
    }
    catch (erro) {
        erroDeCep(erro)
    }
}