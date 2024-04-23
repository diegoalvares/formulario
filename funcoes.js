const nome = document.getElementById('nome');
const s_nome = document.getElementById('sobrenome');
const rua = document.getElementById('rua');
const num = document.getElementById('num');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('estado');
const tel = document.getElementById('cel');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const erro = document.getElementById('erro');
const finalizar = document.getElementById('finalizar')
const cadastrar = document.getElementById('cadastrar')
const olho = document.getElementById('olho')
const img_olho = document.getElementById('img_olho')
const ok = document.getElementById('ok')

ok.addEventListener('click', function(){
    finalizar.style.display='none';
})

olho.addEventListener('click', function(e){
    e.preventDefault(); 
    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text');
        img_olho.setAttribute('src', 'icones/olho-aberto.png'); 
    } else {
        img_olho.setAttribute('src', 'icones/olho-fechado.png'); 
        senha.setAttribute('type', 'password')
    }
})


cadastrar.addEventListener('click', function(e){
    if(nome.value == '' || s_nome.value == '' || rua.value == '' || num.value == '' || cidade.value == '' || uf.value == 'nulo' || tel.value == '' || email.value == '' || senha.value == ''){
        erro.style.display='block'
        e.preventDefault();

        function apagar(){
            erro.style.display='none';
        }
        setTimeout(apagar, '3000')
    }
  
    else{
        finalizar.style.display='block'
    }
})