<?php
require('controller.php');

$nim       = $_POST['nim'];
$nama      = $_POST['nama'];
$matkul_id = $_POST['matkul_id'];

var_dump($nim);
var_dump($nama);
var_dump($matkul_id);
die;
$query = "INSERT INTO mahasiswa VALUES (NULL, $nim, '$nama', $matkul_id)";
mysqli_query($conn, $query);
