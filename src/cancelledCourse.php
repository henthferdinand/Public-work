<?php
    session_start();

    $crs = $_GET['course']; 

    $servername = "localhost";
    $username = "root";
    $password = "";

    // Create connection
    $connect = new mysqli($servername, $username, $password);

    // Check connection
    if ($connect->connect_error) {
        die("Connection failed: " . $connect->connect_error);
    }

    else{
        $connect -> query("SET NAMES utf8");
        $result = $connect -> query("SELECT * FROM timetablenew.kurzus Where Kurzus_kód='".$crs."' ");

        $record = $result->fetch_assoc();

        $alertText = "A kurzus elmarad ekkor: ".$record['Elmarad_datum']." !";
        
        echo json_encode($alertText);

    }

    mysqli_close($connect);
?>