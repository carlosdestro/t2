$(function() {

	var $valor = $("#valor");

	var $form = $("form:first");

	var $pesquisa = $("#pesquisa");

	var $adicionar = $("#adicionar");

	var $exporta = $("#exporta");

	var $grid = $(".grid");

	var $mensagem = $(".mensagem");
	
	var $items = $("input", $form).not('.button');

	$items[0].focus();



	getQueryParams = function (qs) {
	    qs = qs.split('+').join(' ');

	    var params = {},
	        tokens,
	        re = /[?&]?([^=]+)=([^&]*)/g;

	    while (tokens = re.exec(qs)) {
	        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	    }

	    return params;
	}

	

	var pesquisa_click = function()
	{
		cookies.create("last_search",$valor.val(),1);

		$.ajax({
			url: "controller.php?op=pesquisar",
			data:
	            {
	                valor: $valor.val(),
	            },
			dataType: "JSON",
			method: "POST",
			success: function(data)
			{
				document.aguarde = false;

				if(data.length > 0)
				{
						$grid.empty();

						for(var i = 0; i < data.length; i++)
						{
							bind(data[i]);
						}	

						if(data.length == 1)
							$mensagem.text("1 registro encontrado");				
						else
							$mensagem.text(data.length + " registros encontrados");				
				}
				else
				{
					$grid.empty();
					$mensagem.text("Nenhum registro encontrado");
				}
			}
		});
	};


	var exporta_click = function()
	{
		window.location.href = "http://10.19.1.20/pesquisar.php?exportar=1&" + $items.serialize();

		//return;

		$.ajax({
			url: "pesquisar.php",
			data:
	            {
	                codigo: $codigo.val(),
	                cloja: $loja.val(),
	                data1: $data1.val(),
	                data2: $data2.val(),
	            },
			dataType: "JSON",
			method: "POST",
			success: function(data)
			{
				document.aguarde = false;

				if(data.length > 0)
				{
						$grid.empty();

						for(var i = 0; i < data.length; i++)
						{
							bind(data[i]);
						}	

						if(data.length == 1)
							$mensagem.text("1 registro encontrado");				
						else
							$mensagem.text(data.length + " registros encontrados");				
				}
				else
				{
					$grid.empty();
					$mensagem.text("Nenhum registro encontrado");
				}
			}
		});
	};

	var query = getQueryParams(document.location.search);


	if(query.cloja)
		$loja.val(query.cloja);

	if(query.codigo)
	{
		$codigo.val(query.codigo);

		codigo_change();

		pesquisa_click();
	}

	var bind = function(data)
	{
		var $item = $(".grid_item").clone().removeClass("grid_item").addClass("item");

		$grid.append($item);

		var $spans = $("input", $item);

		var i = 2;

		$spans.each(function()
		{
			$(this).val(data[$(this).attr("id")]);
		});

		$item.click(function()
		{
			window.location="cadastrar.php?id="+data["id"];
		});
	}

	
	var adicionar_click = function (){
		window.location = "cadastrar.php?op=adicionar";
	}

	$pesquisa.click(pesquisa_click);

	$adicionar.click(adicionar_click);


	$exporta.click(exporta_click);	


	if (query.removido==1)
	{
		$mensagem.text("Usuário removido com sucesso.");
	}

	var last_search = cookies.read("last_search");
	
	$valor.val(last_search);
	pesquisa_click();

	

});