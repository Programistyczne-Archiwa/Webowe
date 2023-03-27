
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="kartkowka.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <center>
    <?php
        $haslo = $_POST['haslo'];
        $email = $_POST['email']; 
        $server = "localhost";
        $pass = "";
        $username = "root";
        $dbname = "bazadanych";
        $conn = mysqli_connect($server, $username, $pass, $dbname);

        $query = "INSERT INTO login (email, haslo) VALUES ('emailbp@op.pl','haslo123')";
        
        if(isset($_POST["haslo"]))
        {
            $haslo = $_POST["haslo"];        
        }else{
            echo "Error [Haslo]";
        }    
        if(isset($_POST["email"]))
        {
            $email = $_POST["email"];        
        }else{
            echo "Error [email]";
        }


        $sql = "SELECT * FROM login WHERE email = '$email' AND haslo = '$haslo'";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result)>0)
        {
            echo "Zalogowano pomyślnie";
        }else
        {

            echo "Podano błędne dane logowania";
        }
    ?>   
    </center>
    </div> 

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    
</body>
</html>
