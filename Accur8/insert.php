<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "Ratings";

// Create connection
$conn = new mysqli($servername, $username, $password, $Ratings);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO UserRatings (hotel_name, url, staff, food, hygin , parking, wifi, location)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
