
const express = require('express');
const server = express();

server.get('/Servidor', {req,res} => {
	return res.json({mensagem: 'Nossa API esta funfando'})
});

server.listen(3000, () => {
	console.log('esta funfando')

});
