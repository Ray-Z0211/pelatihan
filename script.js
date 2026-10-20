// Mengambil elemen tombol dari HTML berdasarkan ID-nya ('button')
const tombolbutton = document.getElementById('button');

// Memastikan tombol ditemukan sebelum memasang perintah klik
if (tombolbutton) {
  // Menambahkan fungsi klik pada tombol
  tombolbutton.addEventListener('click', function() {
    // Menampilkan pesan pop-up saat tombol diklik
    alert('Halo, terima kasih sudah berkunjung!');
  });
}
