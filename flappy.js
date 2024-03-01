let bird_dy = 0; // Variabel untuk kecepatan vertikal burung

document.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Mencegah perilaku default seperti menggulir layar
    img.src = 'Bird-2.png'; // Mengubah gambar burung saat sentuhan dimulai
    bird_dy = -7.6; // Menetapkan kecepatan vertikal negatif saat disentuh
});

document.addEventListener('touchend', (e) => {
    e.preventDefault(); // Mencegah perilaku default seperti menggulir layar
    img.src = 'Bird.png'; // Mengembalikan gambar burung saat sentuhan berakhir
});

function apply_gravity() {
    if (game_state !== 'Play') return;
    
    bird_dy = bird_dy + gravity; // Menambahkan gaya gravitasi pada kecepatan vertikal
    bird.style.top = (bird.offsetTop + bird_dy) + 'px'; // Memperbarui posisi vertikal burung

    // Cek jika burung mencapai batas atas atau bawah layar
    if (bird.offsetTop <= 0 || bird.offsetTop + bird.offsetHeight >= screenHeight) {
        endGame(); // Panggil fungsi akhir permainan jika burung jatuh atau naik terlalu tinggi
        return;
    }

    requestAnimationFrame(apply_gravity); // Mengulang fungsi untuk simulasi pergerakan burung
}
