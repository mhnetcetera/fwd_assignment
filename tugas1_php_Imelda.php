<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas1_PHP_Imelda</title>
</head>
<body>
    <h1>Tugas 1 - PHP - Imelda Mahendro Putri</h1>
    <h2>Penentuan Aktifitas Lanjutan berdasarkan Nilai</h2>
    <form method="POST" action="">
        <label>Nama Siswa:</label><br>
        <input type="text" name="nama" required><br><br>
        <label>Email Siswa:</label><br>
        <input type="email" name="email" required><br><br>
        <label>Nilai Ujian Matematika:</label><br>
        <input type="number" name="nilai" required><br><br>
        <input type="submit" name="submit" value="Kirim">
    </form>
<hr>

    <?php
    if (isset($_POST['submit'])) {
        $nama  = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        if ($nilai > 70) {
            $status = "Lulus - Dapat menempuh ujian berikutnya";
        } else {
            $status = "Remedial";
        }

        echo "<h3>Hasil:</h3>";
        echo "Nama Siswa: $nama <br>";
        echo "Email Siswa: $email <br>";
        echo "Nilai Matematika Siswa: $nilai <br>";
        echo "Aktifitas Lanjutan: <strong>$status</strong>";
    }
    ?>
</body>
</html>