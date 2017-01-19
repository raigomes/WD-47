/* Botão Ajuda - Cartões via GetJSON (AJAX)*/
(function(controlador) {
	
	$("#ajuda").click(function(){
		$.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes", function(res) {
			console.log(res);
			teste = 1;
			console.log(teste);
			res.instrucoes.forEach(function(instrucao) {
				controlador.adicionaCartao(instrucao.conteudo, instrucao.cor);
			});
		});
	})
})(controladorCartao);