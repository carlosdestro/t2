<?php

//phpinfo();

header('Access-Control-Allow-Origin: *');

//error_reporting(E_ALL);

session_start();

if($_REQUEST["sair"] == 1)
{
	unset($_SESSION["nome"]);
	unset($_SESSION["id"]);

	header('location: login.php');

	return;
}

if(isset($_SESSION["id"]) && $_SESSION["id"] != "")
{
	header('location: ../inicio/');

	return;
}

include_once ('../controller/connect.php');
$r = sql("SELECT id,nome FROM usuario WHERE usuario = ? AND (senha = sha2(?, 256) or senha=?) ", "sss", Array($_REQUEST["usuario"], $_REQUEST["senha"], $_REQUEST["senha"]));


function Erro()
{
	header('location: login.php#erro');
}

if(!isset($_REQUEST["usuario"]))
	Erro();

if(!isset($_REQUEST["senha"]))
	Erro();

if (count ($r) == 0) {
	Erro ();
	return;
}




	$_SESSION["nome"] = $r[0]["nome"];
	$_SESSION["id"] = $r[0]["id"];

	header('location: index.php');

	return;


?>