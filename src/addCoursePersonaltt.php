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

        //annak a kurzusnak a beolvasása, aminek a kurzus kódja megegyezik a bevittel
        $connect -> query("SET NAMES utf8");
        $result = $connect -> query("SELECT * FROM timetablenew.kurzus Where Kurzus_kód='".$crs."' ");

        $record = $result->fetch_assoc();
        //a megadott kurzus napjának kiolvasása
        $day = $record['Nap'];
        $courseBegin = $record['Kezdés'];
        //hallgató nevének kiolvasása
        $userName=$_SESSION['login'];

        //user táblából a neptun kiolvasása név alapján
        $resultUser = $connect -> query("SELECT * FROM timetablenew.user Where Név='".$userName."' ");
        $recordUser = $resultUser->fetch_assoc();
        //név kiolvasása egy változóba
        $userCode = $recordUser['Neptun kód'];

        //usertimtable tábla beolvasása
        $resultUserTimeTable = $connect -> query("SELECT * FROM timetablenew.usertimetable ");
        //fenti tábla sorainak száma
        $recordNumber = $resultUserTimeTable -> num_rows;
        //ha már felvette a felvenni kívánt órát true értéket kap
        $recordExist=false;
        for($i=0; $i<=$recordNumber; $i++){
            //sor beolvasáa
            $recordUserTable = $resultUserTimeTable->fetch_assoc();
            //beolvasott kurzus kód stringgé alakítása
           $cCode = strval($recordUserTable['Kurzus_kód']);
            //ha a felvenni kívánt és a kiolvasott kurzuskód megegyezzik, akkor $recordExist true értéket kap
            if($cCode == $crs){
                $recordExist=true;
                //echo 'true';
            }            

        }
        //ha nem létezik, akkor felveszi
        if($recordExist == false){
            //addatok beszúrása a táblába
            $sql = "INSERT INTO timetablenew.usertimetable  VALUES ('".$recordNumber."','".$userCode."','".$crs."','".$day."','".$courseBegin."')";

            if ($connect->query($sql) === TRUE) {
                echo "Sikeres felvétel";
            } else {
                //hiba jelzése és a hiba kiírása
                echo "Hiba: ". $connect->error;
            }

        }
        else{
            //visszajelzés, ha az órát már felvette
            echo 'Ezt az órát már felvetted!';
        }  
    }


    mysqli_close($connect);
?>