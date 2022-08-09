
let sliderElemento = windows.document.querySelector("#slider")

let botãoElemento = windows.document.querySelector("#botão-senha")

let tamanhoSenha = windows.document.querySelector("#valor")

let senha = windows.document.querySelector("#senha")

let containerSenha = windows.document.querySelector("#container-senha")

let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@#$%&*+?"

let novaSenha = "sizeSenha"

tamanhoSenha.innerHTML = sliderElemento.value

slider.oninput = function atualizaSlider(){
	sizeSenha.innerHTML = this.value
}

function geraSenha(){
	let pass = ""
	for(let i = 0; n = charset.lenght; i < sliderElemento.value; ++i){
		pass += charset.charAt(math.floor(math.random() * n))
}

	alert("Senha gerada com sucesso, sua senha é: " + pass)	
}

