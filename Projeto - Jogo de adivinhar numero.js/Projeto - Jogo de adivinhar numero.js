
<!DOCTYPE html>
<html>
<head lang="pt-br">
 <meta charset="utf-8">
 <meta name="viewport" content="width=devise-width, initial-scale=1.0">
 <meta name="keywords" content="Gerador de senha, generator password, cria senha, create password">
</head>
<script>
 var numeroPensado = Math.round(Math.random() * 10) 
 var tentativas = 1;
  while(tentativas <= 3){
   var chute = parseInt(prompt("Digite seu chute: "))
    if(chute == numeroPensado){
     console.log("Você descobriu!, o número pensado era " + numeroPensado)
    break
  } else {
 console.log("Você não descobriu antes das 3 tentativas!")
		}
tentativas++
	}
console.log("fim")

</script>
</html>


