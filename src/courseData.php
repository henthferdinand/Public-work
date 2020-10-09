<?php
    session_start();

    $day = $_GET['day']; 
    if (isset($_SESSION['room'])){
        $room = $_SESSION['room'];
    }
    else{
        $room=false;
    }

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

            if($room==false){
                
                if(isset($_SESSION['login'])){
                    $result = $connect -> query("SELECT * FROM timetablenew.kurzus Where Nap='".$day."' ORDER BY Kezdés ASC  ");
                    $recordNumber = $result -> num_rows;
                    //név alapján szak lekérése
                    $name = strval($_SESSION['login']);
                    $userResult = $connect -> query("SELECT * FROM timetablenew.user Where Név='".$name."' ");
                    $userRecord = $userResult->fetch_assoc();

                    for ($i=0; $i<$recordNumber; $i++){

                        //$record = $result->fetch_assoc();
                        
                        $record = $result->fetch_assoc();

                        if(isset($_SESSION['login'])==false){ 
                            
                            if($record['Elmarad']==0){
                                
                                $divTest = '<div  class="w3-light-blue w3-container w3-section w3-round-large">'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>'; 
                                $myJSON = json_encode($divTest);
                                echo $divTest;
                            
                            }
                            else{
                                $crs = $record['Kurzus_kód'];

                                $divTest = '<div  class="w3-light-blue w3-container w3-section w3-round-large" ><span class="cancelled" onclick="alertCancelledCourse('."'$crs'".')">Elmarad!</span></br>'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>';
                                $myJSON = json_encode($divTest);
                                echo $divTest;
                                

                            }

                        }
                        else{
                            
                            if($userRecord['Szak'] == $record['Szak']){

                                $crs=$record['Kurzus_kód'];
                            
                                if($record['Elmarad']==1){
                                    
                                    $divTest = '<div class="w3-light-blue w3-container w3-section w3-round-large"><button onclick="addCourse('."'$crs'".')" >+</button></br></br> <span class="cancelled" onclick="alertCancelledCourse('."'$crs'".')">Elmarad!</span></br>'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>'; 
                                    
                                    $myJSON = json_encode($divTest);
                                    echo $divTest;
                                }                            
                                else{  
                                    $divTest = '<div class="w3-light-blue w3-container w3-section w3-round-large"><button onclick="addCourse('."'$crs'".')" >+</button></br></br>'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>';
                                    
                                    $myJSON = json_encode($divTest);
                                    echo $divTest;
                                }
                                    
                                
                            }
                        }
                    

                    }
                }
                else{
                    echo "Jelentkezz be a tartalom megtekintéséhez!";
                }
            }
            else{
                $result = $connect -> query("SELECT * FROM timetablenew.kurzus Where Nap='".$day."' AND Terem='".$room."' ORDER BY Kezdés ASC  ");
                $recordNumber = $result -> num_rows;
                for ($i=0; $i<$recordNumber; $i++){

                    $record = $result->fetch_assoc();

                    if(isset($_SESSION['login'])==false){ 
                        if($record['Elmarad']==0){
                            
                            $divTest = '<div  class="w3-light-blue w3-container w3-section w3-round-large">'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>'; 
                        }
                        else{
                            $crs = $record['Kurzus_kód'];

                            $divTest = '<div  class="w3-light-blue w3-container w3-section w3-round-large"><span class="cancelled" onclick="alertCancelledCourse('."'$crs'".')">Elmarad!</span></br>'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>';

                        }

                    }
                    else{

                        $name = strval($_SESSION['login']);
                        $userResult = $connect -> query("SELECT * FROM timetablenew.user Where Név='".$name."' ");
                        $userRecord = $userResult->fetch_assoc();

                        if($userRecord['Szak'] == $record['Szak']){

                            $crs=$record['Kurzus_kód'];
                        
                            if($record['Elmarad']==0){
                                
                                $divTest = '<div  class="w3-light-blue w3-container w3-section w3-round-large"><button onclick="addCourse('."'$crs'".')" >+</button></br></br> '.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>'; 
                            }
                            else{                  
                                 
                                $divTest = '<div  class="w3-light-blue w3-container w3-section w3-round-large"><button onclick="addCourse('."'$crs'".')" >+</button></br></br>  <span class="cancelled" onclick="alertCancelledCourse('."'$crs'".')">Elmarad!</span></br>'.$record['Kurzus megnevezése'].'</br>Terem: '.$record['Terem'].'</br>Előadó: '.$record['Előadó'].'</br>Kezdés: '.$record['Kezdés'].'</br>Befejezés: '.$record['Befejezés'].'</br>Szak: '.$record['Szak'].'</br><a class="w3-text-deep-purple" href="'.$record['Link'].'" >Elérhető anyagok</a></br></div>'; 
                            }
                        }
                    }
                    $myJSON = json_encode($divTest);
                    echo $divTest;

                }
            }


        mysqli_close($connect);

    }

?>