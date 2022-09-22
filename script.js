
document.getElement("valor-calulado").style.display = "none"
document.getElement("each").style.display = "none"

function calculateDinner(){
	var totalConta = document.getElementById("total-conta").value
	var taxaServiço = document.getElementByid("taxa-serviço").value
	var numeroPessoas = document.getElementByid("numero-pessoas").value

	if(totalConta === "" || taxaServiço == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){	
		alert("valor invalido! tente um valor correspondente")
	return 
}

if(numeroPessoas == "" || numeroPessoas <= 1){
	numeroPessoas = 1 
	document.getElementByid("each").style.display = "none"
} else {
	document.getElementByid("each").style.display = "block"
}

var totalTaxaServiço = (totalConta * taxaServiço) / numeroPessoas
var total = totalTaxaServiço + (totalConta / numeroPessoas)  

total = math.round(total * 100) / 100
total = total.tofixed(2) 

document.getElement("valor-calulado").style.display = "block"
document.getElement("valor-por-cabeça").innerHTML = "none"

document.getElementByid("calcular").onclick = function(){
	calculateDinner()}
	