<?php
    session_start();
    include("dbconn.php"); 
    
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $username = $_POST['username'];
        $pNnumber = $_POST['number'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "INSERT INTO users (name, username, email, password, phone_num) VALUES ('$name', '$username', '$email', '$password', $pNnumber)";
        
        if ($conn->query($sql)) {
            $message = "User registered successfully!!!";
            echo "<script>";
            echo "alert('$message')";
            echo "</script>";
            header("location: ../index.php");
        } else {
            $message = "User not registered !!!";
            echo "<script>";
            echo "alert('$message')";
            echo "</script>";
        }
    }
    $conn->close();
?>