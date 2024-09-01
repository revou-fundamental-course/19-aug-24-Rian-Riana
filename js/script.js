//memasukan semua elemen nav untuk diberikan rangkaian logic
document.querySelectorAll('nav ul li a').forEach(anchor => {

    //meambahkan perintah ketika click
    anchor.addEventListener('click', function(e) {
        e.defaultPrevented()
        //membuat opacity menjadi 0 untuk semua section
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
        });

        // menambahkan waktu tunggu (loading untuk menjalankan fungsi berikutnya)
        setTimeout(() => {
            // menambahkan efek gulung halus dari nav ke tujuannya
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // membat opacity kembali terlihat untuk atribut href (halaman yang dituju)
            document.querySelector(this.getAttribute('href')).style.opacity = '1';
        }, 500);
    });
});