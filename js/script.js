
function clicou(){
 document.getElementById('ok').innerHTML= "Obrigado por clicar";
}



function ir(){
  window.open("https://github.com/Sara01romao/aula_javascript"); //abre em uma nova janela

  //ou

  window.location.href = "https://github.com/Sara01romao/aula_javascript";//abre na mesma janela
}



//ONMOUSEOVER

function passa(elemento){
  // document.getElementById('mouse').innerHTML= "parabens";
  elemento.innerHTML="parabens";


}

function voltar(elemento){
  // document.getElementById('mouse').innerHTML= "passa o mouse aqui";

  elemento.innerHTML= "Passe o mouse aqui";
}


//ONCHANGE

function funcaoChange(elemento){
  console.log(elemento.value);
}
