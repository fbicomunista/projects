
<meta charset="UTF-8">
<script>
function mostraResultado(frase){
frase
 }
 function calculaIMC(peso, altura){ 
  return peso/(altura^2)
 }
 var nomeDaPessoa = prompt("Por favor! informe o seu nome: ")
 var pesoDaPessoa = prompt("Entendi! Digite agora o seu peso: ")
 var alturaDaPessoa = prompt("Agora por ultimo mas não menos importante, digite a sua altura: ")
 var imc = calculaIMC(pesoDaPessoa, alturaDaPessoa)
 var resultado = alert(nomeDaPessoa + " o seu IMC é " + imc)
</script>


