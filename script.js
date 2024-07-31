document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("addCurlForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var api = document.getElementById("api").value;
    
    var formData = new FormData();
    formData.append("formatcurl", generateFormatCurl(api));

    fetch('add.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        M.toast({html: 'Curl berhasil ditambahkan!', classes: 'rounded'});
        document.getElementById("api").value = ''; // Menghapus nilai di dalam kolom API
      } else {
        M.toast({html: 'Gagal menambahkan curl. Silakan coba lagi.', classes: 'rounded'});
      }
    })
    .catch(error => {
      console.error('Error:', error);
      M.toast({html: 'Terjadi kesalahan saat mengirim permintaan.', classes: 'rounded'});
    });
  });
});

function generateFormatCurl(api) {
  return `
  $url = "${api}";
$data =
"subjek=".$subjek.
"&pesan=".$pesan;
$ch2 = curl_init();
curl_setopt($ch2, CURLOPT_URL, $url);
curl_setopt($ch2, CURLOPT_POST, 1);
curl_setopt($ch2, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, 1); 
curl_setopt($ch2, CURLOPT_COOKIEJAR, getcwd()."/yanz.txt");
curl_setopt($ch2, CURLOPT_COOKIEFILE, getcwd()."/yanz.txt");   
curl_setopt($ch2, CURLOPT_HEADER, 0);
curl_setopt($ch2, CURLOPT_FOLLOWLOCATION, 0);
curl_exec($ch2);
curl_close($ch2);`;
}
