<?php
	$server="localhost";
	$uid="root";
	$pass="";
	$bd="poo_proyecto";
	$link=mysqli_connect($server,$uid,$pass,$bd);
	if ($link) {
		mysqli_query($link, "SET NAMES utf8");
	}
?>