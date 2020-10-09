<?php

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
        //1. adat lekérés
        //!!! - table tálát majd átnevezni, amikor kész van - !!!
        $result = $connect -> query("SELECT * FROM table");
        
        //2. rekordok megszámlálása
        $recordNumber = $result -> num_rows;        

        //3. visszatér a rekordok számával
        echo json_encode($recordNumber);
    }

?>