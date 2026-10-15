const profil = {
  nama: "Nirmala Dwi Astuti",
  nim: "H0725322",
  prodi: "Pendidikan Teknologi Informasi",
  kampus: "Universitas Sulawesi Barat",
  email: "nirmalailaa915@gmail.com",
  github: "https://github.com/nirmala-dwi-astuti"
};
const destinasi = [
  {
    id: "palippis",
    nama: "Pantai Palippis",
    lokasi: "Polewali Mandar",
    jenis: "Pantai",
    ikon: "bi-water",
    gambar: "img/palippis.jpg",
    ringkas: "Pantai dengan hamparan laut luas, cocok untuk bersantai bersama keluarga.",
    deskripsi: "Pantai Palippis berada di Kabupaten Polewali Mandar dan dikenal sebagai salah satu pantai favorit warga Sulawesi Barat. Suasananya santai dengan garis pantai yang panjang, sehingga nyaman untuk berjalan sore, menikmati kuliner lokal, atau sekadar duduk menatap laut.",
    fasilitas: ["Area parkir", "Warung makan", "Gazebo", "Toilet umum"],
    tips: ["Datang sore hari untuk suasana lebih teduh", "Bawa topi dan tabir surya", "Bawa pulang sampahmu"]
  },
  {
    id: "karampuang",
    nama: "Pulau Karampuang",
    lokasi: "Mamuju",
    jenis: "Pulau",
    ikon: "bi-tropical-storm",
    gambar: "img/karampuang.jpg",
    ringkas: "Pulau kecil dengan air laut jernih, populer untuk snorkeling dan berfoto.",
    deskripsi: "Pulau Karampuang terletak tidak jauh dari pesisir Kota Mamuju dan dapat dicapai dengan perahu. Perairan di sekitarnya jernih sehingga banyak dikunjungi untuk snorkeling dan menikmati pemandangan.",
    fasilitas: ["Perahu penyeberangan", "Area snorkeling", "Warung sederhana"],
    tips: ["Pastikan cuaca dan ombak aman sebelum berangkat", "Siapkan uang tunai", "Gunakan pelampung saat berenang"]
  },
  {
    id: "dato",
    nama: "Pantai Dato",
    lokasi: "Majene",
    jenis: "Pantai",
    ikon: "bi-sunset",
    gambar: "img/dato.jpg",
    ringkas: "Pantai dekat kota Majene yang terkenal dengan matahari terbenamnya.",
    deskripsi: "Pantai Dato berada di Kabupaten Majene dan mudah dijangkau dari pusat kota. Tempat ini ramai pada sore hari ketika warga datang menikmati matahari terbenam, bermain di pantai, dan menikmati jajanan di sekitarnya.",
    fasilitas: ["Area parkir", "Pedagang jajanan", "Tempat duduk"],
    tips: ["Waktu terbaik menjelang matahari terbenam", "Hati-hati saat berenang, perhatikan arus", "Bawa ponsel dengan baterai penuh"]
  },
  {
    id: "manakarra",
    nama: "Pantai Manakarra",
    lokasi: "Mamuju",
    jenis: "Pantai",
    ikon: "bi-buildings",
    gambar: "img/manakarra.jpg",
    ringkas: "Ruang publik tepi laut di Kota Mamuju, ramai saat sore dan malam.",
    deskripsi: "Pantai Manakarra adalah kawasan tepi laut di Kota Mamuju yang berfungsi sebagai ruang publik. Warga berkumpul di sini untuk berolahraga, berkuliner, dan menikmati suasana kota di tepi laut.",
    fasilitas: ["Area pejalan kaki", "Kuliner tepi pantai", "Area parkir", "Toilet umum"],
    tips: ["Cocok dikunjungi sore hingga malam", "Coba kuliner lokal di sekitar lokasi", "Parkir di area yang disediakan"]
  }
];

document.querySelectorAll("[data-profil]").forEach(function (el) {
  const kunci = el.getAttribute("data-profil");
  if (profil[kunci]) el.textContent = profil[kunci];
});
document.querySelectorAll("[data-href-profil]").forEach(function (el) {
  const kunci = el.getAttribute("data-href-profil");
  el.href = kunci === "email" ? "mailto:" + profil.email : profil[kunci];
});

function kartuDestinasi(d, kolom) {
  return '<div class="' + kolom + '">' +
    '<div class="card kartu-wisata h-100">' +
      '<div class="thumb"><i class="bi ' + d.ikon + '"></i>' +
        '<img src="' + d.gambar + '" alt="' + d.nama + '" onerror="this.style.display=\'none\'"></div>' +
      '<div class="card-body">' +
        '<span class="badge rounded-pill badge-aksen mb-2">' + d.jenis + '</span>' +
        '<h5 class="card-title">' + d.nama + '</h5>' +
        '<p class="small text-body-secondary mb-2"><i class="bi bi-geo-alt"></i> ' + d.lokasi + '</p>' +
        '<p class="card-text text-body-secondary">' + d.ringkas + '</p>' +
      '</div>' +
      '<div class="card-footer bg-transparent border-0 pb-3">' +
        '<a href="detail.html?id=' + d.id + '" class="btn btn-sm btn-aksen">Lihat Detail <i class="bi bi-arrow-right"></i></a>' +
      '</div></div></div>';
}

// ---------------------- BAGIAN 3: VALIDASI LOGIN ----------------------
if (document.getElementById("formLogin")) {
  const form = document.getElementById("formLogin");
  const pesan = document.getElementById("pesan");

  // Tiap field punya: elemen input, elemen pesan error, dan fungsi pengecek.
  // Fungsi pengecek mengembalikan teks error, atau "" jika valid.
  const aturan = [
    {
      input: document.getElementById("identitas"),
      error: document.getElementById("errIdentitas"),
      cek: function (v) {
        v = v.trim();
        if (v === "") return "Username atau email tidak boleh kosong.";
        if (v.includes("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Format email tidak valid.";
        if (!v.includes("@") && v.length < 4) return "Username minimal 4 karakter.";
        return "";
      }
    },
    {
      input: document.getElementById("password"),
      error: document.getElementById("errPassword"),
      cek: function (v) {
        if (v === "") return "Password tidak boleh kosong.";
        if (v.length < 8) return "Password minimal 8 karakter.";
        if (!/[A-Za-z]/.test(v) || !/[0-9]/.test(v)) return "Password harus mengandung huruf dan angka.";
        return "";
      }
    }
  ];

  function periksa(a) {
    const teks = a.cek(a.input.value);
    a.input.classList.toggle("is-invalid", teks !== "");
    a.input.classList.toggle("is-valid", teks === "");
    a.error.textContent = teks;
    return teks === "";
  }

  function alertBs(jenis, isi) {
    pesan.innerHTML = '<div class="alert alert-' + jenis + ' alert-dismissible fade show" role="alert">' + isi +
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Tutup"></button></div>';
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // form tidak diproses kalau ada yang tidak valid
    
    const semuaValid = aturan.map(periksa).every(Boolean);
    if (semuaValid) {
      alertBs("success", "<strong>Berhasil!</strong> Semua isian memenuhi validasi.");
      form.reset();
      aturan.forEach(function (a) { a.input.classList.remove("is-valid"); });
    } else {
      alertBs("danger", "<strong>Gagal.</strong> Periksa isian yang ditandai merah.");
    }
  });

  aturan.forEach(function (a) { a.input.addEventListener("input", function () { periksa(a); }); });

  document.getElementById("lihat").addEventListener("change", function () {
    document.getElementById("password").type = this.checked ? "text" : "password";
  });
}
