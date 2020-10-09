<?php

    session_start();

    if( isset( $_SESSION['login'] ))
    {
        $sessionLog = true;

        json_encode($sessionLog);
        echo $_SESSION['login'];
    }
    else
    {
        $sessionLog = false;

        json_encode($sessionLog);
    }


?>