<?php

function pesquisarPorId($id)
{

	$r = sql("select id, nome, email, telefone, UNIX_TIMESTAMP(data_nasc) data_nasc from usuario where id = ?", "i", Array ($id));


	if($r != null)
	{
		die(json_encode($r));
	}

	die("[]");
}

function pesquisarPorValor($valor)
{

	$r = sql("select id, nome, email, telefone, UNIX_TIMESTAMP(data_nasc) data_nasc from usuario where nome like ? or email like ? or telefone like ?", "sss", Array ($valor, $valor, $valor));


	if($r != null)
	{
		die(json_encode($r));
	}

	die("[]");
}

function atualizar($id, $nome, $telefone, $email, $data_nasc)
{
	$sql = "UPDATE usuario SET nome=?, telefone=?, email=?, data_nasc=FROM_UNIXTIME(?)WHERE id=?";

	$r = sql( $sql, "sssii", Array ($nome, $telefone, $email, $data_nasc, $id));

	die(json_encode($id));
}

function adicionar($nome, $telefone, $email, $data_nasc)
{
	$sql = "INSERT INTO usuario (nome, telefone, email, data_nasc) VALUES (?, ?, ?, FROM_UNIXTIME(?))";

	$r = sql( $sql, "sssi", Array ( $nome, $telefone, $email, $data_nasc));
	
	if (count ($r) == 0 )
			die ("[0]");

	die(json_encode($id));
}

function remover($id)
{
	$sql = "DELETE FROM usuario WHERE id=?";

	$r = sql( $sql, "i", Array ( $id));

	die(json_encode($id));
}

?>