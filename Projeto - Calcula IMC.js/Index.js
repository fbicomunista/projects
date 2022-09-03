
<meta charset="UTF-8">

<script>

 function mostraImc(frase){
  document.write(frase)
 }

 function calculaIMC(peso, altura){ 
  return peso/(altura * altura)
 }

 var nomeDaPessoa = prompt("por favor! informe o seu nome: ")
 var pesoDaPessoa = prompt("Ok " + nomeDaPessoa + "! " +"agora digite aqui o seu peso: ")
 var alturaDaPessoa = prompt("Entendi " + nomeDaPessoa + "! " + "Agora digite a sua altura por favor: ")
 var imc = calculaIMC(pesoDaPessoa, alturaDaPessoa)
 document.alert(mostraImc(nomeDaPessoa + "!" + " o seu IMC é " + imc))
 
</script>



