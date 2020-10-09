<?php
    session_start();
    $day = $_GET['day']; 
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
        if(isset($_SESSION['login'])){

            //név alapján szak lekérése
            $name = strval($_SESSION['login']);
            $userResult = $connect -> query("SELECT * FROM timetablenew.user Where Név='".$name."' ");
            
            $userRecord = $userResult->fetch_assoc();
            $nCode = $userRecord['Neptun kód'];

            $userttResult = $connect -> query("SELECT * FROM timetablenew.usertimetable Where Neptun_kód='".$nCode."' ORDER BY Kezdés ASC");
            $recordNumber = $userttResult -> num_rows;
            
            for ($i=0; $i<$recordNumber; $i++){
                $userttRecord = $userttResult->fetch_assoc();
                $userttCCode =$userttRecord['Kurzus_kód'];

                $result = $connect -> query("SELECT * FROM timetablenew.kurzus Where Nap='".$day."' AND Kurzus_kód='".$userttCCode."' ");
                $record = $result->fetch_assoc();
                $crs=$record['Kurzus_kód'];
                if($record) {
                    
                    if($record['Elmarad']==1){
                        $divTest = '<div class="w3-light-blue w3-container w3-section w3-round-large"><span class="cancelled" onclick="alertCancelledCourse('."'$crs'".')">Elmarad!</span></br>'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>'; 
                        
                        $myJSON = json_encode($divTest);
                        echo $divTest;
                    }                            
                    else{  
                        $divTest = '<div class="w3-light-blue w3-container w3-section w3-round-large"></br>'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>';
                        
                        $myJSON = json_encode($divTest);
                        echo $divTest;
                    }
                }
                            
                        
                    
            }
            
 
        }
        else{
            echo "Jelentkezz be a tartalom megtekintéséhez!";
        }
    }




?>