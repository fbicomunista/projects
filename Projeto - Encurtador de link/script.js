
function encurtarURL(){
	
	let url = document.getElementById("input-url").value
	if(!url){
		alert("Valor invalido")
		return
	}

let headers = {
	
	"content-Type": "application/json",
	"apiKey": "************************5177"


}

let linkRequest = {
	
	destination: url,
	domain: { fullName: "rebrand.ly" }
}

fetch("https://api.rebrandly.com/v1/links", {
	
	method:"POST",
	headers: headers,
	body: JSON.stringify(linkRequest)
})

	.then(response => response.json())
	.then(json => {
		console.log(json)
		let inputUrl = document.getElementById("input-url")
		inputUrl.value = json.shortUrl
	})


}