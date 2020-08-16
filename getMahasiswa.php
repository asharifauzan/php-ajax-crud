<?php
require('controller.php');

$query = "SELECT * FROM mahasiswa";
$result = mysqli_query($conn, $query);
$mhs = [];

while($data = mysqli_fetch_assoc($result)) {
  $mhs[] = $data;
}

echo json_encode($mhs);
