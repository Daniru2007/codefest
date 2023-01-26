<?php

$conn = mysqli_connect("localhost", "root", "", "lolol");

if (!$conn) {
    echo "Connection Failed";
}

$base_url = "http://localhost:profile2/";
$my_email = "rockyio207nethnu@gmail.com";