<?php 
	session_start();

	if(isset($_GET['room'])){
		$_SESSION['room']=$_GET['room'];
	}

	include "home.html";	

?>