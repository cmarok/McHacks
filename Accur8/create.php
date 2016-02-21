<?php

$hostname = gethostname();
$servername = $hostname;
$username = "Accur8";
$password = "abc";

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

$sql = "INSERT INTO UserRatings (hotel_name, url, staff, food, hygin , parking, wifi, location)
VALUES ()";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql = "SELECT id, firstname, lastname FROM UserRatings";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
