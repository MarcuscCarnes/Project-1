/* Author : Aman Khan
   CSCI 426 
   Project 2 */

<?php

require_once 'Source/session.php';

session_destroy();
header('location: Login.html');

?>
