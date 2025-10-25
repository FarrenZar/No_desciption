const wisataData = [
    {
        id: 1,
        nama: "Pantai Kelingking",
        lokasi: "Nusa Penida, Bali",
        deskripsi: "Pantai Kelingking adalah salah satu destinasi paling ikonik di Nusa Penida, Bali, yang terkenal secara global karena formasi tebing kapurnya yang unik menyerupai kepala Tyrannosaurus Rex (T-Rex). Untuk menikmati pemandangan spektakuler ini, pengunjung biasanya melihat dari atas tebing. Bagi yang berjiwa petualang, tersedia jalur setapak curam untuk menuruni tebing menuju hamparan pasir putih yang masih alami dan air laut biru toska yang jernih. Perjalanan turun membutuhkan usaha ekstra, namun akan terbayar lunas dengan keindahan pantai yang tersembunyi dan suasana yang relatif sepi.",
        gambar: "https://png.pngtree.com/thumb_back/fh260/background/20220903/pngtree-sunset-over-kelingking-beach-in-nusa-penida-island-bali-indonesia-photo-image_28157566.jpg",
        gambar2: "https://smilenusapenida.com/id/assets/images/kelingking-beach2-nusapenida.jpg",
        gambar3: "https://image.idntimes.com/post/20240401/dominic-krainer-fpnmhkhioy0-unsplash-28598b7784be39d2a0e7a69c686d02c1-93bab6e41bb8389fc9b7d984ffb13b99.jpg",
        kategori: "Alam"
    },
    {
        id: 2,
        nama: "Danau Toba",
        lokasi: "Sumatra Utara",
        deskripsi: "Danau Toba merupakan danau vulkanik terbesar di dunia yang terletak di Sumatra Utara. Terbentuk dari letusan supervulkan puluhan ribu tahun lalu, danau ini memiliki keindahan alam yang luar biasa dengan airnya yang biru dan dikelilingi perbukitan hijau. Di tengah danau, terdapat Pulau Samosir, sebuah pulau vulkanik yang hampir seukuran Singapura, yang menjadi pusat kebudayaan Batak Toba. Pengunjung dapat menjelajahi desa-desa adat, melihat rumah Bolon, dan menyaksikan tarian Sigale-gale, sambil menikmati suasana sejuk dan tenang.",
        gambar: "https://images.unsplash.com/photo-1601058497548-f247dfe349d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFuYXUlMjB0b2JhfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
        gambar2:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Danau_Toba_dari_Samosir.jpg",
        gambar3:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Danau_Toba_-_Sumut.jpg/2560px-Danau_Toba_-_Sumut.jpg",
        kategori: "Alam"
    },
    {
        id: 3,
        nama: "Tana Toraja",
        lokasi: "Sulawesi Selatan",
        deskripsi: "Tana Toraja di Sulawesi Selatan menawarkan pengalaman budaya yang mendalam dan unik, berpusat pada ritual kehidupan dan kematian masyarakat Toraja. Wilayah dataran tinggi ini dihiasi dengan 'Tongkonan', rumah adat beratap melengkung seperti perahu yang megah dengan ukiran-ukiran khas. Toraja terkenal dengan upacara pemakaman 'Rambu Solo' yang rumit dan meriah, yang bisa berlangsung berhari-hari dan melibatkan seluruh komunitas. Selain itu, pengunjung dapat melihat situs pemakaman kuno di tebing-tebing batu seperti Lemo atau Kete Kesu.",
        gambar2:"https://media.istockphoto.com/id/514457444/id/foto/rumah-tradisional-tongkonan.jpg?s=612x612&w=0&k=20&c=nMonAyVY57q5afaM2Tst0h0xe621o_zA0V4433WRvhM=",
        gambar3:"https://media.istockphoto.com/id/882194052/id/foto/rumah-tongkonan-bersejarah-masyarakat-toraja-sulawesi-indonesia.jpg?s=612x612&w=0&k=20&c=BxYBhA9NxOglvQYvKEb_OhPLTXFYUFTC2GbkNxW3ud8=",
        gambar: "https://images.unsplash.com/photo-1727672100642-c8e8dfa7dca3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuYSUyMHRvcmFqYXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        kategori: "Budaya"
    },
    {
        id: 4,
        nama: "Pulau Komodo",
        lokasi: "Nusa Tenggara Timur",
        deskripsi: "Pulau Komodo, bagian dari Taman Nasional Komodo di Nusa Tenggara Timur, adalah habitat asli dari komodo, kadal purba raksasa yang tidak dapat ditemukan di tempat lain di dunia. Pulau ini menawarkan lanskap yang dramatis, terdiri dari perbukitan savana kering yang kontras dengan perairan biru jernih. Selain trekking untuk melihat komodo di alam liar bersama ranger berpengalaman, pengunjung juga bisa menikmati 'Pink Beach' (Pantai Merah) yang ikonik, salah satu dari sedikit pantai berpasir merah muda di dunia, serta spot snorkeling dan diving kelas dunia.",
        gambar: "https://plus.unsplash.com/premium_photo-1661876927993-bedb3ab87208?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVsYXUlMjBrb21vZG98ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        gambar2:"https://media.istockphoto.com/id/878699624/id/foto/bidikan-satwa-liar-komodo.jpg?s=612x612&w=0&k=20&c=2IGF4k0VVzCjyZW-V3eeIXh3j9GpvcJukipfV09xGt8=",
        gambar3:"https://media.istockphoto.com/id/2155849198/id/foto/pantai-pulau-padar-di-kawasan-taman-nasional-komodo-indonesia.jpg?s=612x612&w=0&k=20&c=y4jhi6oQd1258CQ3KEuCGfcfTA-yF1JDJcAwwM4GyGk=",
        kategori: "Alam"
    },
    {
        id: 5,
        nama: "Kawah Ijen",
        lokasi: "Jawa Timur",
        deskripsi: "Kawah Ijen, yang terletak di perbatasan Banyuwangi dan Bondowoso, Jawa Timur, menawarkan salah satu fenomena alam paling langka di dunia. Pendaki biasanya memulai perjalanan pada dini hari untuk menyaksikan 'blue fire' atau api biru, yang merupakan hasil dari gas sulfur yang terbakar saat bertemu dengan udara. Setelah fajar menyingsing, pemandangan menakjubkan lainnya terungkap: danau kawah asam pirus terbesar di dunia. Pengunjung juga akan menyaksikan ketangguhan para penambang belerang tradisional yang bekerja di kondisi ekstrem.",
        gambar: "https://images.unsplash.com/photo-1536146094120-8d7fcbc4c45b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2F3YWglMjBpamVufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
        gambar2:"https://media.istockphoto.com/id/467697471/id/foto/gunung-api-kawah-ijen-jawa-timur-api-belerang-biru.jpg?s=612x612&w=0&k=20&c=agFn1ApWUgfZ72CQot2me1YyOYXE2kJaYEML7NENCx8=",
        gambar3:"https://media.istockphoto.com/id/2188390836/id/foto/aerial-panorama-drone-view-of-mount-kawah-ijen-volcano-crater-at-sunrise-east-java-indonesia.jpg?s=612x612&w=0&k=20&c=RIqwlHOk0X9hbM5ad72hUYpBv4MuZCon2qWJZhg23to=",
        kategori: "Alam"
    },
    {
        id: 6,
        nama: "Kota Tua Jakarta",
        lokasi: "Jakarta",
        deskripsi: "Kota Tua Jakarta, yang juga dikenal sebagai Oud Batavia, adalah jantung sejarah ibu kota Indonesia. Kawasan ini merupakan pusat pemerintahan VOC pada masa kolonial Belanda, dan kini dipenuhi dengan bangunan-bangunan arsitektur Eropa abad ke-17 hingga awal abad ke-20 yang telah direvitalisasi. Pusatnya adalah Alun-alun Fatahillah, dikelilingi oleh museum-museum penting seperti Museum Sejarah Jakarta (bekas Balai Kota Batavia), Museum Wayang, dan Museum Seni Rupa dan Keramik. Pengunjung dapat berkeliling dengan sepeda ontel sewaan atau sekadar menikmati suasana nostalgia.",
        gambar: "https://www.intiwhiz.com/images/planner/kota%20tua%20jakarta.jpg",
        gambar2:"https://media.istockphoto.com/id/1459535420/id/foto/beautiful-morning-at-kota-tua-jakarta-indonesia.jpg?s=612x612&w=0&k=20&c=2eNWYJEdWcVrFIvHT8HyKhiVohsEhxFk-ffzgNG8u5o=",
        gambar3:"https://media.istockphoto.com/id/1272715289/id/foto/kali-besar-kota-tua-jakarta.jpg?s=612x612&w=0&k=20&c=QDRbiFzg3FW8rrDG6oLKGgWmSoUOglqhXmYSYLEqwJo=",
        kategori: "Budaya"
    },
    {
        id: 7,
        nama: "Gunung Bromo",
        lokasi: "Jawa Timur",
        deskripsi: "Gunung Bromo di Jawa Timur adalah salah satu destinasi wisata paling terkenal di Indonesia, bagian dari Taman Nasional Bromo Tengger Semeru. Daya tarik utamanya adalah menyaksikan matahari terbit (sunrise) dari Puncak Penanjakan, di mana pengunjung disuguhi pemandangan magis lautan awan yang menyelimuti kaldera, dengan latar belakang Gunung Bromo yang aktif, Gunung Batok, dan Gunung Semeru yang menjulang di kejauhan. Setelah sunrise, wisatawan biasanya menyeberangi 'Lautan Pasir' yang luas dengan jip atau kuda untuk kemudian mendaki anak tangga menuju kawah Bromo.",
        gambar: "https://media.istockphoto.com/id/474625072/id/foto/matahari-terbit-di-gunung-berapi-bromo-di-indonesia.jpg?s=612x612&w=0&k=20&c=Db4BNHYNHmJctVBbjMCclV8x6PbpB0Zgp58Vd9o8LKk=",
        gambar2:"https://media.istockphoto.com/id/1794856325/id/foto/gunung-gunung-bromo-di-taman-nasional-bromo-tengger-semeru-jawa-timur-indonesia.jpg?s=612x612&w=0&k=20&c=qsIC3Xl8-pZ_Zfawztt1qA2yejI18_gJxt0MmO-cOXU=",
        gambar3:"https://media.istockphoto.com/id/1158616755/id/foto/pemandangan-indah-suv-kuno-yang-berkendara-melalui-gurun-dekat-gunung-berapi-bromo.jpg?s=612x612&w=0&k=20&c=k-4-mQbDLx65G3DqI02jR7IR1olwUQnbCrYgRT_wbKo=",
        kategori: "Alam"
    },
    {
        id: 8,
        nama: "Pulau Bintan",
        lokasi: "Riau",
        deskripsi: "Pulau Bintan di Kepulauan Riau adalah destinasi resor populer yang mudah diakses dari Singapura. Pulau ini menawarkan perpaduan sempurna antara kemewahan dan keindahan alam. Di sisi utara, terdapat kawasan resor terpadu Lagoi yang eksklusif dengan hotel-hotel bintang lima, lapangan golf kelas dunia, dan pantai-pantai pribadi yang terawat. Namun, Bintan juga menyimpan keindahan alam lain seperti Pantai Trikora dengan batu-batu granit besarnya, serta Gurun Pasir Busung dan Danau Biru yang fotogenik, bekas area pertambangan.",
        gambar: "https://media.istockphoto.com/id/1160035557/id/foto/panorama-sunset-di-pulau-bintan-wonderful-indonesia.jpg?s=612x612&w=0&k=20&c=uezRZxO_ilzcmmlki9PVoi4w_VlLNrXkZ2b8Cgvrjug=",
        gambar2:"https://media.istockphoto.com/id/1142599852/id/foto/langit-dan-pantai-yang-indah-di-pulau-bintan-indonesia.jpg?s=612x612&w=0&k=20&c=jwxPSP_ZmIp3uI66XIp2NKWicx9EtFW5ZS3ADw78NDU=",
        gambar3:"https://media.istockphoto.com/id/1365190531/id/foto/foto-pemandangan-indah-di-pulau-btaam-bintan.jpg?s=612x612&w=0&k=20&c=hLAsK8ZXIc1CzAX3cRek_3anmSERtgX5BoMs4adVcXk=",
        kategori: "Alam"
    },
    {
        id: 9,
        nama: "Gili Trawangan",
        lokasi: "Nusa Tenggara Barat",
        deskripsi: "Gili Trawangan adalah yang terbesar dan paling populer dari tiga 'Gili' (pulau kecil) di lepas pantai Lombok, Nusa Tenggara Barat. Pulau ini terkenal dengan suasananya yang santai karena bebas dari kendaraan bermotor; transportasi utama adalah sepeda dan 'cidomo' (kereta kuda). Gili Trawangan menawarkan keseimbangan sempurna antara relaksasi di pantai pasir putih dengan air laut turkis yang jernih, dan kehidupan malam yang semarak di area sentral. Aktivitas populer di sini adalah snorkeling dan diving untuk melihat penyu, serta bersepeda keliling pulau.",
        gambar: "https://media.istockphoto.com/id/1785871440/id/foto/gili-trawangan-aerial-view-gili-islands-indonesia.jpg?s=612x612&w=0&k=20&c=huMp4aB_RM-iH1LzwPPAV1a-k4PP2NPss3pybSUFO5Y=",
        gambar2:"https://media.istockphoto.com/id/1130963266/id/foto/pulau-gili-perahu-ke-paradice.jpg?s=612x612&w=0&k=20&c=mirA12rno8XgvYqjJJ6zlgEUUunby7XoYT84pHSzNOM=",
        gambar3:"https://media.istockphoto.com/id/1712460785/id/foto/penyu-tempayan-di-gili-trawangan.jpg?s=612x612&w=0&k=20&c=gyGEV0mfURp6esQxHWT8Bpmt15LRhumxMIpsEoI5lCA=",
        kategori: "Alam"
    },
    {
        id: 10,
        nama: "Candi Prambanan",
        lokasi: "Yogyakarta",
        deskripsi: "Candi Prambanan, terletak di perbatasan Yogyakarta dan Jawa Tengah, adalah kompleks candi Hindu terbesar di Indonesia dan merupakan Situs Warisan Dunia UNESCO. Dibangun pada abad ke-9, candi ini didedikasikan untuk Trimurti—tiga dewa utama Hindu: Brahma (Pencipta), Wisnu (Pemelihara), dan Siwa (Pemusnah). Candi Siwa yang tertinggi (47 meter) mendominasi kompleks, dikelilingi oleh candi-candi yang lebih kecil. Relief di dinding candi menceritakan kisah epik Ramayana, yang juga sering dipentaskan dalam bentuk sendratari di panggung terbuka.",
        gambar: "https://media.istockphoto.com/id/692520370/id/foto/candi-prambanan.jpg?s=612x612&w=0&k=20&c=Vf2-yCqTbMLn-D6-7gKjK29jjFR00OdChCf2D3FA4ls=",
        gambar2:"https://media.istockphoto.com/id/915681558/id/foto/candi-prambanan.jpg?s=612x612&w=0&k=20&c=VXz1N--hzJj6MgYnVWnNQp5eDdlDJsu9iUO1G67oN3Q=",
        gambar3:"https://media.istockphoto.com/id/1223084099/id/foto/candi-prambanan.jpg?s=612x612&w=0&k=20&c=uiqPyPNoYz-gYe9hkuSuWhfcbZSR-VgrwfIxbx_aAaY=",
        kategori: "Budaya"
    },
    {
        id: 11,
        nama: "Taman Laut Bunaken",
        lokasi: "Sulawesi Utara",
        deskripsi: "Taman Nasional Laut Bunaken di Sulawesi Utara adalah surga bagi penyelam dan pecinta snorkeling, diakui secara global karena biodiversitas kelautannya yang luar biasa. Terletak di 'Segitiga Terumbu Karang', taman ini memiliki beberapa dinding karang vertikal (drop-off) terbaik di dunia, yang dipenuhi dengan ribuan spesies ikan dan terumbu karang yang berwarna-warni. Perairannya yang jernih menawarkan visibilitas yang sangat baik untuk mengamati kehidupan laut, mulai dari penyu hijau, barakuda, hingga ikan-ikan makro yang unik.",
        gambar: "https://media.istockphoto.com/id/168389000/id/foto/splitshot-diving-the-national-park-siladen-bunaken-manado-tua-indonesia.jpg?s=612x612&w=0&k=20&c=RiLgK7Dshj_A12CHXUaBYkNEYobfitctap6in_jzrt8=",
        gambar2:"https://media.istockphoto.com/id/1574267255/id/foto/bunaken-national-marine-park-sulawesi-island-celebes-indonesia.jpg?s=612x612&w=0&k=20&c=adPvxaCWlFuY7cDWESaflQwzaL4QKA54sVwOsgkiaTg=",
        gambar3:"https://media.istockphoto.com/id/1496906344/id/foto/pantai-di-pulau-siladen-di-taman-laut-nasional-bunaken-sulawesi-indonesia.jpg?s=612x612&w=0&k=20&c=zPoeAPdJc3OizDDmEWWLyFfs6CRF1rtrDzgPjKaQBVU=",
        kategori: "Alam"
    },
    {
        id: 12,
        nama: "Yogyakarta",
        lokasi: "Daerah Istimewa Yogyakarta",
        deskripsi: "Yogyakarta, atau sering disebut Jogja, adalah jantung kebudayaan dan seni di Pulau Jawa. Kota ini masih dipimpin oleh seorang Sultan yang tinggal di 'Keraton Ngayogyakarta Hadiningrat', sebuah istana megah yang berfungsi sebagai pusat budaya hidup. Jalan Malioboro adalah arteri utama kota, selalu ramai dengan penjaja batik, kerajinan perak, dan kuliner khas seperti gudeg. Yogyakarta juga merupakan basis ideal untuk menjelajahi warisan dunia seperti Candi Borobudur dan Prambanan, serta menikmati seni kontemporer dan suasana kota yang bersahaja.",
        gambar: "https://media.istockphoto.com/id/673869936/id/foto/taman-sari-water-palace-of-yogyakarta-di-pulau-jawa.jpg?s=612x612&w=0&k=20&c=s2zEvHbwTidxZqvitI0940EdxxsOesLTFBPd39OTeio=",
        gambar2:"https://media.istockphoto.com/id/1656743594/id/foto/bandara-internasional-yogyakarta-yia-merupakan-fasilitas-modern-yang-melayani-penerbangan.jpg?s=612x612&w=0&k=20&c=6VXDKRSOLy664wHNtkcbqFZPjCyL73DKYX_YLc6o7Co=",
        gambar3:"https://media.istockphoto.com/id/1266859636/id/foto/pemandangan-tugu-yogyakarta-pada-sabtu-malam.jpg?s=612x612&w=0&k=20&c=zHQS3jd0IvRJ_o8GCzSHGe0ODWpBLPxKF1ZKtZbpLZc=",
        kategori: "Budaya"
    },
    {
        id: 13,
        nama: "Gunung Rinjani",
        lokasi: "Nusa Tenggara Barat",
        deskripsi: "Gunung Rinjani di Pulau Lombok, Nusa Tenggara Barat, adalah gunung berapi aktif tertinggi kedua di Indonesia dan menjadi favorit para pendaki. Pendakian ini menantang namun sangat memuaskan, menawarkan pemandangan yang spektakuler. Daya tarik utamanya adalah kaldera raksasa yang berisi Danau Segara Anak, sebuah danau kawah berwarna biru kehijauan. Di tengah danau tersebut, muncul gunung berapi baru yang aktif bernama Gunung Barujari. Puncak Rinjani (3.726 mdpl) menawarkan pemandangan 360 derajat yang menakjubkan saat matahari terbit.",
        gambar: "https://media.istockphoto.com/id/1440965583/id/foto/pemandangan-gunung-rinjani-yang-luar-biasa-di-pulau-lombok-indonesia.jpg?s=612x612&w=0&k=20&c=iHOhBHbvYOhRcv8YphQeuYyZLxBR_zDCQxNoZOwaVf0=",
        gambar2:"https://media.istockphoto.com/id/591992956/id/foto/panorama-pemandangan-gunung-rinjani-indonesia.jpg?s=612x612&w=0&k=20&c=1DpsfAej_6Z3J689e_QVNbmDJYFvFAfjBqgEM7V04gk=",
        gambar3: "https://media.istockphoto.com/id/874887810/id/foto/lokasi-berkemah-di-pelek-kawah-gunung-rinjani-saat-matahari-terbenam-pulau-lombok-indonesia.jpg?s=612x612&w=0&k=20&c=b-b6eDkb-J68xKlcx0xGDUmRzQc3R-sfx1FRthYei-k=",
        kategori: "Alam"
    },
    {
        id: 14,
        nama: "Taman Wakatobi",
        lokasi: "Sulawesi Tenggara",
        deskripsi: "Taman Nasional Wakatobi di Sulawesi Tenggara adalah salah satu cagar biosfer dunia UNESCO dan merupakan akronim dari empat pulau utamanya: Wangi-wangi, Kaledupa, Tomia, dan Binongko. Terletak di jantung Segitiga Terumbu Karang, Wakatobi memiliki kekayaan hayati laut yang luar biasa, menjadikannya salah satu lokasi menyelam (diving) terbaik di dunia. Perairannya yang masih alami adalah rumah bagi lebih dari 750 spesies terumbu karang dan 900 spesies ikan. Selain menyelam, pengunjung dapat menikmati pantai-pantai terpencil dan mengenal budaya Suku Bajo.",
        gambar: "https://raja-wisata.com/wp-content/uploads/2018/04/Wakatobi.jpg",
        gambar2:"https://media.istockphoto.com/id/1075442454/id/foto/pemandangan-udara-pantai-tropis-pulau-karang-laut-karibia-indonesia-kepulauan-wakatobi-pulau.jpg?s=612x612&w=0&k=20&c=SwaVx6zFoELha2P81YYKNQfCVek43Wbc9NlpL5DOG6s=",
        gambar3:"https://media.istockphoto.com/id/153971297/id/foto/terumbu.jpg?s=612x612&w=0&k=20&c=xN0HxglejFomN29j1EeALJG2YqVCNjaJcwFOqWbaXAU=",
        kategori: "Alam"
    },
    {
        id: 15,
        nama: "Labuan Bajo",
        lokasi: "Nusa Tenggara Timur",
        deskripsi: "Labuan Bajo adalah sebuah kota pelabuhan yang berkembang pesat di ujung barat Pulau Flores, Nusa Tenggara Timur. Kota ini berfungsi sebagai pintu gerbang utama (gateway) untuk menjelajahi keajaiban Taman Nasional Komodo, termasuk Pulau Komodo, Pulau Rinca, dan Pulau Padar. Labuan Bajo sendiri terkenal dengan pemandangan matahari terbenamnya yang spektakuler dari berbagai titik di perbukitan. Dari pelabuhannya, wisatawan memulai 'liveaboard' atau tur harian untuk trekking melihat komodo, snorkeling dengan pari manta, dan mendaki Pulau Padar.",
        gambar: "https://media.istockphoto.com/id/1489683662/id/foto/pulau-kelor-adalah-salah-satu-perhentian-saat-menjelajahi-taman-nasional-komodo.jpg?s=612x612&w=0&k=20&c=afc_dq-ncLKh9ZNcCgLJ3QZgT1zKiARrwozavpGgC4Y=",
        gambar2:"https://media.istockphoto.com/id/1247852913/id/foto/pemandangan-udara-pink-beach-pulau-komodo-indonesia.jpg?s=612x612&w=0&k=20&c=CDPCos7SgM5Fmm1Q7_4Tc5gOcY6HOXj7GezSJ2_o8cs=",
        gambar3:"https://media.istockphoto.com/id/472831484/id/foto/pegunungan-di-taman-nasional-komodo-di-indonesia.jpg?s=612x612&w=0&k=20&c=u_jZPeZdb6T8ytVSRmaJJOTfmfvFVGyXcgKZ969N2NQ=",
        kategori: "Alam"
    },
    {
        id: 16,
        nama: "Raja Ampat",
        lokasi: "Papua",
        deskripsi: "Raja Ampat di Papua Barat Daya sering dijuluki sebagai 'surga terakhir' di bumi, terutama karena keanekaragaman hayati lautnya yang tak tertandingi. Kepulauan ini merupakan 'pabrik' spesies di pusat Segitiga Terumbu Karang, menawarkan pengalaman menyelam dan snorkeling paling magis di dunia. Di atas permukaan, pemandangannya tidak kalah menakjubkan, terutama di Piaynemo dan Wayag, di mana gugusan pulau-pulau karst (batu kapur) menjulang dari perairan biru toska yang jernih, menciptakan lanskap yang sureal dan menakjubkan.",
        gambar: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFqYSUyMGFtcGF0fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
        gambar2:"https://media.istockphoto.com/id/511514094/id/foto/lanskap-wayag.jpg?s=612x612&w=0&k=20&c=yp0l1XGAiB7Cjj4g29j_JcD0v492cK7Pde-fI8LQ0r4=",
        gambar3:"https://media.istockphoto.com/id/1011978506/id/foto/kepulauan-dan-laguna-yang-indah-di-wayag-raja-ampat.jpg?s=612x612&w=0&k=20&c=dyWe8QQAhnzjYzPKIiz2R7CeJFNCpfBNTBppnNOqi98=", 
        kategori: "Alam"
    },
    {
        id: 17,
        nama: "Ubud",
        lokasi: "Bali",
        deskripsi: "Ubud, terletak di dataran tinggi Bali, dianggap sebagai pusat budaya dan spiritual Pulau Dewata. Berbeda dengan area pantai selatan yang ramai, Ubud menawarkan suasana yang lebih tenang dan damai, dikelilingi oleh sawah terasering yang hijau dan hutan rimbun. Tempat ini adalah rumah bagi banyak galeri seni, studio kerajinan, dan pusat yoga serta retret kesehatan. Atraksi populer termasuk Teras Sawah Tegalalang, Monkey Forest yang sakral, Istana Ubud (Puri Saren Agung), dan pasar seni tradisional tempat membeli kerajinan tangan lokal.",
        gambar: "https://plus.unsplash.com/premium_photo-1669317566483-d3327adeda10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWJ1ZCUyMGJhbGl8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        gambar2:"https://media.istockphoto.com/id/1469116195/id/foto/sawah-terasering-bali-indonesia.jpg?s=612x612&w=0&k=20&c=AMasppqsyshihopN2mqdxAirqSTgmTsR08ZuDM6ORaU=",
        gambar3:"https://media.istockphoto.com/id/510637324/id/foto/kuil-teratai-di-pagi-hari.jpg?s=612x612&w=0&k=20&c=rGIvvOIBA9UBZYCR7dxx16HGyVCkdt0pa2xYYUMNXSE=", 
        kategori: "Alam"
    },
    {
        id: 18,
        nama: "Candi Borobudur",
        lokasi: "Jawa Tengah",
        deskripsi: "Candi Borobudur di Magelang, Jawa Tengah, adalah candi Buddha terbesar di dunia dan merupakan Situs Warisan Dunia UNESCO yang monumental. Dibangun pada abad ke-9 pada masa Dinasti Syailendra, struktur megah ini berbentuk stupa raksasa yang terdiri dari sembilan teras, dihiasi dengan ribuan panel relief yang menceritakan ajaran Buddha dan 504 arca Buddha. Mengunjungi Borobudur saat matahari terbit adalah pengalaman magis, di mana pengunjung dapat menyaksikan kabut perlahan terangkat dari perbukitan sekitarnya dan sinar matahari pertama menerangi stupa.",
        gambar: "https://images.unsplash.com/photo-1620549146396-9024d914cd99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuZGklMjBib3JvYnVkdXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        gambar2:"http://media.istockphoto.com/id/1398281904/id/foto/pagi-hari-di-candi-borobudur.jpg?s=612x612&w=0&k=20&c=BkzmypNBPh_Or76ceZ-eMnIibYyqz0_S_Rm8heZka3Q=",
        gambar3:"https://media.istockphoto.com/id/181867155/id/foto/borobudur-candi-sunrise-di-jawa-indonesia.jpg?s=612x612&w=0&k=20&c=QRlROy_RfvPJBEv5r8l_XluYkGInDws14e5snO52Gp4=", 
        kategori: "Budaya"
    },
];