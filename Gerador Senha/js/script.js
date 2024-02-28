function gerarSenha() {
  let letras = "abcdefghijklmnopqrstuvwxyz";
  let letrasMaiusculas = letras.toUpperCase();
  let numeros = "0123456789";
  let caracteres = "!@#$%&*()+=-*./";

  const tamanhoSenha = document.getElementById("tamanhoSenha").value;
  const quantidadeSenha = document.getElementById("quantidadeSenha").value;
  const boxNumeros = document.getElementById("checkbox-numero");
  const boxCaracteres = document.getElementById("checkbox-caracteres");
  const boxMaiusculas = document.getElementById('checkbox-maiusculas');

  if(tamanhoSenha < 0 || tamanhoSenha > 20){
    window.alert("Tamanho da senha inválido !!! Digite um tamanho de até 20 caracteres")
    location.reload();
  }

  if(quantidadeSenha < 0 || quantidadeSenha > 10){
    window.alert("Quantidade de senha inválido !!! Digite um quantidade de até 10 senhas")
    location.reload();
  }

  let senha = letras;

  if (boxNumeros.checked) {
    senha += numeros;
  }

  if (boxCaracteres.checked) {
    senha += caracteres;
  }

  if(boxMaiusculas.checked){
    senha += letrasMaiusculas;
  }

  let senhasGeradas = "";

  for (let i = 0; i < quantidadeSenha; i++) {
    let senhaFinal = "";
    for (let j = 0; j < tamanhoSenha; j++) {
      let randomIndex = Math.floor(Math.random() * senha.length);
      senhaFinal += senha.charAt(randomIndex);
    }
    senhasGeradas += senhaFinal + "<br>";
  }

  const areaResultado = document.getElementById("resultado")

  areaResultado.innerHTML = senhasGeradas;
}

function limparInput(){
    document.getElementById("tamanhoSenha").value = "";
    document.getElementById("quantidadeSenha").value = "";
}