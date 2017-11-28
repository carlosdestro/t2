<?php



include_once ("../view/header.php");

?>

<script src="index.js"></script>
<script src="cadastrar.js"></script>



	<div class="content">
		
		<div class="cadastro">


			<span class="title">Cadastro</span>
			<form method="POST">
				<input name="id" id="id"  tipo="i" type="hidden"  >

				<div class="form_item form_item_nome">
					<span class="caption">Nome</span> <input name="nome" id="nome"  tipo="s"   >
				</div>

				<br>

				<div class="form_item form_telefone">
					<span class="caption">Telefone</span> <input name="telefone" id="telefone"  >
				</div>

				<div class="form_item form_item_email">
					<span class="caption">E-mail</span> <input name="email" id="email" tipo="x" >
				</div>		

				<div class="form_item">
					<span class="caption">Data de nascimento</span> <input name="data_nasc" id="data_nasc" tipo="d" >
				</div>					

									
			
				<br>

				<input type="button" value="Salvar" class="button" id="enviar">

				<input type="button" value="Deletar" class="button" id="delete">

				<input type="hidden" name="id" id="id">
			</form>
			<span class="title mensagem"></span>
		</div>
		

	</div>
<?php

include_once ("footer.php");

?>

