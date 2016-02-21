<?php
$servername = "localhost";
$dbname = "myDB";
//Connection
$conn=mysqli_connect($servername,$username,$password,$dbname)
if(!$conn){
	die("Connection failed: ".mysqli_connect_error());
}
//Inserting Data
$sql="INSERT INTO subjects(sid) values('$subject')";
$result=mysqli_query($conn,$query);
if($result){
	echo("Subject successfully inserted");
}
else{
	echo("Subject could not be inserted. Might be, the subject already exists.");
}
?>
