//https://viacep.com.br/ws/01001000/json/

let cep = document.getElementById("cep");
let endereco = document.getElementById("endereco");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");
let btn = document.getElementById("btn");

cep.addEventListener("focusout", buscarCEP);

async function buscarCEP() {
  //o cep.value.length 8 ou 9 é pra aceitar com ou sem hífen
  if ((cep.value != "" && cep.value.length == 8) || cep.value.length == 9) {
    let apiCEP = await (
      await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    ).json();

    if (apiCEP.erro != true) {
      endereco.value = apiCEP.logradouro;
      bairro.value = apiCEP.bairro;
      cidade.value = apiCEP.localidade;
      estado.value = apiCEP.uf;
    } else {
      alert("CEP não encontrado");
    }
  }
}
