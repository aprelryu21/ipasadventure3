// ================= CUSTOM WEB SPLASH SCREEN =================
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('voxel-splash');
    
    if (splashScreen) {
        // Tahan splash screen selama 3 detik untuk menyesuaikan dengan animasi CSS XP Bar
        setTimeout(() => {
            // Tambahkan kelas untuk memicu animasi dissolve (memudar)
            splashScreen.classList.add('hide-splash');
            
            // Hapus elemen dari memori agar tidak memberatkan HP siswa setelah 1 detik
            setTimeout(() => {
                splashScreen.remove();
            }, 1000); 
        }, 3000); // 3000ms = 3 detik
    }
});

// ================= AUDIO (Musik Latar) =================
const bgmIntro = new Audio('assets/music/music-intro.mp3');
bgmIntro.loop = true;  
bgmIntro.volume = 0.5; 

const bgmMission = new Audio('assets/music/music-mission.mp3');
bgmMission.loop = true;
bgmMission.volume = 0.4; // Sedikit lebih pelan agar tidak mengganggu saat siswa membaca soal

const bgmBoss = new Audio('assets/music/music-boss.mp3');
bgmBoss.loop = true;
bgmBoss.volume = 0.4; // Volume disamakan dengan musik misi

// Musik Khusus Ruang UKS (Hukuman)
const bgmUKS = new Audio('assets/music/music-uks.mp3');
bgmUKS.loop = true;
bgmUKS.volume = 0.4;

// Suara Berisik Radio (Tahap 3)
const sfxRadio = new Audio('assets/sound/radio.mp3');
sfxRadio.loop = true;
sfxRadio.volume = 0.6;

/* --- Efek Suara Jawaban & Tangkapan --- */
const sfxBenar = new Audio('assets/sound/benar.mp3');
const sfxSalah = new Audio('assets/sound/salah.mp3');
const sfxTangkap = new Audio('assets/sound/tangkap.mp3');
const sfxNotTangkap = new Audio('assets/sound/nottangkap.mp3');

// Trik melewati blokir Autoplay Browser: Putar musik saat klik pertama di layar
let isMusicPlaying = false;
document.body.addEventListener('click', () => {
    if (!isMusicPlaying) {
        bgmIntro.play().catch(err => console.log("Musik diblokir browser: " + err));
        isMusicPlaying = true;
    }
});

// ================= JAVASCRIPT (Logika Interaksi) =================

// Variabel Fisika Peta (Harus dideklarasikan di awal agar bisa diakses semua tombol)
const mapViewport = document.getElementById('map-viewport');
const mapContent = document.getElementById('map-content');
let scale = 1, currentX = 0, currentY = 0, isDragging = false, startX, startY;
function updateMapTransform() {
    if(mapContent) mapContent.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
}

const titleScreen = document.getElementById('title-screen');
const mapScreen = document.getElementById('map-screen');
const btnMulai = document.getElementById('btn-mulai');
const btnKembali = document.getElementById('btn-kembali');

// Mengambil 8 ID Pin Kecamatan
const pinKandangan = document.getElementById('pin-kandangan');
const pinKepung = document.getElementById('pin-kepung');
const pinBadas = document.getElementById('pin-badas');
const pinPuncu = document.getElementById('pin-puncu');
const pinPare = document.getElementById('pin-pare');
const pinGurah = document.getElementById('pin-gurah');
const pinPagu = document.getElementById('pin-pagu');
const pinNgasem = document.getElementById('pin-ngasem');

const btnFullscreen = document.getElementById('btn-fullscreen');

// Ikon SVG Voxel untuk Fullscreen
const iconEnter = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M2 2h6v2H4v4H2V2zm8 0h6v6h-2V4h-4V2zm4 8h2v6h-6v-2h4v-4zM2 10h2v4h4v2H2v-6z"/></svg>`;
const iconExit = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 6H0V4h4V0h2v6zm4 0h6V4h-4V0h-2v6zm0 4h6v2h-4v4h-2v-6zm-4 0H0v2h4v4h2v-6z"/></svg>`;

// Fungsi Fullscreen dengan Penyimpanan Memori Lokal
btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => console.log(err));
        } else if (document.documentElement.webkitRequestFullscreen) { /* Untuk Safari / iPhone */
            document.documentElement.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Untuk Safari / iPhone */
            document.webkitExitFullscreen();
        }
    }
});

// Listener pendeteksi perubahan layar penuh yang sesungguhnya (Menangani tombol ESC keyboard)
['fullscreenchange', 'webkitfullscreenchange'].forEach(evt => {
    document.addEventListener(evt, () => {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            btnFullscreen.innerHTML = iconExit; 
            localStorage.setItem('gameFullscreen', 'true');
        } else {
            btnFullscreen.innerHTML = iconEnter; 
            localStorage.setItem('gameFullscreen', 'false');
        }
    });
});

// ================= PENGEMBALIAN FULLSCREEN OTOMATIS SAAT PINDAH HALAMAN =================
function restoreMainFullscreen() {
    if (localStorage.getItem('gameFullscreen') === 'true' && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.log(err));
        btnFullscreen.innerHTML = iconExit;
    }
    // Hapus pancingan setelah diklik agar tidak memberatkan browser
    document.removeEventListener('click', restoreMainFullscreen);
    document.removeEventListener('touchstart', restoreMainFullscreen);
}
// Pasang pancingan klik tersembunyi ke seluruh layar
if (localStorage.getItem('gameFullscreen') === 'true') {
    document.addEventListener('click', restoreMainFullscreen);
    document.addEventListener('touchstart', restoreMainFullscreen);
}

// Naskah Raja Kediri
const naskahRajaKediri = [
    { text: "Selamat datang, para petualang muda yang pemberani! Aku adalah Raja Kediri.", mood: "happy" },
    { text: "Kalian terpilih untuk menjalani misi suci ini. Petualangan yang akan mengasah kemampuan kalian dalam memahami Ilmu Pengetahuan Alam dan Sosial (IPAS) Kelas 3.", mood: "neutral" },
    { text: "Sembari belajar dan mengasah ilmu, aku akan menugaskan kalian berkeliling mengenal kehebatan Kabupaten Kediri yang kita cintai ini!", mood: "happy" },
    { text: "Perjalanan epik kalian akan dimulai dari ujung timur, yaitu Kecamatan Kandangan, hingga berakhir di jantung pusat kerajaan kita, Kecamatan Ngasem.", mood: "thinking" },
    { text: "Di setiap kecamatan, bersiaplah menemukan rahasia materi yang terkandung dalam buku IPAS kalian, mulai dari Bab 1 hingga Bab 8.", mood: "neutral" },
    { text: "Namun berhati-hatilah, ujian berat menanti di sana! Kumpulkan keberanianmu, dan mulailah petualangan ini sekarang juga!", mood: "warning" }
];

// Naskah Kandangan (Dipindah ke atas agar terbaca oleh sistem sebelum diklik)
const naskahNagata = [
    { text: "Salam, Pahlawan Cilik! Selamat datang di wilayah misterius Kandangan!", mood: "neutral" },
    { text: "Di Bab 1 ini, kita akan mengungkap sihir dari 'Keajaiban Tubuhku', dan mempelajari kekuatan Panca Indra manusia.", mood: "happy" },
    { text: "Lihat gulungan peta di belakangku? Area yang menyala adalah misimu. Selesaikan berurutan agar segel area selanjutnya terbuka!", mood: "neutral" },
    { text: "Kumpulkan Koin Emas sebanyak-banyaknya dengan menjawab tantangan secara tepat.", mood: "happy" },
    { text: "Namun waspadalah! Kristal Nyawamu (Hati Merah) hanya ada 5. Jika kamu salah melangkah, kristal itu akan hancur!", mood: "warning" },
    { text: "Kehabisan kristal nyawa akan membawamu ke ruang Hukuman Bayangan! Semoga berhasil, Pahlawan!", mood: "sad" }
];

// Pindah ke Peta Kabupaten Kediri (Melalui Dialog Raja Kediri dengan Cooldown 2 Jam)
btnMulai.addEventListener('click', () => {
    titleScreen.classList.remove('active');
    mapScreen.classList.add('active');

    // Fungsi Pembuka Peta (Disimpan agar bisa dipanggil ganda)
    const showKediriMap = () => {
        const kediriMapLayout = document.getElementById('kediri-map-layout');
        kediriMapLayout.classList.add('animate-map-reveal');
        
        const vw = mapViewport.clientWidth, vh = mapViewport.clientHeight;
        const cw = mapContent.clientWidth, ch = mapContent.clientHeight;
        
        // 1. Tampilkan peta secara utuh di tengah layar (Bird-eye view)
        scale = 0.35; // Diperkecil maksimal agar seluruh wilayah Kabupaten Kediri terlihat penuh
        currentX = (vw / 2) - (cw / 2);
        currentY = (vh / 2) - (ch / 2);
        
        mapContent.style.transition = 'none'; // Langsung menempatkan posisi tanpa dianimasikan
        updateMapTransform();
        
        // 2. Beri jeda agar user bisa memandangi peta utuh, lalu luncurkan kamera ke Kandangan
        setTimeout(() => {
            const leftPct = parseFloat(pinKandangan.style.left) / 100;
            const topPct = parseFloat(pinKandangan.style.top) / 100;

            scale = 1.6; // Tingkat Zoom mendekat
            currentX = (vw / 2) - (cw / 2) - ((cw * leftPct) - (cw / 2)) * scale;
            currentY = (vh / 2) - (ch / 2) - ((ch * topPct) - (ch / 2)) * scale;

            // Animasi sinematik bergerak lambat dan mulus selama 2.5 detik
            mapContent.style.transition = 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)';
            updateMapTransform();

            // Setelah kamera sampai tujuan, kembalikan ke pengaturan sentuhan agar user bisa geser-geser lagi
            setTimeout(() => { mapContent.style.transition = 'transform 0.2s ease-out'; }, 2500);
        }, 1200); // 1.2 detik jeda memandang peta utuh
    };

    // Cek apakah dialog Raja Kediri sudah pernah diselesaikan
    const isRajaDone = localStorage.getItem('dialog_raja_done');

    // Jika belum pernah melihat dialog
    if (!isRajaDone) {
        setTimeout(() => {
            startVnDialog(naskahRajaKediri, "Raja Kediri", "npc0", () => {
                // Simpan stempel permanen ke memori
                localStorage.setItem('dialog_raja_done', 'true');
                showKediriMap(); // Buka peta
            });
        }, 100); 
    } else {
        // Jika sudah pernah, lewati dialog selamanya dan langsung buka peta!
        setTimeout(() => {
            showKediriMap();
        }, 100);
    }
});

// Kembali ke Layar Utama
btnKembali.addEventListener('click', () => {
    mapScreen.classList.remove('active');
    titleScreen.classList.add('active');
    hudDisplay.style.display = 'none'; // Kunci ganda pembersihan HUD
});

// ================= INTERAKSI PIN PETA KABUPATEN =================
// Ikon Peta Terbuka (Kandangan)
const mapIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M2 2h4v12H2V2zm6 0h6v12H8V2z"/></svg>`;
// Ikon Info/Pengembangan Voxel
const devIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 5h2v2H7V5zm0 3h2v3H7V8z"/></svg>`;

// ================= SISTEM TRANSISI UNIVERSAL (PERSONA x VOXEL) =================
const introScreen = document.getElementById('intro-screen');
const transBab = document.getElementById('trans-bab');
const transTitle = document.getElementById('trans-title');
const districtScreen = document.getElementById('district-screen'); // Layar Universal

// Mesin Pemutar Transisi (Bisa dipanggil kapan saja, dengan teks apa saja)
function playTransition(text1, text2, midpointAction) {
    // Ubah teks sesuai parameter
    transBab.innerText = text1;
    transTitle.innerText = text2;
    
    introScreen.style.display = 'flex';
    introScreen.classList.remove('exit');
    introScreen.classList.add('active');
    
    // Tepat di 600ms (Saat layar tertutup gelap total), jalankan perpindahan peta
    setTimeout(() => {
        midpointAction();
    }, 600); 

    // Setelah teks selesai pamer (2.3 detik), mainkan pisau keluar
    setTimeout(() => {
        introScreen.classList.remove('active');
        introScreen.classList.add('exit');
        
        setTimeout(() => {
            introScreen.style.display = 'none';
            introScreen.classList.remove('exit');
        }, 800);
    }, 2300);
}

// ================= FUNGSI MEMUAT PROGRESS MISI KANDANGAN =================
function loadKandanganProgress() {
    // Daftar nama misi untuk label di peta
    const missionLabels = {
        2: "Fungsi Utama Pancaindra",
        3: "Bagian Pancaindra",
        4: "Merawat Pancaindra",
        5: "Tantangan Rahasia",
        6: "Ujian Akhir Kandangan"
    };

    // Mesin Otomatis Pengecek Gembok (Misi 2 sampai 6)
    for (let i = 2; i <= 6; i++) {
        if (localStorage.getItem(`kandangan_misi_${i}`) === 'unlocked') {
            const pinMisi = document.getElementById(`misi-${i}`);
            if(pinMisi) {
                pinMisi.classList.remove('locked-pin');
                pinMisi.classList.add('active-pin');
                pinMisi.querySelector('.pin-label').innerHTML = `Misi ${i}:<br>${missionLabels[i]}`;
            }
        }
    }
}

// ================= FUNGSI MASUK KE PETA KECAMATAN (UNIVERSAL BAB 1 - 8) =================
const districtData = {
    'kandangan': { bab: "BAB 1", title: "KEAJAIBAN TUBUHKU", bg: "maps-kandangan.webp", mapTitle: "KANDANGAN" },
    'kepung': { bab: "BAB 2", title: "DAHULU, KINI, DAN NANTI", bg: "maps-kepung.webp", mapTitle: "KEPUNG" },
    'badas': { bab: "BAB 3", title: "PEDULI DAN BERBAGI", bg: "maps-badas.webp", mapTitle: "BADAS" },
    'puncu': { bab: "BAB 4", title: "SIKLUS HIDUP YANG MENAKJUBKAN", bg: "maps-puncu.webp", mapTitle: "PUNCU" },
    'pare': { bab: "BAB 5", title: "BIJAK BERBELANJA KEBUTUHAN", bg: "maps-pare.webp", mapTitle: "PARE" },
    'gurah': { bab: "BAB 6", title: "ENERGI, SANG PEMBERI KEKUATAN", bg: "maps-gurah.webp", mapTitle: "GURAH" },
    'pagu': { bab: "BAB 7", title: "JEJAK PENJELAJAHAN", bg: "maps-pagu.webp", mapTitle: "PAGU" },
    'ngasem': { bab: "BAB 8", title: "RAHASIA TIGA WUJUD ZAT", bg: "maps-ngasem.webp", mapTitle: "NGASEM" }
};

function openDistrictMap(districtId) {
    const data = districtData[districtId];
    
    showCustomModal(
        `${data.bab}: ${data.mapTitle}`, 
        `Materi: ${data.title}. Ayo jelajahi wilayah ${data.mapTitle}!`, 
        mapIcon, 
        "confirm", 
        () => {
            playTransition(data.bab, data.title, () => {
                mapScreen.classList.remove('active');
                districtScreen.classList.add('active');
                
                // Set Latar Belakang & Layer Titik Misi Dinamis
                levelContent.style.backgroundImage = `url('assets/background/${data.bg}')`;
                
                // Matikan semua layer, lalu nyalakan layer kecamatan yang sedang diklik
                document.querySelectorAll('.district-layer').forEach(layer => layer.style.display = 'none');
                document.getElementById(`layer-${districtId}`).style.display = 'block';
                
                // Aktifkan HUD
                currentChapter = districtId;
                hudDisplay.style.display = 'flex';
                updateLivesHUD(); 

                const vw = levelViewport.clientWidth, vh = levelViewport.clientHeight;
                const cw = levelContent.clientWidth, ch = levelContent.clientHeight;

                // Tampilkan peta utuh secara seketika (Bird-eye view)
                lvlScale = 0.3; 
                lvlX = (vw / 2) - (cw / 2);
                lvlY = (vh / 2) - (ch / 2);
                levelContent.style.transition = 'none';
                updateLvlTransform();

                // Animasi Kamera Masuk Mulus setelah layar hitam terbuka
                setTimeout(() => {
                    // Default zoom ke tengah jika belum ada misi (Bab 2-8), 
                    // Untuk Bab 1 (Kandangan) zoom langsung menukik ke Misi 1
                    let targetEl = document.getElementById('misi-1');
                    let leftPct = 0.5, topPct = 0.5;
                    
                    if (districtId === 'kandangan' && targetEl) {
                        leftPct = parseFloat(targetEl.style.left) / 100;
                        topPct = parseFloat(targetEl.style.top) / 100;
                    }

                    lvlScale = 1.6; 
                    lvlX = (vw / 2) - (cw / 2) - ((cw * leftPct) - (cw / 2)) * lvlScale;
                    lvlY = (vh / 2) - (ch / 2) - ((ch * topPct) - (ch / 2)) * lvlScale;

                    levelContent.style.transition = 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)';
                    updateLvlTransform();

                    setTimeout(() => { levelContent.style.transition = 'transform 0.2s ease-out'; }, 2500);
                }, 2800);

                // Muat progres dan sapaan NPC (Sistem membaca memori)
                if(districtId === 'kandangan') {
                    loadKandanganProgress();
                    const isNagataDone = localStorage.getItem('dialog_nagata_done');
                    if (!isNagataDone) {
                        setTimeout(() => {
                            startVnDialog(naskahNagata, "Petualang Nagata", "npc1", () => {
                                localStorage.setItem('dialog_nagata_done', 'true');
                            });
                        }, 5500); 
                    }
                }
            });
        }
    );
}

// ================= PASANG MESIN KE 8 PIN KABUPATEN =================
pinKandangan.addEventListener('click', () => openDistrictMap('kandangan'));
pinKepung.addEventListener('click', () => openDistrictMap('kepung'));
pinBadas.addEventListener('click', () => openDistrictMap('badas'));
pinPuncu.addEventListener('click', () => openDistrictMap('puncu'));
pinPare.addEventListener('click', () => openDistrictMap('pare'));
pinGurah.addEventListener('click', () => openDistrictMap('gurah'));
pinPagu.addEventListener('click', () => openDistrictMap('pagu'));
pinNgasem.addEventListener('click', () => openDistrictMap('ngasem'));


// ================= LOGIKA PENGATURAN & KREDIT =================
const settingsScreen = document.getElementById('settings-screen');
const btnPengaturan = document.getElementById('btn-pengaturan');
const btnBackSettings = document.getElementById('btn-back-settings');

const toggleBgm = document.getElementById('toggle-bgm');
const volumeBgm = document.getElementById('volume-bgm');
const toggleSfx = document.getElementById('toggle-sfx');
const btnResetData = document.getElementById('btn-reset-data');

const btnCredit = document.getElementById('btn-credit');
const creditPopup = document.getElementById('credit-popup');
const btnCloseCredit = document.getElementById('btn-close-credit');

let sfxEnabled = true;

// Buka/Tutup Pengaturan (Sebagai Overlay / Pop-up)
btnPengaturan.addEventListener('click', () => {
    settingsScreen.classList.add('active');
});
btnBackSettings.addEventListener('click', () => {
    settingsScreen.classList.remove('active');
});

// Kontrol Musik Latar (ON/OFF)
toggleBgm.addEventListener('click', () => {
    if (bgmIntro.muted) {
        bgmIntro.muted = false;
        bgmMission.muted = false;
        bgmBoss.muted = false;
        bgmUKS.muted = false;
        toggleBgm.innerText = "ON";
        toggleBgm.className = "btn btn-toggle on";
    } else {
        bgmIntro.muted = true;
        bgmMission.muted = true;
        bgmBoss.muted = true;
        bgmUKS.muted = true;
        toggleBgm.innerText = "OFF";
        toggleBgm.className = "btn btn-toggle off";
    }
});

// Slider Volume Musik
volumeBgm.addEventListener('input', (e) => {
    const vol = e.target.value;
    bgmIntro.volume = vol;
    bgmMission.volume = vol * 0.8; // Menyesuaikan agar misi sedikit lebih pelan
    bgmBoss.volume = vol * 0.8;
    bgmUKS.volume = vol * 0.8; // Tambahkan kontrol volume untuk UKS
});

// Kontrol Efek Suara (Persiapan untuk fitur SFX nanti)
toggleSfx.addEventListener('click', () => {
    sfxEnabled = !sfxEnabled;
    if (sfxEnabled) {
        toggleSfx.innerText = "ON";
        toggleSfx.className = "btn btn-toggle on";
    } else {
        toggleSfx.innerText = "OFF";
        toggleSfx.className = "btn btn-toggle off";
    }
});

// ================= MESIN CUSTOM POP-UP (ALERT & CONFIRM) =================
const customModal = document.getElementById('custom-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const btnModalCancel = document.getElementById('btn-modal-cancel');
const btnModalConfirm = document.getElementById('btn-modal-confirm');

let confirmCallback = null;
window.pendingUKS = false; // Penanda khusus untuk menahan Pop-up Hukuman UKS

// Fungsi Ajaib untuk memanggil Pop-up dari mana saja!
function showCustomModal(title, message, iconSvg, type = 'confirm', callback = null) {
    modalTitle.innerHTML = `${iconSvg} ${title}`;
    modalMessage.innerText = message;
    
    // Menambahkan logika warna merah untuk "error"
    if (type === 'alert' || type === 'error') {
        btnModalCancel.style.display = 'none'; 
        btnModalConfirm.innerText = 'OK, PAHAM';
        btnModalConfirm.style.backgroundColor = type === 'error' ? '#ff4757' : '#2ed573'; 
        modalTitle.style.color = type === 'error' ? '#ff4757' : '#2ed573';
    } else {
        btnModalCancel.style.display = 'block';
        btnModalConfirm.innerText = 'YA, MASUK'; // Diubah teksnya agar lebih ramah konteks
        btnModalConfirm.style.backgroundColor = '#2ed573'; 
        modalTitle.style.color = '#FFea00'; // Warna kuning agar tidak terkesan bahaya seperti hapus data
    }

    confirmCallback = callback;
    customModal.classList.add('active'); // Munculkan pop-up!
}

// Logika ketika tombol dalam Pop-up ditekan
btnModalCancel.addEventListener('click', () => {
    customModal.classList.remove('active');
    confirmCallback = null;
});

btnModalConfirm.addEventListener('click', () => {
    customModal.classList.remove('active');
    
    let originalCallback = confirmCallback;
    confirmCallback = null;

    // CEGAT ALUR! Jika nyawa habis, jalankan UKS dulu sebelum game dilanjutkan
    if (window.pendingUKS && !modalTitle.innerText.includes("NYAWA HABIS") && !modalTitle.innerText.includes("PULIH") && !modalTitle.innerText.includes("SALAH RAMUAN")) {
        window.pendingUKS = false;
        triggerRecoveryQuiz(originalCallback);
        return;
    }

    if (originalCallback) originalCallback(); 
});

// ================= PENGGUNAAN POP-UP PADA TOMBOL RESET =================
btnResetData.addEventListener('click', () => {
    // Ikon Tempat Sampah Voxel
    const trashIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h4v2H2V2h4V0zM4 6v10h8V6H4zm2 2h1v6H6V8zm3 0h1v6H9V8z"/></svg>`;
    // Ikon Centang (Checkmark) Voxel
    const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;

    // Panggil Pop-up Konfirmasi (Warna akan kita ubah SETELAH fungsi ini dipanggil)
    showCustomModal(
        "PERINGATAN!", 
        "Apakah Anda yakin ingin menghapus seluruh data dan skor? Data yang dihapus tidak dapat dikembalikan.", 
        trashIcon, 
        "confirm", 
        () => {
            // Logika yang terjadi jika guru menekan "YA"
            localStorage.clear();
            
            // Beri jeda 0.3 detik sebelum memunculkan pop-up pemberitahuan berhasil
            setTimeout(() => {
                showCustomModal("BERHASIL", "Seluruh data permainan berhasil dihapus!", checkIcon, "alert", () => {
                    window.location.reload(); // Paksa muat ulang halaman agar koin & map kembali seperti baru
                });
            }, 300);
        }
    );
    // Mengembalikan gaya khusus hapus data
    btnModalConfirm.innerText = 'YA, HAPUS';
    btnModalConfirm.style.backgroundColor = '#ff4757';
    modalTitle.style.color = '#ff4757'; // Pindahkan ke sini agar warna merahnya tidak tertimpa!
});

// ================= LOGIKA INFORMASI & KREDIT =================
const infoScreen = document.getElementById('info-screen');
const btnInformasi = document.getElementById('btn-informasi');
const btnBackInfo = document.getElementById('btn-back-info');
const btnInstallApk = document.getElementById('btn-install-apk');
const btnInstallExe = document.getElementById('btn-install-exe');
const btnPlayOnline = document.getElementById('btn-play-online');
const infoImagePopup = document.getElementById('info-image-popup');
const infoPopupImg = document.getElementById('info-popup-img');
const btnCloseInfoImg = document.getElementById('btn-close-info-img');

// Buka/Tutup Layar Informasi
if (btnInformasi) {
    btnInformasi.addEventListener('click', () => {
        infoScreen.classList.add('active');
    });
}
if (btnBackInfo) {
    btnBackInfo.addEventListener('click', () => {
        infoScreen.classList.remove('active');
    });
}

// Buka/Tutup Popup Kredit
btnCredit.addEventListener('click', () => {
    creditPopup.classList.add('active');
});
btnCloseCredit.addEventListener('click', () => {
    creditPopup.classList.remove('active');
});

// Buka Popup Gambar Install APK
if (btnInstallApk) {
    btnInstallApk.addEventListener('click', () => {
        infoPopupImg.src = 'assets/item/install-apk.webp';
        infoImagePopup.classList.add('active');
    });
}

// Buka Popup Gambar Install EXE
if (btnInstallExe) {
    btnInstallExe.addEventListener('click', () => {
        infoPopupImg.src = 'assets/item/install-exe.webp';
        infoImagePopup.classList.add('active');
    });
}

// Buka Popup Gambar Play Online
if (btnPlayOnline) {
    btnPlayOnline.addEventListener('click', () => {
        infoPopupImg.src = 'assets/item/play-online.webp';
        infoImagePopup.classList.add('active');
    });
}

// Tutup Popup Gambar Informasi
if (btnCloseInfoImg) {
    btnCloseInfoImg.addEventListener('click', () => {
        infoImagePopup.classList.remove('active');
    });
}

// ================= LOGIKA PAPAN SKOR =================
const scoreScreen = document.getElementById('score-screen');
const btnSkor = document.getElementById('btn-skor');
const btnBackScore = document.getElementById('btn-back-score');
const scoreList = document.getElementById('score-list');

// Buka/Tutup Papan Skor (Sebagai Overlay / Pop-up)
btnSkor.addEventListener('click', () => {
    scoreScreen.classList.add('active');
    renderDummyScores(); 
});
btnBackScore.addEventListener('click', () => {
    scoreScreen.classList.remove('active');
});

// Fungsi Merender Data Papan Skor (Gabungan Asli & Dummy)
function renderDummyScores() {
    // Data bawaan sebagai standar tantangan
    const dummyData = [
        { name: "Pak Aprel (Guru)", score: 9999 },
        { name: "Mbah Darmi", score: 8500 },
        { name: "Pejuang Nilai 100", score: 7200 },
        { name: "Detektif Cilik", score: 6500 },
        { name: "Siswa Teladan", score: 5400 },
        { name: "Si Paling IPAS", score: 4900 },
        { name: "Jagoan Kandangan", score: 3800 },
        { name: "Anak Rajin", score: 2500 },
        { name: "Murid Baru", score: 1200 },
        { name: "Si Suka Jajan", score: 800 }
    ];

    // Mengambil memori papan peringkat pemain asli dari localStorage
    let savedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    
    // Gabungkan data asli dan bawaan, lalu urutkan dari skor tertinggi ke terendah
    let allScores = [...dummyData, ...savedScores];
    allScores.sort((a, b) => b.score - a.score);
    
    // Potong array agar hanya menampilkan Top 10 Saja
    allScores = allScores.slice(0, 10);

    scoreList.innerHTML = ""; // Bersihkan isi list sebelumnya
    
    // Looping memasukkan data Top 10 ke dalam HTML
    allScores.forEach((data, index) => {
        const rank = index + 1;
        let rankClass = "";
        
        // Beri kelas khusus untuk Top 3
        if (rank === 1) rankClass = "rank-1";
        else if (rank === 2) rankClass = "rank-2";
        else if (rank === 3) rankClass = "rank-3";

        const li = document.createElement('li');
        li.className = `score-item ${rankClass}`;
        li.innerHTML = `
            <span class="rank">#${rank}</span>
            <span class="player-name">${data.name}</span>
            <span class="player-score">${data.score}</span>
        `;
        scoreList.appendChild(li);
    });
}
// ================= MESIN DRAG & ZOOM (PETA KEDIRI) =================
const btnZoomIn = document.getElementById('btn-zoom-in');
const btnZoomOut = document.getElementById('btn-zoom-out');

// 1. Fungsi Zoom lewat Tombol UI
btnZoomIn.addEventListener('click', () => { 
    scale = Math.min(scale + 0.3, 3); // Maksimal Zoom In 3x
    updateMapTransform(); 
});
btnZoomOut.addEventListener('click', () => { 
    scale = Math.max(scale - 0.3, 0.5); // Maksimal Zoom Out 0.5x
    updateMapTransform(); 
});

// 2. Fungsi Zoom lewat Scroll Mouse
mapViewport.addEventListener('wheel', (e) => {
    e.preventDefault(); // Mencegah layar website ikut turun
    if (e.deltaY < 0) {
        scale = Math.min(scale + 0.1, 3); // Scroll Atas = Membesar
    } else {
        scale = Math.max(scale - 0.1, 0.5); // Scroll Bawah = Mengecil
    }
    updateMapTransform();
}, { passive: false });

// 3. Fungsi Geser (Drag) Menggunakan Mouse PC
mapViewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    mapContent.style.transition = 'none'; // Matikan animasi saat digeser agar responsif
});
mapViewport.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    updateMapTransform();
});
window.addEventListener('mouseup', () => {
    isDragging = false;
    mapContent.style.transition = 'transform 0.2s ease-out'; // Nyalakan animasi saat dilepas
});

// 4. Fungsi Geser (Drag) Menggunakan Layar Sentuh (HP / IFP)
mapViewport.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX - currentX;
    startY = e.touches[0].clientY - currentY;
    mapContent.style.transition = 'none';
}, { passive: true });
mapViewport.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX - startX;
    currentY = e.touches[0].clientY - startY;
    updateMapTransform();
}, { passive: true });
window.addEventListener('touchend', () => {
    isDragging = false;
    mapContent.style.transition = 'transform 0.2s ease-out';
});

// ================= KEMBALI KE PETA KEDIRI =================
document.getElementById('btn-back-world').addEventListener('click', () => {
    
    // Transisi Kembali Dirubah Sesuai Permintaan
    playTransition("IPAS ADVENTUR3", "KAB KEDIRI EDITION", () => {
        districtScreen.classList.remove('active');
        mapScreen.classList.add('active');
        
        // Sembunyikan HUD Skor & Nyawa saat berada di Peta Utama
        hudDisplay.style.display = 'none';
        
        // Auto-fokus kamera Peta Kediri kembali ke titik Kandangan tanpa animasi bergeser (instan)
        const vw = mapViewport.clientWidth, vh = mapViewport.clientHeight;
        const cw = mapContent.clientWidth, ch = mapContent.clientHeight;
        
        const leftPct = parseFloat(pinKandangan.style.left) / 100;
        const topPct = parseFloat(pinKandangan.style.top) / 100;
        
        scale = 1.6; 
        currentX = (vw / 2) - (cw / 2) - ((cw * leftPct) - (cw / 2)) * scale;
        currentY = (vh / 2) - (ch / 2) - ((ch * topPct) - (ch / 2)) * scale;
        
        mapContent.style.transition = 'none'; 
        updateMapTransform();
    });
    
});

// ================= MESIN DRAG & ZOOM KHUSUS PETA KANDANGAN =================
const levelViewport = document.getElementById('level-viewport');
const levelContent = document.getElementById('level-content');
let lvlScale = 1, lvlX = 0, lvlY = 0, lvlDragging = false, startLvlX, startLvlY;

function updateLvlTransform() {
    levelContent.style.transform = `translate(${lvlX}px, ${lvlY}px) scale(${lvlScale})`;
}

// Zoom Tombol UI (Peta Kandangan)
const btnZoomInLvl = document.getElementById('btn-zoom-in-lvl');
const btnZoomOutLvl = document.getElementById('btn-zoom-out-lvl');
if (btnZoomInLvl) btnZoomInLvl.addEventListener('click', () => { 
    lvlScale = Math.min(lvlScale + 0.3, 3); updateLvlTransform(); 
});
if (btnZoomOutLvl) btnZoomOutLvl.addEventListener('click', () => { 
    lvlScale = Math.max(lvlScale - 0.3, 0.5); updateLvlTransform(); 
});

// Zoom Mouse
levelViewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    lvlScale += e.deltaY < 0 ? 0.1 : -0.1;
    lvlScale = Math.min(Math.max(lvlScale, 0.5), 3);
    updateLvlTransform();
}, { passive: false });

// Drag PC
levelViewport.addEventListener('mousedown', (e) => {
    lvlDragging = true;
    startLvlX = e.clientX - lvlX;
    startLvlY = e.clientY - lvlY;
    levelContent.style.transition = 'none';
});
window.addEventListener('mousemove', (e) => {
    if (!lvlDragging) return;
    lvlX = e.clientX - startLvlX;
    lvlY = e.clientY - startLvlY;
    updateLvlTransform();
});
window.addEventListener('mouseup', () => {
    lvlDragging = false;
    levelContent.style.transition = 'transform 0.2s ease-out';
});

// Drag Sentuh (IFP/HP)
levelViewport.addEventListener('touchstart', (e) => {
    lvlDragging = true;
    startLvlX = e.touches[0].clientX - lvlX;
    startLvlY = e.touches[0].clientY - lvlY;
    levelContent.style.transition = 'none';
}, { passive: true });
window.addEventListener('touchmove', (e) => {
    if (!lvlDragging) return;
    lvlX = e.touches[0].clientX - startLvlX;
    lvlY = e.touches[0].clientY - startLvlY;
    updateLvlTransform();
}, { passive: true });
window.addEventListener('touchend', () => {
    lvlDragging = false;
    levelContent.style.transition = 'transform 0.2s ease-out';
});

// ================= SISTEM SKOR & NYAWA (GLOBAL PER BAB) =================
// Memuat Skor dari LocalStorage, jika kosong otomatis mulai dari 0
let globalScore = parseInt(localStorage.getItem('globalScore')) || 0; 
let currentChapter = 'kandangan'; // Menyimpan data posisi bab aktif

// Memuat Nyawa dari LocalStorage, jika kosong buat buku nyawa baru
let defaultLives = {
    kandangan: 5, kepung: 5, badas: 5, puncu: 5, 
    pare: 5, gurah: 5, pagu: 5, ngasem: 5
};
let chapterLives = JSON.parse(localStorage.getItem('chapterLives')) || defaultLives;

const hudDisplay = document.getElementById('level-hud-display');
const hudScoreVal = document.getElementById('hud-score-val');
const hudLivesContainer = document.getElementById('hud-lives-container');

// Pasang skor simpanan saat game baru saja dibuka
document.addEventListener('DOMContentLoaded', () => {
    if(hudScoreVal) hudScoreVal.innerText = globalScore;
});

// Fungsi 1: Menambah Skor
function addScore(points, isFruitCatch = false) {
    // Putar efek suara berdasarkan sumber poin
    if (isFruitCatch) {
        sfxTangkap.currentTime = 0; sfxTangkap.play().catch(e => console.warn(e));
    } else {
        sfxBenar.currentTime = 0; sfxBenar.play().catch(e => console.warn(e));
    }

    globalScore += points;
    localStorage.setItem('globalScore', globalScore); // Simpan permanen ke memori
    hudScoreVal.innerText = globalScore;
    
    // Efek visual berkedip saat mendapat skor
    hudScoreVal.style.color = '#fff';
    setTimeout(() => hudScoreVal.style.color = '#FFEA00', 300);
}

// Fungsi 2: Memperbarui Tampilan Hati Berdasarkan Bab Aktif
function updateLivesHUD() {
    if(!hudLivesContainer) return;
    const hearts = hudLivesContainer.querySelectorAll('.heart-icon');
    const currentLives = chapterLives[currentChapter];
    
    hearts.forEach((heart, index) => {
        if (index < currentLives) {
            heart.classList.remove('lost'); 
        } else {
            heart.classList.add('lost'); 
        }
    });
}

/* --- Life System & Penalty Handling --- */
function reduceLife(isFruitCatch = false) {
    if (isFruitCatch) {
        sfxNotTangkap.currentTime = 0; sfxNotTangkap.play().catch(e => console.warn(e));
    } else {
        sfxSalah.currentTime = 0; sfxSalah.play().catch(e => console.warn(e));
    }

    // 1. Kurangi nyawa hanya jika masih di atas 0
    if (chapterLives[currentChapter] > 0) {
        chapterLives[currentChapter]--;
        localStorage.setItem('chapterLives', JSON.stringify(chapterLives)); 
        updateLivesHUD();
    }
    
    // 2. CEGAH BUG REFRESH: Jika nyawa <= 0 (baru saja habis ATAU sudah habis dari awal karena curang/refresh)
    // Maka paksa alarm UKS menyala, sehingga saat Pop-Up salah ditutup, pemain langsung dievakuasi!
    if (chapterLives[currentChapter] <= 0) {
        window.pendingUKS = true;
    }
}

// Memori Penyimpan Status Musik Sebelum Masuk UKS
let pausedByUKS_Mission = false;
let pausedByUKS_Boss = false;
let pausedByUKS_Radio = false;

/**
 * Initiates the Recovery Quiz (UKS Room) when player lives reach zero.
 * Overlays a cinematic "UKS" room screen while suspending mission state.
 * 
 * @param {Function} resumeCallback - Original function to resume the game after healing.
 */
function triggerRecoveryQuiz(resumeCallback = null) {
    const warningIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
    const heartIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M2 4h4v2h4V4h4v4h-2v2h-2v2H8v2H6v-2H4v-2H2V8H0V4h2z"/></svg>`;
    
    // 1. Bekukan sistem game yang sedang berjalan
    if (window.arActive) window.arActive = false; 
    if (window.arColorActive) window.arColorActive = false;

    // 1B. Bekukan Musik Latar Saat Ini (Hanya pada pemanggilan pertama)
    if (bgmUKS.paused) {
        pausedByUKS_Mission = !bgmMission.paused;
        pausedByUKS_Boss = !bgmBoss.paused;
        pausedByUKS_Radio = typeof sfxRadio !== 'undefined' && !sfxRadio.paused;

        bgmMission.pause();
        bgmBoss.pause();
        if (typeof sfxRadio !== 'undefined') sfxRadio.pause();

        bgmUKS.currentTime = 0;
        bgmUKS.play().catch(e => console.warn("Audio UKS diblokir browser: " + e));
    }

    // 2. Munculkan Layar UKS secara perlahan (Fade In)
    const uksOverlay = document.getElementById('uks-overlay');
    if (uksOverlay) {
        uksOverlay.style.display = 'block';
        void uksOverlay.offsetWidth; // Paksa peramban untuk membaca perubahan display sebelum transisi
        uksOverlay.classList.add('active');
    }

    // 3. Beri jeda 1 detik agar animasi layar gelap selesai, barulah NPC menyapa
    setTimeout(() => {
        showCustomModal(
            "NYAWA HABIS!", 
            "Aduh, kamu kelelahan! Kamu dievakuasi ke ruang UKS untuk memulihkan kristal nyawamu.", 
            warningIcon, 
            "error",
            () => {
                const recoveryBank = [
                    { q: "Warna bendera negara kita, Indonesia, adalah?", opt1: "MERAH PUTIH", opt2: "MERAH BIRU", correct: 1 },
                    { q: "Binatang apakah yang memiliki belalai panjang dan telinga lebar?", opt1: "JERAPAH", opt2: "GAJAH", correct: 2 },
                    { q: "Benda langit apakah yang menyinari bumi pada siang hari?", opt1: "MATAHARI", opt2: "BULAN", correct: 1 },
                    { q: "Berapakah jumlah kaki yang dimiliki oleh seekor sapi?", opt1: "DUA", opt2: "EMPAT", correct: 2 },
                    { q: "Makanan pokok sebagian besar penduduk Indonesia adalah...", opt1: "NASI", opt2: "GANDUM", correct: 1 },
                    { q: "Ikan bernapas di dalam air menggunakan alat pernapasan berupa...", opt1: "PARU-PARU", opt2: "INSANG", correct: 2 },
                    { q: "Matahari terbit setiap pagi dari arah...", opt1: "TIMUR", opt2: "BARAT", correct: 1 },
                    { q: "Hewan serangga apakah yang bisa menghasilkan madu?", opt1: "NYAMUK", opt2: "LEBAH", correct: 2 },
                    { q: "Sila pertama Pancasila dilambangkan dengan gambar...", opt1: "BINTANG", opt2: "RANTAI", correct: 1 },
                    { q: "Rasa dari air laut adalah...", opt1: "MANIS", opt2: "ASIN", correct: 2 }
                ];

                const randomQ = recoveryBank[Math.floor(Math.random() * recoveryBank.length)];

                const handleRecoveryAnswer = (chosenOption) => {
                    document.getElementById('vn-overlay').style.display = 'none';
                    
                    if (chosenOption === randomQ.correct) {
                        // KONDISI MENANG (SEMBUH)
                        sfxBenar.currentTime = 0; sfxBenar.play().catch(e => console.warn(e));
                        
                        chapterLives[currentChapter] = 5;
                        localStorage.setItem('chapterLives', JSON.stringify(chapterLives));
                        updateLivesHUD();
                        
                        showCustomModal("PULIH!", "Tepat sekali! Kamu sudah sehat kembali. 5 Kristal Nyawamu telah penuh, ayo lanjutkan misi!", heartIcon, "alert", () => {
                            
                            // Matikan Musik UKS dan kembalikan Musik sebelumnya
                            bgmUKS.pause();
                            if (pausedByUKS_Mission) bgmMission.play().catch(e => console.warn(e));
                            if (pausedByUKS_Boss) bgmBoss.play().catch(e => console.warn(e));
                            if (pausedByUKS_Radio) sfxRadio.play().catch(e => console.warn(e));
                            
                            pausedByUKS_Mission = false;
                            pausedByUKS_Boss = false;
                            pausedByUKS_Radio = false;

                            // 4. Tutup Layar UKS secara perlahan (Fade Out)
                            if (uksOverlay) {
                                uksOverlay.classList.remove('active');
                                setTimeout(() => {
                                    uksOverlay.style.display = 'none';
                                }, 1000); // Waktu animasi memudar
                            }

                            // 5. Kembalikan semua fungsi misi yang sempat dibekukan
                            // Beri jeda 1.5 detik agar tangan pemain tidak langsung terdeteksi kamera
                            setTimeout(() => {
                                if (document.getElementById('ar-game-area') && document.getElementById('ar-game-area').style.display !== 'none') window.arActive = true;
                                if (document.getElementById('ar-color-area') && document.getElementById('ar-color-area').style.display !== 'none') window.arColorActive = true;
                            }, 1500);
                            
                            // 6. Resume Callback: Eksekusi sisa kode game yang sempat dicegat
                            if (resumeCallback) resumeCallback();
                        });
                    } else {
                        // KONDISI SALAH (BELUM SEMBUH)
                        sfxSalah.currentTime = 0; sfxSalah.play().catch(e => console.warn(e));
                        
                        showCustomModal("SALAH RAMUAN!", "Waduh, tebakanmu salah. Coba ingat-ingat lagi agar kamu cepat sembuh!", warningIcon, "error", () => {
                            // Ulangi proses pemulihan, layar UKS tetap dibiarkan menyala
                            triggerRecoveryQuiz(resumeCallback); 
                        });
                    }
                };

                const recoveryDialog = [
                    { text: "Sepertinya kamu butuh obat pemulihan. Tapi kotak obatnya terkunci oleh teka-teki sandi!", mood: "sad" },
                    { 
                        text: `Jawab sandi ini dengan cepat! ${randomQ.q}`, 
                        mood: "neutral", 
                        isChoice: true,
                        btn1Text: randomQ.opt1, 
                        btn2Text: randomQ.opt2, 
                        onYes: () => handleRecoveryAnswer(1),
                        onNo: () => handleRecoveryAnswer(2)
                    }
                ];
                
                /* Trigger VN Dialog with the dedicated 'healer' NPC sprite */
                startVnDialog(recoveryDialog, "Petugas UKS", "healer", null);
            }
        );
    }, 1000); 
}

// ================= SISTEM ALUR MISI BERTAHAP =================
// Array stages diupdate menjadi 7 Tahapan Interaktif
const stages = ['stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5', 'stage-6', 'stage-7'];

// Database Dialog Edukasi Ekstra untuk Misi 2
let currentMissionDialogs = {};
const misi2QuizDialogs = {
    2: [
        { text: "Bagian hitam di tengah bola matamu disebut pupil. Itu adalah pintu masuknya cahaya lho.", mood: "neutral" },
        { text: "Jangan lupa makan sayur dan buah yang mengandung Vitamin A agar matamu selalu sehat!", mood: "warning" }
    ],
    3: [
        { text: "Daun telingamu berfungsi seperti corong untuk mengumpulkan suara dari berbagai arah.", mood: "happy" },
        { text: "Suara itu akan menabrak gendang telinga di dalam, membuatnya bergetar, dan otakmu menerjemahkannya sebagai suara!", mood: "neutral" },
        { text: "Hindari mendengarkan suara yang terlalu keras agar gendang telingamu tidak rusak ya.", mood: "warning" }
    ],
    5: [
        { text: "Lidah sangat peka terhadap rasa manis, asam, asin, dan pahit.", mood: "happy" },
        { text: "Selain mengecap rasa, lidah juga membantu kita mengunyah makanan dan berbicara lho!", mood: "neutral" },
        { text: "Rajin-rajinlah menggosok gigi dan membersihkan lidah agar tidak ada kuman yang bersarang.", mood: "warning" }
    ],
    6: [
        { text: "Selain merasakan kasar dan halus, kulit juga bisa merasakan suhu panas dan dingin.", mood: "neutral" },
        { text: "Kulit juga mengeluarkan keringat untuk membuang zat tidak berguna dan mendinginkan suhu tubuh kita.", mood: "neutral" },
        { text: "Cepatlah mandi setelah bermain seharian di taman agar kulitmu kembali bersih dan sehat!", mood: "happy" }
    ]
};

// Fungsi Pemicu Dialog Pascagame (Tarik Garis / Boss)
function triggerPostDialog(stageNum) {
    const dialogData = currentMissionDialogs[stageNum];
    if(dialogData) {
        startVnDialog(dialogData.dialog, "Petualang Nagata", "npc1", () => {
            const nextBtn = document.getElementById(`btn-next-${stageNum}`);
            if(nextBtn) nextBtn.style.display = 'inline-flex';
            
            if(dialogData.isBoss) {
                addScore(100);
                    
                const currentMissionId = parseInt(document.getElementById('mission-screen').getAttribute('data-misi')) || 1;
                const nextMissionId = currentMissionId + 1;
                    
                // Merekam Penyelesaian Misi
                localStorage.setItem(`misi_${currentMissionId}_completed`, 'true');
                localStorage.setItem(`kandangan_misi_${nextMissionId}`, 'unlocked');
                    
                loadKandanganProgress();
                    
                // Buka Jurnal Petualang sebelum keluar (Sesi Refleksi)
                    if (typeof startJurnal === 'function') {
                        startJurnal(currentMissionId, () => {
                            if (currentMissionId === 6) {
                                document.getElementById('name-modal').classList.add('active');
                            } else {
                                exitMissionScreen();
                            }
                        });
                    } else {
                        if (currentMissionId === 6) {
                            document.getElementById('name-modal').classList.add('active');
                        } else {
                            exitMissionScreen();
                        }
                    }
            }
        });
    } else {
        // JIKA TIDAK ADA DIALOG: Langsung munculkan tombol "LANJUTKAN"
        const nextBtn = document.getElementById(`btn-next-${stageNum}`);
        if(nextBtn) nextBtn.style.display = 'inline-flex';
    }
}

// Fungsi Pintar Pengecek Jawaban Mini-Game (Diupgrade)
function checkMiniGame(btnClicked, stageNum, isCorrect, message, missionId = 1) {
    if (btnClicked.classList.contains('btn-correct') || btnClicked.classList.contains('btn-wrong')) return;

    if (isCorrect) {
        btnClicked.classList.add('btn-correct');
        btnClicked.innerText = "BENAR!";
        addScore(10);
        
        let naskahPenjelasan = [ { text: message, mood: "happy" } ];
        
        if (missionId === 2 && misi2QuizDialogs[stageNum]) {
            naskahPenjelasan = naskahPenjelasan.concat(misi2QuizDialogs[stageNum]);
        }

        naskahPenjelasan.push({ text: "Hebat! Kamu sudah memahaminya. Tekan tombol LANJUTKAN di pinggir layar ya!", mood: "neutral" });
        
        startVnDialog(naskahPenjelasan, "Petualang Nagata", "npc1", () => {
            const nextBtn = document.getElementById(`btn-next-${stageNum}`);
            if(nextBtn) nextBtn.style.display = 'inline-flex';
        });
    } else {
        // Tambah animasi merah dan bergetar
        btnClicked.classList.add('btn-wrong');
        reduceLife(); // Nyawa berkurang!
        
        // Eksekusi CSS Getaran pada Kotak Utama Game
        const missionBox = document.querySelector('.mission-full-box');
        missionBox.classList.remove('shake-screen');
        void missionBox.offsetWidth; // Paksa browser me-reset animasi
        missionBox.classList.add('shake-screen');
        setTimeout(() => missionBox.classList.remove('shake-screen'), 500);
        
        const wrongIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M10 2h4v4h-2V4h-2V2zM6 2H2v4h2V4h2V2zm4 12h4v-4h-2v2h-2v2zM6 14H2v-4h2v2h2v2z"/></svg>`;
        showCustomModal("KURANG TEPAT!", message + "\n(Nyawa Berkurang 1)", wrongIcon, "error");
    }
}

// ================= FUNGSI BANTUAN GAMBAR =================
function showImagePopup(src) {
    document.getElementById('enlarged-img').src = src;
    document.getElementById('image-modal').classList.add('active');
}
function closeImagePopup() {
    document.getElementById('image-modal').classList.remove('active');
}

// ================= MESIN 3D VIEWER (THREE.JS) =================
let scene3D, camera3D, renderer3D, currentModel3D, controls3D, particles3D;
let animationId3D;
let isSimulationActive = false; // Penanda apakah simulasi sudah diklik

function init3DViewer() {
    const container = document.getElementById('fullscreen-3d-container');
    if (renderer3D) return; // Mencegah pemuatan ganda yang membuat ngelag

    scene3D = new THREE.Scene();
    // Latar belakang diubah menjadi warna Obsidian gelap yang menyatu dengan bingkai pop-up
    scene3D.background = new THREE.Color(0x1e272e);
    
    camera3D = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera3D.position.set(0, 0, 5);

    renderer3D = new THREE.WebGLRenderer({ antialias: true });
    renderer3D.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer3D.domElement);

    // Pencahayaan Mewah: Ambient (Dasar) + Key Light (Depan) + Rim Light (Sorotan Emas dari Belakang)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene3D.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene3D.add(dirLight);
    
    const rimLight = new THREE.DirectionalLight(0xffea00, 0.4);
    rimLight.position.set(-5, 5, -5);
    scene3D.add(rimLight);

    // ================= EFEK PARTIKEL AJAIB =================
    if (!particles3D) {
        const particleCount = 300;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        
        // Menyebar 300 titik secara acak di sekitar model 3D
        for(let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 8; 
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.PointsMaterial({
            color: 0x00cec9, // Warna biru cyan ala sinyal data/saraf
            size: 0.08,      // Sedikit diperbesar agar arus sinyal lebih jelas
            transparent: true,
            opacity: 0.8
        });
        
        particles3D = new THREE.Points(geometry, material);
        particles3D.visible = false; // Sembunyikan partikel saat baru masuk
        scene3D.add(particles3D);
    }
    // =======================================================

    controls3D = new THREE.OrbitControls(camera3D, renderer3D.domElement);
    controls3D.enableDamping = true;
    controls3D.dampingFactor = 0.05;
    
    // Membatasi zoom agar pemain tidak bisa menembus masuk ke dalam model anatomi
    controls3D.minDistance = 2;
    controls3D.maxDistance = 10;

    window.addEventListener('resize', () => {
        if(container.clientWidth > 0) {
            camera3D.aspect = container.clientWidth / container.clientHeight;
            camera3D.updateProjectionMatrix();
            renderer3D.setSize(container.clientWidth, container.clientHeight);
        }
    });
}

// Fungsi untuk memantik partikel saat tombol diklik
window.start3DSimulation = function() {
    isSimulationActive = true;
    document.getElementById('btn-start-simulation').style.display = 'none'; // Tombol menghilang
    if (particles3D) {
        particles3D.visible = true; // Partikel muncul seketika!
    }
};

function animate3D() {
    animationId3D = requestAnimationFrame(animate3D);
    
    // Partikel HANYA akan bergerak jika tombol simulasi sudah ditekan
    if (particles3D && isSimulationActive) {
        const positions = particles3D.geometry.attributes.position.array;
        
        // Deteksi organ apa yang sedang dilihat berdasarkan Judul Pop-up
        const organTitle = document.getElementById('viewer-3d-title').innerText.toUpperCase();
        
        // Pengaturan Koordinat Tujuan
        let targetX = 0, targetY = 0, targetZ = 0;
        let modeTerserap = 'titik'; // 'titik', 'dua-titik', 'hujan-atas', 'permukaan-luar'

        if (organTitle.includes("MATA")) {
            // MATA (Kepala Anime): Sinyal membelah dua, masuk ke mata kiri dan kanan
            modeTerserap = 'dua-titik';
        } else if (organTitle.includes("HIDUNG")) {
            // Hidung: Tersedot ke lubang (asumsi lubang ada di bagian bawah-depan: Y negatif, Z positif)
            targetY = -1.0; 
            targetZ = 0.5;
        } else if (organTitle.includes("TELINGA")) {
            // Telinga: Tersedot ke lubang samping (asumsi lubang ada di samping kiri: X negatif)
            targetX = -1.0;
        } else if (organTitle.includes("LIDAH")) {
            // Lidah: Sinyal jatuh dari atas menyentuh permukaan papila
            modeTerserap = 'hujan-atas';
        } else if (organTitle.includes("KULIT")) {
            // Kulit: Sinyal menyentuh dari segala arah luar, tidak menembus ke dalam
            modeTerserap = 'permukaan-luar';
        }

        for(let i = 0; i < positions.length; i += 3) {
            
            if (modeTerserap === 'titik') {
                // LOGIKA 1: TERSERAP KE SATU TITIK (Hidung, Telinga)
                positions[i] -= (positions[i] - targetX) * 0.02;     // X
                positions[i+1] -= (positions[i+1] - targetY) * 0.02; // Y
                positions[i+2] -= (positions[i+2] - targetZ) * 0.02; // Z

                let jarak = Math.abs(positions[i] - targetX) + Math.abs(positions[i+1] - targetY) + Math.abs(positions[i+2] - targetZ);
                if (jarak < 0.3) { // Jarak sentuh
                    positions[i] = (Math.random() - 0.5) * 8;
                    positions[i+1] = (Math.random() - 0.5) * 8;
                    positions[i+2] = (Math.random() - 0.5) * 8;
                }
                
            } else if (modeTerserap === 'dua-titik') {
                // LOGIKA BARU: TERSERAP KE DUA MATA (Kepala Anime)
                let isLeft = (i % 2 === 0); // Pisahkan partikel ganjil-genap ke kiri dan kanan wajah
                
                let tX = isLeft ? -0.8 : 0.8; // X: Jarak menyamping ke posisi mata kiri/kanan
                let tY = 0.5;                 // Y: Tinggi mata pada wajah
                let tZ = 1.6;                 // Z: Posisi kedalaman agar tidak tembus ke belakang kepala

                positions[i] -= (positions[i] - tX) * 0.02;     
                positions[i+1] -= (positions[i+1] - tY) * 0.02; 
                positions[i+2] -= (positions[i+2] - tZ) * 0.02; 

                let jarak = Math.abs(positions[i] - tX) + Math.abs(positions[i+1] - tY) + Math.abs(positions[i+2] - tZ);
                if (jarak < 0.3) { 
                    positions[i] = (Math.random() - 0.5) * 8;
                    positions[i+1] = (Math.random() - 0.5) * 8;
                    positions[i+2] = (Math.random() - 0.5) * 8;
                }

            } else if (modeTerserap === 'hujan-atas') {
                // LOGIKA 2: JATUH KE PERMUKAAN ATAS (Lidah)
                positions[i+1] -= 0.02; // Partikel turun ke bawah perlahan layaknya hujan
                
                // Disesuaikan dengan batas ketinggian model lidah yang kecil
                if (positions[i+1] < 0.3) { 
                    positions[i] = (Math.random() - 0.5) * 1.5;   // Menyebar sempit di area lidah saja (X)
                    positions[i+1] = 3;                           // Kembalikan partikel ke langit-langit mulut (Y)
                    positions[i+2] = (Math.random() - 0.5) * 1.5; // Menyebar sempit di area lidah saja (Z)
                }
                
            } else if (modeTerserap === 'permukaan-luar') {
                // LOGIKA 3: TERSERAP KE KULIT LUAR (Kulit)
                let curX = positions[i], curY = positions[i+1], curZ = positions[i+2];
                let jarakKePusat = Math.sqrt(curX*curX + curY*curY + curZ*curZ);

                if (jarakKePusat > 1.2) { // 1.2 adalah asumsi radius pelindung luar Kulit
                    positions[i] -= curX * 0.015;
                    positions[i+1] -= curY * 0.015;
                    positions[i+2] -= curZ * 0.015;
                } else { // Jika partikel menabrak pelindung kulit
                    positions[i] = (Math.random() - 0.5) * 8;
                    positions[i+1] = (Math.random() - 0.5) * 8;
                    positions[i+2] = (Math.random() - 0.5) * 8;
                }
            }
        }
        
        particles3D.geometry.attributes.position.needsUpdate = true;
        // Rotasi ruangan partikel dimatikan agar titik hisap tidak ikut bergeser secara tidak menentu
    }

    controls3D.update();
    renderer3D.render(scene3D, camera3D);
}

function open3DViewer(modelPath, title) {
    document.getElementById('viewer-3d-title').innerText = title + " (Memuat...)";
    document.getElementById('viewer-3d-modal').classList.add('active');
    
    init3DViewer();
    
    if (currentModel3D) scene3D.remove(currentModel3D);

    const loader = new THREE.GLTFLoader();
    
    // Trik Bypass Keamanan: Ambil teks Base64 dari models3d.js berdasarkan path-nya.
    // Jika data tidak ditemukan di file tersebut, sistem akan tetap mencoba membaca dari path aslinya (fallback).
    const modelDataURI = (typeof models3DBase64 !== 'undefined' && models3DBase64[modelPath]) 
                            ? models3DBase64[modelPath] 
                            : modelPath;
    
    loader.load(modelDataURI, function (gltf) {
        currentModel3D = gltf.scene;
        
        // Mengukur dan menaruh posisi objek tepat di tengah layar
        const box = new THREE.Box3().setFromObject(currentModel3D);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        currentModel3D.position.x += (currentModel3D.position.x - center.x);
        currentModel3D.position.y += (currentModel3D.position.y - center.y);
        currentModel3D.position.z += (currentModel3D.position.z - center.z);
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleObj = 3 / maxDim;
        currentModel3D.scale.set(scaleObj, scaleObj, scaleObj);

        scene3D.add(currentModel3D);
        document.getElementById('viewer-3d-title').innerText = title;
        
        if(!animationId3D) animate3D();
    }, undefined, function (error) {
        console.error("Gagal memuat 3D:", error);
        document.getElementById('viewer-3d-title').innerText = title + " (Gagal Memuat Model!)";
    });
}

function close3DViewer() {
    document.getElementById('viewer-3d-modal').classList.remove('active');
    
    // --- RESET SIMULASI PARTIKEL ---
    isSimulationActive = false; // Matikan mesin penyedot
    if (particles3D) {
        particles3D.visible = false; // Sembunyikan partikel kembali
    }
    
    // Munculkan kembali tombol "MULAI SIMULASI" untuk organ selanjutnya
    const btnSimulasi = document.getElementById('btn-start-simulation');
    if (btnSimulasi) {
        btnSimulasi.style.display = 'block'; 
    }
    // -------------------------------

    cancelAnimationFrame(animationId3D);
    animationId3D = null;
}

// ================= TRANSISI INTRO KE KUIS PER TAHAP =================
function proceedToQuiz(stageNum) {
    document.getElementById(`stage-${stageNum}-intro`).style.display = 'none';
    document.getElementById(`stage-${stageNum}-quiz`).style.display = 'flex';
    
    // Khusus Tahap 3 (Telinga), mainkan suara radio sebagai soal
    if (stageNum === 3) sfxRadio.play().catch(e => console.log("Audio diblokir", e));
}

// Data Kuis Final (Tahap 7)
const misi1Quiz = {
    question: "Pertanyaan Ujian: Berdasarkan penyelidikanmu, alat sensor tubuh (Pancaindra) apa yang bekerja untuk merasakan lezat dan manisnya sebuah kue?",
    options: [
        { text: "Indra Pendengar (Telinga)", isCorrect: false },
        { text: "Indra Pengecap (Lidah)", isCorrect: true },
        { text: "Indra Penglihat (Mata)", isCorrect: false },
        { text: "Indra Peraba (Kulit)", isCorrect: false }
    ]
};

// Fungsi Mengganti Tahapan
function nextMissionStage(stageNumber) {
    // ================= KODE TAMBAHAN: MATIKAN KAMERA TAHAP 1 JIKA PINDAH TAHAP =================
    if (stageNumber !== 1) {
        if (window.arStream) {
            window.arStream.getTracks().forEach(track => track.stop());
            window.arStream = null;
        }
        window.arActive = false;
        window.arColorActive = false;
        clearInterval(window.arLoop);
        clearInterval(window.arSpawner);
        clearInterval(window.arColorLoop);
        clearInterval(window.arColorTimer);
        
        // Sembunyikan area AR secara paksa
        const arArea = document.getElementById('ar-game-area');
        const arColorArea = document.getElementById('ar-color-area');
        if (arArea) arArea.style.display = 'none';
        if (arColorArea) arColorArea.style.display = 'none';
    }
    // ======================================================================================

    // ================= GANTI MUSIK UNTUK BOSS & KAMERA =================
    const currentMissionId = parseInt(document.getElementById('mission-screen').getAttribute('data-misi')) || 1;
    
    // Jika masuk ke Tahap 7 (Semua Misi) ATAU Tahap 1 (Khusus Kamera Misi 5)
    if (stageNumber === 7 || (currentMissionId === 5 && stageNumber === 1)) {
        bgmMission.pause();
        if (bgmBoss.paused) {
            bgmBoss.currentTime = 0;
            bgmBoss.play().catch(e => console.log(e));
        }
    } else {
        bgmBoss.pause();
        if (bgmMission.paused) {
            bgmMission.play().catch(e => console.log(e));
        }
    }
    // ===================================================================

    stages.forEach(id => {
        const stageEl = document.getElementById(id);
        if (stageEl) stageEl.classList.remove('active-stage');
    });
    
    const targetStage = document.getElementById(`stage-${stageNumber}`);
    if (targetStage) {
        targetStage.classList.add('active-stage');
        
        // TRIK AJAIB (DIPERBARUI): Mencuri Teks dari H3 yang tersembunyi
        const titleEl = targetStage.querySelector('.stage-title');
        if (titleEl) {
            // Menggunakan textContent agar teks tetap terbaca oleh JS meskipun CSS-nya display: none
            document.getElementById('mission-title').innerText = titleEl.textContent;
        }
    }
    
    // Sembunyikan SEMUA tombol Lanjutkan yang melayang di luar layar
    for(let i = 1; i <= 7; i++) {
        const btn = document.getElementById(`btn-next-${i}`);
        if(btn) btn.style.display = 'none';
    }
    
    // Matikan radio secara otomatis saat layar berpindah
    if (typeof sfxRadio !== 'undefined') {
        sfxRadio.pause();
        sfxRadio.currentTime = 0;
    }
}

// ================= MEMULAI MISI 1 DENGAN DRAMA VN =================
const missionScreen = document.getElementById('mission-screen');
const btnBackMission = document.getElementById('btn-back-mission');

// ================= MESIN PENGENDALI LAYAR MISI (UNIVERSAL) =================

// 1. Mesin Pembuka Misi (Dipakai di tombol Terima Misi manapun)
function enterMissionScreen(title1, title2, missionId = 1) {
    // Pindah musik SECARA INSTAN
    bgmIntro.pause();
    
    if (missionId === 5) {
        bgmMission.pause();
        bgmBoss.currentTime = 0;
        bgmBoss.play().catch(e => console.log(e));
    } else {
        bgmBoss.pause();
        bgmMission.currentTime = 0; 
        bgmMission.play().catch(e => console.log(e));
    }

    // Eksekusi Animasi Persona & Buka Layar
    vnOverlay.style.display = 'none';
    playTransition(title1, title2, () => {
        districtScreen.classList.remove('active'); // BUG DIPERBAIKI: Menggunakan nama layar Universal
        missionScreen.setAttribute('data-misi', missionId); // Pasang penanda latar belakang!
        missionScreen.classList.add('active');
        nextMissionStage(1); // Selalu mulai dari tahap Eksplorasi
    });
}

// 2. Mesin Penutup Misi (Dipakai saat tombol kembali atau kuis berhasil)
function exitMissionScreen() {
    // Kembalikan musik SECARA INSTAN (dan hentikan suara radio jika siswa kabur)
    bgmMission.pause();
    bgmBoss.pause();
    bgmBoss.currentTime = 0;
    sfxRadio.pause();
    sfxRadio.currentTime = 0;
    bgmUKS.pause();
    bgmUKS.currentTime = 0;

    // FIX: Mematikan semua audio tambahan yang mungkin masih menyala agar tidak bocor
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    if (typeof audioDetektif !== 'undefined') Object.values(audioDetektif).forEach(a => { a.pause(); a.currentTime = 0; });
    if (typeof audioSim1 !== 'undefined') Object.values(audioSim1).forEach(a => { a.pause(); a.currentTime = 0; });

    bgmIntro.play().catch(e => console.log(e));

    // ================= KODE BARU: MATIKAN KAMERA MISI 5 JIKA KABUR =================
    if (window.arStream) {
        window.arStream.getTracks().forEach(track => track.stop());
        window.arStream = null;
        window.arActive = false;
        window.arColorActive = false;
        clearInterval(window.arLoop);
        clearInterval(window.arSpawner);
        clearInterval(window.arColorLoop);
        clearInterval(window.arColorTimer);
    }
    // ==============================================================================

    // Eksekusi Animasi Persona & Buka Peta (Dinamic Teks)
    let backMapName = "PETA KECAMATAN";
    if (currentChapter) backMapName = currentChapter.toUpperCase();
    
    playTransition(backMapName, "PETA KECAMATAN", () => {
        missionScreen.classList.remove('active');
        districtScreen.classList.add('active');
    });
}

// Pasang mesin penutup ke tombol "KEMBALI" di pojok kanan atas layar misi
btnBackMission.addEventListener('click', exitMissionScreen);



// ================= SISTEM VISUAL NOVEL (GLOBAL MESIN DIALOG) =================
const vnOverlay = document.getElementById('vn-overlay');
const vnText = document.getElementById('vn-text');
const vnCharacter = document.getElementById('vn-character');
const vnNameDisplay = document.getElementById('vn-name-display');
const btnVnNext = document.getElementById('btn-vn-next');

// (Naskah Nagata sudah dipindahkan ke atas)

// Memori VN Aktif
let activeScript = [];
let currentVnIndex = 0;
let currentNpcPrefix = "npc0";
let onDialogFinished = null;

// Fungsi Menyalakan Mesin Dialog
function startVnDialog(scriptArray, characterName, npcPrefix, callback) {
    activeScript = scriptArray;
    currentVnIndex = 0;
    currentNpcPrefix = npcPrefix;
    onDialogFinished = callback;
    
    // Logika Penggeseran Khusus Karakter
    if (npcPrefix === "npc0") {
        // Jika Raja Kediri, geser lebih ke kiri layar
        vnCharacter.style.left = "2cqw"; 
    } else {
        // Posisi default untuk Nagata dan NPC lainnya
        vnCharacter.style.left = "8cqw"; 
    }
    
    vnNameDisplay.innerText = characterName;
    vnOverlay.style.display = 'flex';
    updateVnDialog();
}


function updateVnDialog() {
    if (currentVnIndex < activeScript.length) {
        const current = activeScript[currentVnIndex];
        
        vnText.innerText = current.text;
        vnCharacter.src = `assets/character/${currentNpcPrefix}-${current.mood}.webp`;
        vnCharacter.onerror = function() { this.onerror = null; this.src = `assets/character/${currentNpcPrefix}-neutral.webp`; };
        
        const vnChoicesContainer = document.getElementById('vn-choices');
                
                /* Force Reading Delay: Sembunyikan tombol saat teks baru muncul */
                btnVnNext.style.display = 'none';
                vnChoicesContainer.style.display = 'none';
                
                /* Bersihkan antrean waktu sebelumnya agar tidak bentrok jika ditekan cepat */
                clearTimeout(window.vnBtnTimer);
                
                /* Tunda kemunculan tombol selama 1 detik (1000 ms) */
                window.vnBtnTimer = setTimeout(() => {
                    if (current.isChoice) {
                        vnChoicesContainer.style.display = 'flex'; 
                        
                        const btnYes = document.getElementById('btn-vn-yes');
                        const btnNo = document.getElementById('btn-vn-no');
                        
                        btnYes.innerText = current.btn1Text || "TERIMA MISI";
                        btnNo.innerText = current.btn2Text || "TOLAK";
                        btnYes.onclick = current.onYes;
                        
                        if (current.hideNo) {
                            btnNo.style.display = 'none'; 
                        } else {
                            btnNo.style.display = 'flex';
                            btnNo.onclick = current.onNo;
                        }

                        // Menyalakan Tombol Ke-3 (Lihat Jurnal)
                        const btnJurnal = document.getElementById('btn-vn-jurnal');
                        if (current.btn3Text && btnJurnal) {
                            btnJurnal.style.display = 'flex';
                            // Menambahkan Ikon Buku SVG ke dalam teks tombol
                            btnJurnal.innerHTML = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M13 2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM3 12V4h2v8H3zm4 0V4h6v8H7z"/></svg> ` + current.btn3Text;
                            btnJurnal.onclick = current.onBtn3;
                        } else if (btnJurnal) {
                            btnJurnal.style.display = 'none';
                        }
                    } else {
                        btnVnNext.style.display = 'flex';
                    }
                }, 1000); // <-- Diubah menjadi 1000 (1 detik)
                
            } else {
        // Tutup Tirai
        vnOverlay.style.opacity = '0';
        setTimeout(() => {
            vnOverlay.style.display = 'none';
            vnOverlay.style.opacity = '1';
            
            // Beritahu sistem bahwa percakapan usai
            if (onDialogFinished) onDialogFinished();
            
        }, 500);
    }
}

btnVnNext.addEventListener('click', () => {
    currentVnIndex++;
    updateVnDialog();
});

// ================= MODIFIKASI: PANGGIL NAGATA DI KANDANGAN =================
// Tambahkan baris kode ini menggantikan startVnDialog() lama di logika masuk Kandangan
// (Letakkan kodenya di dalam logika Pin Kandangan jika belum ada)
// startVnDialog(naskahNagata, "Petualang Nagata", "npc1", null);


// ================= MESIN MENGGAMBAR GARIS (MATCHING GAME) =================
let currentMatchItem = null;
let currentLine = null;
let activeMatchContainer = null;
let activeMatchSvg = null;

function getMatchCoords(e) {
    let clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const rect = activeMatchSvg.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
}

function startDrawLine(e) {
    const item = e.target.closest('.match-item');
    if (!item || item.classList.contains('matched')) return;
    
    currentMatchItem = item;
    activeMatchContainer = item.closest('.match-container');
    activeMatchSvg = activeMatchContainer.querySelector('.match-svg');
    
    const itemRect = item.getBoundingClientRect();
    const svgRect = activeMatchSvg.getBoundingClientRect();
    const startX = (itemRect.left + itemRect.width) - svgRect.left; // Mulai dari sisi kanan kotak biru
    const startY = (itemRect.top + itemRect.height / 2) - svgRect.top;

    currentLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    currentLine.setAttribute('x1', startX);
    currentLine.setAttribute('y1', startY);
    currentLine.setAttribute('x2', startX);
    currentLine.setAttribute('y2', startY);
    currentLine.setAttribute('class', 'match-line drawing');
    activeMatchSvg.appendChild(currentLine);
}

function drawLine(e) {
    if (!currentLine) return;
    const coords = getMatchCoords(e);
    currentLine.setAttribute('x2', coords.x);
    currentLine.setAttribute('y2', coords.y);
}

function endDrawLine(e) {
    if (!currentLine) return;
    
    let clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    let clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    
    currentLine.style.display = 'none'; // Sembunyikan garis sebentar untuk mendeteksi kotak target di bawahnya
    const targetEl = document.elementFromPoint(clientX, clientY);
    currentLine.style.display = 'block';

    const target = targetEl ? targetEl.closest('.match-target') : null;

    if (target && !target.classList.contains('matched')) {
        if (currentMatchItem.dataset.match === target.dataset.id) {
            // JAWABAN BENAR!
            const targetRect = target.getBoundingClientRect();
            const svgRect = activeMatchSvg.getBoundingClientRect();
            const endX = targetRect.left - svgRect.left; // Berhenti di sisi kiri kotak oranye
            const endY = (targetRect.top + targetRect.height / 2) - svgRect.top;
            
            currentLine.setAttribute('x2', endX);
            currentLine.setAttribute('y2', endY);
            currentLine.classList.remove('drawing');
            
            currentMatchItem.classList.add('matched');
            target.classList.add('matched');
            addScore(25); 
            
            // Cek jika semua garis sudah terhubung
            const allItems = activeMatchContainer.querySelectorAll('.match-item');
            const matchedItems = activeMatchContainer.querySelectorAll('.match-item.matched');
            if (allItems.length === matchedItems.length) {
                const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
                
                // PERBAIKAN: Dialog Nagata diletakkan di dalam callback agar baru muncul setelah Pop-up di-klik "OK"
                showCustomModal("LUAR BIASA!", "Kamu berhasil mencocokkan semuanya dengan tepat!", checkIcon, "alert", () => {
                    const stageNum = activeMatchContainer.closest('.mission-stage').id.split('-')[1];
                    if (typeof triggerPostDialog === "function") triggerPostDialog(stageNum);
                });
            }
        } else {
            // JAWABAN SALAH!
            currentLine.remove();
            reduceLife();
            const missionBox = document.querySelector('.mission-full-box');
            missionBox.classList.remove('shake-screen');
            void missionBox.offsetWidth;
            missionBox.classList.add('shake-screen');
            setTimeout(() => missionBox.classList.remove('shake-screen'), 500);
            
            const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
            showCustomModal("SALAH PASANGAN!", "Garis yang kamu tarik tidak cocok! Coba teliti lagi. (Nyawa Berkurang 1)", lockIcon, "error");
        }
    } else {
        // Dilepas di ruang kosong
        currentLine.remove();
    }
    
    currentLine = null;
    currentMatchItem = null;
}

document.addEventListener('mousedown', startDrawLine);
document.addEventListener('touchstart', startDrawLine, {passive: true});
document.addEventListener('mousemove', drawLine);
document.addEventListener('touchmove', drawLine, {passive: true});
document.addEventListener('mouseup', endDrawLine);
document.addEventListener('touchend', endDrawLine);

// ================= MESIN DRAG & DROP (MENEMPEL JAWABAN ANATOMI) =================
let dndItem = null;
let dndOffsetX = 0, dndOffsetY = 0;
let originalDndParent = null;

function dndStart(e) {
    const item = e.target.closest('.dnd-item');
    if (!item || item.classList.contains('matched')) return;
    
    e.preventDefault(); // Mencegah layar ikut terscroll
    dndItem = item;
    originalDndParent = item.parentNode;
    const rect = item.getBoundingClientRect();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    dndOffsetX = clientX - rect.left;
    dndOffsetY = clientY - rect.top;
    
    // Kunci ukuran asli dalam pixel agar tidak melebar saat dicabut dari kotaknya
    item.style.width = rect.width + 'px';
    item.style.height = rect.height + 'px';
    
    // Ubah posisi menjadi fixed agar melayang bebas mengikuti jari
    item.style.position = 'fixed';
    item.style.left = rect.left + 'px';
    item.style.top = rect.top + 'px';
    item.style.margin = '0';
    document.body.appendChild(item); // Pindahkan keluar kotak agar tidak terpotong
}

function dndMove(e) {
    if (!dndItem) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    dndItem.style.left = (clientX - dndOffsetX) + 'px';
    dndItem.style.top = (clientY - dndOffsetY) + 'px';
}

function dndEnd(e) {
    if (!dndItem) return;
    
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    
    // Trik ajaib: Sembunyikan kartunya sekedip mata untuk mendeteksi kotak apa yang ada di bawahnya
    dndItem.style.display = 'none';
    const targetEl = document.elementFromPoint(clientX, clientY);
    dndItem.style.display = 'flex';
    
    const dropZone = targetEl ? targetEl.closest('.dnd-drop-zone') : null;
    
    if (dropZone && !dropZone.hasChildNodes()) {
        if (dropZone.dataset.match === dndItem.dataset.id) {
            // JAWABAN BENAR DITEMPEL!
            dndItem.style.width = 'auto'; // Lepas kunci lebar pixel
            dndItem.style.height = 'auto';
            dropZone.appendChild(dndItem);
            dndItem.classList.add('matched');
            dropZone.classList.add('matched');
            addScore(25);
            
            // Cek apakah semua kotak sudah terisi
            const container = dropZone.closest('.dnd-game-area');
            const remaining = container.querySelectorAll('.dnd-bank .dnd-item').length;
            if (remaining === 0) {
                const stageNum = container.closest('.mission-stage').id.split('-')[1];
                const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
                showCustomModal("LUAR BIASA!", "Kamu berhasil menyusun bagian organ ini!", checkIcon, "alert", () => {
                    if (typeof triggerPostDialog === "function") triggerPostDialog(stageNum);
                });
            }
        } else {
            // JAWABAN SALAH (Bukan letaknya)
            revertDnd(dndItem);
            reduceLife();
            
            const missionBox = document.querySelector('.mission-full-box');
            missionBox.classList.remove('shake-screen');
            void missionBox.offsetWidth;
            missionBox.classList.add('shake-screen');
            setTimeout(() => missionBox.classList.remove('shake-screen'), 500);
            
            const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
            showCustomModal("SALAH POSISI!", "Bagian ini bukan di situ letaknya. Coba lagi! (Nyawa Berkurang 1)", lockIcon, "error");
        }
    } else {
        // Dilepas di ruang kosong, kembalikan ke bawah
        revertDnd(dndItem);
    }
    dndItem = null;
}

function revertDnd(item) {
    originalDndParent.appendChild(item);
    item.style.position = 'static';
    item.style.width = 'auto'; // Lepas kunci lebar pixel
    item.style.height = 'auto';
}

// Pasang Sensor Sentuh
document.addEventListener('mousedown', dndStart);
document.addEventListener('touchstart', dndStart, {passive: false});
document.addEventListener('mousemove', dndMove, {passive: false});
document.addEventListener('touchmove', dndMove, {passive: false});
document.addEventListener('mouseup', dndEnd);
document.addEventListener('touchend', dndEnd);

// ================= MESIN JURNAL PETUALANG (REFLEKSI) =================
let currentJurnalCallback = null;
let currentJurnalMissionId = 1;
let selectedMood = "";
let selectedFlashbacks = [];

// Database Refleksi per Misi
const jurnalData = {
    1: {
        title: "MISI 1: MENGENAL PANCAINDRA",
        flashbackOpts: [
            "Mengetahui letak dan nama 5 Indra kita",
            "Memutar gambar 3D Mata & Telinga",
            "Berhasil menaklukkan Ujian Boss"
        ],
        janji: "Sebagai Pahlawan Cilik, aku berjanji akan bersyukur dan selalu menggunakan kelima indraku untuk belajar hal-hal yang baik!",
        stampText: "PENJELAJAH PEMULA"
    },
    2: {
        title: "MISI 2: FUNGSI PANCAINDRA",
        flashbackOpts: [
            "Menarik garis fungsi pancaindra",
            "Menjawab tebakan fungsi mata dan telinga",
            "Menjadi Detektif Boss Fungsi"
        ],
        janji: "Aku berjanji akan menggunakan pancaindraku untuk membantu teman dan melakukan kebaikan!",
        stampText: "DETEKTIF FUNGSI"
    },
    3: {
        title: "MISI 3: BAGIAN PANCAINDRA",
        flashbackOpts: [
            "Kunjungan ke Puskesmas",
            "Menyusun nama anatomi organ",
            "Mempelajari fakta unik tubuh"
        ],
        janji: "Aku berjanji akan merawat seluruh bagian pancaindraku agar tetap sehat dan kuat!",
        stampText: "DOKTER CILIK"
    },
    4: {
        title: "MISI 4: MERAWAT TUBUHKU",
        flashbackOpts: [
            "Membaca Mading Perawatan",
            "Simulasi Pahlawan Adaptasi",
            "Mempelajari kekuatan super hewan"
        ],
        janji: "Aku berjanji akan menghargai teman dengan kondisi khusus dan selalu menjaga kebersihan tubuh!",
        stampText: "AHLI KESEHATAN"
    },
    5: {
        title: "MISI 5: TANTANGAN RAHASIA",
        flashbackOpts: [
            "Menangkap buah pakai kamera (AR)",
            "Mencari benda pakai senter malam",
            "Memindai warna benda aseli"
        ],
        janji: "Aku berjanji akan selalu teliti, waspada, dan melatih refleks tubuhku dengan berolahraga!",
        stampText: "AGEN RAHASIA"
    },
    6: {
        title: "MISI 6: UJIAN BUKIT GANDRUNG",
        flashbackOpts: [
            "Menebak suara hewan malam",
            "Menjawab Ujian Kilat Time Attack",
            "Lulus Evaluasi Akhir Boss!"
        ],
        janji: "Aku berjanji akan terus semangat belajar IPAS untuk menjelajahi kehebatan dunia ini!",
        stampText: "LULUSAN TERBAIK"
    }
};

function startJurnal(missionId, callback) {
    const data = jurnalData[missionId];
    if(!data) {
        if(callback) callback();
        return;
    }

    currentJurnalCallback = callback;
    currentJurnalMissionId = missionId;
    selectedMood = "";
    selectedFlashbacks = [];

    document.getElementById('jurnal-subtitle').innerText = data.title;
    
    // Reset Halaman 1 (Mood)
    document.querySelectorAll('.btn-mood').forEach(btn => btn.classList.remove('selected'));
    const btnNext1 = document.getElementById('btn-jurnal-next-1');
    btnNext1.disabled = true; btnNext1.style.opacity = '0.5';

    // Reset Halaman 2 (Flashback)
    const optsContainer = document.getElementById('jurnal-flashback-opts');
    optsContainer.innerHTML = '';
    data.flashbackOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-jurnal-opt';
        btn.innerText = opt;
        btn.onclick = () => selectFlashback(btn, opt);
        optsContainer.appendChild(btn);
    });
    const btnNext2 = document.getElementById('btn-jurnal-next-2');
    btnNext2.disabled = true; btnNext2.style.opacity = '0.5';

    // Reset Halaman 3 (Janji)
    document.getElementById('jurnal-janji-text').innerText = data.janji;
    document.getElementById('jurnal-checkbox').checked = false;
    const btnJanji = document.getElementById('btn-jurnal-janji');
    btnJanji.disabled = true; btnJanji.style.opacity = '0.5';

    // Reset Stempel
    document.getElementById('jurnal-stamp').innerText = data.stampText;
    document.getElementById('jurnal-stamp').classList.remove('stamped');

    showJurnalPage(1);
    
    const overlay = document.getElementById('jurnal-overlay');
    overlay.style.display = 'flex';
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.opacity = '1', 10);
}

function selectMood(btn, mood) {
    document.querySelectorAll('.btn-mood').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedMood = mood;
    const btnNext1 = document.getElementById('btn-jurnal-next-1');
    btnNext1.disabled = false; btnNext1.style.opacity = '1';
    if(typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime = 0; sfxTangkap.play().catch(e=>{}); }
}

function selectFlashback(btn, text) {
    // Bisa pilih/batal pilih lebih dari satu
    if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        selectedFlashbacks = selectedFlashbacks.filter(item => item !== text);
    } else {
        btn.classList.add('selected');
        selectedFlashbacks.push(text);
    }
    
    const btnNext2 = document.getElementById('btn-jurnal-next-2');
    if (selectedFlashbacks.length > 0) {
        btnNext2.disabled = false; btnNext2.style.opacity = '1';
    } else {
        btnNext2.disabled = true; btnNext2.style.opacity = '0.5';
    }
    if(typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime = 0; sfxTangkap.play().catch(e=>{}); }
}

function showJurnalPage(pageNum) {
    for(let i=1; i<=4; i++) {
        document.getElementById('jurnal-page-'+i).style.display = 'none';
    }
    document.getElementById('jurnal-page-'+pageNum).style.display = 'flex';
}

function nextJurnal(nextPage) {
    if(typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime = 0; sfxTangkap.play().catch(e=>{}); }
    showJurnalPage(nextPage);
}

function submitJurnal() {
    // Simpan pilihan pemain ke dalam memori browser
    const dataToSave = {
        mood: selectedMood,
        flashbacks: selectedFlashbacks,
        janji: jurnalData[currentJurnalMissionId].janji,
        stamp: jurnalData[currentJurnalMissionId].stampText
    };
    localStorage.setItem('jurnal_misi_' + currentJurnalMissionId, JSON.stringify(dataToSave));

    showJurnalPage(4);
    setTimeout(() => {
        document.getElementById('jurnal-stamp').classList.add('stamped');
        if(typeof sfxBenar !== 'undefined') { sfxBenar.currentTime = 0; sfxBenar.play().catch(e=>{}); }
    }, 400);
}

function closeJurnal() {
    const overlay = document.getElementById('jurnal-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        if (currentJurnalCallback) currentJurnalCallback();
    }, 400);
}

const jurnalCheckbox = document.getElementById('jurnal-checkbox');
if(jurnalCheckbox) {
    jurnalCheckbox.addEventListener('change', function() {
        const btn = document.getElementById('btn-jurnal-janji');
        if(this.checked) {
            btn.disabled = false;
            btn.style.opacity = '1';
        } else {
            btn.disabled = true;
            btn.style.opacity = '0.5';
        }
    });
}

// Menampilkan Rekap Jurnal Jika Tombol "Lihat Jurnal" Ditekan
window.showJurnalRecap = function(missionId) {
    // Sembunyikan Dialog NPC agar tidak tumpang tindih
    document.getElementById('vn-overlay').style.display = 'none';
    
    const savedData = JSON.parse(localStorage.getItem('jurnal_misi_' + missionId));
    
    // PERBAIKAN: Jika data jurnal kosong (karena memori terhapus saat debugging), munculkan Pop-up Notifikasi!
    if (!savedData || !jurnalData[missionId]) {
        const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
        showCustomModal(
            "JURNAL KOSONG", 
            "Kamu belum mengisi Jurnal Petualangan untuk misi ini. Selesaikan misinya untuk mengisi jurnal!", 
            warnIcon, 
            "alert"
        );
        return;
    }

    document.getElementById('recap-subtitle').innerText = jurnalData[missionId].title;
    document.getElementById('recap-mood').innerText = savedData.mood;
    
    // Tulis ulang daftar pilihan flashback (Bisa lebih dari 1)
    const ul = document.getElementById('recap-flashback');
    ul.innerHTML = '';
    savedData.flashbacks.forEach(text => {
        const li = document.createElement('li');
        li.innerText = text;
        ul.appendChild(li);
    });

    document.getElementById('recap-janji').innerText = savedData.janji;
    document.getElementById('recap-stamp').innerText = savedData.stamp;

    document.getElementById('recap-jurnal-overlay').style.display = 'flex';
};