<?php
	include("conexion.php");
	if (isset($_POST["respuesta"])) {
		$respuesta=$_POST["respuesta"];
		$sql="select * from ejemplo where id='$respuesta'";
		$result=mysqli_query($link, $sql);
        $show=mysqli_fetch_array($result);
        echo $show["info"];
	}
?>