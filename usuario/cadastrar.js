$(function() {

	var $enviar = $("#enviar");

	var $delete = $("#delete");

	var $limpar = $("#limpar");

	var $form = $("form:first");

	var $id = $("#id");

	var $nome = $("#nome");

	var $telefone = $("#telefone");

	var $email = $("#E-mail");

	var $data_nasc = $("#data_nasc");

	var $mensagem = $(".mensagem");


	
	$.datepicker.setDefaults($.datepicker.regional['pt-BR']);

	$data_nasc.datepicker({ dateFormat: 'dd/mm/yy' }).mask('00/00/0000');//	.mask("09/09/9999");

	var $items = $("input", $form).not('.button');


	if($items[0].value == "")
		$items[0].focus();
	else
		$items[1].focus();



	
	

	var enviar_form = function()
	{

		if(document.aguarde)
			return;

		
		var $items = $("input", $form).not('.button');

		var focus = false;

		var $left = $items.filter(function() {
				if(focus)
					return;

				var $this = $(this);

				if(!valida($this))
				{
					focus = true;
					
					return;
				}
			});

		if(focus)
			return;

		
		
		var data = $form.serialize();

		

		if(data == "")
		{
			marca($enviar);

			return;
		}

		$.ajax({
			url: "controller.php?op=adicionar",
			data:  data,
			dataType: "json",
			method: "POST",
			success: function(data)
			{
				if(data[0] < 1)
				{
					$mensagem.text("Erro inesperado. Por favor, tente novamente.")

					return;
				}

				
				$form[0].reset();

				

				$mensagem.text("Item salvo com sucesso.")

				$items[0].focus();

			},
			error: function()
			{
				$mensagem.text("Erro inesperado. Por favor, tente novamente.")
			}
		});




			
		
	};


	var delete_form = function()
	{
		if(confirm("Deseja excluir este registro?"))
		{
			var query = getQueryParams(document.location.search);

			$.ajax({
			url: "controller.php?op=remover",
			data:
	            {
	               id: query.id
	               
	            },
			dataType: "JSON",
			method: "POST",
			success: function(data)
			{
				window.location = "index.php?removido=1";

			}});

		}


	}


	$enviar.click(enviar_form);

	$delete.click(delete_form);


	$items.keypress(function(event)
	{
		if(event.which == 13 || event.keyCode == 13)
		{
			enviar_form();
		}
	});


	var query = getQueryParams(document.location.search);
	if (query.id >0 )
	{
				$.ajax({
			url: "controller.php?op=pesquisar",
			data:
	            {
	                id: query.id
	            },
			dataType: "JSON",
			method: "POST",
			success: function(data)
			{
				document.aguarde = false;

				if(data.length > 0)

				{
					var $spans = $("input", $form).not(".button");


					$spans.each(function()
					{
						var $this = $(this);
						if($this.attr("id") == "data_nasc")
						{
							var date = new Date(data[0][$this.attr("id")]*1000);
							date=formate(date);
							$this.val(date);
						}
						else	
							$this.val(data[0][$this.attr("id")]);
					});
		
				}

				else

				{
					alert("erro");
				}
			}
		});




	}
	

});
