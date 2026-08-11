// ============================================
// JS CUSTOM - script.js
// Ini contoh paling sederhana buat penuhi syarat "elemen JavaScript" di soal.
// Tugasnya: ambil tahun sekarang dari kalender komputer, terus tulis otomatis
// ke tulisan hak cipta di footer, biar gak perlu diganti manual tiap tahun baru.
// ============================================

// new Date() = ambil info tanggal & waktu sekarang dari komputer
// .getFullYear() = ambil bagian TAHUN-nya saja, misal 2026
const tahunSekarang = new Date().getFullYear();

// document.getElementById("tahun") = cari elemen HTML yang id-nya "tahun"
// (lihat di index.html: <span id="tahun"></span> di bagian footer)
// .textContent = ... artinya: isi tulisan di dalam elemen itu dengan nilai tahunSekarang
document.getElementById("tahun").textContent = tahunSekarang;
