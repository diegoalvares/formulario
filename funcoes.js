const nome = document.getElementById('nome');
const s_nome = document.getElementById('sobrenome');
const rua = document.getElementById('rua');
const num = document.getElementById('num');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('estado');
const tel = document.getElementById('cel');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', function(e){
    if(nome.value == '' || s_nome.value == '' || rua.value == '' || num.value == '' || cidade.value == '' || uf.value == 'nulo' || tel.value == '' ||
    email.value == '' || senha.value == ''){
        e.preventDefault();
        alert('Existem campos não preenchidos!');
    }
   
    else{
        alert('Cadastro efetuado com sucesso!')
    }
})