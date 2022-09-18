<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" href="Reset.css"
 </head>
<script>
function mostraResultado(frase){
frase
 }
 function calculaIMC(peso, altura){ 
  return peso/(altura^2)
 }
 var nomeDaPessoa = prompt("Por favor! informe o seu nome: ")
 var pesoDaPessoa = parseFloat(prompt("Entendi! Digite agora o seu peso: "))
 var alturaDaPessoa = parseFloat(prompt("Agora por ultimo mas não menos importante, digite a sua altura: "))
 var imc = calculaIMC(pesoDaPessoa, alturaDaPessoa)
 var resultado = alert(nomeDaPessoa + " o seu IMC é " + imc)
</script>


