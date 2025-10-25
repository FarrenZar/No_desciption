document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi AOS (Anda mungkin sudah punya ini)
  AOS.init({
    duration: 800,
    once: true,
  });

  // ======================================================
  // [START] KODE UNTUK FILTER DAN GRID
  // ======================================================

  // 1. Ambil semua elemen DOM yang kita perlukan
  const grid = document.getElementById("wisata-grid");
  const searchInput = document.getElementById("search-input");
  const locationSelect = document.getElementById("location-select");
  const categorySelect = document.getElementById("category-select");
  const filterButton = document.getElementById("filter-button");

  /**
   * Fungsi untuk me-render kartu wisata ke dalam grid.
   * @param {Array} items - Array data wisata yang akan ditampilkan.
   */
  function renderGrid(items) {
    // Kosongkan grid sebelum diisi
    grid.innerHTML = "";

    // Cek jika hasil filter kosong
    if (items.length === 0) {
      grid.innerHTML = `
        <div class="col-12">
          <p class="text-white text-center fs-5">
            <i class="bi bi-exclamation-triangle"></i> Maaf, destinasi tidak ditemukan.
          </p>
        </div>
      `;
      return;
    }

    // Loop data dan buat kartu untuk setiap item
    items.forEach((wisata) => {
      // Kita gunakan struktur kartu yang mirip dengan di Donasi.html
      const cardHTML = `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <a href="detail.html?id=${wisata.id}" class="card-link">
                <div class="place-card h-100">
                    <img src="${wisata.gambar}" class="card-img-top" alt="${wisata.nama}">
                    <div class="card-body">
                        <h5 class="card-title">${wisata.nama}</h5>
                        <p class="card-location">
                            <i class="bi bi-geo-alt-fill"></i> ${wisata.lokasi}
                        </p>
                        <p class="card-text">
                          ${wisata.deskripsi.substring(0, 105)}...
                        </p>
                    </div>
                </div>
            </a>
        </div>
      `;
      // Tambahkan kartu baru ke dalam grid
      grid.innerHTML += cardHTML;
    });
  }

  /**
   * Fungsi untuk mengisi dropdown <select> dengan data unik dari wisataData
   */
  function populateFilters() {
    // 1. Ambil semua lokasi unik
    // 'Set' digunakan untuk memastikan tidak ada data duplikat
    const locations = [...new Set(wisataData.map((item) => item.lokasi))];
    locations.sort(); // Urutkan berdasarkan abjad

    locations.forEach((location) => {
      const option = document.createElement("option");
      option.value = location;
      option.textContent = location;
      locationSelect.appendChild(option);
    });

    // 2. Ambil semua kategori unik
    const categories = [...new Set(wisataData.map((item) => item.kategori))];
    categories.sort();

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  }

  /**
   * Fungsi utama untuk menerapkan semua filter
   */
  function applyFilters() {
    // 1. Ambil nilai terbaru dari semua filter
    const searchTerm = searchInput.value.toLowerCase();
    const selectedLocation = locationSelect.value;
    const selectedCategory = categorySelect.value;

    // 2. Lakukan filter pada 'wisataData'
    const filteredData = wisataData.filter((item) => {
      // Cek Filter Pencarian (mencari di nama, lokasi, dan deskripsi)
      const matchesSearch =
        item.nama.toLowerCase().includes(searchTerm) ||
        item.lokasi.toLowerCase().includes(searchTerm) ||
        item.deskripsi.toLowerCase().includes(searchTerm);

      // Cek Filter Lokasi (jika nilainya ""/kosong, berarti "Semua Lokasi")
      const matchesLocation = !selectedLocation || item.lokasi === selectedLocation;

      // Cek Filter Kategori (jika nilainya ""/kosong, berarti "Semua Kategori")
      const matchesCategory =
        !selectedCategory || item.kategori === selectedCategory;

      // Hanya tampilkan item yang lolos ketiga filter
      return matchesSearch && matchesLocation && matchesCategory;
    });

    // 3. Render ulang grid dengan data yang sudah difilter
    renderGrid(filteredData);
  }

  // --- INISIALISASI HALAMAN ---

  // 1. Tampilkan semua wisata saat halaman pertama kali dibuka
  renderGrid(wisataData);

  // 2. Isi opsi filter di dropdown
  populateFilters();

  // 3. Tambahkan event listener ke tombol filter
  filterButton.addEventListener("click", applyFilters);



  
  const chatBox = document.getElementById("chat-box");
  const chatInput = document.getElementById("chat-input");
  const sendChatBtn = document.getElementById("send-chat-btn");

  if (sendChatBtn) {
    sendChatBtn.addEventListener("click", function () {
      handleChat();
    });
  }

  if (chatInput) {
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        handleChat();
      }
    });
  }

  function handleChat() {
    const userMessage = chatInput.value.trim();
    if (userMessage === "") return;

    // Tampilkan bubble chat pengguna
    appendChatBubble(userMessage, "user");
    chatInput.value = "";

    // Tunda respons AI untuk simulasi "berpikir"
    setTimeout(() => {
      generateAiResponse(userMessage);
    }, 500);
  }

  function appendChatBubble(message, sender) {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble", sender);
    bubble.textContent = message;
    chatBox.appendChild(bubble);
    // Auto-scroll ke pesan terbaru
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function generateAiResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    let aiResponse =
      "Maaf, saya belum mengerti. Bisakah Anda bertanya tentang rekomendasi wisata, lokasi, atau budaya di Indonesia?";

    if (lowerMessage.includes("halo") || lowerMessage.includes("hai")) {
      aiResponse =
        "Halo juga! Ada yang bisa saya bantu untuk rencana liburan Anda di Indonesia?";
    } else if (
      lowerMessage.includes("rekomendasi") ||
      lowerMessage.includes("wisata")
    ) {
      if (lowerMessage.includes("pantai")) {
        aiResponse =
          "Tentu! Indonesia punya banyak pantai indah. Saya merekomendasikan Pantai Kelingking di Bali atau Gili Trawangan di NTB. Keduanya sangat populer!";
      } else if (
        lowerMessage.includes("gunung") ||
        lowerMessage.includes("daki")
      ) {
        aiResponse =
          "Untuk pendakian, Gunung Bromo dan Kawah Ijen di Jawa Timur sangat terkenal dengan pemandangannya. Gunung Rinjani di NTB juga jadi favorit para pendaki.";
      } else if (
        lowerMessage.includes("budaya") ||
        lowerMessage.includes("sejarah")
      ) {
        aiResponse =
          "Jika Anda tertarik budaya, Tana Toraja di Sulawesi Selatan sangat unik. Candi Borobudur dan Prambanan di Yogyakarta juga wajib dikunjungi.";
      } else {
        aiResponse =
          "Saya bisa merekomendasikan wisata Alam atau Budaya. Anda lebih tertarik yang mana? Coba juga cari 'Raja Ampat' atau 'Ubud' di halaman utama!";
      }
    } else if (
      lowerMessage.includes("terima kasih") ||
      lowerMessage.includes("makasih")
    ) {
      aiResponse = "Sama-sama! Selamat menikmati liburan Anda!";
    }

    appendChatBubble(aiResponse, "ai");
  }
});