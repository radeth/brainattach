<?php
    $mail = $_GET['mail'];
    $mess = $_GET['mess'];
    mail('maciej.jaworski@brainattach.com',$mail,$mess);
    header("Location: index.html"); 
?>