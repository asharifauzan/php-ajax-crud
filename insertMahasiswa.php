<?php
require('controller.php');

$nim       = $_POST['nim'];
$nama      = $_POST['nama'];
$matkul_id = $_POST['matkul_id'];

$query = "INSERT INTO mahasiswa VALUES (NULL,'$nim', '$nama', '$matkul_id')";
mysqli_query($conn, $query);
