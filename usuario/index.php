<?php

include_once ("../view/header.php");

?>

 <script src="index.js"></script>

    <style type="text/css">
    #cadastrar
    {
		background-color: white !important; 	
		color: black !important;
    }
    #pesquisar
    {
	    background-color: rgba(0,0,0,.9) !important;	
		color: white !important;
    }
    </style>

	<div class="content">
		
		<div class="pesquisa">
			<span class="title">Pesquisa</span>

			<form method="POST">

				<div class="form_item form_item_loja">
					<span class="caption">Pesquisar por:</span> <input name="valor" id="valor"  >

				</div>


				<br>

													
				
				<input type="button" value="Pesquisar" class="button" id="pesquisa">

				<input type="button" value="Exportar" class="button" id="exporta">

				<input type="button" value="Adicionar" class="button" id="adicionar">


			</form>
			<span class="title mensagem"></span>

		</div>
		
			<div class="grid_item">
				<input id="id" class="id">
				<input id="nome">
				<input id="email">
				<input id="telefone">
				
			</div>
			
			<div class="grid_header">

				<span class="id">id</span>
				<span>Nome</span>
				<span>E-mail</span>
				<span>Telefone</span>
				
			</div>
			<form class="grid">
				
			</form>
		<br>

	<!--	<input type="button" value="Salvar / Finalizar" class="button" id="salvar">
		<input type="button" value="Limpar lista" class="button" id="limpar">

-->		
	</div>

<?php

include_once ("../view/footer.php");

?>


