
<meta charset="UTF-8">

<script>

 function mostraResultado(frase){
 document.write(frase)
 }

 function calculaIMC(peso, altura){ 
 return peso/(altura * altura)
 }

 var nomeDaPessoa = prompt("Por favor! informe o seu nome: ")
 var pesoDaPessoa = prompt("Digite Agora o seu peso: ")
 var alturaDaPessoa = prompt("Agora por ultimo digite a sua altura por favor: ")
 var imc = calculaIMC(pesoDaPessoa, alturaDaPessoa)
 mostraResultado(nomeDaPessoa + " o seu IMC é " + imc)
 
</script>



