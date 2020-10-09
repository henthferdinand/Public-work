
<?php	
	session_start();

	$user = $_GET['user'];
	$pass = $_GET['pass'];

	if( isset($_SESSION['login'])==false )	{

		//echo $user.' '.$pass;

		//$_SESSION['login'] = false;
		
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
			$connect -> query("SET NAMES utf8");
			$result = $connect -> query("SELECT * FROM timetablenew.user ");

			$record = $result->fetch_assoc();

			$recordNumber = $result -> num_rows;
			for ($i=0; $i<$recordNumber; $i++){

				$neptunCode = strval($record['Neptun kód']);
				$password = strval($record['Jelszó']);

				if( $neptunCode==$user && $password==$pass )
				{
					$_SESSION['login'] = $record['Név'];

				}

				$record = $result->fetch_assoc();
			}

		
		}
		
		if($_SESSION['login'])
		{	
			
			$_SESSION['room']=false;

			$loginSuccessText = '<p>Sikeres belépés!</p> <p><a class="w3-dark-grey" href="index.php">vissza az oldalra</a></p>';

			$loginSuccess=true;

			json_encode($loginSuccess);

            echo $loginSuccessText;
		}
		else
		{		
			$loginUnsuccessText = '<p>Sikertelen belépési kísérlet!</p><p><a class="w3-dark-grey" href="index.php">vissza az oldalra</a></p>';

			$loginSuccess=false;

			json_encode($loginSuccess);

			echo $loginUnsuccessText;
		
		}
	}
	else{

		$log="Már be vagy jelentkezve! ";
		json_encode($log);

		echo $log;

	}
			
?>
