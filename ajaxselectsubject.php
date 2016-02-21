<?php 
$servername = "localhost";
$username = "username";
$password = "password";
//Connection
$conn=mysqli_connect($servername, $username, $password)
mysql_select_db("form1");
$query = mysql_query("SELECT * FROM users WHERE name = 'Admin' ");
while($rows = mysql_fetch_array($query))
{

   $rows = $rows['Name'];
   $address = $rows['Address'];
   $email = $rows['Email'];
   $subject = $rows['Subject'];
   $comment = $rows['Comment']
   echo $rows.'</br>'.$address.'</br>'.$email.'</br>'.$subject.'</br>'.$comment;
}
   ?>