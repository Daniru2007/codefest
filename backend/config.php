<?php

$conn = mysqli_connect("localhost", "root", "", "lolol");

if (!$conn) {
    echo "Connection Failed";
}