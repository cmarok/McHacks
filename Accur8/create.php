<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE Ratings";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

// sql to create table
$sql = "CREATE TABLE UserRatings (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Hotel VARCHAR(100) NOT NULL,
URL VARCHAR(250) NOT NULL,
Staff INT(1) UNSIGNED,
Food INT(1) UNSIGNED,
Hygiene INT(1) UNSIGNED,
Parking INT(1) UNSIGNED,
Wifi INT(1) UNSIGNED,
Location INT(1) UNSIGNED,
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
