<?php

    $getTime = $_GET['time']; 
    
    //echo $getTime;
    $getTime= strval($getTime);


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
        
        $actualDay = date("l");
        $actualDay = strval($actualDay);

        switch($actualDay){  
            case "Sunday" :
                $actualDay ="Vasárnap";
                break;
            case "Monday" :
                $actualDay ="Hétfő";
                break;
            case "Tuesday" :
                $actualDay ="Kedd";
                break;
            case "Wednesday" :
                $actualDay ="Szerda";
                break;
            case "Thursday" :
                $actualDay ="Csütörtök";
                break;
            case "Friday" :
                $actualDay ="Péntek";
                break;
            case "Saturday" :
                $actualDay ="Szombat";
                break; 
            default:                    
                $actualDay ="Üres";                    
        }

        $result = $connect -> query("SELECT * FROM timetablenew.kurzus Where Nap='$actualDay'  ");
        
        //teszteléshez
        //$time="10:00:00";
    
        $recordNumber = $result -> num_rows;

        for ($i=0; $i<$recordNumber; $i++){           
            $record = $result->fetch_assoc();

            $begin=strval($record['Kezdés']);
            $course = $record['Kurzus megnevezése'];
            $room = $record['Terem'];
            //echo $begin;
            if($getTime == $begin){

                $alertText = "$course Óra kezdése 5 perc múlva, a $room-s teremben!";
                $alert = json_encode($alertText);

                echo $alertText;
            }
            else{
                $alertText=0;
                json_encode($alertText);
                //echo $alertText;
            }
            
        }           
        
    }

?>