<?php


header('Access-Control-Allow-Origin: *');

error_reporting(E_ERROR);

session_start();

if(!isset($_SESSION["id"]) || $_SESSION["id"] == "")
{
	header('location: ../login/');

	return;
}




?>