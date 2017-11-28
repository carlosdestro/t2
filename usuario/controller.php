<?php

//PESQUISAR
include_once ("../login/autenticar.php");

include_once ("../controller/connect.php");

include_once ("model.php");

if ($_REQUEST["op"]=="pesquisar")
{	
	if (isset($_REQUEST["id"]))
	{
		$id = $_REQUEST["id"];

		pesquisarPorId($id);
	}
	else
	{
		$valor = "%".$_REQUEST["valor"]."%";

		pesquisarPorValor($valor);
	}
}

//ADICIONAR

elseif ($_REQUEST["op"]=="adicionar")
{
	include_once ("../controller/autenticar.php");

	include_once ("../controller/connect.php");

	if ($_REQUEST["nome"] == '' || $_REQUEST["telefone"] == '' || $_REQUEST["email"] == '' || $_REQUEST["data_nasc"] == '' )
	{
		die();
	}

	if ($_REQUEST["id"] > 0 )
	{
		$data_nasc = DateTime::createFromFormat("d/m/Y", $_REQUEST["data_nasc"]);
		
		$data_nasc = $data_nasc->getTimestamp();

		atualizar($_REQUEST["nome"], $_REQUEST["telefone"], $_REQUEST["email"], $data_nasc, $_REQUEST["id"]);
	}

	else
	{
		$data_nasc = DateTime::createFromFormat("d/m/Y", $_REQUEST["data_nasc"]);

		$data_nasc = $data_nasc->getTimestamp();

		adicionar($_REQUEST["nome"], $_REQUEST["telefone"], $_REQUEST["email"], $data_nasc);

	}

	die(json_encode($r));

}

//REMOVER

elseif ($_REQUEST["op"]=="remover")
{
	include_once ("../autenticar.php");

	include_once ("connect.php");


	if (isset($_REQUEST["id"]))
	{
		remover($_REQUEST["id"]);
	}
}
?>