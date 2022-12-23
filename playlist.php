<?php
  // Menyimpan data playlist dalam array
  $playlist = array('Dynamite - BTS', 'Bad Boy - Red Velvet', 'Love Scenario - iKON', 'Growl - EXO', 'Gangnam Style - Psy');
  // Mengirim data playlist dalam format JSON ke browser
  header('Content-Type: application/json');
  echo json_encode($playlist);
?>
