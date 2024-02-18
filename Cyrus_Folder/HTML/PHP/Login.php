<?php

$check_User = filter_input(INPUT_POST, 'Username');
$Check_Pass = filter_input(INPUT_POST, 'Password');

$host = "localhost:3306:";
$DbUserName = "root";
$DbPassword = "";
$DbName = "ipt2_database";

$conn = new mysqli($host, $DbUserName, $DbPassword, $DbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  else{
    $sql = "SELECT * FROM `login` WHERE `Username`='$check_User' AND `Password`='$Check_Pass'";
    $result = mysqli_query($conn, $sql);
    $count = mysqli_num_rows($result);

    if ($count > 0){
        echo "Match Found";
        print_r($count);
    }else{
        //echo '<script>alert("Invalid Username and Password")</script>'; 
       header("Location: http://localhost/IPT2_WEBSITE/IPT2_Group-5/Cyrus_Folder/HTML/Login.html");
       exit();

    }
  } 


?>
