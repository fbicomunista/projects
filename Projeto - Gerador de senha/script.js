
 let sliderElemento = windows.document.querySelector("#slider")
 let botãoElemento = windows.document.querySelector("#botão-senha")
 let tamanhoSenha = windows.document.querySelector("#valor")
 let senha = windows.document.querySelector("#senha")
 let containerSenha = windows.document.querySelector("#container-senha")
 let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@#$%&*+?"
 let novaSenha = ""
 
  tamanhoSenha.innerHTML = sliderElemento.value
   slider.oninput = function (){
    sizeSenha.innerHTML = this.value
   }

  function geraSenha(){
   let pass = ""
    for(let i = 0, n = charset.lenght; i < sliderElemento.value; ++i){
		pass += charset.charAt(math.floor(math.random() * n))
    }
	  
	  containerPassword.classList.remove("hide")
    password.innerHTML = pass;

    novaSenha = pass;
	  }

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}

