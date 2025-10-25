document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Inisialisasi AOS
    AOS.init({
        duration: 800,
        once: true,
    });

    // 2. Dapatkan ID dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const wisataId = parseInt(urlParams.get('id')); // Ambil 'id' dan ubah jadi angka

    // ---------------------------------------------------
    // [BLOK KODE BARU] LOGIKA KONTER & NAVIGASI
    // ---------------------------------------------------
    const navContainer = document.getElementById('detail-nav-buttons');
    const counterContainer = document.getElementById('detail-counter'); // [BARU]
    
    // Hanya tampilkan tombol DAN KONTER jika ID antara 1 dan 15
    if (wisataId >= 1 && wisataId <= 15) {
        
        // --- Logika Konter [BARU] ---
        if (counterContainer) {
            counterContainer.innerHTML = `${wisataId} / 15`;
        }

        // --- Logika Tombol Navigasi (Tetap sama) ---
        if (navContainer) {
            let buttonHTML = '';
            
            // Tombol Mundur (hanya jika ID > 1)
            if (wisataId > 1) {
                let prevId = wisataId - 1;
                buttonHTML += `<a href="detail.html?id=${prevId}" class="btn btn-outline-light me-2" data-aos="fade-left" data-aos-delay="100">
                                <i class="bi bi-arrow-left-short"></i> Mundur
                               </a>`;
            }
            
            // Tombol Lanjut (hanya jika ID < 15)
            if (wisataId < 15) {
                let nextId = wisataId + 1;
                buttonHTML += `<a href="detail.html?id=${nextId}" class="btn btn-outline-light" data-aos="fade-left" data-aos-delay="200">
                                Lanjut <i class="bi bi-arrow-right-short"></i>
                               </a>`;
            }
            
            navContainer.innerHTML = buttonHTML;
        }

    } else {
        // [BARU] Sembunyikan konter jika ID di luar rentang (misal 16, 17, 18)
        if (counterContainer) {
            counterContainer.style.display = 'none';
        }
    }
    const wisata = wisataData.find(item => item.id === wisataId);
    const content = document.getElementById('detail-content');

    if (wisata) {
        document.title = `${wisata.nama} - IndoExplore`;
        
        // Buat URL Peta Google
        const mapQuery = encodeURIComponent(wisata.lokasi);
        const mapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

        const detailHTML = `
            <header class="detail-header" style="background-image: url('${wisata.gambar}')" data-aos="zoom-in">
                <div class="overlay">
                    <h1 data-aos="fade-up" data-aos-delay="100">${wisata.nama}</h1>
                    <p class="location" data-aos="fade-up" data-aos-delay="200">
                        <i class="bi bi-geo-alt-fill"></i> ${wisata.lokasi}
                    </p>
                </div>
            </header>

            <div class="detail-body glass-panel" data-aos="fade-up" data-aos-delay="200">
                <div class="row g-4">
                    <div class="col-lg-8">
                        <h3>Deskripsi</h3>
                        <p>${wisata.deskripsi}</p>
                        
                        <h3 class="mt-4">Galeri Foto</h3>
                        <div class="row g-3">
                            <div class="col-4">
                                <img src="${wisata.gambar}" alt="Foto 1" class="gallery-img">
                            </div>
                            <div class="col-4">
                                <img src="${wisata.gambar2}" alt="Foto 2" class="gallery-img">
                            </div>
                            <div class="col-4">
                                <img src="${wisata.gambar3}" alt="Foto 3" class="gallery-img">
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4">
                        <h3 class="mt-3 mt-lg-0">Lokasi di Peta</h3>
                        <iframe src="${mapUrl}" class="map-embed" allowfullscreen="" loading="lazy"></iframe>
                        
                        <button class="btn btn-primary w-100 mt-3">
                            <i class="bi bi-ticket-detailed-fill me-2"></i> Pesan Tiket
                        </button>
                        <button class="btn btn-outline-light w-100 mt-2">
                            <i class="bi bi-bookmark-plus-fill me-2"></i> Simpan ke Favorit
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        content.innerHTML = detailHTML;

    } else {
        // Jika data tidak ditemukan
        content.innerHTML = `
            <div class="glass-panel p-5 text-center">
                <h2><i class="bi bi-exclamation-triangle-fill text-danger"></i> Error</h2>
                <p>Data wisata tidak ditemukan. Silakan kembali ke halaman utama.</p>
            </div>
        `;
    }
});