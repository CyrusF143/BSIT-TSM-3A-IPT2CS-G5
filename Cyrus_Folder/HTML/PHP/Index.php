<?php

$user = filter_input(INPUT_POST, 'Username');
$pass = filter_input(INPUT_POST, 'Password');


     //DataBase info
        $host = "localhost:3306:";
        $DbUserName = "root";
        $DbPassword = "";
        $DbName = "ipt2_database";

      //connection
         $conn = new mysqli($host, $DbUserName, $DbPassword, $DbName);

        echo "Username: " .$user;
        echo "Password: " .$pass;

         if(mysqli_connect_error()){
            die('Connect Error ('.mysqli_connect_errno().')'
            .mysqli_connect_error());
        }else{
            $sql = "INSERT INTO `login`(`Username`, `Password`) VALUES ('$user','$pass')";
            if($conn->query($sql)){
                echo "New Record in inserted";
                header("Location: http://localhost/IPT2_WEBSITE/IPT2_Group-5/Cyrus_Folder/HTML/Login.html");
                exit();
            }else{
                echo "Error:" .$sql ."<br>". $conn->error;
            }
            $conn->close();
        }

?>   