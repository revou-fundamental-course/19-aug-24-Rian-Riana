//memasukan semua elemen nav untuk diberikan rangkaian logic
document.querySelectorAll('nav ul li a').forEach(anchor => {

    //meambahkan perintah ketika click
    anchor.addEventListener('click', function(e) {
        //mencegah tindakan default dari navigasi
        e.preventDefault();
        });

        // menambahkan waktu tunggu (loading untuk menjalankan fungsi berikutnya)
        setTimeout(() => {
            // menambahkan efek gulung halus dari nav ke tujuannya
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }, );
    });
});

document.getElementById('name-banner').textContent = name