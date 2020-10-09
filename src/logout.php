<?php

    session_start();


    if( isset($_SESSION['login'])) {	

       // echo $_SESSION['login'];
        $_SESSION['login']=false;

        $loginSuccessText = '<p>Sikeres kilépés!</p> <p><a class="w3-dark-grey" href="index.php">vissza az oldalra</a></p>';

        $logoutSuccess=true;

        json_encode($logoutSuccess);

        echo $loginSuccessText;
        
        session_unset();

        session_destroy();
    }
    else{
        $logoutSuccess=false;

        json_encode($logoutSuccess);

        echo $logoutSuccess;
    }

?>