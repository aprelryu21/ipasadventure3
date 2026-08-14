// ================= MESIN GENERATOR MISI & PENYIMPANAN TEMPLATE =================
// Kita foto bentuk asli HTML Misi 1 agar bisa dikembalikan saat Misi 1 ditekan
let originalMission1HTML = "";
let originalFloatingNextHTML = "";
document.addEventListener('DOMContentLoaded', () => {
    originalMission1HTML = document.getElementById('mission-content-area').innerHTML;
    originalFloatingNextHTML = document.getElementById('floating-next-container').innerHTML;
});

// Generator Misi 2: Menyulap isi kotak secara dinamis!
function buildMission2() {
    document.getElementById('mission-title').innerText = "MISI 2: FUNGSI UTAMA PANCAINDRA";
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    // Injeksi HTML Raksasa Misi 2 (Tarik Garis & 3D Lengkap)
    contentArea.innerHTML = `
        <div id="stage-1" class="mission-stage active-stage">
            <h3 class="stage-title">TAHAP 1: PENGANTAR FUNGSI</h3>
            
            <!-- Tambahan Penjelasan Sebelum Tantangan (Misi 2) -->
            <div id="m2-s1-intro" style="display:flex; flex-direction:column; align-items:center; width: 100%;">
                <div class="mission-text-box" style="font-size: 1.4cqw; text-align: center; margin-bottom: 2cqw;">
                    <p>Selamat datang di <b>Lapangan Tambi</b>! Di sini banyak orang sedang berolahraga.</p>
                    <p>Sekarang, kita akan belajar tentang <b>Fungsi Utama</b> dari kelima pancaindra kita.</p>
                    <p>Cara memainkannya sangat mudah! Kamu hanya perlu menarik garis (sentuh dan geser) dari nama organ di sebelah kiri, menuju ke fungsi kegiatannya yang tepat di sebelah kanan.</p>
                </div>
                <button class="btn btn-play" style="font-size: 1.5cqw; padding: 1cqw 3cqw;" onclick="document.getElementById('m2-s1-intro').style.display='none'; document.getElementById('m2-s1-game').style.display='flex';">LANJUT MEMAINKAN TANTANGAN</button>
            </div>
            
            <div id="m2-s1-game" style="display:none; flex-direction:column; align-items:center; width:100%;">
                <p class="mission-text-box" style="margin-bottom: 0.5cqw;">Tarik garis untuk mencocokkan nama organ dengan kegiatannya!</p>
                <div class="match-container">
                    <svg class="match-svg"></svg>
                    <div class="match-col match-left">
                        <div class="match-item" data-match="f_mata" style="order: ${Math.floor(Math.random()*5)}">Mata</div>
                        <div class="match-item" data-match="f_telinga" style="order: ${Math.floor(Math.random()*5)}">Telinga</div>
                        <div class="match-item" data-match="f_hidung" style="order: ${Math.floor(Math.random()*5)}">Hidung</div>
                        <div class="match-item" data-match="f_lidah" style="order: ${Math.floor(Math.random()*5)}">Lidah</div>
                        <div class="match-item" data-match="f_kulit" style="order: ${Math.floor(Math.random()*5)}">Kulit</div>
                    </div>
                    <div class="match-col match-right">
                        <div class="match-target" data-id="f_hidung" style="order: ${Math.floor(Math.random()*5)}">Membau</div>
                        <div class="match-target" data-id="f_mata" style="order: ${Math.floor(Math.random()*5)}">Melihat</div>
                        <div class="match-target" data-id="f_lidah" style="order: ${Math.floor(Math.random()*5)}">Mengecap</div>
                        <div class="match-target" data-id="f_telinga" style="order: ${Math.floor(Math.random()*5)}">Mendengar</div>
                        <div class="match-target" data-id="f_kulit" style="order: ${Math.floor(Math.random()*5)}">Meraba</div>
                    </div>
                </div>
            </div> <!-- INI DIA PENUTUP YANG HILANG! -->
        </div>

        <div id="stage-2" class="mission-stage">
            <h3 class="stage-title" style="color: #2980b9;">TAHAP 2: FUNGSI MATA</h3>
            <div id="stage-2-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/mata.glb', 'MATA (INDRA PENGLIHAT)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-mata.webp" alt="Mata" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Fungsi utama <b>MATA</b> adalah untuk mengenali cahaya, warna, dan bentuk benda di sekitar kita.<br><br>Klik kotak 3D di samping untuk melihat bagian-bagian mata!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(2)">MULAI TANTANGAN MATA</button>
                </div>
            </div>
            <div id="stage-2-quiz" class="stage-layout" style="display: none;">
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto;">Saat berolahraga di Lapangan Tambi, kamu melihat temanmu berlari memakai baju olahraga berwarna merah cerah. Apa fungsi matamu pada kejadian tersebut?</p>
                    <div class="explore-grid" id="grid-m2-s2" style="width: auto;"></div>
                </div>
            </div>
        </div>

        <div id="stage-3" class="mission-stage">
            <h3 class="stage-title" style="color: #8e44ad;">TAHAP 3: FUNGSI TELINGA</h3>
            <div id="stage-3-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/telinga.glb', 'TELINGA (INDRA PENDENGAR)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-telinga.webp" alt="Telinga" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Fungsi utama <b>TELINGA</b> adalah menangkap gelombang dan getaran suara di udara.<br><br>Klik kotak 3D di samping untuk melihat bentuknya!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(3)">MULAI TANTANGAN TELINGA</button>
                </div>
            </div>
            <div id="stage-3-quiz" class="stage-layout" style="display: none;">
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto;">Tiba-tiba kamu mendengar tiupan peluit yang keras dari wasit di tengah lapangan. Indra apa yang bertugas menangkap suara itu?</p>
                    <div class="explore-grid" id="grid-m2-s3" style="width: auto;"></div>
                </div>
            </div>
        </div>

        <div id="stage-4" class="mission-stage">
            <h3 class="stage-title" style="color: #d35400;">TAHAP 4: FUNGSI HIDUNG</h3>
            <div id="stage-4-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/hidung.glb', 'HIDUNG (INDRA PEMBAU)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-hidung.webp" alt="Hidung" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Fungsi utama <b>HIDUNG</b> adalah mendeteksi partikel wangi atau bau di udara yang masuk ke rongga hidung.<br><br>Klik kotak 3D di samping untuk membedah rongga hidung!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(4)">MULAI TANTANGAN HIDUNG</button>
                </div>
            </div>
            <div id="stage-4-quiz" style="display: none; width: 100%;">
                <p class="mission-text-box" style="width: auto;">Tarik garis untuk mencocokkan sumber bau dengan aromanya yang terbang di area Lapangan Tambi!</p>
                <div class="match-container">
                    <svg class="match-svg"></svg>
                    <div class="match-col match-left">
                        <div class="match-item" data-match="b_melati" style="order: ${Math.floor(Math.random()*3)}">Pohon Bunga</div>
                        <div class="match-item" data-match="b_sampah" style="order: ${Math.floor(Math.random()*3)}">Selokan Kotor</div>
                        <div class="match-item" data-match="b_roti" style="order: ${Math.floor(Math.random()*3)}">Gerobak Jajanan</div>
                    </div>
                    <div class="match-col match-right">
                        <div class="match-target" data-id="b_sampah" style="order: ${Math.floor(Math.random()*3)}">Bau Busuk</div>
                        <div class="match-target" data-id="b_melati" style="order: ${Math.floor(Math.random()*3)}">Harum Semerbak</div>
                        <div class="match-target" data-id="b_roti" style="order: ${Math.floor(Math.random()*3)}">Wangi Sedap Makanan</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="stage-5" class="mission-stage">
            <h3 class="stage-title" style="color: #e84393;">TAHAP 5: FUNGSI LIDAH</h3>
            <div id="stage-5-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/lidah.glb', 'LIDAH (INDRA PENGECAP)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-lidah.webp" alt="Lidah" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Fungsi utama <b>LIDAH</b> adalah sebagai Indra Pengecap untuk membedakan rasa manis, asam, asin, dan pahit.<br><br>Klik kotak 3D di samping untuk melihat lidah lebih dekat!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(5)">MULAI TANTANGAN LIDAH</button>
                </div>
            </div>
            <div id="stage-5-quiz" class="stage-layout" style="display: none;">
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto;">Setelah lelah berolahraga, kamu memakan es krim rasa cokelat yang dijual di pinggir Lapangan Tambi. Apa fungsi lidah saat kamu memakannya?</p>
                    <div class="explore-grid" id="grid-m2-s5" style="width: auto;"></div>
                </div>
            </div>
        </div>

        <div id="stage-6" class="mission-stage">
            <h3 class="stage-title" style="color: #27ae60;">TAHAP 6: FUNGSI KULIT</h3>
            <div id="stage-6-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/kulit.glb', 'KULIT (INDRA PERABA)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-kulit1.webp" alt="Kulit" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Fungsi utama <b>KULIT</b> adalah sebagai Indra Peraba untuk merasakan tekstur (kasar/halus) dan suhu (panas/dingin).<br><br>Klik kotak 3D untuk melihat potongan lapisan kulit!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(6)">MULAI TANTANGAN KULIT</button>
                </div>
            </div>
            <div id="stage-6-quiz" class="stage-layout" style="display: none;">
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto;">Kamu duduk beristirahat di atas rumput lapangan dan merasa permukaannya cukup tajam dan kasar. Indra apa yang bekerja?</p>
                    <div class="explore-grid" id="grid-m2-s6" style="width: auto;"></div>
                </div>
            </div>
        </div>

        <div id="stage-7" class="mission-stage">
            <h3 class="stage-title" style="color: #ff4757;">TAHAP 7: UJIAN FUNGSI (BOSS)</h3>
            <p class="mission-text-box">Lina sedang meminum teh manis yang dingin setelah berolahraga, melihat teman-temannya berlari, mendengarkan peluit wasit, dan menyentuh rumput lapangan yang tajam.<br><br>Tarik garis untuk mencocokkan kejadian dengan indra yang bekerja!</p>
            <div class="match-container">
                <svg class="match-svg"></svg>
                <div class="match-col match-left">
                    <div class="match-item" data-match="u_mata" style="order: ${Math.floor(Math.random()*4)}">Melihat Orang Berlari</div>
                    <div class="match-item" data-match="u_telinga" style="order: ${Math.floor(Math.random()*4)}">Mendengar Peluit</div>
                    <div class="match-item" data-match="u_kulit" style="order: ${Math.floor(Math.random()*4)}">Menyentuh Rumput</div>
                    <div class="match-item" data-match="u_lidah" style="order: ${Math.floor(Math.random()*4)}">Minum Teh Manis</div>
                </div>
                <div class="match-col match-right">
                    <div class="match-target" data-id="u_kulit" style="order: ${Math.floor(Math.random()*4)}">Indra Peraba</div>
                    <div class="match-target" data-id="u_lidah" style="order: ${Math.floor(Math.random()*4)}">Indra Pengecap</div>
                    <div class="match-target" data-id="u_mata" style="order: ${Math.floor(Math.random()*4)}">Indra Penglihat</div>
                    <div class="match-target" data-id="u_telinga" style="order: ${Math.floor(Math.random()*4)}">Indra Pendengar</div>
                </div>
            </div>
        </div>
    `;

    // Pasang tombol Tab Lanjutkan untuk 6 Tahap
    let floatingHTML = '';
    for(let i=1; i<=6; i++) {
        floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-${i}" style="display: none;" onclick="nextMissionStage(${i+1})">LANJUTKAN</button>`;
    }
    floatingNext.innerHTML = floatingHTML;

    // Suntik Soal Pilihan Ganda Bertingkat (2 Soal Per Tahap)
    const m2QuizBank = {
        2: [
            {
                q: "Saat berolahraga di Lapangan Tambi, kamu melihat temanmu berlari memakai baju olahraga berwarna merah cerah. Apa fungsi matamu pada kejadian tersebut?",
                opts: [
                    { text: "Mendengar suara sepatu", isCorrect: false, msg: "Mata tidak bisa mendengar suara langkah kaki." },
                    { text: "Melihat warna baju", isCorrect: true, msg: "Tepat sekali! Mata menangkap pantulan cahaya." },
                    { text: "Mencium bau keringat", isCorrect: false, msg: "Mencium bau adalah tugas indra pembau (hidung)." },
                    { text: "Merasakan hembusan angin", isCorrect: false, msg: "Merasakan sesuatu adalah tugas indra peraba (kulit)." }
                ]
            },
            {
                q: "Selain melihat warna, matamu juga sangat penting saat di lapangan olahraga untuk...",
                opts: [
                    { text: "Mengetahui arah bola terbang", isCorrect: true, msg: "Sempurna! Matamu memandu agar kamu bisa menangkap bola." },
                    { text: "Mendengar aba-aba pelatih", isCorrect: false, msg: "Mendengar adalah tugas telinga." },
                    { text: "Mengetahui teh terasa manis", isCorrect: false, msg: "Mengecap adalah tugas lidah." },
                    { text: "Merasakan teriknya matahari", isCorrect: false, msg: "Merasakan suhu adalah tugas kulit." }
                ]
            }
        ],
        3: [
            {
                q: "Tiba-tiba kamu mendengar tiupan peluit yang keras dari wasit di tengah lapangan. Indra apa yang bertugas menangkap suara itu?",
                opts: [
                    { text: "Indra Pendengar", isCorrect: true, msg: "Benar sekali! Telingamu berhasil menangkap getaran suara peluit wasit." },
                    { text: "Indra Penglihat", isCorrect: false, msg: "Mata digunakan untuk melihat, bukan untuk menangkap suara." },
                    { text: "Indra Pembau", isCorrect: false, msg: "Hidung digunakan untuk mendeteksi bau." },
                    { text: "Indra Peraba", isCorrect: false, msg: "Kulit digunakan untuk merasakan sentuhan fisik." }
                ]
            },
            {
                q: "Selain mendengar peluit wasit, fungsi telingamu saat bermain di lapangan sangat penting untuk...",
                opts: [
                    { text: "Mendengar panggilan teman", isCorrect: true, msg: "Sempurna! Kamu bisa berkomunikasi karena telinga menangkap suara." },
                    { text: "Melihat garis batas lapangan", isCorrect: false, msg: "Melihat garis lapangan adalah fungsi mata." },
                    { text: "Mengecap rasa air minum", isCorrect: false, msg: "Mengecap rasa adalah fungsi lidah." },
                    { text: "Mencium bau rumput", isCorrect: false, msg: "Mencium bau adalah fungsi hidung." }
                ]
            }
        ],
        5: [
            {
                q: "Setelah lelah berolahraga, kamu memakan es krim rasa cokelat yang dijual di pinggir lapangan. Apa fungsi lidah saat kamu memakannya?",
                opts: [
                    { text: "Mengecap rasa manis", isCorrect: true, msg: "Tepat! Lidah bertugas mengecap rasa manis dari es krim cokelat." },
                    { text: "Melihat es krim mencair", isCorrect: false, msg: "Melihat benda mencair adalah tugas mata." },
                    { text: "Merasakan dinginnya es", isCorrect: false, msg: "Merasakan suhu dingin (es) adalah tugas kulit." },
                    { text: "Mencium aroma susu", isCorrect: false, msg: "Mencium aroma adalah tugas hidung." }
                ]
            },
            {
                q: "Kamu kemudian meminum es jeruk peras murni tanpa gula. Saat airnya masuk ke mulut, lidahmu akan mengecap rasa...",
                opts: [
                    { text: "Asam", isCorrect: true, msg: "Benar! Bagian samping lidahmu sangat peka terhadap rasa asam." },
                    { text: "Pedas", isCorrect: false, msg: "Jeruk peras tidak mengandung cabai yang memicu rasa pedas." },
                    { text: "Asin", isCorrect: false, msg: "Jeruk tidak mengandung garam laut." },
                    { text: "Pahit", isCorrect: false, msg: "Jeruk murni rasanya lebih dominan ke asam." }
                ]
            }
        ],
        6: [
            {
                q: "Kamu duduk beristirahat di atas rumput lapangan dan merasa permukaannya cukup tajam dan kasar. Indra apa yang bekerja?",
                opts: [
                    { text: "Indra Peraba", isCorrect: true, msg: "Benar! Saraf di kulitmu langsung mendeteksi tekstur tajam dari rumput." },
                    { text: "Indra Penglihat", isCorrect: false, msg: "Mata bisa melihat rumput, tapi tidak bisa merasakan kasarnya." },
                    { text: "Indra Pengecap", isCorrect: false, msg: "Lidah hanya untuk mengecap rasa makanan." },
                    { text: "Indra Pendengar", isCorrect: false, msg: "Telinga untuk mendengarkan suara." }
                ]
            },
            {
                q: "Cuaca siang itu sangat terik. Kulitmu tiba-tiba merasakan kepanasan dan akhirnya memicu tubuhmu untuk mengeluarkan...",
                opts: [
                    { text: "Keringat", isCorrect: true, msg: "Sempurna! Kelenjar kulit akan mengeluarkan keringat untuk mendinginkan tubuhmu." },
                    { text: "Air mata", isCorrect: false, msg: "Air mata dikeluarkan oleh mata, bukan dari seluruh kulit." },
                    { text: "Bulu kuduk berdiri", isCorrect: false, msg: "Bulu kuduk berdiri terjadi saat cuaca sangat dingin, bukan panas." },
                    { text: "Liur", isCorrect: false, msg: "Air liur dihasilkan di dalam rongga mulut." }
                ]
            }
        ]
    };

    // Mesin Penggerak Kuis Beruntun Misi 2
    let currentM2QuizIndex = { 2: 0, 3: 0, 5: 0, 6: 0 };

    window.loadM2Quiz = function(stage) {
        const data = m2QuizBank[stage];
        const currentIndex = currentM2QuizIndex[stage];
        const grid = document.getElementById(`grid-m2-s${stage}`);
        const qBox = grid.previousElementSibling; // Trik ajaib untuk mengambil teks paragraf tepat di atas tombol

        if (currentIndex >= data.length) {
            // Jika kedua soal sudah berhasil dijawab
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            showCustomModal("TANTANGAN SELESAI!", "Hebat! Kamu berhasil menjawab semua soal tantangan fungsi ini dengan sempurna.", checkIcon, "alert", () => {
                // Panggil dialog NPC (jika ada), lalu sistem akan otomatis memunculkan tombol 'LANJUTKAN'
                if (typeof triggerPostDialog === 'function') {
                    triggerPostDialog(stage);
                } else {
                    const nextBtn = document.getElementById(`btn-next-${stage}`);
                    if(nextBtn) nextBtn.style.display = 'inline-flex';
                }
            });
            return;
        }

        const currentQ = data[currentIndex];
        
        // Animasi transisi teks agar tidak kaku saat soal berganti
        qBox.style.opacity = 0;
        setTimeout(() => {
            qBox.innerText = `Tantangan ${currentIndex + 1} / 2:\n\n${currentQ.q}`;
            qBox.style.opacity = 1;
        }, 200);
        
        grid.innerHTML = ''; // Kosongkan tombol lama

        const shuffledOpts = [...currentQ.opts].sort(() => Math.random() - 0.5);
        
        shuffledOpts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-explore';
            btn.innerText = opt.text;
            
            btn.onclick = () => {
                if (btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
                
                if (opt.isCorrect) {
                    // JAWABAN BENAR
                    sfxBenar.currentTime = 0; sfxBenar.play().catch(e=>console.warn(e));
                    btn.classList.add('btn-correct');
                    addScore(10); // +10 Poin per soal
                    
                    // Beri jeda 0.8 detik sebelum soal kedua masuk
                    setTimeout(() => {
                        currentM2QuizIndex[stage]++;
                        loadM2Quiz(stage);
                    }, 800);
                } else {
                    // JAWABAN SALAH
                    sfxSalah.currentTime = 0; sfxSalah.play().catch(e=>console.warn(e));
                    btn.classList.add('btn-wrong');
                    reduceLife();
                    
                    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                    showCustomModal("SALAH!", `${opt.msg}\n(Nyawa Berkurang 1)`, lockIcon, "error");
                }
            };
            grid.appendChild(btn);
        });
    };

    // Panggil mesin pemuat kuis ini untuk tahap 2, 3, 5, dan 6
    [2, 3, 5, 6].forEach(stage => loadM2Quiz(stage));

    // Pasang Naskah Dialog Pascagame
    currentMissionDialogs = {
        1: { dialog: [
            { text: "Kerja bagus! Mari kita ingat nama-nama ilmiahnya.", mood: "happy" },
            { text: "Mata adalah Indra Penglihat yang bertugas untuk melihat benda. Telinga adalah Indra Pendengar yang berfungsi mendengar suara.", mood: "neutral" },
            { text: "Hidung adalah Indra Pembau untuk mencium aroma. Lidah adalah Indra Pengecap untuk merasakan makanan.", mood: "neutral" },
            { text: "Dan terakhir, Kulit adalah Indra Peraba untuk merasakan sentuhan. Ayo kita selidiki contohnya satu per satu!", mood: "happy" }
        ]},
        4: { dialog: [
            { text: "Luar biasa! Hidung kita bisa mendeteksi berbagai jenis bau yang terbawa oleh angin.", mood: "happy" },
            { text: "Di dalam hidung, terdapat rambut-rambut halus yang menyaring debu lapangan agar udara yang masuk tetap bersih.", mood: "neutral" },
            { text: "Saraf pembau di atas rongga hidunglah yang mengirimkan pesan ke otak, sehingga kita tahu itu bau wangi makanan atau bau selokan!", mood: "neutral" }
        ]},
        7: { 
            isBoss: true,
            dialog: [
                { text: "Detektif yang hebat! Kamu berhasil mencocokkan semua kejadian di Lapangan Tambi dengan indra yang tepat.", mood: "happy" },
                { text: "Kamu telah menguasai Fungsi Utama Pancaindra dengan sempurna dan berhak mendapatkan 100 Koin Emas!", mood: "happy" },
                { text: "Segel ajaib Misi 3 telah terbuka. Petualangan kita makin seru, ayo kembali ke peta!", mood: "neutral" }
            ]
        }
    };
}

// Generator Misi 3: Bentuk & Bagian Pancaindra
function buildMission3() {
    document.getElementById('mission-title').innerText = "MISI 3: BAGIAN PANCAINDRA";
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    contentArea.innerHTML = `
        <div id="stage-1" class="mission-stage active-stage">
            <h3 class="stage-title">TAHAP 1: KUNJUNGAN KE PUSKESMAS</h3>
            <div class="mission-text-box" style="font-size: 1.4cqw; text-align: left;">
                <p>Selamat datang di <b>Puskesmas Kandangan</b>! Suasananya sangat bersih, tenang, dan banyak poster kesehatan di dinding.</p>
                <p>Setiap pancaindra kita memiliki bagian-bagian penyusun yang kompleks. Bagian inilah yang bekerja sama agar organ kita berfungsi maksimal.</p>
                <p>Sambil menunggu antrean dokter, mari kita lihat poster-poster di Puskesmas ini untuk mengenal bentuk dan bagian pancaindra kita!</p>
            </div>
            <button class="btn btn-play" style="margin-top: 2cqw;" onclick="nextMissionStage(2)">LIHAT POSTER ANATOMI</button>
        </div>

        <div id="stage-2" class="mission-stage">
            <h3 class="stage-title" style="color: #2980b9;">TAHAP 2: ANATOMI MATA</h3>
            <div id="stage-2-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-mata.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-mata.webp" alt="Anatomi Mata">
                        <div id="highlight-2" class="anatomy-highlight"></div> 
                    </div>
                    <div class="anatomy-text-col" id="anat-col-2" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#2980b9;"><span>Mata (Indra Penglihat)</span>Mata kita berfungsi sebagai jendela dunia. Dengan mata, kita bisa menangkap pantulan cahaya sehingga mampu melihat indahnya warna dan bentuk benda di sekeliling kita.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Fakta Anatomi</span>Kita memiliki dua buah bola mata yang letaknya aman di bagian wajah. Tahukah kamu? Otot mata adalah otot yang paling cepat bergerak di seluruh tubuh!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_alis" style="display:none;"><span>Alis Mata</span>Coba raba bagian atas matamu, itu adalah Alis! Alis berfungsi bertugas menahan keringat yang menetes dari dahi agar tidak mengalir masuk ke dalam mata.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_kelopak" style="display:none;"><span>Kelopak Mata</span>Ini adalah lipatan kulit tipis yang bisa membuka dan menutup. Ia bertugas melindungi bola mata dari benturan dan debu kasar.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_bulu" style="display:none;"><span>Bulu Mata</span>Rambut halus di ujung kelopak ini adalah Bulu Mata. Fungsinya menahan debu atau serangga kecil agar tidak merusak bola mata.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_iris" style="display:none;"><span>Iris</span>Lapisan melingkar yang memberikan warna pada matamu disebut Iris. Ada yang cokelat, hitam, biru, atau hijau!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_pupil" style="display:none;"><span>Pupil</span>Titik hitam pekat tepat di tengah matamu bernama Pupil. Ia bekerja mengatur cahaya yang masuk.</div>
                    </div>
                </div>
                <button id="btn-anat-2" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(2)">BACA SELANJUTNYA 🔽</button>
            </div>
            <div id="stage-2-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Tarik Label Jawaban ke kotak kosong yang tepat di gambar Mata!</p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-mata.webp" alt="Papan Mata">
                        <!-- Kordinat Tengah Akurat Baru -->
                        <div class="dnd-drop-zone" data-match="d_alis" style="top: 15%; left: 50%; width: 22%; height: 10%;"></div>
                        <div class="dnd-drop-zone" data-match="d_kelopak" style="top: 35%; left: 50%; width: 25%; height: 12%;"></div>
                        <div class="dnd-drop-zone" data-match="d_pupil" style="top: 55%; left: 50%; width: 15%; height: 15%;"></div>
                        <div class="dnd-drop-zone" data-match="d_iris" style="top: 55%; left: 72%; width: 15%; height: 15%;"></div>
                        <div class="dnd-drop-zone" data-match="d_bulu" style="top: 80%; left: 50%; width: 25%; height: 12%;"></div>
                    </div>
                    <div class="dnd-bank">
                        <div class="dnd-item" data-id="d_pupil">Pupil</div>
                        <div class="dnd-item" data-id="d_alis">Alis</div>
                        <div class="dnd-item" data-id="d_kelopak">Kelopak Mata</div>
                        <div class="dnd-item" data-id="d_iris">Iris</div>
                        <div class="dnd-item" data-id="d_bulu">Bulu Mata</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="stage-3" class="mission-stage">
            <h3 class="stage-title" style="color: #8e44ad;">TAHAP 3: ANATOMI TELINGA</h3>
            <div id="stage-3-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-telinga.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-telinga.webp" alt="Anatomi Telinga">
                        <div id="highlight-3" class="anatomy-highlight"></div>
                    </div>
                    <div class="anatomy-text-col" id="anat-col-3" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#8e44ad;"><span>Telinga (Indra Pendengar)</span>Telinga kita bertugas menangkap gelombang dan getaran suara di udara.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Fakta Anatomi</span>Tahukah kamu? Tulang terkecil di seluruh tubuh manusia ada tersembunyi jauh di dalam telingamu!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_daun" style="display:none;"><span>Daun Telinga</span>Daun telinga adalah tulang rawan bagian luar. Berfungsi layaknya corong besar untuk menangkap dan mengumpulkan suara.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_lubang" style="display:none;"><span>Lubang Telinga</span>Lubang telinga adalah saluran tempat masuknya gelombang suara untuk diarahkan menuju ke bagian dalam.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_gendang" style="display:none;"><span>Gendang Telinga</span>Gendang telinga adalah selaput sangat tipis yang bergetar saat terkena suara. Jangan korek telinga terlalu dalam agar selaput ini tidak robek!</div>
                    </div>
                </div>
                <button id="btn-anat-3" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(3)">BACA SELANJUTNYA 🔽</button>
            </div>
            <div id="stage-3-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Tarik Label Jawaban ke kotak kosong yang tepat di gambar Telinga!</p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-telinga.webp" alt="Papan Telinga">
                        <!-- Kordinat Tengah Akurat Baru -->
                        <div class="dnd-drop-zone" data-match="d_gendang" style="top: 55%; left: 25%; width: 18%; height: 25%;"></div>
                        <div class="dnd-drop-zone" data-match="d_lubang" style="top: 55%; left: 52%; width: 20%; height: 20%;"></div>
                        <div class="dnd-drop-zone" data-match="d_daun" style="top: 45%; left: 85%; width: 25%; height: 30%;"></div>
                    </div>
                    <div class="dnd-bank">
                        <div class="dnd-item" data-id="d_lubang">Lubang Telinga</div>
                        <div class="dnd-item" data-id="d_gendang">Gendang Telinga</div>
                        <div class="dnd-item" data-id="d_daun">Daun Telinga</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="stage-4" class="mission-stage">
            <h3 class="stage-title" style="color: #d35400;">TAHAP 4: ANATOMI HIDUNG</h3>
            <div id="stage-4-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-hidung.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-hidung.webp" alt="Anatomi Hidung">
                        <div id="highlight-4" class="anatomy-highlight"></div>
                    </div>
                    <div class="anatomy-text-col" id="anat-col-4" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#d35400;"><span>Hidung (Indra Pembau)</span>Hidung bertugas mendeteksi partikel aroma di udara, sekaligus gerbang pernapasan tempat oksigen masuk.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Fakta Anatomi</span>Hidung manusia adalah sensor yang sangat kuat karena terbukti mampu mengingat puluhan ribu jenis bau berbeda!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_lubang_hidung" style="display:none;"><span>Lubang Hidung</span>Ini adalah dua pintu utama di wajah kita tempat keluar masuknya udara.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_rambut" style="display:none;"><span>Rambut Hidung</span>Rambut hidung adalah bulu-bulu halus di dalam rongga. Mereka bertugas menyaring debu agar udara ke paru-paru tetap bersih.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_saraf" style="display:none;"><span>Saraf Pembau</span>Kumpulan sel sensor khusus di rongga atas. Mereka yang mendeteksi jenis aroma dan langsung mengirimkan pesan ke otak.</div>
                    </div>
                </div>
                <button id="btn-anat-4" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(4)">BACA SELANJUTNYA 🔽</button>
            </div>
            <div id="stage-4-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Tarik Label Jawaban ke kotak kosong yang tepat di gambar Hidung!</p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-hidung.webp" alt="Papan Hidung">
                        <!-- Kordinat Tengah Akurat Baru -->
                        <div class="dnd-drop-zone" data-match="d_saraf" style="top: 25%; left: 50%; width: 28%; height: 16%;"></div>
                        <div class="dnd-drop-zone" data-match="d_rambut" style="top: 60%; left: 50%; width: 30%; height: 18%;"></div>
                        <div class="dnd-drop-zone" data-match="d_lubang_hidung" style="top: 85%; left: 50%; width: 30%; height: 12%;"></div>
                    </div>
                    <div class="dnd-bank">
                        <div class="dnd-item" data-id="d_saraf">Saraf Pembau</div>
                        <div class="dnd-item" data-id="d_lubang_hidung">Lubang Hidung</div>
                        <div class="dnd-item" data-id="d_rambut">Rambut Hidung</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="stage-5" class="mission-stage">
            <h3 class="stage-title" style="color: #e84393;">TAHAP 5: ANATOMI LIDAH</h3>
            <div id="stage-5-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-lidah.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-lidah.webp" alt="Anatomi Lidah">
                        <div id="highlight-5" class="anatomy-highlight"></div>
                    </div>
                    <div class="anatomy-text-col" id="anat-col-5" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#e84393;"><span>Lidah (Indra Pengecap)</span>Lidah adalah otot lentur yang peka, membantumu merasakan berbagai kelezatan, membolak-balik makanan, dan berbicara!</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Fakta Anatomi</span>Di permukaan lidahmu terdapat bintik kasar bernama Papila. Uniknya, sama seperti sidik jari, cetakan lidah setiap manusia berbeda lho!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_ujung" style="display:none;"><span>Rasa Manis</span>Bagian paling depan lidahmu ini sangat ahli mendeteksi rasa manis gulali atau cokelat kesukaanmu.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_samping" style="display:none;"><span>Rasa Asam & Asin</span>Sisi kiri dan kanan lidahmu memiliki tugas berlapis. Mengecap rasa Asin dan rasa Asam seperti jeruk nipis.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_pangkal" style="display:none;"><span>Rasa Pahit</span>Bagian lidah yang paling belakang adalah sensor utama untuk mendeteksi rasa Pahit dari obat atau jamu.</div>
                    </div>
                </div>
                <button id="btn-anat-5" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(5)">BACA SELANJUTNYA 🔽</button>
            </div>
            <div id="stage-5-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Tarik Label Jawaban ke area pengecap rasa di gambar Lidah!</p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-lidah.webp" alt="Papan Lidah">
                        <!-- Kordinat Tengah Akurat Baru -->
                        <div class="dnd-drop-zone" data-match="d_pangkal" style="top: 25%; left: 50%; width: 32%; height: 18%;"></div>
                        <div class="dnd-drop-zone" data-match="d_samping" style="top: 55%; left: 20%; width: 20%; height: 28%;"></div>
                        <div class="dnd-drop-zone" data-match="d_ujung" style="top: 85%; left: 50%; width: 32%; height: 18%;"></div>
                    </div>
                    <div class="dnd-bank">
                        <div class="dnd-item" data-id="d_samping">Asam & Asin</div>
                        <div class="dnd-item" data-id="d_pangkal">Pahit</div>
                        <div class="dnd-item" data-id="d_ujung">Manis</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="stage-6" class="mission-stage">
            <h3 class="stage-title" style="color: #27ae60;">TAHAP 6: ANATOMI KULIT</h3>
            <div id="stage-6-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-kulit1.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-kulit1.webp" alt="Anatomi Kulit Voxel">
                        <div id="highlight-6" class="anatomy-highlight"></div>
                    </div>
                    <div class="anatomy-text-col" id="anat-col-6" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#27ae60;"><span>Kulit (Indra Peraba)</span>Meski tipis, kulit membantumu merasakan sentuhan teman, tekstur benda, rasa sakit, serta membedakan suhu panas dan dingin.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Fakta Anatomi</span>Kulit adalah pelindung berlapis yang menyelimuti seluruh tubuh luar kita, menjadikannya organ terbesar pada manusia!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_permukaan" style="display:none;"><span>Permukaan Kulit (Epidermis)</span>Permukaan kulit adalah lapisan keras teratas. Ini tameng pelindung tubuh dari kuman dan debu.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_rambut" style="display:none;"><span>Batang Rambut</span>Struktur memanjang yang akar sarafnya menembus kulit. Jika kedinginan, rambut ini akan berdiri menjaga kehangatan!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_keringat" style="display:none;"><span>Kelenjar Keringat</span>Struktur melingkar biru itu adalah pabrik yang akan mengeluarkan air keringat saat kepanasan untuk mendinginkan tubuh.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_saraf" style="display:none;"><span>Ujung Saraf</span>Ranting kuning itu adalah Ujung Saraf. Merekalah saklar ajaib pengirim sinyal ke otak begitu kulitmu menyentuh benda panas atau tajam.</div>
                    </div>
                </div>
                <button id="btn-anat-6" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(6)">BACA SELANJUTNYA 🔽</button>
            </div>
            <div id="stage-6-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Tarik Label Jawaban ke kotak kosong yang tepat di blok Kulit Voxel!</p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-kulit1.webp" alt="Papan Kulit Voxel">
                        <!-- Kordinat Tengah Akurat Baru -->
                        <div class="dnd-drop-zone" data-match="d_permukaan" style="top: 20%; left: 50%; width: 38%; height: 16%;"></div>
                        <div class="dnd-drop-zone" data-match="d_rambut" style="top: 45%; left: 70%; width: 22%; height: 25%;"></div>
                        <div class="dnd-drop-zone" data-match="d_saraf" style="top: 75%; left: 25%; width: 25%; height: 25%;"></div>
                        <div class="dnd-drop-zone" data-match="d_keringat" style="top: 80%; left: 75%; width: 25%; height: 22%;"></div>
                    </div>
                    <div class="dnd-bank">
                        <div class="dnd-item" data-id="d_saraf">Ujung Saraf</div>
                        <div class="dnd-item" data-id="d_keringat">Kelenjar Keringat</div>
                        <div class="dnd-item" data-id="d_permukaan">Permukaan Kulit</div>
                        <div class="dnd-item" data-id="d_rambut">Batang Rambut</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="stage-7" class="mission-stage">
            <h3 class="stage-title" style="color: #ff4757;">TAHAP 7: UJIAN ANATOMI (BOSS)</h3>
            <p class="mission-text-box">Soal Bonus! Tarik garis untuk mencocokkan nama bagian tubuh ini dengan organ utamanya!</p>
            <div class="match-container">
                <svg class="match-svg"></svg>
                <div class="match-col match-left">
                    <div class="match-item" data-match="u_mata" style="order: ${Math.floor(Math.random()*4)}">Pupil & Kelopak</div>
                    <div class="match-item" data-match="u_telinga" style="order: ${Math.floor(Math.random()*4)}">Gendang & Daun</div>
                    <div class="match-item" data-match="u_hidung" style="order: ${Math.floor(Math.random()*4)}">Rambut & Saraf</div>
                    <div class="match-item" data-match="u_lidah" style="order: ${Math.floor(Math.random()*4)}">Papila Pengecap</div>
                </div>
                <div class="match-col match-right">
                    <div class="match-target" data-id="u_hidung" style="order: ${Math.floor(Math.random()*4)}">Hidung</div>
                    <div class="match-target" data-id="u_mata" style="order: ${Math.floor(Math.random()*4)}">Mata</div>
                    <div class="match-target" data-id="u_lidah" style="order: ${Math.floor(Math.random()*4)}">Lidah</div>
                    <div class="match-target" data-id="u_telinga" style="order: ${Math.floor(Math.random()*4)}">Telinga</div>
                </div>
            </div>
        </div>
    `;

    let floatingHTML = '';
    for(let i=1; i<=6; i++) {
        floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-${i}" style="display: none;" onclick="nextMissionStage(${i+1})">LANJUTKAN</button>`;
    }
    floatingNext.innerHTML = floatingHTML;

    currentMissionDialogs = {
        2: { dialog: [
            { text: "Luar biasa! Kini kamu tahu nama bagian-bagian pelindung di luar matamu.", mood: "happy" },
            { text: "Selain bagian luar ini, di dalam bola matamu juga ada Kornea dan Lensa yang bekerja seperti kamera lho!", mood: "neutral" }
        ]},
        3: { dialog: [
            { text: "Bagus! Gendang telinga itu sangat tipis dan sensitif.", mood: "neutral" },
            { text: "Oleh karena itu, jangan pernah mengorek telinga sembarangan dengan benda keras ya!", mood: "warning" }
        ]},
        4: { dialog: [
            { text: "Pintar! Rambut hidung adalah pahlawan kecil kita.", mood: "happy" },
            { text: "Mereka menyaring debu kotoran sebelum udara bersih masuk ke paru-parumu.", mood: "neutral" }
        ]},
        5: { dialog: [
            { text: "Tepat sekali! Bintik-bintik kasar pada lidah itu disebut papila.", mood: "happy" },
            { text: "Di dalam papila terdapat banyak sekali ujung saraf yang memberitahu otakmu rasa lezat makanan.", mood: "neutral" }
        ]},
        6: { dialog: [
            { text: "Wah, kamu berhasil menyusun lapisan kulit dengan sempurna!", mood: "happy" },
            { text: "Kelenjar keringat biru sangat penting untuk membuang racun dan mendinginkan suhu tubuhmu saat sedang panas.", mood: "neutral" }
        ]},
        7: { 
            isBoss: true,
            dialog: [
                { text: "Ujian Anatomi berhasil dilewati! Kamu hebat sekali seperti seorang dokter sungguhan.", mood: "happy" },
                { text: "Kamu berhak mendapatkan 100 Koin Emas. Segel ajaib Misi 4 telah terbuka!", mood: "happy" },
                { text: "Mari kita keluar dari Puskesmas dan kembali ke Peta Utama untuk melanjutkan petualangan kita!", mood: "neutral" }
            ]
        }
    };
}

// Fungsi Bantuan untuk Dialog Cerdas Penolakan Misi
function getRejectionDialog(missionId, title1, title2) {
    const isCompleted = localStorage.getItem(`misi_${missionId}_completed`) === 'true';
    if (isCompleted) {
        return { text: "Tidak apa-apa! Sepertinya kamu sudah hafal materi ini. Pilih misi lain saja ya!", mood: "happy", isChoice: false };
    } else {
        return { 
            text: "Eits, tidak bisa lari! Misi ini sangat penting untuk kelulusanmu. Ayo kita selesaikan bersama!", 
            mood: "sad", isChoice: true, hideNo: true, 
            onYes: () => enterMissionScreen(title1, title2, missionId) 
        };
    }
}

// ================= GENERATOR MISI 1 (MENGENAL PANCAINDRA) =================
function buildMission1() {
    document.getElementById('mission-title').innerText = "MISI 1: MENGENAL PANCAINDRA";
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    contentArea.innerHTML = `
        <!-- TAHAP 1: PENGANTAR -->
        <div id="stage-1" class="mission-stage active-stage">
            <h3 class="stage-title">TAHAP 1: PENGANTAR</h3>
            <div class="mission-text-box" style="font-size: 1.4cqw; text-align: center; min-height: 6cqw; display: flex; align-items: center; justify-content: center;">
                <p id="stage-1-text" style="margin: 0; line-height: 1.5;">Pernahkah kamu berpikir bagaimana cara kita mengetahui warna langit atau merdu-nya musik? Ternyata, tubuh kita dilengkapi dengan 'jendela-jendela' ajaib untuk Menjelajahi dunia.</p>
            </div>
            <button class="btn btn-play" id="btn-stage-1-next" onclick="nextStage1Text()">LANJUT</button>
            <div id="stage-1-quiz" style="display: none; width: 100%; align-items: center; flex-direction: column;">
                <p class="mission-text-box" id="text-m1-s1" style="width: auto; margin-bottom: 1.5cqw;">Memuat Pertanyaan...</p>
                <div class="explore-grid" id="grid-m1-s1" style="width: 100%; margin-bottom: 0;"></div>
            </div>
        </div>

        <!-- TAHAP 2: MATA -->
        <div id="stage-2" class="mission-stage">
            <h3 class="stage-title" style="color: #2980b9;">TAHAP 2: INDRA PENGLIHAT</h3>
            <div id="stage-2-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/mata.glb', 'MATA (INDRA PENGLIHAT)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-mata.webp" alt="Mata" style="width: 100%; height: 15cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Ini adalah <b>Mata</b>, alat sensor tubuh untuk melihat cahaya, warna, dan bentuk di sekelilingmu.<br><br>Klik kotak 3D di samping untuk memutar bola matamu!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(2)">MULAI TANTANGAN MATA</button>
                </div>
            </div>
            <div id="stage-2-quiz" style="display: none; width: 100%; align-items: center; flex-direction: column;">
                <p class="mission-text-box" id="text-m1-s2" style="width: auto; margin-bottom: 1.5cqw;">Memuat Pertanyaan...</p>
                <div class="explore-grid" id="grid-m1-s2" style="width: 100%;"></div>
            </div>
        </div>

        <!-- TAHAP 3: TELINGA -->
        <div id="stage-3" class="mission-stage">
            <h3 class="stage-title" style="color: #8e44ad;">TAHAP 3: INDRA PENDENGAR</h3>
            <div id="stage-3-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/telinga.glb', 'TELINGA (INDRA PENDENGAR)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-telinga.webp" alt="Telinga" style="width: 100%; height: 15cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Ini adalah <b>Telinga</b>, alat sensor untuk menangkap getaran suara dari luar.<br><br>Klik kotak 3D di samping untuk melihat bentuknya!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(3)">MULAI TANTANGAN TELINGA</button>
                </div>
            </div>
            <div id="stage-3-quiz" style="display: none; width: 100%; align-items: center; flex-direction: column;">
                <p class="mission-text-box" id="text-m1-s3" style="width: auto; margin-bottom: 1.5cqw;">Memuat Pertanyaan...</p>
                <div class="explore-grid" id="grid-m1-s3" style="width: 100%;"></div>
            </div>
        </div>

        <!-- TAHAP 4: HIDUNG -->
        <div id="stage-4" class="mission-stage">
            <h3 class="stage-title" style="color: #d35400;">TAHAP 4: INDRA PEMBAU</h3>
            <div id="stage-4-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/hidung.glb', 'HIDUNG (INDRA PEMBAU)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-hidung.webp" alt="Hidung" style="width: 100%; height: 15cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Ini adalah <b>Hidung</b>. Rongga saraf di dalamnya bertugas mendeteksi bau di udara.<br><br>Klik kotak 3D di samping untuk melihat rongga hidung!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(4)">MULAI TANTANGAN HIDUNG</button>
                </div>
            </div>
            <div id="stage-4-quiz" style="display: none; width: 100%; align-items: center; flex-direction: column;">
                <p class="mission-text-box" id="text-m1-s4" style="width: auto; margin-bottom: 1.5cqw;">Memuat Pertanyaan...</p>
                <div class="explore-grid" id="grid-m1-s4" style="width: 100%;"></div>
            </div>
        </div>

        <!-- TAHAP 5: LIDAH -->
        <div id="stage-5" class="mission-stage">
            <h3 class="stage-title" style="color: #e84393;">TAHAP 5: INDRA PENGECAP</h3>
            <div id="stage-5-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/lidah.glb', 'LIDAH (INDRA PENGECAP)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-lidah.webp" alt="Lidah" style="width: 100%; height: 15cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Ini adalah <b>Lidah</b>. Permukaannya kasar untuk merasakan manis, asam, asin, dan pahit.<br><br>Klik kotak 3D di samping untuk melihat lidah lebih dekat!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(5)">MULAI TANTANGAN LIDAH</button>
                </div>
            </div>
            <div id="stage-5-quiz" style="display: none; width: 100%; align-items: center; flex-direction: column;">
                <p class="mission-text-box" id="text-m1-s5" style="width: auto; margin-bottom: 1.5cqw;">Memuat Pertanyaan...</p>
                <div class="explore-grid" id="grid-m1-s5" style="width: 100%;"></div>
            </div>
        </div>

        <!-- TAHAP 6: KULIT -->
        <div id="stage-6" class="mission-stage">
            <h3 class="stage-title" style="color: #27ae60;">TAHAP 6: INDRA PERABA</h3>
            <div id="stage-6-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/kulit.glb', 'KULIT (INDRA PERABA)')" title="Klik untuk Memutar 3D">
                    <img src="assets/item/anatomi-kulit1.webp" alt="Kulit" style="width: 100%; height: 15cqw; object-fit: cover; background: #dfe6e9;">
                    <div style="position: absolute; top: 0; left: 0; background: #ff4757; color: white; padding: 0.2cqw 1cqw; font-size: 1.2cqw; font-weight: bold;">3D INTERAKTIF</div>
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Ini adalah <b>Kulit</b>. Saraf peraba yang tersebar membantumu merasakan sentuhan, tekstur, dan suhu.<br><br>Klik kotak 3D untuk melihat potongan kulit!</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(6)">MULAI TANTANGAN KULIT</button>
                </div>
            </div>
            <div id="stage-6-quiz" style="display: none; width: 100%; align-items: center; flex-direction: column;">
                <p class="mission-text-box" id="text-m1-s6" style="width: auto; margin-bottom: 1.5cqw;">Memuat Pertanyaan...</p>
                <div class="explore-grid" id="grid-m1-s6" style="width: 100%;"></div>
            </div>
        </div>

        <!-- TAHAP 7: UJIAN NYAWA (BOSS) -->
        <div id="stage-7" class="mission-stage">
            <h3 class="stage-title" style="color: #ff4757;">TAHAP 7: UJIAN NYAWA</h3>
            <div class="learning-card" style="margin-top: 1cqw;"><p>Kerja bagus! Kelima alat sensor tubuh yang baru saja kita tes secara bersamaan disebut sebagai <b>PANCAINDRA</b>.</p></div>
            <p id="quiz-question" class="quiz-text">Pertanyaan memuat...</p>
            <div class="quiz-options" id="quiz-options"></div>
        </div>
    `;

    // Pasang tombol Tab Lanjutkan untuk transisi tahap
    let floatingHTML = '';
    for(let i=1; i<=6; i++) {
        floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-${i}" style="display: none;" onclick="nextMissionStage(${i+1})">LANJUTKAN</button>`;
    }
    floatingNext.innerHTML = floatingHTML;

    // --- DATABASE KUIS MISI 1 (Letak, Bentuk, & Nama) ---
    const m1QuizBank = {
        1: [
            { q: "Berdasarkan informasi tadi, ada berapa pancaindra yang dimiliki oleh manusia?", opts: [{t: "3 Indra", c: false, m: "Panca berarti lima, bukan tiga!"}, {t: "4 Indra", c: false, m: "Panca berarti lima, bukan empat!"}, {t: "5 Indra", c: true, m: "Tepat sekali! Manusia punya 5 indra."}, {t: "6 Indra", c: false, m: "Panca berarti lima, bukan enam!"}] },
            { q: "Kumpulan sistem sensor yang bekerja siang dan malam untuk menjelajahi dunia ini dinamakan...", opts: [{t: "Pancakes", c: false, m: "Itu nama makanan!"}, {t: "Pancaindra", c: true, m: "Benar sekali!"}, {t: "Pancasila", c: false, m: "Itu dasar negara kita."}, {t: "Pancawarna", c: false, m: "Itu berarti lima warna."}] },
            { q: "Pancaindra kita terdiri dari 5 organ utama, yaitu...", opts: [{t: "Mata, Telinga, Hidung, Lidah, Kulit", c: true, m: "Hebat! Lengkap dan benar."}, {t: "Kepala, Pundak, Lutut, Kaki", c: false, m: "Itu lagu anak-anak!"}, {t: "Jantung, Paru, Lambung, Usus", c: false, m: "Itu organ pencernaan dan pernapasan dalam."}, {t: "Tangan, Kaki, Perut, Punggung", c: false, m: "Itu bagian anggota tubuh biasa."}] }
        ],
        2: [
            { q: "Di manakah letak organ Mata pada tubuh kita?", opts: [{t: "Di bagian dada", c: false, m: "Dada adalah tempat jantung dan paru-paru."}, {t: "Di samping kepala", c: false, m: "Samping kepala adalah letak telinga."}, {t: "Di bagian depan wajah", c: true, m: "Tepat! Mata berada di wajah untuk melihat ke depan."}, {t: "Di telapak tangan", c: false, m: "Tidak ada mata di telapak tangan."}] },
            { q: "Coba perhatikan model 3D tadi, bagaimana bentuk dasar dari organ mata kita?", opts: [{t: "Kotak seperti dadu", c: false, m: "Bentuk mata tidak bersudut."}, {t: "Bulat seperti bola", c: true, m: "Benar! Makanya sering disebut 'Bola Mata'."}, {t: "Pipih seperti kertas", c: false, m: "Mata memiliki ruang dan isi di dalamnya."}, {t: "Segitiga", c: false, m: "Mata tidak berbentuk segitiga."}] },
            { q: "Nama pancaindra yang menggunakan Mata untuk menangkap cahaya dan warna disebut...", opts: [{t: "Indra Penglihat", c: true, m: "Sempurna!"}, {t: "Indra Peraba", c: false, m: "Itu tugas kulit."}, {t: "Indra Pembau", c: false, m: "Itu tugas hidung."}, {t: "Indra Pengecap", c: false, m: "Itu tugas lidah."}] }
        ],
        3: [
            { q: "Berdasarkan posisinya, di manakah letak Telinga pada tubuh kita?", opts: [{t: "Di atas dahi", c: false, m: "Bukan di situ letaknya."}, {t: "Di bagian wajah depan", c: false, m: "Wajah depan untuk mata dan hidung."}, {t: "Di samping kanan dan kiri kepala", c: true, m: "Tepat! Untuk menangkap suara dari berbagai arah."}, {t: "Di belakang leher", c: false, m: "Tidak ada telinga di leher."}] },
            { q: "Bentuk bagian luar daun telinga manusia agak melebar yang fungsinya mirip seperti...", opts: [{t: "Corong penangkap suara", c: true, m: "Benar! Bentuk melengkungnya sangat pas untuk mengumpulkan gelombang suara."}, {t: "Pipa lurus", c: false, m: "Bentuk telinga memiliki banyak lipatan."}, {t: "Kotak persegi", c: false, m: "Telinga tidak memiliki sudut."}, {t: "Jaring saringan", c: false, m: "Telinga tidak berlubang-lubang seperti jaring."}] },
            { q: "Apa nama indra yang bertugas untuk menangkap getaran suara melalui Telinga?", opts: [{t: "Indra Penglihat", c: false, m: "Ini untuk mata."}, {t: "Indra Pendengar", c: true, m: "Hebat! Kamu benar."}, {t: "Indra Pengecap", c: false, m: "Ini untuk lidah."}, {t: "Indra Peraba", c: false, m: "Ini untuk kulit."}] }
        ],
        4: [
            { q: "Coba sentuh hidungmu! Di manakah letak organ Hidung pada manusia?", opts: [{t: "Di atas kepala", c: false, m: "Itu tempat tumbuhnya rambut."}, {t: "Tepat di tengah wajah", c: true, m: "Benar sekali! Posisinya pas di antara mata dan mulut."}, {t: "Di dagu bagian bawah", c: false, m: "Bukan di situ."}, {t: "Di bawah leher", c: false, m: "Itu adalah leher dan dada."}] },
            { q: "Bagaimana ciri khas bentuk Hidung manusia untuk menghirup udara?", opts: [{t: "Memiliki dua lubang rongga", c: true, m: "Tepat! Lubang ini adalah jalan masuknya udara dan bau."}, {t: "Berbentuk pipih tak berlubang", c: false, m: "Hidung pasti memiliki lubang."}, {t: "Berbentuk bulat sempurna", c: false, m: "Itu lebih mirip bola mata."}, {t: "Menjulur panjang ke bawah", c: false, m: "Itu belalai gajah, bukan hidung manusia."}] },
            { q: "Nama pancaindra yang bertugas mengenali wangi atau bau tak sedap disebut...", opts: [{t: "Indra Pendengar", c: false, m: "Itu untuk suara."}, {t: "Indra Peraba", c: false, m: "Itu untuk sentuhan kulit."}, {t: "Indra Pengecap", c: false, m: "Itu untuk rasa di lidah."}, {t: "Indra Pembau", c: true, m: "Sempurna! Hidung adalah indra pembau."}] }
        ],
        5: [
            { q: "Di manakah letak organ Lidah yang aman pada tubuh kita?", opts: [{t: "Terlindungi di dalam rongga mulut", c: true, m: "Tepat sekali! Bersembunyi di balik gigi dan bibir."}, {t: "Menempel di luar pipi", c: false, m: "Lidah berada di dalam mulut."}, {t: "Di atap kepala", c: false, m: "Tentu saja bukan."}, {t: "Di bawah dagu", c: false, m: "Itu bagian luar wajah."}] },
            { q: "Jika diperhatikan, bagaimana bentuk dari permukaan lidah manusia?", opts: [{t: "Keras dan terbuat dari tulang", c: false, m: "Lidah adalah otot yang lentur."}, {t: "Halus licin seperti kaca", c: false, m: "Lidah memiliki tekstur."}, {t: "Berotot lentur dan memiliki bintik-bintik perasa", c: true, m: "Benar! Bintik itu disebut papila."}, {t: "Berbentuk tajam bergerigi", c: false, m: "Itu lebih mirip gigi hiu."}] },
            { q: "Nama pancaindra yang menggunakan lidah untuk merasakan manis, asam, dan pahit adalah...", opts: [{t: "Indra Penglihat", c: false, m: "Untuk melihat (mata)."}, {t: "Indra Pengecap", c: true, m: "Luar biasa! Kamu memahaminya."}, {t: "Indra Pendengar", c: false, m: "Untuk mendengar (telinga)."}, {t: "Indra Pembau", c: false, m: "Untuk mencium bau (hidung)."}] }
        ],
        6: [
            { q: "Di manakah letak organ Kulit pada tubuh kita?", opts: [{t: "Hanya ada di telapak tangan", c: false, m: "Saraf peraba ada di mana-mana."}, {t: "Berada di dalam perut", c: false, m: "Itu organ pencernaan dalam."}, {t: "Melapisi seluruh permukaan luar tubuh kita", c: true, m: "Sempurna! Kulit adalah organ terluas pelindung tubuh."}, {t: "Hanya di bagian wajah", c: false, m: "Seluruh tubuh memiliki kulit."}] },
            { q: "Bagaimana bentuk dari organ kulit manusia?", opts: [{t: "Menjulur seperti kabel", c: false, m: "Bentuk kulit bukan seperti itu."}, {t: "Bulat kecil-kecil", c: false, m: "Bukan bulat."}, {t: "Berbentuk lapisan jaringan tipis yang lebar", c: true, m: "Benar! Kulit memiliki banyak lapisan pelindung."}, {t: "Bongkahan keras seperti batu", c: false, m: "Kulit sangat lentur."}] },
            { q: "Nama pancaindra yang bertugas merasakan sentuhan, kasar, halus, dan suhu pada kulit adalah...", opts: [{t: "Indra Peraba", c: true, m: "Tepat sekali!"}, {t: "Indra Pengecap", c: false, m: "Itu untuk lidah."}, {t: "Indra Pembau", c: false, m: "Itu untuk hidung."}, {t: "Indra Pendengar", c: false, m: "Itu untuk telinga."}] }
        ]
    };

    // --- MESIN PEMUTAR KUIS MISI 1 ---
    let currentM1QuizIndex = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    window.loadM1Quiz = function(stage) {
        const data = m1QuizBank[stage];
        const currentIndex = currentM1QuizIndex[stage];
        const grid = document.getElementById(`grid-m1-s${stage}`);
        const qBox = document.getElementById(`text-m1-s${stage}`);

        if (currentIndex >= data.length) {
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            showCustomModal("TANTANGAN SELESAI!", "Hebat! Kamu berhasil menjawab semua pertanyaan di tahap ini.", checkIcon, "alert", () => {
                // Cek dialog Nagata Pascagame, lalu munculkan tombol lanjut
                if (typeof triggerPostDialog === 'function') {
                    triggerPostDialog(stage);
                } else {
                    const nextBtn = document.getElementById(`btn-next-${stage}`);
                    if(nextBtn) nextBtn.style.display = 'inline-flex';
                }
            });
            return;
        }

        const currentQ = data[currentIndex];
        
        qBox.style.opacity = 0;
        setTimeout(() => {
            qBox.innerText = `Pertanyaan ${currentIndex + 1} / 3:\n\n${currentQ.q}`;
            qBox.style.opacity = 1;
        }, 200);
        
        grid.innerHTML = ''; 

        const shuffledOpts = [...currentQ.opts].sort(() => Math.random() - 0.5);
        
        shuffledOpts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-explore';
            btn.innerText = opt.t;
            
            btn.onclick = () => {
                if (btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
                
                if (opt.c) {
                    sfxBenar.currentTime = 0; sfxBenar.play().catch(e=>console.warn(e));
                    btn.classList.add('btn-correct');
                    addScore(10);
                    
                    setTimeout(() => {
                        currentM1QuizIndex[stage]++;
                        loadM1Quiz(stage);
                    }, 800);
                } else {
                    sfxSalah.currentTime = 0; sfxSalah.play().catch(e=>console.warn(e));
                    btn.classList.add('btn-wrong');
                    reduceLife();
                    
                    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                    showCustomModal("KURANG TEPAT!", `${opt.m}\n(Nyawa Berkurang 1)`, lockIcon, "error");
                }
            };
            grid.appendChild(btn);
        });
    };

    // Eksekusi Pemuat Kuis untuk Tahap 1 s/d 6
    [1, 2, 3, 4, 5, 6].forEach(stage => loadM1Quiz(stage));

    // Eksekusi Ulang Pemuat Boss Tahap 7
    currentMisi1BossIndex = 0;
    loadMisi1BossQuestion();

    // Siapkan Dialog Nagata untuk Akhir Setiap Tahap (Misi 1)
    currentMissionDialogs = {
        1: { dialog: [{ text: "Bagus sekali! Sekarang kamu tahu gambaran umum tentang 5 jendela ajaibmu. Ayo selidiki satu per satu!", mood: "happy" }] },
        2: { dialog: [{ text: "Matamu mengenali bentuk dan letaknya dengan baik! Ayo lanjut ke indra berikutnya.", mood: "happy" }] },
        3: { dialog: [{ text: "Telingamu pendengar yang hebat! Ayo kita selidiki indra yang lain.", mood: "happy" }] },
        4: { dialog: [{ text: "Hidung yang peka! Bau sate memang sangat lezat.", mood: "happy" }] },
        5: { dialog: [{ text: "Lidahmu berhasil mengecap rasa manis! Sempurna.", mood: "happy" }] },
        6: { dialog: [{ text: "Kulitmu bisa membedakan tekstur kasar dan tajam dengan sangat baik!", mood: "happy" }] },
        7: { 
            isBoss: true,
            dialog: [
                { text: "Luar Biasa! Kamu berhasil menyelesaikan semua ujian pengenalan di Misi 1.", mood: "happy" },
                { text: "Kamu mendapatkan 100 Koin Emas. Segel ajaib Misi 2 telah terbuka!", mood: "happy" },
                { text: "Mari kita keluar dan kembali ke Peta Utama!", mood: "neutral" }
            ]
        }
    };
}

// ================= MEMULAI MISI 1 (MENGENAL PANCAINDRA) =================
const btnMisi1 = document.getElementById('misi-1');
if (btnMisi1) {
    btnMisi1.addEventListener('click', function() {
        if (this.classList.contains('locked-pin')) return; 
        
        buildMission1();
        currentStage1Index = 0; 

        // Cek apakah Misi 1 sudah pernah diselesaikan
        const isCompleted = localStorage.getItem('misi_1_completed') === 'true';

        let dramaMisi1 = [
            { text: "Hai! Mau mengulang kembali petualangan kita di Pasar Kandangan?", mood: "happy" },
            { 
                text: "Ayo kita ingat-ingat lagi letak, bentuk, dan nama 5 alat sensor ajaib pada tubuh kita. Kamu siap?", 
                mood: "neutral", isChoice: true,
                onYes: () => enterMissionScreen("MISI 1", "MENGENAL PANCAINDRA", 1),
                onNo: () => {
                    activeScript.push(getRejectionDialog(1, "MISI 1", "MENGENAL PANCAINDRA"));
                    currentVnIndex++; updateVnDialog();
                }
            }
        ];

        // Jika sudah selesai, ubah dialog untuk memunculkan Opsi Ke-3 (Lihat Jurnal)
        if (isCompleted) {
            dramaMisi1[1].text = "Kamu sudah menyelesaikan misi ini. Ingin mengulangnya, atau melihat jurnal petualanganmu?";
            dramaMisi1[1].btn1Text = "ULANGI MISI";
            dramaMisi1[1].btn2Text = "TUTUP";
            dramaMisi1[1].btn3Text = "LIHAT JURNAL";
            
            dramaMisi1[1].onBtn3 = () => {
                showJurnalRecap(1); // Tampilkan Pop-Up Rekap Jurnal
            };
            dramaMisi1[1].onNo = () => {
                document.getElementById('vn-overlay').style.display = 'none'; // Tutup obrolan
            };
        }

        startVnDialog(dramaMisi1, "Petualang Nagata", "npc1", null);
    });
}

// ================= MEMULAI MISI 2 (FUNGSI UTAMA) =================
const btnMisi2 = document.getElementById('misi-2');
if (btnMisi2) {
    btnMisi2.addEventListener('click', function() {
        if (this.classList.contains('locked-pin')) return; 
        
        buildMission2(); 

        // Cek apakah Misi 2 sudah pernah diselesaikan
        const isCompleted = localStorage.getItem('misi_2_completed') === 'true';

        let dramaMisi2 = [
            { text: "Wah, kamu kembali lagi ke Lapangan Tambi yang luas dan ramai ini.", mood: "happy" },
            { 
                text: "Apakah kamu ingin kembali membedah fungsi utama dari masing-masing pancaindra?", 
                mood: "neutral", isChoice: true,
                onYes: () => enterMissionScreen("MISI 2", "FUNGSI UTAMA", 2),
                onNo: () => {
                    activeScript.push(getRejectionDialog(2, "MISI 2", "FUNGSI UTAMA"));
                    currentVnIndex++; updateVnDialog();
                }
            }
        ];

        // Jika sudah selesai, ubah dialog untuk memunculkan Opsi Ke-3 (Lihat Jurnal)
        if (isCompleted) {
            dramaMisi2[1].text = "Kamu sudah menyelesaikan misi ini. Ingin mengulangnya, atau melihat jurnal petualanganmu?";
            dramaMisi2[1].btn1Text = "ULANGI MISI";
            dramaMisi2[1].btn2Text = "TUTUP";
            dramaMisi2[1].btn3Text = "LIHAT JURNAL";
            
            dramaMisi2[1].onBtn3 = () => {
                showJurnalRecap(2); // Tampilkan Pop-Up Rekap Jurnal Misi 2
            };
            dramaMisi2[1].onNo = () => {
                document.getElementById('vn-overlay').style.display = 'none'; // Tutup obrolan
            };
        }

        startVnDialog(dramaMisi2, "Petualang Nagata", "npc1", null);
    });
}

// ================= MEMULAI MISI 3 (BAGIAN PANCAINDRA) =================
const btnMisi3 = document.getElementById('misi-3');
if (btnMisi3) {
    btnMisi3.addEventListener('click', function() {
        if (this.classList.contains('locked-pin')) return; 
        
        buildMission3(); 

        // Cek apakah Misi 3 sudah pernah diselesaikan
        const isCompleted = localStorage.getItem('misi_3_completed') === 'true';

        let dramaMisi3 = [
            { text: "Selamat! Segel Misi 3 telah terbuka. Kali ini kita akan berkunjung ke tempat yang sangat bersih dan tenang.", mood: "happy" },
            { 
                text: "Kita sedang berada di Puskesmas Kandangan! Di sini kita akan belajar mengenali bagian-bagian penyusun pancaindra. Sudah siap bertemu dokter?", 
                mood: "neutral", isChoice: true,
                onYes: () => enterMissionScreen("MISI 3", "BENTUK & BAGIAN", 3),
                onNo: () => {
                    activeScript.push(getRejectionDialog(3, "MISI 3", "BENTUK & BAGIAN"));
                    currentVnIndex++; updateVnDialog();
                }
            }
        ];

        // Jika sudah selesai, ubah dialog untuk memunculkan Opsi Ke-3 (Lihat Jurnal)
        if (isCompleted) {
            dramaMisi3[1].text = "Kamu sudah menyelesaikan kunjungan ke Puskesmas. Ingin mengulangnya, atau melihat jurnal petualanganmu?";
            dramaMisi3[1].btn1Text = "ULANGI MISI";
            dramaMisi3[1].btn2Text = "TUTUP";
            dramaMisi3[1].btn3Text = "LIHAT JURNAL";
            
            dramaMisi3[1].onBtn3 = () => {
                showJurnalRecap(3); // Tampilkan Pop-Up Rekap Jurnal Misi 3
            };
            dramaMisi3[1].onNo = () => {
                document.getElementById('vn-overlay').style.display = 'none'; // Tutup obrolan
            };
        }

        startVnDialog(dramaMisi3, "Petualang Nagata", "npc1", null);
    });
}

// ================= MEMULAI MISI 4 (MERAWAT PANCAINDRA) =================
const btnMisi4 = document.getElementById('misi-4');
if (btnMisi4) {
    btnMisi4.addEventListener('click', function() {
        if (this.classList.contains('locked-pin')) return; 
        
        buildMission4(); 

        // Cek apakah Misi 4 sudah pernah diselesaikan
        const isCompleted = localStorage.getItem('misi_4_completed') === 'true';

        let dramaMisi4 = [
            { text: "Hore! Segel Misi 4 telah terbuka. Kita akan pergi ke markas utama petualang hari ini.", mood: "happy" },
            { 
                text: "Kita sudah sampai di SD Negeri Medowo 1! Siapkah kamu menghadapi Ujian Dadakan tentang Merawat Pancaindra?", 
                mood: "neutral", isChoice: true,
                onYes: () => enterMissionScreen("MISI 4", "MERAWAT TUBUHKU", 4),
                onNo: () => {
                    activeScript.push(getRejectionDialog(4, "MISI 4", "MERAWAT TUBUHKU"));
                    currentVnIndex++; updateVnDialog();
                }
            }
        ];

        // Jika sudah selesai, ubah dialog untuk memunculkan Opsi Ke-3 (Lihat Jurnal)
        if (isCompleted) {
            dramaMisi4[1].text = "Kamu sudah menaklukkan Ujian Dadakan di SD Negeri Medowo 1. Ingin mengulangnya, atau melihat jurnal?";
            dramaMisi4[1].btn1Text = "ULANGI MISI";
            dramaMisi4[1].btn2Text = "TUTUP";
            dramaMisi4[1].btn3Text = "LIHAT JURNAL";
            
            dramaMisi4[1].onBtn3 = () => {
                showJurnalRecap(4); // Tampilkan Pop-Up Rekap Jurnal Misi 4
            };
            dramaMisi4[1].onNo = () => {
                document.getElementById('vn-overlay').style.display = 'none'; // Tutup obrolan
            };
        }

        startVnDialog(dramaMisi4, "Petualang Nagata", "npc1", null);
    });
}

// ================= LOGIKA KLIK UNTUK SELURUH MISI TERKUNCI =================
const lockedMissionIds = ['misi-2', 'misi-3', 'misi-4', 'misi-5']; // misi-6 dihapus agar bisa diklik jika syarat terpenuhi

lockedMissionIds.forEach(id => {
    const pin = document.getElementById(id);
    if (pin) {
        pin.addEventListener('click', function() {
            // Cek, jika pin masih memiliki baju 'locked-pin' (belum terbuka)
            if (this.classList.contains('locked-pin')) {
                const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                showCustomModal(
                    "MISI TERKUNCI!", 
                    "Misi ini masih tersegel! Selesaikan dulu misi sebelumnya untuk membuka jalan ke sini.", 
                    lockIcon, 
                    "alert"
                );
            }
        });
    }
});

// ================= LOGIKA KLIK UNTUK MISI DALAM PENGEMBANGAN =================
document.addEventListener('click', function(e) {
    if (e.target.closest('.dev-pin')) {
        showCustomModal(
            "DALAM PENGEMBANGAN", 
            "Misi ini sudah terpetakan, namun materinya sedang dalam tahap pembuatan oleh tim. Nantikan pembaruannya segera!", 
            devIcon, 
            "alert"
        );
    }
});

// ================= MEMULAI MISI 5: TANTANGAN RAHASIA (KAMERA BANYU BENING) =================
function buildMission5() {
    document.getElementById('mission-title').innerText = "MISI 5: TANTANGAN RAHASIA";
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    contentArea.innerHTML = `
        <!-- TAHAP 1: AR FULLSCREEN TANGKAP BUAH -->
        <div id="stage-1" class="mission-stage active-stage" style="width: 100%; height: 100%;">
            <!-- Disembunyikan dulu (display: none) agar pemandangan alam terlihat utuh saat dialog NPC -->
            <div id="ar-game-area" class="ar-container" style="display: none;">
                
                <!-- Pembungkus Flexbox agar Notifikasi TERKUNCI MUTLAK DI TENGAH -->
                <div id="ar-target-overlay-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none; align-items: center; justify-content: center; z-index: 50; pointer-events: none;">
                    <div id="ar-target-overlay" style="background: #2f3542; border: 0.6cqw solid #fbc531; padding: 2cqw 4cqw; color: #fff; font-size: 3cqw; font-weight: 900; text-align: center; border-radius: 1cqw; box-shadow: inset -0.3cqw -0.3cqw 0px rgba(0,0,0,0.5), inset 0.3cqw 0.3cqw 0px rgba(255,255,255,0.2), 1cqw 1cqw 0 rgba(0,0,0,0.8); text-shadow: 0.2cqw 0.2cqw 0 #111; max-width: 80%; word-wrap: break-word;">TANGKAP BUAH APEL!</div>
                </div>

                <div class="ar-hud">
                    <div class="ar-score-box">Buah Terkumpul: <span id="ar-score-txt">0 / 20</span></div>
                    <button class="btn-close-mission" style="position: static; margin-left: auto;" onclick="abortMission5()">X</button>
                </div>
                <div class="ar-frame"></div>
                <!-- Lingkaran Panduan Wajah (Muncul Sementara) -->
                <div id="ar-face-guide" class="ar-face-guide">
                    <div class="face-guide-box">AREA AMAN<br>(JANGAN ADA TANGAN)</div>
                </div>
                <video id="ar-video" class="ar-video" autoplay playsinline></video>
                <canvas id="ar-hidden-canvas" style="display: none;"></canvas>
            </div>
        </div>

        <!-- TAHAP 2: DETEKTIF ALAM -->
        <div id="stage-2" class="mission-stage" style="width: 100%; height: 100%;">
            <div id="detektif-game-area" class="ar-container" style="background-image: url('assets/background/mission5.webp'); background-size: cover; background-position: center; position: relative;">
                
                <!-- Layar Pengantar Detektif -->
                <div id="intro-detektif" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 30; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h2 style="color: #3498db; font-size: 3.5cqw; text-shadow: 0.2cqw 0.2cqw 0 #000; margin-bottom: 1cqw;">DETEKTIF BANYU BENING</h2>
                    <p style="color: white; font-size: 1.8cqw; margin-bottom: 2cqw; text-align: center; padding: 0 5cqw;">Hari mulai gelap! Dengarkan petunjuk suara, lalu geser Senter Penyelidikmu<br>untuk menemukan 5 Objek Rahasia di sekitar sungai.</p>
                    <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw;" onclick="startDetektifAlam()">NYALAKAN SENTER</button>
                </div>

                <button id="btn-detektif-audio" class="btn-detektif-audio" onclick="playDetektifAudio()">
                    <svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M11 2v12h-2v-2H7v-2H5V6h2V4h2V2h2zm2 2h2v8h-2V4z"/></svg> PUTAR PETUNJUK
                </button>
                
                <button class="btn-close-mission" style="position: absolute; top: 1.5cqw; right: 1.5cqw; z-index: 35;" onclick="abortMission5()">X</button>

                <!-- Lapisan Senter Gelap -->
                <div id="flashlight-layer" class="flashlight-bg" style="display: none;"></div>
                
                <!-- 5 Titik Koordinat Rahasia -->
                <div id="target-gunung" class="detektif-target" style="top: 15%; left: 30%; width: 40%; height: 20%;" onclick="checkDetektifTarget('gunung')"></div>
                <div id="target-penjual" class="detektif-target" style="top: 45%; left: 75%; width: 20%; height: 30%;" onclick="checkDetektifTarget('penjual')"></div>
                <div id="target-api" class="detektif-target" style="top: 50%; left: 8%; width: 15%; height: 15%;" onclick="checkDetektifTarget('api')"></div>
                <div id="target-kamera" class="detektif-target" style="top: 60%; left: 10%; width: 15%; height: 18%;" onclick="checkDetektifTarget('kamera')"></div>
                <div id="target-bunga" class="detektif-target" style="top: 45%; left: 58%; width: 18%; height: 15%;" onclick="checkDetektifTarget('bunga')"></div>
            </div>
        </div>

        <!-- TAHAP 3: DETEKTIF WARNA -->
        <div id="stage-3" class="mission-stage" style="width: 100%; height: 100%;">
            <div id="ar-color-area" class="ar-container" style="display: none;">
                <div id="ar-color-overlay-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none; align-items: center; justify-content: center; z-index: 50; pointer-events: none;">
                    <div id="ar-color-overlay" style="background: #2f3542; border: 0.6cqw solid #fbc531; padding: 2cqw 4cqw; color: #fff; font-size: 3cqw; font-weight: 900; text-align: center; border-radius: 1cqw; box-shadow: inset -0.3cqw -0.3cqw 0px rgba(0,0,0,0.5), inset 0.3cqw 0.3cqw 0px rgba(255,255,255,0.2), 1cqw 1cqw 0 rgba(0,0,0,0.8); text-shadow: 0.2cqw 0.2cqw 0 #111; max-width: 80%; word-wrap: break-word;">CARI WARNA!</div>
                </div>

                <div class="ar-hud">
                    <div class="ar-score-box">Target: <span id="ar-color-target-txt">MEMUAT...</span></div>
                    <button class="btn-close-mission" style="position: static; margin-left: auto;" onclick="abortMission5()">X</button>
                </div>
                
                <div class="ar-color-target"></div>
                
                <!-- Teks Live Pendeteksi Warna -->
                <div id="ar-detected-color" style="position: absolute; top: 66%; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: #fff; padding: 0.5cqw 1.5cqw; border-radius: 0.5cqw; font-size: 1.5cqw; font-weight: bold; z-index: 10; border: 0.2cqw solid #fff; pointer-events: none; text-shadow: 0.1cqw 0.1cqw 0 #000; white-space: nowrap;">Terdeteksi: -</div>

                <div class="ar-color-timer-container">
                    <div id="ar-color-timer-fill" class="ar-color-timer-fill"></div>
                </div>

                <video id="ar-color-video" class="ar-video" autoplay playsinline></video>
                <canvas id="ar-color-hidden-canvas" style="display: none;"></canvas>
            </div>
        </div>
    `;
    floatingNext.innerHTML = ''; 

    // Eksekusi Fullscreen CSS seketika saat Misi 5 dibuat!
    document.querySelector('.mission-header').style.display = 'none';
    document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.add('fullscreen-mode');
}

// ================= LOGIKA JAVASCRIPT TAHAP 2 (DETEKTIF ALAM) =================
let detektifTargets = [];
let currentDetektifIndex = 0;
let isFlashlightActive = false;

// Audio Objek Detektif Alam (Pastikan file MP3-nya sudah disiapkan di folder assets/sound/)
const audioDetektif = {
    penjual: new Audio('assets/sound/cmd-penjual.mp3'),
    api: new Audio('assets/sound/cmd-api.mp3'), 
    bunga: new Audio('assets/sound/cmd-bunga.mp3'),
    gunung: new Audio('assets/sound/cmd-gunung.mp3'),
    kamera: new Audio('assets/sound/cmd-kamera.mp3'),
    yeay: new Audio('assets/sound/yeay.mp3')
};

// Data Kuis Pancaindra
const detektifData = {
    api: {
        dialog: "Kamu menemukan Api Unggun! Berada di dekatnya terasa sangat hangat. Indra apa yang bertugas merasakan suhu panas?",
        ans1: "KULIT", ans2: "MATA", correct: 1
    },
    bunga: {
        dialog: "Kamu menemukan Bunga Mawar Merah! Aromanya sangat harum dan semerbak. Indra apa yang digunakan untuk menciumnya?",
        ans1: "TELINGA", ans2: "HIDUNG", correct: 2
    },
    gunung: {
        dialog: "Kamu menemukan Pegunungan! Pemandangannya sangat indah dari kejauhan. Indra apa yang membantumu melihatnya?",
        ans1: "MATA", ans2: "LIDAH", correct: 1
    },
    kamera: {
        dialog: "Kamu menemukan Kamera! Terdengar bunyi 'Cekrek!' yang keras saat tombolnya ditekan. Indra apa yang menangkap getaran suara itu?",
        ans1: "KULIT", ans2: "TELINGA", correct: 2
    },
    penjual: {
        dialog: "Kamu menemukan Penjual Makanan! Jajanannya terlihat lezat dan rasanya sangat manis. Indra apa yang bertugas mengecap rasanya?",
        ans1: "LIDAH", ans2: "HIDUNG", correct: 1
    }
};

window.startDetektifAlam = function() {
    document.getElementById('intro-detektif').style.display = 'none';
    isFlashlightActive = true;
    currentDetektifIndex = 0;
        
    // Atur agar 'penjual' selalu pertama, 4 target sisanya diacak
    let remainingTargets = ['api', 'bunga', 'gunung', 'kamera'].sort(() => Math.random() - 0.5); 
    detektifTargets = ['penjual', ...remainingTargets];
        
    // Nyalakan Senter & Tombol Suara
    document.getElementById('flashlight-layer').style.display = 'block';
    document.getElementById('btn-detektif-audio').style.display = 'flex';
    document.getElementById('target-' + detektifTargets[0]).style.display = 'block';
    
    // Sensor Pengikut Mouse/Jari untuk Senter
    const gameArea = document.getElementById('detektif-game-area');
    const updateFlashlight = (e) => {
        if (!isFlashlightActive) return;
        const rect = gameArea.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;
        document.getElementById('flashlight-layer').style.setProperty('--x', x + '%');
        document.getElementById('flashlight-layer').style.setProperty('--y', y + '%');
    };
    
    gameArea.addEventListener('mousemove', updateFlashlight);
    gameArea.addEventListener('touchmove', updateFlashlight, {passive: true});
};

window.playDetektifAudio = function() {
    let currentTarget = detektifTargets[currentDetektifIndex];
    audioDetektif[currentTarget].currentTime = 0;
    audioDetektif[currentTarget].play().catch(e => console.log(e));
};

window.checkDetektifTarget = function(targetName) {
    if (targetName === detektifTargets[currentDetektifIndex]) {
        // SENTER TETAP MENYALA DAN MENGGELAPKAN LAYAR (Hanya dibekukan pergerakannya)
        isFlashlightActive = false;
        document.getElementById('target-' + targetName).style.display = 'none';
        document.getElementById('btn-detektif-audio').style.display = 'none';
        
        audioDetektif.yeay.currentTime = 0;
        audioDetektif.yeay.play();
        
        // MUNCULKAN DIALOG KUIS DARI NAGATA
        let data = detektifData[targetName];
        let quizDialog = [
            {
                text: data.dialog, mood: "happy", isChoice: true,
                btn1Text: data.ans1, btn2Text: data.ans2,
                onYes: () => handleDetektifAnswer(1, data.correct),
                onNo: () => handleDetektifAnswer(2, data.correct)
            }
        ];
        
        setTimeout(() => { startVnDialog(quizDialog, "Petualang Nagata", "npc1", null); }, 800);
    }
};

window.handleDetektifAnswer = function(chosen, correct) {
    // Tutup layar dialog NPC secara paksa agar tidak menghalangi permainan
    vnOverlay.style.display = 'none';

    const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;

    if (chosen === correct) {
        addScore(20);
        showCustomModal("TEPAT SEKALI!", "Pancaindramu bekerja dengan sangat baik mengidentifikasi objek alam!", checkIcon, "alert", () => {
            currentDetektifIndex++;
            if (currentDetektifIndex < detektifTargets.length) {
                // Lanjut ke target berikutnya
                isFlashlightActive = true;
                document.getElementById('flashlight-layer').style.display = 'block';
                document.getElementById('btn-detektif-audio').style.display = 'flex';
                document.getElementById('target-' + detektifTargets[currentDetektifIndex]).style.display = 'block';
                    
                // OTOMATIS MEMUTAR SUARA PETUNJUK SELANJUTNYA
                setTimeout(() => {
                    if (typeof playDetektifAudio === "function") playDetektifAudio();
                }, 500); // Jeda setengah detik agar pop-up tertutup rapi sebelum suara muncul
            } else {
                // LANJUT KE TAHAP 3 (DETEKTIF WARNA)
                showCustomModal("PENYELIDIKAN BERHASIL!", "Luar biasa! Kamu menemukan semua benda alam. Tapi ujianmu belum selesai!", checkIcon, "alert", () => {
                    nextMissionStage(3);
                    const dramaMisi5T3 = [
                        { text: "Buktikan kehebatan matamu! Aku akan menyebutkan sebuah warna, dan kamu punya waktu 20 detik.", mood: "happy" },
                        { text: "Cari benda asli dengan warna tersebut di sekitarmu, lalu arahkan kamera dan paskan benda itu di dalam KOTAK TARGET TENGAH LAYAR!", mood: "warning" },
                        { text: "Apakah matamu siap membedakan spektrum cahaya?", mood: "happy" }
                    ];
                    setTimeout(() => {
                        startVnDialog(dramaMisi5T3, "Petualang Nagata", "npc1", () => {
                            startDetektifWarna();
                        });
                    }, 500);
                });
            }
        });
    } else {
        reduceLife();
        showCustomModal("KURANG TEPAT!", "Coba ingat lagi fungsi pancaindramu! (Nyawa Berkurang 1)", lockIcon, "error", () => {
            if (chapterLives[currentChapter] > 0) {
                // Ulangi Pertanyaan jika nyawa masih ada
                let data = detektifData[detektifTargets[currentDetektifIndex]];
                let quizDialog = [{
                    text: data.dialog, mood: "warning", isChoice: true,
                    btn1Text: data.ans1, btn2Text: data.ans2,
                    onYes: () => handleDetektifAnswer(1, data.correct),
                    onNo: () => handleDetektifAnswer(2, data.correct)
                }];
                startVnDialog(quizDialog, "Petualang Nagata", "npc1", null);
            } else {
                abortMission5(); // Keluar jika nyawa habis
            }
        });
    }
};

// Musik Latar Khusus Tantangan Kamera AR (Misi 5)
const bgmBossMisi5 = new Audio('assets/music/music-boss.mp3');
bgmBossMisi5.loop = true;
bgmBossMisi5.volume = 0.4; // Atur volume agar tidak menutupi efek suara

// Fungsi Pembatalan / Kabur dari Layar Kamera
window.abortMission5 = function() {
    // Matikan musik boss
    bgmBossMisi5.pause();
    bgmBossMisi5.currentTime = 0;

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
    
    // Kembalikan Tampilan CSS Kotak Misi seperti semula
    document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
    document.querySelector('.mission-header').style.display = 'flex';
    
    exitMissionScreen();
};

window.startDetektifWarna = function() {
        document.getElementById('ar-color-area').style.display = 'flex';
        
        // Putar Musik Boss
        bgmBossMisi5.currentTime = 0;
        bgmBossMisi5.play().catch(e => console.log("BGM Boss diblokir browser: ", e));

        const video = document.getElementById('ar-color-video');
        const canvas = document.getElementById('ar-color-hidden-canvas');
        if (!video || !canvas) return;
        
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        canvas.width = 160; 
        canvas.height = 90;

        window.arColorActive = false;
        let timeRemaining = 30; // Waktu ditingkatkan menjadi 30 detik
        let colorsFound = 0; 
        const targetWin = 5; // DIUBAH: Sekarang harus mencari 5 barang
        
        // 15 Database Target Warna Menggunakan Mesin HSL Super Akurat
        const colors = [
            { name: 'MERAH', text: 'CARI BENDA WARNA MERAH!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'MERAH') },
            { name: 'HIJAU', text: 'CARI BENDA WARNA HIJAU!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'HIJAU') },
            { name: 'BIRU', text: 'CARI BENDA WARNA BIRU!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'BIRU') },
            { name: 'KUNING', text: 'CARI BENDA WARNA KUNING!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'KUNING') },
            { name: 'PUTIH', text: 'CARI BENDA WARNA PUTIH!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'PUTIH') },
            { name: 'HITAM / GELAP', text: 'CARI BENDA HITAM / GELAP!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'HITAM') },
            { name: 'ABU-ABU', text: 'CARI BENDA WARNA ABU-ABU!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'ABU') },
            { name: 'ORANYE', text: 'CARI BENDA WARNA ORANYE!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'ORANYE') },
            { name: 'COKELAT', text: 'CARI BENDA WARNA COKELAT!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'COKELAT') },
            { name: 'UNGU', text: 'CARI BENDA WARNA UNGU!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'UNGU') },
            { name: 'PINK / MERAH MUDA', text: 'CARI WARNA MERAH MUDA!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'PINK') },
            { name: 'MERAH CERAH', text: 'CARI BENDA MERAH CERAH!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'MERAH CERAH') },
            { name: 'HIJAU DAUN', text: 'CARI WARNA HIJAU DAUN!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'HIJAU DAUN') },
            { name: 'BIRU LANGIT', text: 'CARI WARNA BIRU LANGIT!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'BIRU LANGIT') },
            { name: 'KUNING CERAH', text: 'CARI BENDA KUNING CERAH!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'KUNING CERAH') }
        ];
        
        let currentColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('ar-color-target-txt').innerText = `${colorsFound}/${targetWin} - ${currentColor.name}`;
    
    function showColorOverlay(phaseText) {
        window.arColorActive = false;
        const overlayWrapper = document.getElementById('ar-color-overlay-wrapper');
        const overlay = document.getElementById('ar-color-overlay');
        
        overlay.innerText = phaseText;
        overlayWrapper.style.display = 'flex';
        overlay.classList.remove('animate-pop');
        void overlay.offsetWidth; 
        overlay.classList.add('animate-pop');

        setTimeout(() => {
            overlayWrapper.style.display = 'none';
            window.arColorActive = true; 
            startColorTimer();
        }, 2500);
    }

    function startColorTimer() {
        timeRemaining = 30; // Waktu ditingkatkan
        const bar = document.getElementById('ar-color-timer-fill');
        bar.style.width = '100%';
        bar.style.backgroundColor = '#2ed573';
        
        window.arColorTimer = setInterval(() => {
            if (!window.arColorActive) return;
            timeRemaining--;
            let pct = (timeRemaining / 30) * 100; // Pembagi diubah menjadi 30
            bar.style.width = pct + '%';
            
            if (pct <= 50) bar.style.backgroundColor = '#ffa502';
            if (pct <= 20) bar.style.backgroundColor = '#ff4757';
            
            if (timeRemaining <= 0) {
                window.arColorActive = false; // Jeda kamera saat pop-up error muncul
                clearInterval(window.arColorTimer);
                // Baris clearInterval(window.arColorLoop) dihapus agar siswa bisa mencoba lagi!
                handleColorTimeout();
            }
        }, 1000);
    }

    // Menggunakan kamera belakang (environment) agar mudah menyorot benda
    navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } } })
    .then(stream => {
        window.arStream = stream;
        video.srcObject = stream;
        video.play();
        
        setTimeout(() => { showColorOverlay(currentColor.text); }, 500);
        
        let holdTime = 0; // Variabel baru untuk menghitung waktu tahan (hold)
        
        // Mesin Pemindai Piksel (Scanning Scanner Box)
        window.arColorLoop = setInterval(() => {
            if (!window.arColorActive) return;
            
            try {
                ctx.drawImage(video, 0, 0, 160, 90);
                let currentImg = ctx.getImageData(0, 0, 160, 90);
                
                let matchCount = 0;
                let totalCount = 0;
                let colorCounts = {}; // Untuk menyimpan tebakan semua warna
                colors.forEach(c => colorCounts[c.name] = 0);
                
                // Hanya menyortir warna yang berada TEPAT DI TENGAH KOTAK TARGET
                // (Menggunakan y+=2 dan x+=2 untuk mempercepat performa di HP jadul)
                for (let y = 30; y < 60; y+=2) { 
                    for (let x = 50; x < 110; x+=2) {
                        let idx = (y * 160 + x) * 4;
                        let r = currentImg.data[idx];
                        let g = currentImg.data[idx+1];
                        let b = currentImg.data[idx+2];
                        
                        // 1. Hitung warna untuk target utama
                        if (currentColor.rgbMatch(r,g,b)) {
                            matchCount++;
                        }
                        
                        // 2. Hitung warna untuk teks Live di layar
                        for (let i = 0; i < colors.length; i++) {
                            if (colors[i].rgbMatch(r,g,b)) {
                                colorCounts[colors[i].name]++;
                                break; // Lanjut ke piksel berikutnya jika sudah nemu warna
                            }
                        }
                        totalCount++;
                    }
                }
                
                // Logika Teks Live Pendeteksi (Cari warna apa yang paling mendominasi)
                let dominantColor = "-";
                let maxCount = 0;
                for (let cName in colorCounts) {
                    if (colorCounts[cName] > maxCount) {
                        maxCount = colorCounts[cName];
                        dominantColor = cName;
                    }
                }
                
                let detectedTextEl = document.getElementById('ar-detected-color');
                
                // CEK TARGET WARNA UTAMA
                if (matchCount / totalCount > 0.05) {
                    holdTime += 200; // Tambah 200ms setiap kali kamera berhasil mendeteksi tanpa putus
                    
                    if (detectedTextEl) {
                        // Menghitung sisa detik hitung mundur (3 detik = 3000ms)
                        let sisaDetik = Math.ceil((3000 - holdTime) / 1000);
                        detectedTextEl.innerText = `TAHAN POSISI... ${sisaDetik}`;
                        detectedTextEl.style.color = "#2ed573"; // Teks berubah hijau
                    }
                    
                    // Jika benda sudah ditahan selama 3 detik di kotak tanpa goyang
                    if (holdTime >= 3000) {
                        window.arColorActive = false; 
                        clearInterval(window.arColorTimer);
                        holdTime = 0; // Reset waktu tahan
                        handleColorSuccess();
                    }
                } else {
                    holdTime = 0; // Reset waktu jika barang bergeser atau warna putus
                    
                    if (detectedTextEl) {
                        if (maxCount / totalCount > 0.05) { 
                            detectedTextEl.innerText = "Terdeteksi: " + dominantColor;
                            detectedTextEl.style.color = "#FFEA00"; 
                        } else {
                            detectedTextEl.innerText = "Terdeteksi: - (Terlalu Gelap/Pudar)";
                            detectedTextEl.style.color = "#ff4757"; 
                        }
                    }
                }
                
            } catch(e) {}
        }, 200); // Mengecek warna benda setiap 0,2 detik
    })
    .catch(err => {
        const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
        showCustomModal("KAMERA DIBLOKIR!", "Tantangan ini butuh akses kamera.", warnIcon, "error", () => abortMission5());
    });
    
    function handleColorSuccess() {
        colorsFound++;
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
        
        if (colorsFound >= targetWin) {
            // MENANG TOTAL
            bgmBossMisi5.pause();
            bgmBossMisi5.currentTime = 0;

            addScore(50);
            showCustomModal("MISI 5 SELESAI!", "BINGO! Matamu berhasil mendeteksi dan membedakan spektrum warna dengan sempurna. Kamu resmi menjadi Ahli Detektif Banyu Bening!", checkIcon, "alert", () => {
                if (window.arStream) {
                    window.arStream.getTracks().forEach(track => track.stop());
                    window.arStream = null;
                }
                localStorage.setItem('misi_5_completed', 'true');
                localStorage.setItem('kandangan_misi_6', 'unlocked');
                loadKandanganProgress();
                
                document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
                document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
                document.querySelector('.mission-header').style.display = 'flex';
                exitMissionScreen();
            });
        } else {
            // BERHASIL 1 WARNA, LANJUTKAN KE WARNA BERIKUTNYA
            addScore(20);
            showCustomModal("WARNA DITEMUKAN!", `Hebat! Benda warna ${currentColor.name} cocok. Bersiap untuk target selanjutnya!`, checkIcon, "alert", () => {
                // Acak warna baru
                currentColor = colors[Math.floor(Math.random() * colors.length)];
                document.getElementById('ar-color-target-txt').innerText = `${colorsFound}/${targetWin} - ${currentColor.name}`;
                showColorOverlay(currentColor.text);
            });
        }
    }
    
    function handleColorTimeout() {
        reduceLife();
        const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
        showCustomModal("WAKTU HABIS!", "Kamu gagal menemukan benda dengan warna yang diminta! (Nyawa Berkurang 1)", lockIcon, "error", () => {
            if (chapterLives[currentChapter] > 0) {
                // Berikan target warna baru jika mengulang
                currentColor = colors[Math.floor(Math.random() * colors.length)];
                document.getElementById('ar-color-target-txt').innerText = `${colorsFound}/${targetWin} - ${currentColor.name}`;
                showColorOverlay(currentColor.text);
            } else {
                abortMission5();
            }
        });
    }
}

// Daftar Audio Perintah AR (Dideklarasikan di luar agar tidak memicu memory leak pada HP)
const audioArCmd = {
    'TANGKAP BUAH APEL!': new Audio('assets/sound/cmd-tangkap-apel.mp3'),
    'TANGKAP BUAH MANGGA!': new Audio('assets/sound/cmd-tangkap-mangga.mp3'),
    'TANGKAP BUAH PISANG!': new Audio('assets/sound/cmd-tangkap-pisang.mp3'),
    'TANGKAP STROBERI & JERUK!': new Audio('assets/sound/cmd-tangkap-stroberi-jeruk.mp3'),
    'TANGKAP SEMANGKA & ANGGUR!': new Audio('assets/sound/cmd-tangkap-semangka-anggur.mp3'),
    'TANGKAP MANGGA & APEL!': new Audio('assets/sound/cmd-tangkap-mangga-apel.mp3')
};

window.startBanyuBeningAR = function() {
    // Munculkan kotak kamera secara dramatis setelah dialog NPC selesai
    document.getElementById('ar-game-area').style.display = 'flex';
    
    // Putar Musik Boss
    bgmBossMisi5.currentTime = 0;
    bgmBossMisi5.play().catch(e => console.log("BGM Boss diblokir browser: ", e));

    const video = document.getElementById('ar-video');
    const canvas = document.getElementById('ar-hidden-canvas');
    if (!video || !canvas) return;
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    canvas.width = 160; 
    canvas.height = 90;

    let previousImg = null;
    let arBoxesData = [];
    let arScore = 0;
    window.arActive = false; 

    // 6 Pilihan Variatif yang diacak urutannya setiap kali bermain
    let targetPhases = [
        { fruits: ['apel'], text: 'TANGKAP BUAH APEL!' },
        { fruits: ['mangga'], text: 'TANGKAP BUAH MANGGA!' },
        { fruits: ['pisang'], text: 'TANGKAP BUAH PISANG!' },
        { fruits: ['stroberi', 'jeruk'], text: 'TANGKAP STROBERI & JERUK!' },
        { fruits: ['semangka', 'anggur'], text: 'TANGKAP SEMANGKA & ANGGUR!' },
        { fruits: ['mangga', 'apel'], text: 'TANGKAP MANGGA & APEL!' }
    ].sort(() => Math.random() - 0.5);
    
    let currentPhaseIndex = 0;

    function showPhaseOverlay(phase) {
        window.arActive = false; 
        const overlayWrapper = document.getElementById('ar-target-overlay-wrapper');
        const overlay = document.getElementById('ar-target-overlay');
        
        overlay.innerText = phase.text;
        
        overlayWrapper.style.display = 'flex';
        overlay.classList.remove('animate-pop');
        void overlay.offsetWidth; 
        overlay.classList.add('animate-pop');

        // Putar audio perintah secara otomatis jika file tersedia
        try {
            audioArCmd[phase.text].currentTime = 0;
            let playPromise = audioArCmd[phase.text].play();
            if (playPromise !== undefined) {
                playPromise.catch(() => { fallbackTTS(phase.text); }); // Jika MP3 tidak ada/error, gunakan suara robot
            }
        } catch (e) {
            fallbackTTS(phase.text);
        }

        // Fungsi Cadangan Suara Robot Pembaca Teks (Text-to-Speech)
        function fallbackTTS(textStr) {
            if ('speechSynthesis' in window) {
                let msg = new SpeechSynthesisUtterance(textStr.replace('&', 'dan'));
                msg.lang = 'id-ID';
                msg.rate = 1.1; // Sedikit dipercepat agar tegas
                window.speechSynthesis.speak(msg);
            }
        }

        setTimeout(() => {
            overlayWrapper.style.display = 'none';
            window.arActive = true; 
        }, 2500); 
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
    .then(stream => {
        window.arStream = stream;
        video.srcObject = stream;
        video.play();
        
        // Munculkan panduan wajah, lalu pudarkan (hilang) setelah 4 detik
        const faceGuide = document.getElementById('ar-face-guide');
        if (faceGuide) {
            faceGuide.style.opacity = '1';
            setTimeout(() => { faceGuide.style.opacity = '0'; }, 4000);
        }
        
        setTimeout(() => { showPhaseOverlay(targetPhases[currentPhaseIndex]); }, 500);
        
        let lastLane = -1; // Memori agar buah tidak jatuh di jalur yang sama beruntun

        // Mesin Pembuat Buah Jatuh (Lebih Rapi & Teratur)
        window.arSpawner = setInterval(() => {
            if (!window.arActive) return;
            const fruits = ['apel', 'pisang', 'jeruk', 'anggur', 'mangga', 'semangka', 'stroberi'];
            let type = fruits[Math.floor(Math.random() * fruits.length)];
            
            let boxEl = document.createElement('div');
            boxEl.className = 'ar-fruit ' + type;
            
            // SISTEM 6 JALUR: Membagi layar menjadi 6 kolom agar lebih rapat namun rapi
            let lane;
            do {
                lane = Math.floor(Math.random() * 6);
            } while (lane === lastLane);
            lastLane = lane;
            
            // Posisi buah (6 Jalur): Tersebar dari 10% hingga 80% (selisih 14%)
            let startX = 10 + (lane * 14); 
            
            boxEl.style.left = startX + '%';
            boxEl.style.top = '-15%';
            document.getElementById('ar-game-area').appendChild(boxEl);
            
            arBoxesData.push({
                el: boxEl, x: startX, y: -15, type: type, isHit: false,
                // Kecepatan diperlambat sedikit agar rapi
                speed: Math.random() * 0.6 + 0.8 
            });
        }, 1200); // Jedanya diperlama agar layar tidak terlalu sesak

        window.arLoop = setInterval(() => {
            if (!window.arActive) return;

            arBoxesData.forEach((box, i) => {
                box.y += box.speed;
                box.el.style.top = box.y + '%';
                if (box.y > 110) {
                    box.el.remove();
                    arBoxesData.splice(i, 1);
                }
            });
            
            try {
                ctx.drawImage(video, 0, 0, 160, 90);
                let currentImg = ctx.getImageData(0, 0, 160, 90);
                
                if (previousImg) {
                    arBoxesData.forEach(box => {
                        if (box.isHit || box.y < 0 || box.y > 90) return;
                        
                        // Menghitung Area Kotak Buah
                        let canvasX = Math.floor((1 - (box.x/100) - 0.08) * 160); 
                        let canvasY = Math.floor((box.y/100) * 90);
                        
                        let motionPx = 0, totalPx = 0;
                        for (let y = canvasY-5; y < canvasY + 25; y++) {
                            for (let x = canvasX-5; x < canvasX + 25; x++) {
                                if (x >= 0 && x < 160 && y >= 0 && y < 90) {
                                    let idx = (y * 160 + x) * 4;
                                    
                                    // Ambil warna RGB piksel saat ini
                                    let r = currentImg.data[idx];
                                    let g = currentImg.data[idx+1];
                                    let b = currentImg.data[idx+2];
                                    
                                    // Hitung perbedaan gerakan dengan frame sebelumnya
                                    let rDiff = Math.abs(r - previousImg.data[idx]);
                                    let gDiff = Math.abs(g - previousImg.data[idx+1]);
                                    let bDiff = Math.abs(b - previousImg.data[idx+2]);
                                    
                                    // SYARAT 1: Ada Pergerakan Cepat
                                    if (rDiff + gDiff + bDiff > 90) { 
                                        
                                        // SYARAT 2: Warnanya adalah WARNA KULIT (Rasio RGB Kulit Manusia)
                                        let isSkin = (r > 60 && g > 35 && b > 15 && r > g && r > b && Math.abs(r - g) > 10);
                                        
                                        if (isSkin) {
                                            // SYARAT 3: ZONA ANTI-WAJAH & BADAN (Deadzone Diperbesar & Diturunkan)
                                            // Lebar kanvas: 160x90.
                                            // Area Kepala (Agak turun dari atap): X antara 60-100, Y dari 15 sampai 55
                                            let isHead = (x > 60 && x < 100 && y > 15 && y < 55);
                                            // Area Badan/Bahu (Lebih lebar ke bawah): X antara 40-120, Y dari 55 sampai 90
                                            let isBody = (x > 40 && x < 120 && y >= 55);
                                            
                                            let isPlayerBodyZone = isHead || isBody;
                                            
                                            // Jika piksel kulit yang bergerak BUKAN berada di kepala atau badan, maka itu TANGAN!
                                            if (!isPlayerBodyZone) {
                                                motionPx++;
                                            }
                                        }
                                    }
                                    totalPx++;
                                }
                            }
                        }
                        
                        // Karena kita sangat selektif (hanya menghitung kulit yang bergerak di luar wajah), 
                        // kita turunkan batas tangkapannya menjadi 5% saja dari area kotak buah
                        if (totalPx > 0 && (motionPx / totalPx) > 0.05) {
                            box.isHit = true;
                            handleARHit(box);
                        }
                    });
                }
                previousImg = currentImg;
            } catch(e) {}
        }, 50);
    })
    .catch(err => {
        const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
        showCustomModal("KAMERA DIBLOKIR!", "Tantangan ini butuh akses kamera. Izinkan (Allow) akses kamera pada peramban (browser) lalu ulangi lagi ya!", warnIcon, "error", () => abortMission5());
    });

    function handleARHit(box) {
        const currentTarget = targetPhases[currentPhaseIndex];
        const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;

        // Pengecekan Ketepatan Buah
        if (currentTarget.fruits.includes(box.type)) {
            
            // JIKA BENAR: Ledakkan buah dan tambah poin
            box.el.classList.add('ar-effect');
            setTimeout(() => box.el.remove(), 200);
            
            arScore++;
            document.getElementById('ar-score-txt').innerText = `${arScore} / 20`;
            addScore(10, true); // true = Mainkan suara tangkap.mp3 

            if (arScore >= 20) {
                // MENANG TOTAL
                bgmBossMisi5.pause();
                bgmBossMisi5.currentTime = 0;
                
                window.arActive = false;
                
                if (window.arStream) {
                    window.arStream.getTracks().forEach(track => track.stop());
                    window.arStream = null;
                }
                clearInterval(window.arLoop);
                clearInterval(window.arSpawner);

                showCustomModal("TANGKAPAN BERHASIL!", "Luar biasa! Matamu sangat teliti. Kamu berhasil memanen 20 buah dengan sempurna!", checkIcon, "alert", () => {
                    // Tetap pertahankan mode Fullscreen untuk Tahap 2
                    nextMissionStage(2); 
                });

            } else if (arScore % 4 === 0 && currentPhaseIndex < targetPhases.length - 1) {
                // 🌟 GANTI TARGET SETIAP 4 BUAH TERTANGKAP (Munculkan Overlay Baru)
                currentPhaseIndex++;
                showPhaseOverlay(targetPhases[currentPhaseIndex]);
            }

        } else {
            
            // JIKA SALAH MENANGKAP BUAH
            reduceLife(true); // true = Mainkan suara nottanngkap.mp3
            window.arActive = false; // Tahan sensor saat Modal Error muncul
            
            // Ambil ekspektasi target dari Teks (contoh: "TANGKAP BUAH APEL!" -> "BUAH APEL")
            const expected = currentTarget.text.replace('TANGKAP ', '').replace('!', '');
            
            showCustomModal("SALAH TANGKAP!", `Fokuskan matamu! Kamu seharusnya menangkap: ${expected}\\n(Nyawa Berkurang 1)`, lockIcon, "error", () => {
                if (chapterLives[currentChapter] > 0) {
                    // Beri jeda 1.5 detik agar tangan pemain bisa turun setelah mengeklik tombol OK
                    setTimeout(() => {
                        window.arActive = true; 
                    }, 1500);
                } else {
                    abortMission5(); // Keluar jika nyawa habis
                }
            });
        }
    }
};

// Pasang Tombol Pemicu di Peta
const btnMisi5 = document.getElementById('misi-5');
if (btnMisi5) {
    btnMisi5.addEventListener('click', function() {
        if (this.classList.contains('locked-pin')) return; 
        
        buildMission5(); 
        
        const isCompleted = localStorage.getItem('misi_5_completed') === 'true';

        // Fungsi untuk melanjutkan masuk ke Misi 5
        const proceedToMisi5 = () => {
            // 1. Minta konfirmasi sederhana dulu sebelum masuk (Standar Peta)
            showCustomModal(
                "BAB 5: WISATA BANYU BENING", 
                "Materi: Tantangan Rahasia. Ayo uji kehebatan pancaindramu di alam terbuka!", 
                mapIcon, 
                "confirm", 
                () => {
                    // 2. Buka Layar Misi dan ubah latar belakang
                    enterMissionScreen("MISI 5", "TANTANGAN RAHASIA", 5);
                    
                    // 3. Tunggu animasi pisau transisi Persona selesai (sekitar 2.8 detik)
                    setTimeout(() => {
                        // 4. Mulai Percakapan NPC dengan latar belakang Banyu Bening yang sudah terbuka!
                        const dramaMisi5 = [
                            { text: "Wah, akhirnya kita sampai di Wisata Banyu Bening Medowo! Sungainya sangat jernih dan udaranya segar.", mood: "happy" },
                            { text: "Untuk membuka segel wilayah ini, aku punya permainan khusus untukmu. Kita akan panen buah-buahan segar!", mood: "happy" },
                            { text: "Tantangan ini akan menguji kejelian MATAMU (fokus bentuk & warna) dan kecepatan refleks OTOT SENDIMU (keseimbangan tubuh).", mood: "neutral" },
                            { text: "Akan ada instruksi target buah di layarmu. Arahkan dan sapu tanganmu di udara HANYA ke arah buah yang diperintahkan ya!", mood: "warning" },
                            { text: "Tekan tombol LANJUT, izinkan akses kamera di browsermu jika diminta, dan mari kita mulai panennya!", mood: "happy" }
                        ];
                        
                        startVnDialog(dramaMisi5, "Petualang Nagata", "npc1", () => {
                            // 5. Begitu dialog selesai, Kamera langsung MENYALA!
                            startBanyuBeningAR();
                        });
                    }, 2800);
                }
            );
        };

        // Jika sudah selesai, cegat dengan dialog NPC pilihan jurnal
        if (isCompleted) {
            let dramaMisi5Done = [
                { 
                    text: "Kamu sudah menaklukkan Tantangan Rahasia di Banyu Bening. Ingin mengulangnya, atau melihat jurnal?", 
                    mood: "happy", isChoice: true, 
                    btn1Text: "ULANGI MISI", btn2Text: "TUTUP", btn3Text: "LIHAT JURNAL",
                    onYes: () => proceedToMisi5(),
                    onNo: () => { document.getElementById('vn-overlay').style.display = 'none'; },
                    onBtn3: () => { showJurnalRecap(5); }
                }
            ];
            startVnDialog(dramaMisi5Done, "Petualang Nagata", "npc1", null);
        } else {
            proceedToMisi5();
        }
    });
}

// ================= MEMULAI MISI 6: UJIAN AKHIR BUKIT GANDRUNG =================
const btnMisi6 = document.getElementById('misi-6');
if (btnMisi6) {
    btnMisi6.addEventListener('click', function() {
        if (this.classList.contains('locked-pin')) return; 
        
        buildMission6(); 

        const isCompleted = localStorage.getItem('misi_6_completed') === 'true';

        let dramaMisi6 = [
            { text: "Selamat! Kamu telah mencapai pos ujian akhir di Wisata Bukit Gandrung Tanggulasi.", mood: "happy" },
            { text: "Tempat ini sangat luas dan indah! Ada cafe, kolam renang, taman, dan area kemah di atas bukit.", mood: "happy" },
            { text: "Untuk mendapatkan Medali Kelulusan Bab 1, kamu harus menyelesaikan tantangan di setiap area wisata ini.", mood: "neutral" },
            { 
                text: "Apakah kamu sudah siap menghadapi Ujian Akhir?", 
                mood: "neutral", isChoice: true,
                onYes: () => enterMissionScreen("MISI 6", "UJIAN BUKIT GANDRUNG", 6),
                onNo: () => {
                    activeScript.push(getRejectionDialog(6, "MISI 6", "UJIAN AKHIR"));
                    currentVnIndex++; updateVnDialog();
                }
            }
        ];

        // Jika sudah tamat
        if (isCompleted) {
            dramaMisi6 = [
                { text: "Selamat! Kamu telah mencapai pos ujian akhir di Wisata Bukit Gandrung Tanggulasi.", mood: "happy" },
                { 
                    text: "Kamu sudah lulus dari Ujian Akhir ini! Ingin mengulangnya, atau melihat jurnal kelulusanmu?", 
                    mood: "happy", isChoice: true,
                    btn1Text: "ULANGI MISI", btn2Text: "TUTUP", btn3Text: "LIHAT JURNAL",
                    onYes: () => enterMissionScreen("MISI 6", "UJIAN BUKIT GANDRUNG", 6),
                    onNo: () => { document.getElementById('vn-overlay').style.display = 'none'; },
                    onBtn3: () => { showJurnalRecap(6); }
                }
            ];
        }

        startVnDialog(dramaMisi6, "Petualang Nagata", "npc1", null);
    });
}

// Generator Misi 6: Ujian Akhir Bukit Gandrung
function buildMission6() {
    document.getElementById('mission-title').innerText = "MISI 6: UJIAN BUKIT GANDRUNG";
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    contentArea.innerHTML = `
        <!-- TAHAP 1: GERBANG BUKIT GANDRUNG -->
        <div id="stage-1" class="mission-stage active-stage">
            <h3 class="stage-title">TAHAP 1: GERBANG WISATA</h3>
            <div class="mission-text-box" style="text-align: center; min-height: 8cqw; display: flex; align-items: center; justify-content: center;">
                <p id="m6-text-1" style="margin: 0; line-height: 1.5;">Selamat datang di Wisata Bukit Gandrung Tanggulasi Medowo! Udaranya sangat sejuk dan pemandangannya luar biasa indah.<br><br>Mari kita mulai ujian akhir Pancaindra dengan mengunjungi Pos Pertama: Cafe Gandrung!</p>
            </div>
            <button class="btn btn-play" style="margin-top: 2cqw;" onclick="nextMissionStage(2)">MENUJU CAFE</button>
        </div>

        <!-- TAHAP 2: POS CAFE (TARIK GARIS) -->
        <div id="stage-2" class="mission-stage">
            <h3 class="stage-title" style="color: #e84393;">TAHAP 2: POS CAFE GANDRUNG</h3>
            <p class="mission-text-box">Banyak pesanan makanan dan minuman di Cafe ini! Tarik garis untuk mencocokkan hidangan dengan saraf indra yang bertugas mengenalinya!</p>
            <div class="match-container">
                <svg class="match-svg"></svg>
                <div class="match-col match-left">
                    <div class="match-item" data-match="m6_kopi" style="order: ${Math.floor(Math.random()*4)}">Kopi Pahit</div>
                    <div class="match-item" data-match="m6_jeruk" style="order: ${Math.floor(Math.random()*4)}">Es Lemon Asam</div>
                    <div class="match-item" data-match="m6_cokelat" style="order: ${Math.floor(Math.random()*4)}">Cokelat Panas Manis</div>
                    <div class="match-item" data-match="m6_roti" style="order: ${Math.floor(Math.random()*4)}">Aroma Roti Bakar</div>
                </div>
                <div class="match-col match-right">
                    <div class="match-target" data-id="m6_kopi" style="order: ${Math.floor(Math.random()*4)}">Pangkal Lidah</div>
                    <div class="match-target" data-id="m6_cokelat" style="order: ${Math.floor(Math.random()*4)}">Ujung Lidah</div>
                    <div class="match-target" data-id="m6_roti" style="order: ${Math.floor(Math.random()*4)}">Rongga Hidung</div>
                    <div class="match-target" data-id="m6_jeruk" style="order: ${Math.floor(Math.random()*4)}">Samping Lidah</div>
                </div>
            </div>
        </div>

        <!-- TAHAP 3: POS KOLAM RENANG (TEBAK GAMBAR) -->
        <div id="stage-3" class="mission-stage">
            <h3 class="stage-title" style="color: #3498db;">TAHAP 3: POS KOLAM RENANG</h3>
            <div class="stage-layout">
                <div class="stage-img-box" onclick="showImagePopup('assets/item/anatomi-kulit1.webp')" title="Klik untuk Perbesar">
                    <img src="assets/item/anatomi-kulit1.webp" alt="Kulit Voxel" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto;">Setelah asyik berenang, angin gunung berhembus dan kamu merasa kedinginan! Bagian kulit manakah yang bertugas sebagai sensor suhu dan mengirimkan pesan dingin itu ke otakmu?</p>
                    <div class="explore-grid" id="grid-m6-s3" style="width: auto;"></div>
                </div>
            </div>
        </div>
        
        <!-- TAHAP 4: POS CAMPING GROUND (KUIS AUDIO) -->
        <div id="stage-4" class="mission-stage">
            <h3 class="stage-title" style="color: #9b59b6;">TAHAP 4: POS CAMPING GROUND</h3>
            <div class="stage-layout">
                <div class="stage-img-box" style="background: #2c3e50; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2cqw;">
                    <img src="assets/item/elang.webp" alt="Burung Elang" style="width: 70%; height: auto; filter: brightness(0) invert(1);">
                    <button class="btn btn-play" style="font-size: 1.5cqw; padding: 1cqw; margin-top: 1cqw; width: 100%;" onclick="let a = document.getElementById('audio-m6-s4'); a.currentTime = 0; a.play();">🔊 PUTAR SUARA</button>
                    <!-- Menggunakan suara pekikan burung elang -->
                    <audio id="audio-m6-s4" src="assets/sound/elang.mp3"></audio> 
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto;">Saat sedang menikmati suasana kemah, telingamu menangkap suara pekikan tajam dari langit yang sangat tinggi! Hewan apakah ini, dan apa kemampuan super dari pancaindranya?</p>
                    <div class="explore-grid" id="grid-m6-s4" style="width: auto;"></div>
                </div>
            </div>
        </div>

        <!-- TAHAP 5: DETEKTIF MALAM (PAHLAWAN ADAPTASI) -->
        <div id="stage-5" class="mission-stage" style="width: 100%; height: 100%;">
            <div id="detektif-m6-area" class="ar-container" style="background-image: url('assets/background/mission6.webp'); background-size: cover; background-position: center; position: relative;">
                
                <div id="intro-detektif-m6" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 30; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h2 style="color: #f1c40f; font-size: 3.5cqw; text-shadow: 0.2cqw 0.2cqw 0 #000; margin-bottom: 1cqw;">DETEKTIF MALAM</h2>
                    <p style="color: white; font-size: 1.8cqw; margin-bottom: 2cqw; text-align: center; padding: 0 5cqw;">Gunakan Senter Penyelidikmu untuk mencari 5 Area Wahana Wisata yang tersembunyi di kegelapan malam ini!</p>
                    <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw;" onclick="startDetektifM6()">NYALAKAN SENTER</button>
                </div>

                <div id="flashlight-layer-m6" class="flashlight-bg" style="display: none;"></div>
                
                <!-- 5 Titik Koordinat Wahana Wisata -->
                <div id="target-m6-kemah" class="detektif-target" style="top: 60%; left: 10%; width: 20%; height: 25%;" onclick="checkDetektifM6('kemah')"></div>
                <div id="target-m6-kolam" class="detektif-target" style="top: 55%; left: 40%; width: 15%; height: 15%;" onclick="checkDetektifM6('kolam')"></div>
                <div id="target-m6-cafe" class="detektif-target" style="top: 50%; left: 55%; width: 15%; height: 15%;" onclick="checkDetektifM6('cafe')"></div>
                <div id="target-m6-taman" class="detektif-target" style="top: 70%; left: 70%; width: 20%; height: 20%;" onclick="checkDetektifM6('taman')"></div>
                <div id="target-m6-aula" class="detektif-target" style="top: 40%; left: 75%; width: 20%; height: 20%;" onclick="checkDetektifM6('aula')"></div>
            </div>
        </div>

        <!-- TAHAP 6: UJIAN KILAT (BENAR/SALAH) -->
        <div id="stage-6" class="mission-stage">
            <h3 class="stage-title" style="color: #e67e22;">TAHAP 6: UJIAN KILAT</h3>
            <div id="ta-m6-intro" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="font-size: 1.6cqw; margin-top: 2cqw;">Selamat datang di Aula Pertemuan! Di sini, kecepatan berpikirmu akan diuji.<br><br>Jawab 10 pernyataan rangkuman materi Pancaindra ini dengan cepat. Tentukan apakah pernyataan tersebut <b>BENAR</b> atau <b>SALAH</b> sebelum waktu habis!</p>
                <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw; background: #e67e22; margin-top: 2cqw;" onclick="startTaM6()">MULAI UJIAN KILAT!</button>
            </div>
            <div id="ta-m6-container" class="time-attack-container" style="display: none;">
                <div class="ta-timer-box"><div id="ta-m6-bar" class="ta-timer-fill"></div></div>
                <div id="ta-m6-question" class="ta-card" style="width: 100%;">Memuat Soal...</div>
                <div class="ta-btn-group" style="width: 100%;">
                    <button class="btn-ta benar" onclick="handleTaM6Answer(true)">BENAR</button>
                    <button class="btn-ta salah" onclick="handleTaM6Answer(false)">SALAH</button>
                </div>
            </div>
        </div>

        <!-- TAHAP 7: BOSS EVALUASI AKHIR (PILIHAN GANDA) -->
        <div id="stage-7" class="mission-stage">
            <h3 class="stage-title" style="color: #ff4757;">TAHAP 7: BOSS EVALUASI AKHIR</h3>
            <div id="boss-m6-intro" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="font-size: 1.8cqw; margin-top: 2cqw;">Ini adalah pembuktian terakhirmu! Buktikan bahwa kamu pantas mendapatkan Medali Kelulusan Bab 1 dengan menjawab 10 soal pilihan ganda secara tepat.</p>
                <button class="btn btn-play" style="font-size: 2.5cqw; padding: 1.5cqw 4cqw; background: #ff4757; margin-top: 3cqw; box-shadow: 0.5cqw 0.5cqw 0 #111;" onclick="startBossM6()">🔥 LAWAN BOSS EVALUASI! 🔥</button>
            </div>
            <div id="boss-m6-container" class="time-attack-container" style="display: none;">
                <div class="ta-timer-box"><div id="boss-m6-bar" class="ta-timer-fill"></div></div>
                <div id="boss-m6-question" class="ta-card" style="width: 100%; font-size: 1.5cqw;">Memuat Pertanyaan...</div>
                <div class="explore-grid" id="boss-m6-options" style="width: 100%; margin-bottom: 0;"></div>
            </div>
        </div>
    `;

    // 1. Pasang Tombol Tab Melayang "LANJUTKAN"
    let floatingHTML = '';
    for(let i=1; i<=6; i++) {
        floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-${i}" style="display: none;" onclick="nextMissionStage(${i+1})">LANJUTKAN</button>`;
    }
    floatingNext.innerHTML = floatingHTML;

    // 2. Suntik Pilihan Ganda untuk Kuis Tahap 3
    const quizDataM6S3 = [
        { text: "Ujung Saraf", isCorrect: true, msg: "Tepat Sekali! Ujung saraf bertindak sebagai sensor peraba dan pendeteksi suhu cuaca." },
        { text: "Kelenjar Keringat", isCorrect: false, msg: "Kelenjar keringat bertugas mendinginkan tubuh saat kepanasan, bukan mendeteksi rasa dingin." },
        { text: "Batang Rambut", isCorrect: false, msg: "Rambut kulit akan berdiri saat kedinginan untuk menjaga kehangatan, namun sensor utamanya adalah Ujung Saraf." },
        { text: "Permukaan Kulit", isCorrect: false, msg: "Permukaan kulit (Epidermis) bertugas melindungi tubuh dari kuman, bukan merasakan suhu." }
    ];

    const gridS3 = document.getElementById('grid-m6-s3');
    const optionsS3 = [...quizDataM6S3].sort(() => Math.random() - 0.5);
    optionsS3.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-explore';
        btn.innerText = opt.text;
        btn.onclick = () => checkMiniGame(btn, 3, opt.isCorrect, opt.msg, 6);
        gridS3.appendChild(btn);
    });

    // 3. Suntik Pilihan Ganda untuk Kuis Tahap 4 (Audio Burung Elang)
    const quizDataM6S4 = [
        { text: "Burung Elang (Mata Teropong)", isCorrect: true, msg: "Tepat Sekali! Burung elang memiliki struktur mata teleskopik yang sangat tajam untuk melihat mangsa dari kejauhan." },
        { text: "Kelelawar (Ekolokasi)", isCorrect: false, msg: "Kelelawar aktif di malam hari dan memancarkan gelombang pantulan suara, bukan memekik tajam di langit siang." },
        { text: "Anjing (Penciuman Tajam)", isCorrect: false, msg: "Anjing melacak menggunakan hidungnya dan suaranya berupa gonggongan, bukan pekikan dari langit." },
        { text: "Ular (Sensor Suhu Panas)", isCorrect: false, msg: "Ular mendeteksi panas tubuh mangsanya dan mendesis di tanah, bukan terbang di langit." }
    ];

    const gridS4 = document.getElementById('grid-m6-s4');
    const optionsS4 = [...quizDataM6S4].sort(() => Math.random() - 0.5);
    optionsS4.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-explore';
        btn.innerText = opt.text;
        btn.onclick = () => checkMiniGame(btn, 4, opt.isCorrect, opt.msg, 6);
        gridS4.appendChild(btn);
    });

    // 4. Dialog Nagata setelah Kuis Selesai
    currentMissionDialogs = {
        2: { dialog: [{ text: "Luar biasa! Lidah dan Hidungmu dapat membedakan makanan Cafe dengan sangat baik. Ayo lanjut!", mood: "happy" }] },
        3: { dialog: [{ text: "Pintar sekali! Kulit kita adalah tameng sekaligus sensor yang hebat. Ayo kita naik ke area kemah!", mood: "happy" }] },
        4: { dialog: [{ text: "Benar sekali! Mata elang bekerja seperti teropong canggih yang bisa melihat mangsa dari atas awan. Ayo kita lanjutkan petualangan!", mood: "happy" }] },
        6: { dialog: [{ text: "Kecepatan berpikirmu sangat luar biasa! Kamu lolos ujian kilat. Sekarang bersiaplah, tarik napas panjang, dan hadapi ujian akhirnya!", mood: "happy" }] },
        7: { 
            isBoss: true,
            dialog: [
                { text: "LUAR BIASA! Kamu menjawab semua ujian akhir dengan nilai sempurna!", mood: "happy" },
                { text: "Selamat! Kamu resmi menamatkan materi Bab 1 (Pancaindra) dan berhasil menaklukkan seluruh pos di Kecamatan Kandangan!", mood: "happy" },
                { text: "Petualangan kita di sini telah selesai. Teruslah belajar, dan nantikan pembaruan game ini untuk membuka wilayah Kepung. Sampai jumpa, Pahlawan Cilik!", mood: "happy" }
            ]
        }
    };
}

// ================= LOGIKA TAHAP 1 (PENGANTAR BERTINGKAT) =================
const stage1Texts = [
    "Pernahkah kamu berpikir bagaimana cara kita mengetahui warna langit atau merdu-nya musik? Ternyata, tubuh kita dilengkapi dengan 'jendela-jendela' ajaib untuk Menjelajahi dunia.",
    "Hebatnya lagi, jendela-jendela ini tidak pernah beristirahat. Mereka bekerja siang dan malam, diam-diam menjaga dan menemanimu dalam setiap aktivitas.",
    "Berkat mereka, kamu bisa melihat indahnya pemandangan, mendengar tawa teman, mencium wangi masakan ibu, merasakan lembutnya kain, hingga menikmati kelezatan es krim.",
    "Nah, kumpulan sistem pertahanan dan penjelajah yang luar biasa ini kita kenal dengan satu nama hebat, yaitu PANCAINDRA atau 5 Indra. Mereka adalah mata, telinga, hidung, kulit, dan lidah.",
];
let currentStage1Index = 0;

function nextStage1Text() {
    currentStage1Index++;
    if (currentStage1Index < stage1Texts.length) {
        document.getElementById('stage-1-text').innerHTML = stage1Texts[currentStage1Index];
        
        /* Force Reading Delay */
        const btn = document.getElementById('btn-stage-1-next');
        if (btn) {
            btn.style.display = 'none';
            clearTimeout(window.stage1Timer);
            window.stage1Timer = setTimeout(() => {
                btn.style.display = 'flex';
            }, 2500);
        }
    } else {
        // Halaman 5 (Terakhir): Sembunyikan teks & tombol lanjut, lalu tampilkan soal trivia
        document.getElementById('stage-1-text').parentElement.style.display = 'none';
        document.getElementById('btn-stage-1-next').style.display = 'none';
        document.getElementById('stage-1-quiz').style.display = 'block';
    }
}

// ================= MESIN PENCICIL MATERI ANATOMI (MISI 3) =================
function advanceAnatomy(stage) {
    const col = document.getElementById(`anat-col-${stage}`);
    const steps = col.querySelectorAll('.anat-step');
    let currentStep = parseInt(col.getAttribute('data-step'));
    const btn = document.getElementById(`btn-anat-${stage}`);
    const highlightBox = document.getElementById(`highlight-${stage}`); // Ambil kotak penanda

    // Sembunyikan kotak teks yang sedang aktif
    if (currentStep >= 0 && currentStep < steps.length) {
        steps[currentStep].style.display = 'none';
    }

    currentStep++;
    col.setAttribute('data-step', currentStep);

    if (currentStep < steps.length) {
        // Munculkan kotak teks selanjutnya (Satu per satu)
        steps[currentStep].style.display = 'block';

        // Logika Pencurian Koordinat untuk Penanda Visual
        const targetId = steps[currentStep].getAttribute('data-target');
        if (targetId) {
            // Cari kotak jawaban di kuis yang memiliki data-match sama
            const dropZone = document.querySelector(`#stage-${stage}-quiz .dnd-drop-zone[data-match="${targetId}"]`);
            if (dropZone) {
                highlightBox.style.top = dropZone.style.top;
                highlightBox.style.left = dropZone.style.left;
                highlightBox.style.width = dropZone.style.width;
                highlightBox.style.height = dropZone.style.height;
                highlightBox.classList.add('active'); // Nyalakan animasi kotak merah
            }
        } else {
            // Jika bukan bagian spesifik (Misal: Pengantar/Fakta), sembunyikan penanda
            highlightBox.classList.remove('active');
        }
    }

    // Jika sudah mencapai langkah terakhir
    if (currentStep >= steps.length - 1) {
        btn.innerText = "MULAI PERMAINAN";
        btn.onclick = () => {
            highlightBox.classList.remove('active'); // Matikan penanda saat masuk ke kuis
            proceedToQuiz(stage);
        };
    }
}

// ================= MESIN MADING FLIP 3D & UJIAN TIME ATTACK (MISI 4) =================

// Variabel Global Misi 4
let madingReads = {}; 
let taQuestions = [];
let currentTaIndex = 0;
let taTimerInterval;
let taTimeLeft = 100;
let taCurrentStage = 0;

// Data Soal Ujian (BENAR / SALAH) Diperbarui untuk SD Kelas 3
const taData = {
    2: [
        { text: "Membaca buku komik sambil tiduran di tempat yang gelap gulita.", isTrue: false, msg: "Mata bisa cepat lelah dan rusak jika membaca di tempat gelap!" },
        { text: "Menutup telinga dengan tangan saat mendengar suara petasan meledak.", isTrue: true, msg: "Tepat! Hal itu melindungi gendang telingamu." },
        { text: "Makan sayur sup yang masih sangat panas langsung dari panci.", isTrue: false, msg: "Lidah bisa melepuh karena terlalu panas!" },
        { text: "Mengucek mata kotor dengan keras menggunakan tangan yang belum dicuci.", isTrue: false, msg: "Tangan kotor bisa membuat matamu sakit merah! Cukup bilas dengan air bersih." },
        { text: "Mengoleskan tabir surya (sunscreen) ke kulit saat cuaca sangat panas terik.", isTrue: true, msg: "Sinar matahari terik bisa membakar dan merusak kulit." },
        { text: "Membersihkan telinga menggunakan batang korek api atau benda tajam.", isTrue: false, msg: "Sangat bahaya! Benda keras bisa merobek selaput tipis di dalam telingamu." },
        { text: "Mencuci hidung menggunakan air garam saat sedang sakit pilek.", isTrue: true, msg: "Bagus! Itu membantu membuang kuman dan kotoran di hidung." },
        { text: "Mandi secara teratur dua kali sehari menggunakan sabun.", isTrue: true, msg: "Mandi membuat kuman di kulit hilang dan tubuh sehat." },
        { text: "Makan permen dan cokelat terlalu banyak tanpa menyikat lidah.", isTrue: false, msg: "Sisa gula bisa memicu sarang kuman di gigi dan lidah!" },
        { text: "Mendengarkan musik pakai earphone dengan suara paling keras.", isTrue: false, msg: "Suara terlalu keras bisa merusak telinga dan membuat tuli." }
    ],
    3: [
        { text: "Sakit Mata Merah bisa menular hanya kalau kita menatap mata teman yang sakit.", isTrue: false, msg: "Salah! Mata merah menular melalui sentuhan tangan atau barang kotor." },
        { text: "Telinga berair dan sakit biasanya terjadi karena kemasukan air kotor saat mandi/berenang.", isTrue: true, msg: "Tepat! Air kotor bisa membuat telinga infeksi." },
        { text: "Sariawan di lidah bisa dicegah dengan rajin memakan buah bervitamin C seperti jeruk.", isTrue: true, msg: "Buah-buahan sangat bagus untuk menjaga lidah tetap sehat." },
        { text: "Panu di kulit adalah penyakit gatal yang terjadi karena kita digigit oleh nyamuk.", isTrue: false, msg: "Salah! Panu disebabkan oleh jamur karena kita malas mandi." },
        { text: "Saat sakit pilek berat, hidung kita kadang kehilangan kemampuan mencium bau makanan.", isTrue: true, msg: "Tepat! Lendir pilek menutupi saraf pembau hidung kita." }
    ],
    4: [
        { text: "Teman yang tidak bisa melihat (Tunanetra) membaca buku menggunakan sentuhan jari pada huruf timbul.", isTrue: true, msg: "Tepat! Huruf timbul itu disebut Huruf Braille." },
        { text: "Cara terbaik memanggil teman Tunarungu (tidak bisa mendengar) adalah dengan berteriak dari kejauhan.", isTrue: false, msg: "Temui dari depan agar ia bisa membaca bibirmu atau gunakan bahasa isyarat." },
        { text: "Tongkat Putih digunakan oleh teman Tunanetra untuk meraba dan mencari jalan yang aman.", isTrue: true, msg: "Tongkat ini sangat membantu mereka berjalan mandiri." },
        { text: "Orang yang buta warna melihat dunia berwarna hitam putih gelap gulita.", isTrue: false, msg: "Salah! Mereka masih bisa melihat benda jelas, hanya sulit membedakan warna seperti merah dan hijau." },
        { text: "Orang yang kakinya mati rasa harus sering memakai alas kaki agar tidak terluka saat menginjak batu.", isTrue: true, msg: "Karena kulitnya tidak bisa merasakan sakit, ia harus berhati-hati." }
    ],
    5: [
        { text: "Kelelawar menggunakan matanya yang besar untuk melihat arah terbang di malam hari.", isTrue: false, msg: "Salah! Kelelawar buta di tempat gelap, mereka pakai telinga radar (pantulan suara)." },
        { text: "Anjing sering membantu pak Polisi karena hidungnya punya penciuman super tajam.", isTrue: true, msg: "Tepat! Anjing bisa melacak jejak dari mencium bau baju." },
        { text: "Burung Elang dapat melihat tikus kecil berlari dari atas langit berkat matanya yang tajam seperti teropong.", isTrue: true, msg: "Mata elang bisa melihat mangsa dari kejauhan." },
        { text: "Ikan Lele menggunakan sisik di punggungnya untuk mengecap rasa air dan mencari makan.", isTrue: false, msg: "Ikan lele memakai seluruh kulit dan kumisnya untuk mengecap rasa di air keruh." },
        { text: "Ular sering menjulurkan lidah cabangnya untuk menangkap bau mangsa di udara.", isTrue: true, msg: "Lidah ular bertindak seperti antena pembau!" }
    ],
    6: [
        { text: "Ada alat canggih di dalam telingamu yang berfungsi membantumu menjaga keseimbangan tubuh.", isTrue: true, msg: "Tepat! Karena alat ini, kamu tidak gampang jatuh saat berlari." },
        { text: "Jika matamu ditutup, kamu tidak akan tahu di mana letak tangan dan kakimu.", isTrue: false, msg: "Saraf di ototmu selalu memberi tahu letak anggota tubuhmu (Propriosepsi)." },
        { text: "Saat kamu berada di tempat yang dingin, kulitmu akan mengeluarkan keringat yang banyak.", isTrue: false, msg: "Keringat dikeluarkan saat kepanasan, bukan saat kedinginan!" },
        { text: "Kulit kita bertindak seperti termometer yang merasakan apakah ruangan itu panas atau dingin.", isTrue: true, msg: "Saraf kulit sangat peka terhadap perubahan suhu." },
        { text: "Kamu bisa menyentuh hidungmu walau dengan mata tertutup berkat indra rahasia di otot.", isTrue: true, msg: "Tubuhmu sangat pintar mengetahui posisinya sendiri." }
    ],
    7: [
        { text: "Makan sayuran seperti wortel sangat bagus untuk menjaga kesehatan matamu.", isTrue: true, msg: "Wortel mengandung banyak Vitamin A!" },
        { text: "Kita boleh membersihkan kotoran telinga menggunakan batang lidi kayu.", isTrue: false, msg: "Sangat berbahaya! Telinga bisa luka." },
        { text: "Hidung manusia sangat hebat karena bisa mengingat ribuan jenis bau yang berbeda.", isTrue: true, msg: "Memori bau manusia adalah yang paling kuat." },
        { text: "Saat menggosok gigi, lidah tidak perlu dibersihkan karena bisa membersihkan dirinya sendiri.", isTrue: false, msg: "Lidah juga harus disikat pelan agar tidak ada jamur." },
        { text: "Kita harus mandi supaya kulit bersih dari debu dan terhindar dari penyakit panu.", isTrue: true, msg: "Kulit yang kotor adalah sarang penyakit." },
        { text: "Kelelawar punya kekuatan super pada matanya untuk terbang di malam hari.", isTrue: false, msg: "Kelelawar memakai telinganya (suara radar) untuk terbang di kegelapan." },
        { text: "Telinga bagian dalam berfungsi untuk mengatur keseimbangan tubuhmu.", isTrue: true, msg: "Ini mencegahmu pusing dan jatuh saat berputar." },
        { text: "Anjing sering dipakai untuk melacak orang hilang karena pendengarannya super tajam.", isTrue: false, msg: "Anjing melacak orang hilang menggunakan HIDUNG (penciuman)." },
        { text: "Teman Tunanetra (tidak bisa melihat) membaca buku menggunakan sentuhan jari.", isTrue: true, msg: "Mereka menggunakan huruf khusus bernama Braille." },
        { text: "Kelima pancaindra kita mengirim pesan ke Otak agar kita bisa mengenali lingkungan.", isTrue: true, msg: "Otak adalah mesin utama tubuh kita." }
    ]
};

// Fungsi Animasi Balik Kartu Mading (3D Flip Card)
function openFlipNote(noteElement, stageNum, noteId, bgColor, imgName, title, text, openedImgName = null) {
    if (!madingReads[stageNum]) madingReads[stageNum] = [];
    if (!madingReads[stageNum].includes(noteId)) madingReads[stageNum].push(noteId);

    noteElement.classList.add('read');

    const overlay = document.getElementById('mading-flip-overlay');
    const card = document.getElementById('flip-card-3d');
    const front = document.getElementById('flip-front');
    const back = document.getElementById('flip-back');
    const btnClose = document.getElementById('flip-close');

    front.style.backgroundColor = bgColor;
    back.style.backgroundColor = bgColor;
    front.innerHTML = `<img src="assets/item/${imgName}" alt="Icon"><h2>${title}</h2>`;
    
    // Fitur Khusus: Suntikkan ilustrasi hewan raksasa di balik catatan Misi 4 Tahap 5
    let backImageHTML = "";
    if (stageNum === 5) {
        let actualImg = openedImgName ? openedImgName : imgName;
        backImageHTML = `<div style="width:100%; text-align:center;"><img src="assets/item/${actualImg}" style="width: 14cqw; height: 14cqw; object-fit: contain; margin-bottom: 1.5cqw; filter: drop-shadow(0.4cqw 0.4cqw 0px rgba(0,0,0,0.5));"></div>`;
    }

    // Fitur Khusus: Tombol Simulasi 'COBA RASAKAN' di Tahap 4
    let btnCobaRasakan = "";
    if (stageNum === 4) {
        btnCobaRasakan = `<button class="btn btn-play" style="font-size: 1.8cqw; padding: 0.8cqw 2cqw; margin-top: 2cqw; align-self: center;" onclick="startAdaptationSim(${noteId})">✨ COBA RASAKAN ✨</button>`;
    }
    
    back.innerHTML = `<h3>${title}</h3>${backImageHTML}<p>${text}</p>${btnCobaRasakan}`;

    overlay.style.display = 'flex';
    card.classList.remove('flipped');
    btnClose.style.opacity = '0';
    btnClose.style.pointerEvents = 'none';

    setTimeout(() => {
        card.classList.add('flipped');
        setTimeout(() => {
            btnClose.style.opacity = '1';
            btnClose.style.pointerEvents = 'auto';
        }, 600); 
    }, 100);

    const totalNotes = document.querySelectorAll('#stage-' + stageNum + ' .sticky-note').length;
    if(madingReads[stageNum].length >= totalNotes) {
        // Tampilkan tombol MULAI UJIAN untuk semua tahap (termasuk tahap 4) setelah semua catatan selesai dibaca
        const startBtn = document.getElementById('btn-start-ta-' + stageNum);
        if(startBtn) startBtn.style.display = 'inline-flex';
    }
}

function closeFlipNote() {
    const card = document.getElementById('flip-card-3d');
    const btnClose = document.getElementById('flip-close');
    btnClose.style.opacity = '0';
    btnClose.style.pointerEvents = 'none';
    card.classList.remove('flipped');
    setTimeout(() => {
        document.getElementById('mading-flip-overlay').style.display = 'none';
    }, 600);
}

function startTaGlobal(stageNum) {
    document.getElementById(`mading-intro-${stageNum}`).style.display = 'none';
    document.getElementById(`btn-start-ta-${stageNum}`).style.display = 'none'; // Sembunyikan lagi tombolnya
    const taContainer = document.getElementById(`ta-container-${stageNum}`);
    taContainer.style.display = 'flex';

    taQuestions = [...taData[stageNum]].sort(() => Math.random() - 0.5);
    currentTaIndex = 0;
    taCurrentStage = stageNum;

    loadTaGlobalQuestion();
}

function loadTaGlobalQuestion() {
    if (currentTaIndex >= taQuestions.length) {
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
        if (taCurrentStage === 7) {
            showCustomModal("LULUS EVALUASI AKHIR!", "Sempurna! Kamu telah menyelesaikan Ujian Boss Pancaindra!", checkIcon, "alert", () => triggerPostDialog(7));
        } else {
            showCustomModal("LULUS UJIAN TAHAP!", "Kerja bagus! Kamu berhasil menjawab semua soal ujian dadakan di bab ini.", checkIcon, "alert", () => {
                const nextBtn = document.getElementById(`btn-next-${taCurrentStage}`);
                if(nextBtn) nextBtn.style.display = 'inline-flex';
            });
        }
        return;
    }

    const q = taQuestions[currentTaIndex];
    document.getElementById(`ta-question-text-${taCurrentStage}`).innerText = `Pertanyaan ${currentTaIndex + 1}:\n\n"${q.text}"`;

    taTimeLeft = 100;
    const bar = document.getElementById(`ta-bar-fill-${taCurrentStage}`);
    bar.style.width = '100%';
    bar.style.backgroundColor = '#2ed573';

    clearInterval(taTimerInterval);
    taTimerInterval = setInterval(() => {
        taTimeLeft -= 0.5; // Sekitar 20 detik (100% / 200 step * 100ms)
        bar.style.width = `${taTimeLeft}%`;
        if(taTimeLeft < 50) bar.style.backgroundColor = '#ffa502';
        if(taTimeLeft < 20) bar.style.backgroundColor = '#ff4757';

        if (taTimeLeft <= 0) {
            clearInterval(taTimerInterval);
            handleTaGlobalAnswer(null, true);
        }
    }, 100);
}

function handleTaGlobalAnswer(isBenar, isTimeout = false) {
    clearInterval(taTimerInterval);
    const q = taQuestions[currentTaIndex];
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;

    if (isTimeout) {
        reduceLife();
        showCustomModal("WAKTU HABIS!", "Wah, waktumu habis! Pikirkan lebih cepat. (Nyawa Berkurang 1)", lockIcon, "error", () => loadTaGlobalQuestion());
    } else if (isBenar === q.isTrue) {
        addScore(20);
        showCustomModal("TEPAT SEKALI!", q.msg, "", "alert", () => { currentTaIndex++; loadTaGlobalQuestion(); });
    } else {
        reduceLife();
        const missionBox = document.querySelector('.mission-full-box');
        missionBox.classList.remove('shake-screen'); void missionBox.offsetWidth; missionBox.classList.add('shake-screen');
        setTimeout(() => missionBox.classList.remove('shake-screen'), 500);

        showCustomModal("JAWABAN SALAH!", `Perhatikan lagi pertanyaannya! ${q.msg}\n(Nyawa Berkurang 1)`, lockIcon, "error", () => loadTaGlobalQuestion());
    }
}

function generateTaUI(stageNum) {
    return `
        <div id="ta-container-${stageNum}" class="time-attack-container" style="display: none;">
            <div class="ta-timer-box"><div id="ta-bar-fill-${stageNum}" class="ta-timer-fill"></div></div>
            <div id="ta-question-text-${stageNum}" class="ta-card" style="width: 100%;">Memuat Kasus Ujian...</div>
            <div class="ta-btn-group" style="width: 100%;">
                    <button class="btn-ta benar" onclick="handleTaGlobalAnswer(true)">BENAR</button>
                    <button class="btn-ta salah" onclick="handleTaGlobalAnswer(false)">SALAH</button>
                </div>
        </div>
    `;
}

// ================= LOGIKA TAHAP PENGANTAR BERTINGKAT MISI 4 =================
let m4Texts = [];
let currentM4Index = 0;

function nextM4Text(divId, nextStageNum) {
    currentM4Index++;
    if (currentM4Index < m4Texts.length) {
        document.getElementById(divId).innerText = m4Texts[currentM4Index];
        
        /* Force Reading Delay */
        const btn = document.querySelector(`#${divId}`).parentElement.nextElementSibling;
        if (btn && btn.tagName === 'BUTTON') {
            btn.style.display = 'none';
            clearTimeout(window.m4Timer);
            window.m4Timer = setTimeout(() => { btn.style.display = 'flex'; }, 2500);
        }
    } else {
        nextMissionStage(nextStageNum); 
    }
}

function startM4Intro(divId, textsArray) {
    m4Texts = textsArray;
    currentM4Index = 0;
    document.getElementById(divId).innerText = m4Texts[0];
    
    /* Force Reading Delay on Start */
    const btn = document.querySelector(`#${divId}`).parentElement.nextElementSibling;
    if (btn && btn.tagName === 'BUTTON') {
        btn.style.display = 'none';
        clearTimeout(window.m4Timer);
        window.m4Timer = setTimeout(() => { btn.style.display = 'flex'; }, 2500);
    }
}

// Generator Misi 4: Merawat Pancaindra (7 TAHAP FULL)
function buildMission4() {
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    // Reset memori bacaan saat masuk Misi 4
    madingReads = { 2:[], 3:[], 4:[], 5:[], 6:[] };

    // Sisipkan struktur Flip Modal & Overlay Simulasi di baris teratas (Hidden)
    const flipModalHTML = `
        <div id="mading-flip-overlay">
            <div id="flip-card-3d" class="flip-card-3d">
                <div id="flip-front" class="flip-face flip-front"></div>
                <div id="flip-back" class="flip-face flip-back"></div>
                <div id="flip-close" class="flip-close" onclick="closeFlipNote()">X</div>
            </div>
        </div>

        <!-- AREA BERMAIN POP-UP SIMULASI -->
        <div id="sim-overlay">
            <!-- 1. Simulasi Tunanetra -->
            <div id="sim-1-area" class="sim-container" style="background-image: url('assets/item/peta-tunanetra.webp'); background-size: cover; background-position: center;">
                <h3 class="sim-title">SIMULASI: TUNANETRA</h3>
                <button class="btn btn-menu btn-sim-close" onclick="closeAdaptationSim()">KEMBALI</button>
                <div id="sim-dark-layer" class="sim-dark-layer"></div>
                
                <button id="btn-sim-audio" class="btn-sim-audio" onclick="playSim1Audio()">
                    <svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M11 2v12h-2v-2H7v-2H5V6h2V4h2V2h2zm2 2h2v8h-2V4z"/></svg> PUTAR PETUNJUK
                </button>
                
                <!-- 3 Titik Koordinat Rahasia -->
                <div id="target-sekolah" class="sim-map-target" style="top: 18%; left: 16%; width: 28%; height: 26%;" onclick="checkSim1Target('sekolah')"></div>
                <div id="target-puskesmas" class="sim-map-target" style="top: 10%; left: 58%; width: 22%; height: 22%;" onclick="checkSim1Target('puskesmas')"></div>
                <div id="target-pasar" class="sim-map-target" style="top: 38%; left: 42%; width: 30%; height: 26%;" onclick="checkSim1Target('pasar')"></div>

                <p style="position: absolute; bottom: 1cqw; width: 100%; text-align: center; color: white; z-index: 6; text-shadow: 0.1cqw 0.1cqw 0 #000; font-size: 1.5cqw; pointer-events: none; margin: 0;">Tekan tombol putar, dengarkan tempat yang dicari, lalu geser jari/mouse di peta gelap untuk merabanya!</p>
            </div>

            <!-- 2. Simulasi Tunarungu -->
            <div id="sim-2-area" class="sim-container" style="background: #ecf0f1;">
                <h3 class="sim-title" style="color: #111;">SIMULASI: TUNARUNGU</h3>
                <button class="btn btn-menu btn-sim-close" onclick="closeAdaptationSim()">KEMBALI</button>
                <div id="sim-visual-alert" class="sim-visual-alert"></div>
                
                <!-- Aset Voxel Mobil & Anak (Ukuran diperkecil) -->
                <img id="sim-car" src="assets/item/mobil.webp" style="width: 14cqw; position: absolute; left: -25%; top: 40%; transition: left 2s linear; z-index: 3; filter: drop-shadow(0.4cqw 0.4cqw 0 rgba(0,0,0,0.4));">
                <img id="sim-anak" src="assets/item/anak.webp" style="width: 7cqw; position: absolute; right: 18%; top: 40%; z-index: 2; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); filter: drop-shadow(0.3cqw 0.3cqw 0 rgba(0,0,0,0.5));">
                
                <button class="btn btn-play" id="btn-dodge" style="position: absolute; bottom: 3cqw; font-size: 2cqw; z-index: 10; padding: 1cqw 3cqw;" onclick="checkDodgeSim()">MENGHINDAR!</button>
                <p style="position: absolute; top: 5cqw; width: 100%; text-align: center; color: #111; z-index: 6; font-weight: bold; font-size: 1.5cqw; padding: 0 2cqw; margin: 0;">Kamu tidak bisa mendengar klakson mobil yang melaju!<br>Tunggu sampai layar <b>berkedip merah</b> (Tanda Visual), lalu cepat tekan tombol!</p>
            </div>

            <!-- 3. Simulasi Buta Warna -->
            <div id="sim-3-area" class="sim-container" style="background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <h3 class="sim-title" style="color: #111; top: 2cqw;">SIMULASI: BUTA WARNA</h3>
                <button class="btn btn-menu btn-sim-close" onclick="closeAdaptationSim()">KEMBALI</button>
                <p style="color: #111; font-weight: bold; margin-bottom: 3cqw; text-align: center; font-size: 1.5cqw; margin-top: 5cqw;">Karena Buta Warna, warna-warni buah terlihat pudar & sama!<br>Pilih buah <b>APEL</b> yang benar hanya berdasarkan BENTUKNYA.</p>
                <div id="sim-cb-items" class="sim-colorblind-container">
                    <img class="sim-shape-item" src="assets/item/pisang.webp" onclick="wrongAdaptationSim(3)">
                    <img class="sim-shape-item" src="assets/item/anggur.webp" onclick="wrongAdaptationSim(3)">
                    <img class="sim-shape-item" id="sim-apple" src="assets/item/apel.webp" onclick="revealAppleSim()">
                    <img class="sim-shape-item" src="assets/item/jeruk.webp" onclick="wrongAdaptationSim(3)">
                </div>
            </div>

            <!-- 4. Simulasi Mati Rasa -->
            <div id="sim-4-area" class="sim-container" style="background: #dcdde1; overflow: hidden;">
                <h3 class="sim-title" style="color: #111;">SIMULASI: MATI RASA</h3>
                <button class="btn btn-menu btn-sim-close" onclick="closeAdaptationSim()">KEMBALI</button>
                <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 15cqw; height: 100%; background: #c8d6e5;"></div>
                
                <!-- Aset Voxel Kaki & Paku -->
                <img id="sim-foot" class="sim-foot" src="assets/item/kaki.webp" alt="Kaki">
                <img id="sim-nail" class="sim-nail" src="assets/item/paku.webp" alt="Paku" onclick="removeNailSim()">
                
                <p style="position: absolute; top: 5cqw; width: 100%; text-align: center; color: #111; z-index: 6; font-weight: bold; font-size: 1.5cqw; padding: 0 2cqw; text-shadow: 0.1cqw 0.1cqw 0 #fff; margin: 0;">Karena kaki mati rasa & tidak merasakan sakit, kamu harus rajin melihat jalan.<br>Cepat <b>KLIK PAKU</b> untuk membuangnya sebelum kaki menginjaknya!</p>
            </div>
        </div>
    `;

    contentArea.innerHTML = flipModalHTML + `
        <!-- TAHAP 1: INTRO -->
        <div id="stage-1" class="mission-stage active-stage">
            <h3 class="stage-title">TAHAP 1: SD NEGERI MEDOWO 1</h3>
            <div class="mission-text-box" style="text-align: center; min-height: 8cqw; display: flex; align-items: center; justify-content: center;">
                <p id="m4-text-1" style="margin: 0; line-height: 1.5;"></p>
            </div>
            <button class="btn btn-play" style="margin-top: 2cqw;" onclick="nextM4Text('m4-text-1', 2)">LANJUT</button>
        </div>

        <!-- TAHAP 2: CARA MERAWAT -->
        <div id="stage-2" class="mission-stage">
            <h3 class="stage-title">TAHAP 2: MADING PERAWATAN</h3>
            <div id="mading-intro-2" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box">Klik dan baca 5 catatan penting ini untuk membuka akses ujian dadakan!</p>
                <div class="mading-board">
                    <div class="sticky-note" style="background: #ff7675; transform: rotate(-3deg);" onclick="openFlipNote(this, 2, 1, '#ff7675', 'anatomi-mata.webp', 'MERAWAT MATA', 'Membaca di tempat dengan pencahayaan yang terang.\\nMenjaga jarak aman saat menonton TV atau main HP.\\nIstirahatkan mata setelah lama menatap layar.\\nMakan makanan bergizi bervitamin A (wortel).\\nGunakan kacamata hitam saat terik.\\nJangan kucek mata kotor saat kelilipan.')">
                        <img src="assets/item/anatomi-mata.webp"><span>Mata</span>
                    </div>
                    <div class="sticky-note" style="background: #74b9ff; transform: rotate(4deg);" onclick="openFlipNote(this, 2, 2, '#74b9ff', 'anatomi-telinga.webp', 'MERAWAT TELINGA', 'Hindari mendengar musik pakai earphone terlalu keras.\\nBersihkan telinga bagian luar saja dengan lembut.\\nJangan masukkan benda keras ke dalam telinga.\\nTutup telinga jika ada suara ledakan keras.\\nKeringkan telinga setelah berenang/mandi.')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Telinga</span>
                    </div>
                    <div class="sticky-note" style="background: #00b894; transform: rotate(-2deg); color: white;" onclick="openFlipNote(this, 2, 3, '#00b894', 'anatomi-hidung.webp', 'MERAWAT HIDUNG', 'Hindari mencium asap atau bau kimia menyengat.\\nPakai masker di jalan raya yang berdebu.\\nCuci hidung dengan air garam saat pilek berat.\\nJangan mengorek kotoran hidung terlalu dalam (bisa mimisan).')">
                        <img src="assets/item/anatomi-hidung.webp"><span>Hidung</span>
                    </div>
                    <div class="sticky-note" style="background: #fd79a8; transform: rotate(3deg); color: white;" onclick="openFlipNote(this, 2, 4, '#fd79a8', 'anatomi-lidah.webp', 'MERAWAT LIDAH', 'Jangan makan makanan mendidih agar lidah tidak melepuh.\\nRajin sikat gigi dan sikat permukaan lidah secara teratur.\\nPilih makanan rendah gula agar terhindar dari jamur.\\nPerbanyak makan buah vitamin C agar tidak sariawan.')">
                        <img src="assets/item/anatomi-lidah.webp"><span>Lidah</span>
                    </div>
                    <div class="sticky-note" style="background: #e17055; transform: rotate(-4deg); color: white;" onclick="openFlipNote(this, 2, 5, '#e17055', 'anatomi-kulit1.webp', 'MERAWAT KULIT', 'Hindari menyentuh benda panas seperti setrika.\\nMandi teratur 2x sehari agar kuman kulit hilang.\\nMinum banyak air putih agar kulit lembap.\\nPakai sunscreen saat cuaca terik matahari.\\nObati luka gores agar tidak infeksi.')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Kulit</span>
                    </div>
                </div>
                <button id="btn-start-ta-2" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(2)">MULAI UJIAN DADAKAN!</button>
            </div>
            ${generateTaUI(2)}
        </div>

        <!-- TAHAP 3: PENYAKIT PANCAINDRA -->
        <div id="stage-3" class="mission-stage">
            <h3 class="stage-title">TAHAP 3: PENYAKIT PANCAINDRA</h3>
            <div id="mading-intro-3" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box">Waspadalah pada penyakit ini. Klik 5 gambar untuk membedah bahayanya!</p>
                <div class="mading-board">
                    <div class="sticky-note" style="background: #ff7675; transform: rotate(2deg);" onclick="openFlipNote(this, 3, 1, '#ff7675', 'anatomi-mata.webp', 'PENYAKIT MATA', 'Rabun Jauh/Dekat: Kesulitan melihat jarak tertentu.\\nKonjungtivitis: Mata merah dan gatal yang menular lewat sentuhan kotor.\\nKatarak: Lensa mata berawan (biasanya pada orang tua).')">
                        <img src="assets/item/anatomi-mata.webp"><span>Mata</span>
                    </div>
                    <div class="sticky-note" style="background: #74b9ff; transform: rotate(-3deg);" onclick="openFlipNote(this, 3, 2, '#74b9ff', 'anatomi-telinga.webp', 'PENYAKIT TELINGA', 'Tuli Sementara: Karena kotoran menumpuk atau suara ledakan.\\nOtitis: Infeksi telinga karena air kotor, menyebabkan dengung dan nyeri.')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Telinga</span>
                    </div>
                    <div class="sticky-note" style="background: #00b894; transform: rotate(4deg); color: white;" onclick="openFlipNote(this, 3, 3, '#00b894', 'anatomi-hidung.webp', 'PENYAKIT HIDUNG', 'Anosmia: Hilangnya kemampuan mencium bau sama sekali (akibat virus).\\nPolip: Daging tumbuh di hidung yang membuat sesak napas.')">
                        <img src="assets/item/anatomi-hidung.webp"><span>Hidung</span>
                    </div>
                    <div class="sticky-note" style="background: #fd79a8; transform: rotate(-1deg); color: white;" onclick="openFlipNote(this, 3, 4, '#fd79a8', 'anatomi-lidah.webp', 'PENYAKIT LIDAH', 'Sariawan: Luka putih perih karena kurang vitamin C.\\nKandidiasis (Jamur): Lidah putih berlapis karena jarang sikat gigi/lidah.')">
                        <img src="assets/item/anatomi-lidah.webp"><span>Lidah</span>
                    </div>
                    <div class="sticky-note" style="background: #e17055; transform: rotate(3deg); color: white;" onclick="openFlipNote(this, 3, 5, '#e17055', 'anatomi-kulit1.webp', 'PENYAKIT KULIT', 'Panu & Kadas: Bercak gatal yang disebabkan oleh infeksi jamur karena malas mandi.\\nJerawat & Biang Keringat: Pori-pori kulit tersumbat kotoran.')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Kulit</span>
                    </div>
                </div>
                <button id="btn-start-ta-3" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(3)">MULAI UJIAN TAHAP 3</button>
            </div>
            ${generateTaUI(3)}
        </div>

        <!-- TAHAP 4: PAHLAWAN ADAPTASI -->
        <div id="stage-4" class="mission-stage">
            <h3 class="stage-title">TAHAP 4: PAHLAWAN ADAPTASI</h3>
            <div id="mading-intro-4" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <div class="mission-text-box m4-intro-box" style="text-align: center; min-height: 8cqw; display: flex; align-items: center; justify-content: center; margin-bottom: 1cqw;">
                    <p id="m4-text-4" style="margin: 0; line-height: 1.5;"></p>
                </div>
                <button class="btn btn-play" id="btn-m4-adaptasi-lanjut" onclick="lanjutAdaptasi()" style="margin-bottom: 2cqw;">LANJUT</button>
                <div id="board-adaptasi" class="mading-board" style="display: none;">
                    <div class="mission-text-box" style="width: 100%; text-align: center; margin: 0 0 1cqw 0; background: #f1c40f; color: #111; border: 0.3cqw dashed #111;">
                        Berikut adalah contoh kondisi khusus yang berkaitan dengan Pancaindra:
                    </div>
                    <div class="sticky-note" style="background: #f1c40f; transform: rotate(-3deg);" onclick="openFlipNote(this, 4, 1, '#f1c40f', 'anatomi-mata.webp', 'TUNANETRA', 'Kondisi kehilangan penglihatan karena cacat lahir, penyakit, atau kecelakaan.\\n\\nCara Beradaptasi:\\nMembaca menggunakan Huruf Braille (huruf timbul), berjalan menggunakan bantuan Tongkat Putih khusus atau anjing penuntun.')">
                        <img src="assets/item/anatomi-mata.webp"><span>Tunanetra</span>
                    </div>
                    <div class="sticky-note" style="background: #f1c40f; transform: rotate(2deg);" onclick="openFlipNote(this, 4, 2, '#f1c40f', 'anatomi-telinga.webp', 'TUNARUNGU', 'Kondisi kehilangan fungsi pendengaran telinga sebagian atau total.\\n\\nCara Beradaptasi:\\nMenggunakan Alat Bantu Dengar medis, membaca gerak bibir lawan bicara, serta menggunakan komunikasi tangan (Bahasa Isyarat).')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Tunarungu</span>
                    </div>
                    <div class="sticky-note" style="background: #f1c40f; transform: rotate(-4deg);" onclick="openFlipNote(this, 4, 3, '#f1c40f', 'anatomi-mata.webp', 'BUTA WARNA', 'Kondisi keturunan di mana sel mata kesulitan membedakan perpaduan warna tertentu (bukan gelap gulita).\\n\\nCara Beradaptasi:\\nMenggunakan kacamata berlensa khusus, dan mengingat urutan posisi benda penting (seperti lampu merah lalu lintas di atas).')">
                        <img src="assets/item/anatomi-mata.webp"><span>Buta Warna</span>
                    </div>
                    <div class="sticky-note" style="background: #f1c40f; transform: rotate(3deg);" onclick="openFlipNote(this, 4, 4, '#f1c40f', 'anatomi-kulit1.webp', 'MATI RASA', 'Kehilangan kepekaan pada saraf peraba di kulit, sering terjadi karena komplikasi penyakit berat.\\n\\nCara Beradaptasi:\\nSelalu mengecek kondisi tubuh secara rutin dan selalu memakai alas kaki tebal yang aman setiap berjalan agar tidak terluka tanpa sadar.')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Mati Rasa</span>
                    </div>
                </div>
                <button id="btn-start-ta-4" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(4)">MULAI UJIAN TAHAP 4</button>
            </div>
            ${generateTaUI(4)}
        </div>

        <!-- TAHAP 5: MAKHLUK SUPER -->
        <div id="stage-5" class="mission-stage">
            <h3 class="stage-title">TAHAP 5: MAKHLUK SUPER</h3>
            <div id="mading-intro-5" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box">Hewan-hewan ini punya kemampuan mistis pancaindra! Klik kertas untuk mengungkap rahasianya.</p>
                <div class="mading-board">
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(-2deg); color: white;" onclick="openFlipNote(this, 5, 1, '#a29bfe', 'anatomi-telinga.webp', 'RADAR MALAM', 'Kekuatan: KELELAWAR\\n\\nPenjelasan:\\nKelelawar sebenarnya buta di kegelapan! Mereka mengeluarkan suara melengking yang memantul di dinding goa, lalu ditangkap oleh telinganya yang besar.\\nTeknik pantulan suara ini disebut Ekolokasi.', 'kelelawar.webp')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Radar Malam</span>
                    </div>
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(3deg); color: white;" onclick="openFlipNote(this, 5, 2, '#a29bfe', 'anatomi-mata.webp', 'TEROPONG LANGIT', 'Kekuatan: BURUNG ELANG\\n\\nPenjelasan:\\nBurung elang memiliki struktur mata teleskopik yang tajamnya berkali-kali lipat dari manusia. Mereka bisa melihat tikus kecil bersembunyi di padang rumput meskipun sedang terbang di langit yang sangat tinggi!', 'elang.webp')">
                        <img src="assets/item/anatomi-mata.webp"><span>Teropong Langit</span>
                    </div>
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(-4deg); color: white;" onclick="openFlipNote(this, 5, 3, '#a29bfe', 'anatomi-hidung.webp', 'HIDUNG DETEKTIF', 'Kekuatan: ANJING PELACAK\\n\\nPenjelasan:\\nAnjing memiliki jutaan sel saraf pembau tambahan. Penciumannya yang super peka ini sering dimanfaatkan polisi untuk melacak jejak penjahat atau bom hanya dari sisa partikel bau di udara.', 'anjing.webp')">
                        <img src="assets/item/anatomi-hidung.webp"><span>Hidung Detektif</span>
                    </div>
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(2deg); color: white;" onclick="openFlipNote(this, 5, 4, '#a29bfe', 'anatomi-lidah.webp', 'SENSOR PANAS & BAU', 'Kekuatan: ULAR\\n\\nPenjelasan:\\nUlar sering menjulurkan lidah cabangnya untuk menangkap partikel bau mangsa di udara. Beberapa ular juga punya titik sensor khusus di wajah untuk mendeteksi suhu panas mangsanya di dalam kegelapan pekat.', 'ular.webp')">
                        <img src="assets/item/anatomi-lidah.webp"><span>Sensor Panas</span>
                    </div>
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(-3deg); color: white;" onclick="openFlipNote(this, 5, 5, '#a29bfe', 'anatomi-kulit1.webp', 'TUBUH PERASA', 'Kekuatan: IKAN LELE\\n\\nPenjelasan:\\nJika manusia mengecap manis asin pakai lidah, seluruh kulit dan kumis Ikan Lele dipenuhi oleh saraf pengecap! Ia bisa mencicipi dan menemukan letak makanannya meski sungai sangat keruh.', 'lele.webp')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Tubuh Perasa</span>
                    </div>
                </div>
                <button id="btn-start-ta-5" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(5)">MULAI UJIAN TAHAP 5</button>
            </div>
            ${generateTaUI(5)}
        </div>

        <!-- TAHAP 6: INDRA RAHASIA (KEKUATAN TERSEMBUNYI) -->
        <div id="stage-6" class="mission-stage">
            <h3 class="stage-title">TAHAP 6: KEKUATAN TERSEMBUNYI</h3>
            <div id="mading-intro-6" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box">Manusia ternyata punya indra tersembunyi yang bekerja tanpa kamu sadari lho!</p>
                <div class="mading-board">
                    <div class="sticky-note" style="background: #ffeaa7; transform: rotate(-2deg); border-color: #f1c40f;" onclick="openFlipNote(this, 6, 1, '#ffeaa7', 'anatomi-telinga.webp', 'INDRA KESEIMBANGAN', 'Posisi: Telinga Bagian Dalam\\n\\nPenjelasan:\\nDi bagian terdalam telingamu ada saluran melingkar berisi cairan khusus. Cairan inilah pelampung penyeimbangmu! Ia bertugas menjaga agar tubuhmu tegak dan tidak mudah jatuh saat melompat atau berlari zigzag.')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Keseimbangan</span>
                    </div>
                    <div class="sticky-note" style="background: #81ecec; transform: rotate(3deg); border-color: #00cec9;" onclick="openFlipNote(this, 6, 2, '#81ecec', 'anatomi-kulit1.webp', 'INDRA POSISI (PROPRIOSEPSI)', 'Posisi: Otot dan Sendi Tulang\\n\\nPenjelasan:\\nIndra rahasia ini memberi tahu otak di mana tepatnya letak posisi tangan dan kakimu berada saat ini. Berkat indra inilah, kamu bisa menggaruk ujung hidungmu dengan tepat meski matamu sedang ditutup rapat!')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Posisi Tubuh</span>
                    </div>
                    <div class="sticky-note" style="background: #fab1a0; transform: rotate(-1deg); border-color: #e17055;" onclick="openFlipNote(this, 6, 3, '#fab1a0', 'anatomi-kulit1.webp', 'INDRA SUHU', 'Posisi: Jaringan Kulit\\n\\nPenjelasan:\\nSaraf di kulitmu juga bertindak sebagai pendeteksi suhu cuaca. Ia membuatmu menggigil saat kedinginan (agar cari selimut) dan memaksa mengeluarkan keringat saat kepanasan (untuk mendinginkan mesin dalam tubuhmu).')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Sensor Suhu</span>
                    </div>
                </div>
                <button id="btn-start-ta-6" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(6)">MULAI UJIAN TAHAP 6</button>
            </div>
            ${generateTaUI(6)}
        </div>

        <!-- TAHAP 7: UJIAN BOSS EVALUASI -->
        <div id="stage-7" class="mission-stage">
            <h3 class="stage-title">TAHAP 7: EVALUASI AKHIR (BOSS)</h3>
            <div id="mading-intro-7" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="font-size: 1.8cqw; margin-top: 2cqw;">Ini adalah tantangan terakhir dari SD Negeri Medowo 1!<br><br>Gunakan seluruh pengetahuanmu tentang Pancaindra untuk melewati 15 Kuis Pilihan Ganda Cepat ini.</p>
                <button class="btn btn-play" style="font-size: 2.5cqw; padding: 1.5cqw 4cqw; background: #ff4757; margin-top: 3cqw; box-shadow: 0.5cqw 0.5cqw 0 #111;" onclick="startBossM4()">🔥 LAWAN BOSS EVALUASI! 🔥</button>
            </div>
            <div id="boss-m4-container" class="time-attack-container" style="display: none;">
                <div class="ta-timer-box"><div id="boss-m4-bar" class="ta-timer-fill"></div></div>
                <div id="boss-m4-question" class="ta-card" style="width: 100%; font-size: 1.5cqw;">Memuat Pertanyaan...</div>
                <div class="explore-grid" id="boss-m4-options" style="width: 100%; margin-bottom: 0;"></div>
            </div>
        </div>
    `;

    // Pasang tombol Tab Lanjutkan dari 1 s/d 6
    let floatingHTML = '';
    for(let i=1; i<=6; i++) {
        floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-${i}" style="display: none;" onclick="nextMissionStage(${i+1})">LANJUTKAN</button>`;
    }
    floatingNext.innerHTML = floatingHTML;

    // Pasang Naskah Dialog Pascagame (Boss ada di Stage 7)
    currentMissionDialogs = {
        7: { 
            isBoss: true,
            dialog: [
                { text: "Pekerjaan yang sangat memukau! Kamu lulus Ujian Dadakan SD Negeri Medowo 1 dengan nilai sempurna!", mood: "happy" },
                { text: "Kamu berhasil mendapatkan 100 Koin Emas. Sekarang kamu adalah ahli penjaga kesehatan tubuh sejati.", mood: "happy" },
                { text: "Segel ajaib Misi 5 telah terbuka! Mari kita kembali ke Peta Utama.", mood: "neutral" }
            ]
        }
    };

    // Modifikasi Otomatis Pengantar Teks Tahap 1
    startM4Intro('m4-text-1', [
        "Selamat datang di SD Negeri Medowo 1! Ini adalah markas utama bagi para petualang pemberani sepertimu.",
        "Sebelumnya, kita sudah belajar bahwa tubuh kita memiliki 5 alat sensor ajaib yang disebut Pancaindra (Mata, Telinga, Hidung, Lidah, dan Kulit).",
        "Namun, indra kita bisa rusak jika tidak dijaga. Hari ini, kamu akan menghadapi rentetan Ujian Dadakan untuk membuktikan seberapa pintar kamu merawat tubuhmu!"
    ]);

    // Modifikasi Otomatis Pengantar Teks Tahap 4
    const m4IntroAdaptasi = [
        "Beberapa manusia ternyata memiliki kondisi medis khusus yang berkaitan dengan fungsi pancaindra mereka.",
        "Hal ini bisa terjadi karena bawaan sejak lahir, efek penuaan, sakit parah, atau karena kecelakaan tak terduga.",
        "Namun jangan sedih, mereka adalah pahlawan adaptasi! Meski memiliki kekurangan, mereka bisa menyesuaikan diri dengan cara luar biasa.",
        "Klik Mading ini untuk mempelajari cara teman-teman kita menjalani hidup dengan pancaindra yang spesial!"
    ];
    let currentAdaptasiIdx = 0;
    const txtAdaptasi = document.getElementById('m4-text-4');
    txtAdaptasi.innerText = m4IntroAdaptasi[0];
    
    window.lanjutAdaptasi = function() {
        currentAdaptasiIdx++;
        if (currentAdaptasiIdx < m4IntroAdaptasi.length) {
            txtAdaptasi.innerText = m4IntroAdaptasi[currentAdaptasiIdx];
            
            /* Force Reading Delay */
            const btn = document.getElementById('btn-m4-adaptasi-lanjut');
            if (btn) {
                btn.style.display = 'none';
                clearTimeout(window.adaptasiTimer);
                window.adaptasiTimer = setTimeout(() => { btn.style.display = 'flex'; }, 2500);
            }
        } else {
            // Sembunyikan Kotak Teks dan Tombol Lanjut saat materi habis
            txtAdaptasi.closest('.m4-intro-box').style.display = 'none';
            document.getElementById('btn-m4-adaptasi-lanjut').style.display = 'none';
            document.getElementById('board-adaptasi').style.display = 'flex';
        }
    };
}

// ================= MESIN KUIS PILIHAN GANDA CEPAT (BOSS TAHAP 7 - MISI 4) =================
let bossM4Index = 0;
let bossM4Timer;
let bossM4TimeLeft = 100;
let bossM4QuestionsActive = [];

// 15 Bank Soal Pilihan Ganda
const bossM4Data = [
    // --- Merawat Pancaindra ---
    { q: "Bagaimana cara merawat mata yang paling tepat saat kita sedang membaca buku?", opts: ["Membaca di tempat gelap gulita", "Membaca dengan lampu yang terang", "Membaca sambil tiduran", "Menempelkan buku ke wajah"], ans: "Membaca dengan lampu yang terang", msg: "Cahaya terang membantu otot mata tidak cepat lelah." },
    { q: "Tindakan apa yang sangat BERBAHAYA dan dapat merusak selaput gendang telingamu?", opts: ["Mengorek telinga dengan lidi", "Mengeringkan telinga pakai handuk", "Menutup telinga saat ada ledakan", "Mendengarkan musik pelan"], ans: "Mengorek telinga dengan lidi", msg: "Benda keras bisa merobek selaput tipis di dalam telingamu!" },
    { q: "Apa yang bisa terjadi jika kita sering makan makanan yang terlalu panas atau mendidih?", opts: ["Gigi menjadi lebih kuat", "Saraf pengecap lidah melepuh", "Tenggorokan menjadi dingin", "Hidung menjadi mampet"], ans: "Saraf pengecap lidah melepuh", msg: "Lidah bisa melepuh dan kehilangan kemampuannya mengecap rasa sementara." },
    
    // --- Kondisi Khusus ---
    { q: "Teman kita yang Tunanetra (tidak bisa melihat) dapat membaca buku cerita menggunakan huruf timbul yang disebut...", opts: ["Huruf Alfabet", "Huruf Morse", "Huruf Braille", "Huruf Hijaiyah"], ans: "Huruf Braille", msg: "Huruf Braille dibaca menggunakan indra peraba pada ujung jari." },
    { q: "Orang yang mengalami kondisi Buta Warna biasanya akan kesulitan untuk...", opts: ["Melihat benda di siang hari", "Mendengar suara dari jauh", "Membedakan warna merah & hijau", "Merasakan suhu panas"], ans: "Membedakan warna merah & hijau", msg: "Mereka tidak melihat gelap gulita, melainkan sulit membedakan warna tertentu." },
    
    // --- Penyakit Pancaindra ---
    { q: "Sariawan adalah luka putih perih di lidah atau mulut. Penyakit ini terjadi karena tubuh kita kekurangan...", opts: ["Vitamin A", "Vitamin C", "Kalsium Tulang", "Karbohidrat"], ans: "Vitamin C", msg: "Makan buah-buahan seperti jeruk sangat bagus untuk mencegah sariawan." },
    { q: "Penyakit Panu membuat kulit menjadi bercak putih dan sangat gatal. Penyakit ini disebabkan oleh...", opts: ["Gigitan Nyamuk", "Infeksi Jamur", "Alergi Makanan", "Terbakar Matahari"], ans: "Infeksi Jamur", msg: "Jamur sangat suka tumbuh di kulit yang kotor karena jarang mandi." },
    { q: "Penyakit Konjungtivitis (Sakit Mata Merah) sangat mudah menular kepada orang lain melalui...", opts: ["Tatapan mata langsung", "Suara batuk & bersin", "Sentuhan barang yang kotor", "Udara di sekitar penderita"], ans: "Sentuhan barang yang kotor", msg: "Virus mata merah menular saat kita mengucek mata setelah menyentuh barang bekas penderita." },
    
    // --- Kemampuan Khusus Hewan ---
    { q: "Meskipun buta di kegelapan, kelelawar bisa terbang malam hari tanpa menabrak berkat pantulan suara (Ekolokasi) yang ditangkap oleh...", opts: ["Mata besarnya", "Hidung tajamnya", "Telinga radarnya", "Sayap lebarnya"], ans: "Telinga radarnya", msg: "Telinga kelelawar bertindak sebagai radar penangkap pantulan suara." },
    { q: "Burung elang mampu melihat tikus kecil yang berlari di rumput dari atas awan yang sangat tinggi. Hal ini membuktikan bahwa elang memiliki...", opts: ["Mata seperti teropong", "Hidung pencium darah", "Telinga radar", "Kumis sensor angin"], ans: "Mata seperti teropong", msg: "Mata elang memiliki kemampuan teleskopik yang berkali lipat lebih tajam dari manusia." },
    { q: "Polisi sering menggunakan bantuan Anjing Pelacak untuk mencari jejak orang hilang karena anjing memiliki kemampuan super pada...", opts: ["Indra Pendengar", "Indra Pembau", "Indra Penglihat", "Indra Peraba"], ans: "Indra Pembau", msg: "Hidung anjing memiliki jutaan sel saraf ekstra untuk mendeteksi partikel bau." },
    { q: "Di manakah letak sensor ajaib Ikan Lele yang membuatnya bisa mengecap rasa makanan di dalam air sungai yang sangat keruh?", opts: ["Hanya di ujung lidah", "Di seluruh kulit & kumisnya", "Di dalam matanya", "Di sirip ekornya"], ans: "Di seluruh kulit & kumisnya", msg: "Seluruh tubuh lele dipenuhi saraf pengecap rasa!" },
    
    // --- Pancaindra Rahasia Manusia ---
    { q: "Selain untuk mendengar, bagian terdalam dari telinga kita memiliki cairan khusus yang berfungsi sebagai...", opts: ["Indra Sensor Suhu", "Indra Keseimbangan Tubuh", "Indra Pencium Bau", "Indra Pengecap Darah"], ans: "Indra Keseimbangan Tubuh", msg: "Cairan ini menjaga tubuhmu agar tegak dan tidak mudah jatuh saat berlari." },
    { q: "Saat udara di ruangan terasa sangat panas, indra rahasia di kulit kita akan bekerja dengan cara...", opts: ["Mengeluarkan keringat", "Menumbuhkan rambut", "Membuat kulit pucat", "Membuat gigi menggigil"], ans: "Mengeluarkan keringat", msg: "Kulit mendeteksi suhu panas dan mengeluarkan keringat untuk mendinginkan tubuh." },
    { q: "Kita bisa menyentuh ujung hidung dengan tepat meskipun mata sedang ditutup. Ini berkat Indra Propriosepsi (Posisi Tubuh) yang terletak di...", opts: ["Rongga Hidung", "Daun Telinga", "Otot dan Sendi", "Bola Mata"], ans: "Otot dan Sendi", msg: "Saraf di otot berfungsi sebagai GPS alami yang memberitahu otak posisi anggota tubuhmu." }
];

// Menjalankan Boss Kuis Cepat
window.startBossM4 = function() {
    document.getElementById('mading-intro-7').style.display = 'none';
    document.getElementById('boss-m4-container').style.display = 'flex';
    
    // Acak 15 urutan soal agar tidak bisa dihafal
    bossM4QuestionsActive = [...bossM4Data].sort(() => Math.random() - 0.5);
    bossM4Index = 0;
    loadBossM4Question();
};

window.loadBossM4Question = function() {
    // Jika siswa berhasil melewati ke-15 soal
    if (bossM4Index >= bossM4QuestionsActive.length) {
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
        showCustomModal("LULUS EVALUASI AKHIR!", "Luar Biasa! Kamu berhasil menjawab semua ujian rahasia dari Pahlawan Nagata!", checkIcon, "alert", () => triggerPostDialog(7));
        return;
    }

    const q = bossM4QuestionsActive[bossM4Index];
    document.getElementById('boss-m4-question').innerText = `Pertanyaan ${bossM4Index + 1} / 15:\n\n${q.q}`;

    const optionsBox = document.getElementById('boss-m4-options');
    optionsBox.innerHTML = '';
    
    // Acak urutan jawaban A/B/C/D
    const shuffledOpts = [...q.opts].sort(() => Math.random() - 0.5);
    shuffledOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-explore'; // Meminjam gaya tombol arcade biru
        btn.innerText = opt;
        btn.onclick = () => handleBossM4Answer(btn, opt === q.ans, q.msg);
        optionsBox.appendChild(btn);
    });

    // Reset Bar Timer
    bossM4TimeLeft = 100;
    const bar = document.getElementById('boss-m4-bar');
    bar.style.width = '100%';
    bar.style.backgroundColor = '#2ed573';

    clearInterval(bossM4Timer);
    bossM4Timer = setInterval(() => {
        bossM4TimeLeft -= 0.3; // Timer melambat sedikit agar siswa sempat membaca 4 pilihan ganda
        bar.style.width = `${bossM4TimeLeft}%`;
        
        // Ubah warna bar menjadi panik
        if(bossM4TimeLeft < 50) bar.style.backgroundColor = '#ffa502';
        if(bossM4TimeLeft < 20) bar.style.backgroundColor = '#ff4757';

        if (bossM4TimeLeft <= 0) {
            clearInterval(bossM4Timer);
            handleBossM4Timeout();
        }
    }, 100);
};

window.handleBossM4Answer = function(btnClicked, isCorrect, msg) {
    if (btnClicked.classList.contains('btn-correct') || btnClicked.classList.contains('btn-wrong')) return;
    clearInterval(bossM4Timer); // Hentikan waktu
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;

    if (isCorrect) {
        btnClicked.classList.add('btn-correct');
        addScore(20);
        showCustomModal("TEPAT SEKALI!", msg, "", "alert", () => { bossM4Index++; loadBossM4Question(); });
    } else {
        btnClicked.classList.add('btn-wrong');
        reduceLife();
        
        // Efek Getar Kamera
        const missionBox = document.querySelector('.mission-full-box');
        missionBox.classList.remove('shake-screen'); void missionBox.offsetWidth; missionBox.classList.add('shake-screen');
        setTimeout(() => missionBox.classList.remove('shake-screen'), 500);
        
        showCustomModal("JAWABAN SALAH!", `Perhatikan lagi pertanyaannya! ${msg}\n(Nyawa Berkurang 1)`, lockIcon, "error", () => loadBossM4Question());
    }
};

window.handleBossM4Timeout = function() {
    reduceLife();
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
    showCustomModal("WAKTU HABIS!", "Wah, waktumu habis! Membaca dan berpikirlah dengan lebih cepat.\n(Nyawa Berkurang 1)", lockIcon, "error", () => loadBossM4Question());
};

// ================= MESIN SIMULASI PAHLAWAN ADAPTASI (MISI 4 TAHAP 4) =================
let simAdaptCompleted = { 1: false, 2: false, 3: false, 4: false };
let sim2Status = 'ready'; // 'ready', 'running', 'danger', 'ended'
let sim2Timeout1, sim2Timeout2;
let sim4Timer;
let sim4Active = false;

// Aset Audio & Memori untuk Simulasi Tunanetra
const audioSim1 = {
    sekolah: new Audio('assets/sound/cmd-sekolah.mp3'),
    puskesmas: new Audio('assets/sound/cmd-puskesmas.mp3'),
    pasar: new Audio('assets/sound/cmd-pasar.mp3'),
    yeay: new Audio('assets/sound/yeay.mp3')
};
let sim1Targets = ['sekolah', 'puskesmas', 'pasar'];
let currentSim1Index = 0;

window.startAdaptationSim = function(id) {
    document.getElementById('sim-overlay').style.display = 'flex';
    
    // Sembunyikan semua, tampilkan yang dipilih
    for(let i=1; i<=4; i++) {
        document.getElementById('sim-'+i+'-area').style.display = 'none';
    }
    document.getElementById('sim-'+id+'-area').style.display = 'flex';
    
    if(id === 1) {
        // Reset permainan pencarian
        currentSim1Index = 0;
        sim1Targets = ['sekolah', 'puskesmas', 'pasar'].sort(() => Math.random() - 0.5); // Acak urutan yang diminta
        
        document.getElementById('target-sekolah').style.display = 'block';
        document.getElementById('target-puskesmas').style.display = 'block';
        document.getElementById('target-pasar').style.display = 'block';
        document.getElementById('btn-sim-audio').style.display = 'flex';
    }
    else if(id === 2) {
        const car = document.getElementById('sim-car');
        const anak = document.getElementById('sim-anak');
        const alert = document.getElementById('sim-visual-alert');
        
        // Bersihkan seluruh pewaktu sebelumnya
        clearTimeout(sim2Timeout1);
        clearTimeout(sim2Timeout2);

        car.style.transition = 'none';
        car.style.left = '-25%';
        anak.style.transform = 'translateY(0)';
        alert.classList.remove('flashing');
        sim2Status = 'ready';
        
        // Mobil mulai melaju mendekati anak
        setTimeout(() => {
            car.style.transition = 'left 2.5s linear';
            car.style.left = '58%'; 
            sim2Status = 'running';
        }, 100);
        
        // Zona Bahaya: Layar berkedip merah saat mobil sudah dekat (di detik ke-1.3)
        sim2Timeout1 = setTimeout(() => {
            if (sim2Status === 'running') {
                sim2Status = 'danger';
                alert.classList.add('flashing');
            }
        }, 1300);
        
        // Jika pemain diam saja sampai mobil menabrak (di detik ke-2.4) tanpa menghindar
        sim2Timeout2 = setTimeout(() => {
            if (sim2Status === 'danger' || sim2Status === 'running') {
                sim2Status = 'ended';
                alert.classList.remove('flashing');
                wrongAdaptationSim(2);
            }
        }, 2400);
    }
    else if(id === 3) {
        // Reset warna apel kembali menjadi abu-abu
        const apple = document.getElementById('sim-apple');
        if (apple) apple.classList.remove('revealed');
        
        // Acak posisi buah agar tidak dihapal
        const container = document.getElementById('sim-cb-items');
        for (let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
    }
    else if(id === 4) {
        const foot = document.getElementById('sim-foot');
        const nail = document.getElementById('sim-nail');
        foot.style.transition = 'none';
        foot.style.top = '-15cqw';
        nail.style.display = 'block';
        sim4Active = true;
        
        // Kaki perlahan turun menginjak paku
        setTimeout(() => {
            foot.style.transition = 'top 3.5s linear';
            foot.style.top = '70%'; 
        }, 100);
        
        // Jika dalam 3 detik paku belum di klik = Gagal
        sim4Timer = setTimeout(() => {
            if (sim4Active) {
                wrongAdaptationSim(4);
            }
        }, 3000);
    }
};

window.closeAdaptationSim = function() {
    document.getElementById('sim-overlay').style.display = 'none';
    clearTimeout(sim2Timeout1);
    clearTimeout(sim2Timeout2);
    clearTimeout(sim4Timer);
};

// Logika Tombol Audio Tunanetra
window.playSim1Audio = function() {
    if (currentSim1Index < sim1Targets.length) {
        let currentTarget = sim1Targets[currentSim1Index];
        audioSim1[currentTarget].currentTime = 0;
        audioSim1[currentTarget].play().catch(e => console.log(e));
    }
};

// Logika Pengecekan Lokasi Tunanetra
window.checkSim1Target = function(clickedPlace) {
    if (currentSim1Index >= sim1Targets.length) return;
    
    let expectedPlace = sim1Targets[currentSim1Index];
    if (clickedPlace === expectedPlace) {
        // Jawaban Benar!
        audioSim1.yeay.currentTime = 0;
        audioSim1.yeay.play();
        
        document.getElementById('target-' + clickedPlace).style.display = 'none'; 
        currentSim1Index++;
        
        // Tunggu suara "Yeay" benar-benar selesai diputar
        audioSim1.yeay.onended = function() {
            if (currentSim1Index >= sim1Targets.length) {
                document.getElementById('btn-sim-audio').style.display = 'none';
                setTimeout(() => {
                    winAdaptationSim(1);
                }, 1000);
            } else {
                // Jeda 3 detik setelah suara selesai, baru putar pertanyaan/petunjuk berikutnya
                setTimeout(() => {
                    playSim1Audio();
                }, 3000); 
            }
        };
    }
};

// Logika Tombol Menghindar (Tunarungu) yang Baru & Bersih
window.checkDodgeSim = function() {
    if (sim2Status === 'ready' || sim2Status === 'running') {
        // Pemain menekan tombol TERLALU CEPAT (sebelum ada kedipan merah)
        sim2Status = 'ended';
        clearTimeout(sim2Timeout1);
        clearTimeout(sim2Timeout2);
        document.getElementById('sim-visual-alert').classList.remove('flashing');
        wrongAdaptationSim(2);
    } 
    else if (sim2Status === 'danger') {
        // Pemain menekan tombol di WAKTU YANG TEPAT (pas lampu merah berkedip)
        sim2Status = 'ended';
        clearTimeout(sim2Timeout1);
        clearTimeout(sim2Timeout2);
        document.getElementById('sim-visual-alert').classList.remove('flashing');
        
        // Animasi anak melompat
        document.getElementById('sim-anak').style.transform = 'translateY(-15cqw)';
        
        setTimeout(() => {
            winAdaptationSim(2);
        }, 500);
    }
};

window.winAdaptationSim = function(id) {
    simAdaptCompleted[id] = true;
    
    let msg = "";
    if(id === 1) msg = "Luar biasa! Kamu menggunakan telinga dan rabaan tangan untuk menggantikan fungsi matamu dalam menemukan bangunan.";
    if(id === 2) msg = "Hebat! Kamu selamat dari bahaya karena sangat awas memperhatikan peringatan visual (lampu merah).";
    if(id === 3) msg = "Tepat! Kamu berhasil mengenali Apel dari 'BENTUKNYA' meskipun warnanya tersamar.";
    if(id === 4) msg = "Paku berhasil disingkirkan! Matamu telah bekerja menggantikan fungsi saraf perasa di kaki.";

    const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
    showCustomModal("SIMULASI BERHASIL!", msg, checkIcon, "alert", () => {
        closeAdaptationSim();
        closeFlipNote(); // Menutup kartu flip otomatis setelah simulasi selesai
            
        // Pastikan tombol ujian tetap muncul jika semua catatan sudah dibaca
        const totalNotes = document.querySelectorAll('#stage-4 .sticky-note').length;
        if (madingReads[4] && madingReads[4].length >= totalNotes) {
            document.getElementById('btn-start-ta-4').style.display = 'inline-flex';
        }
    });
};

window.wrongAdaptationSim = function(id) {
    sim4Active = false; 
    // sim2Active = false; // Dihapus karena variabel tidak pernah dideklarasikan
    reduceLife();
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
    
    // EFEK GETAR LAYAR (SHAKE SCREEN)
    const simArea = document.getElementById('sim-' + id + '-area');
    if (simArea) {
        simArea.classList.remove('shake-screen'); 
        void simArea.offsetWidth; // Paksa peramban mereset animasi
        simArea.classList.add('shake-screen');
    }
    
    let msg = "Gagal!";
    if (id === 2) msg = "Aduh, kamu tertabrak mobil! Ingat, tekan tombol HANYA saat peringatan visual (lampu merah) berkedip.";
    if (id === 3) msg = "Itu bukan apel! Perhatikan garis luar bentuknya, bukan warnanya.";
    if (id === 4) msg = "Aduh! Kakimu menginjak paku dan terluka parah tanpa kamu sadari!";
    
    // Tunda kemunculan pop-up Gagal sesaat, agar efek layar bergetar terlihat jelas
    setTimeout(() => {
        showCustomModal("SIMULASI GAGAL!", msg + " (Nyawa Berkurang 1)", lockIcon, "error", () => closeAdaptationSim());
    }, 400); 
};

// Logika Sensor Pergerakan Rabaan Jari (Tunanetra)
function updateDarkMask(e) {
    const area = document.getElementById('sim-1-area');
    
    // Mencegah error: hentikan fungsi jika elemen belum dibuat oleh Javascript atau sedang tidak terlihat
    if (!area || area.style.display === 'none') return;

    const rect = area.getBoundingClientRect();
    
    // Deteksi akurat apakah digeser dengan Mouse atau Layar Sentuh HP
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    const darkLayer = document.getElementById('sim-dark-layer');
    if(darkLayer) {
        darkLayer.style.setProperty('--x', x + '%');
        darkLayer.style.setProperty('--y', y + '%');
    }
}

// Pasang sensor ke 'document' global agar tidak error saat website pertama kali dimuat
document.addEventListener('mousemove', updateDarkMask);
document.addEventListener('touchmove', updateDarkMask, {passive: true});

// Logika Menyingkirkan Paku (Mati Rasa)
window.removeNailSim = function() {
    if(!sim4Active) return;
    sim4Active = false;
    document.getElementById('sim-nail').style.display = 'none';
    clearTimeout(sim4Timer);
    winAdaptationSim(4);
};

// Logika Menemukan Buah Apel (Buta Warna)
window.revealAppleSim = function() {
    const apple = document.getElementById('sim-apple');
    apple.classList.add('revealed'); // Memicu animasi transisi CSS agar warnanya perlahan kembali cerah
    
    // Beri jeda 0.8 detik agar siswa bisa menikmati perubahan warna apel sebelum Pop-up Menang muncul
    setTimeout(() => {
        winAdaptationSim(3);
    }, 800);
};

// ================= MESIN DETEKTIF MALAM (MISI 6 TAHAP 5) =================
let detektifM6Targets = [];
let currentDetektifM6Index = 0;
let isFlashlightM6Active = false;

const dataDetektifM6 = {
    kemah: {
        dialog: "Kamu menemukan Camping Ground! Jika di area segelap ini ada teman Tunanetra (tidak bisa melihat), benda apa yang sangat membantunya berjalan agar tidak tersandung?",
        ans1: "Tongkat Putih", ans2: "Kacamata Hitam", correct: 1
    },
    kolam: {
        dialog: "Kamu menemukan Kolam Renang! Airnya pasti sangat dingin di malam hari. Sensor yang bertugas mendeteksi suhu dingin pada kulit adalah...",
        ans1: "Kelenjar Keringat", ans2: "Ujung Saraf", correct: 2
    },
    cafe: {
        dialog: "Kamu menemukan Cafe! Wah, ada aroma sedap kopi hangat. Saraf pembau yang mengirimkan pesan aroma ini ke otak terletak di bagian...",
        ans1: "Rongga Hidung", ans2: "Permukaan Lidah", correct: 1
    },
    taman: {
        dialog: "Kamu menemukan Playground! Wahana ini dicat berwarna-warni. Jika ada teman yang kesulitan membedakan warna merah dan hijau, ia memiliki kondisi...",
        ans1: "Buta Warna", ans2: "Rabun Jauh", correct: 1
    },
    aula: {
        dialog: "Kamu menemukan Area Pertemuan! Tempat ini cukup luas. Jika ada teman Tunarungu (tidak bisa mendengar) di sini, cara terbaik memanggilnya adalah...",
        ans1: "Berteriak Keras", ans2: "Menepuk Pundaknya", correct: 2
    }
};

window.startDetektifM6 = function() {
    document.getElementById('intro-detektif-m6').style.display = 'none';
    isFlashlightM6Active = true;
    currentDetektifM6Index = 0;
    
    // Acak 5 Objek Area Wisata
    detektifM6Targets = ['kemah', 'kolam', 'cafe', 'taman', 'aula'].sort(() => Math.random() - 0.5); 
    
    document.getElementById('flashlight-layer-m6').style.display = 'block';
    document.getElementById('target-m6-' + detektifM6Targets[0]).style.display = 'block';
    
    // Sensor Pengikut Mouse/Jari untuk Senter
    const gameArea = document.getElementById('detektif-m6-area');
    const updateFlashlightM6 = (e) => {
        if (!isFlashlightM6Active) return;
        const rect = gameArea.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;
        document.getElementById('flashlight-layer-m6').style.setProperty('--x', x + '%');
        document.getElementById('flashlight-layer-m6').style.setProperty('--y', y + '%');
    };
    
    gameArea.addEventListener('mousemove', updateFlashlightM6);
    gameArea.addEventListener('touchmove', updateFlashlightM6, {passive: true});
    
    // Eksekusi Fullscreen CSS seketika
    document.querySelector('.mission-header').style.display = 'none';
    document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.add('fullscreen-mode');
};

window.checkDetektifM6 = function(targetName) {
    if (targetName === detektifM6Targets[currentDetektifM6Index]) {
        isFlashlightM6Active = false;
        document.getElementById('target-m6-' + targetName).style.display = 'none';
        
        let data = dataDetektifM6[targetName];
        let quizDialog = [
            {
                text: data.dialog, mood: "happy", isChoice: true,
                btn1Text: data.ans1, btn2Text: data.ans2,
                onYes: () => handleDetektifM6Answer(1, data.correct),
                onNo: () => handleDetektifM6Answer(2, data.correct)
            }
        ];
        
        setTimeout(() => { startVnDialog(quizDialog, "Petualang Nagata", "npc1", null); }, 800);
    }
};

window.handleDetektifM6Answer = function(chosen, correct) {
    vnOverlay.style.display = 'none'; // Tutup paksa VN Overlay
    const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;

    if (chosen === correct) {
        addScore(20);
        showCustomModal("TEPAT SEKALI!", "Kamu memahami cara adaptasi pahlawan dengan baik!", checkIcon, "alert", () => {
            currentDetektifM6Index++;
            if (currentDetektifM6Index < detektifM6Targets.length) {
                isFlashlightM6Active = true;
                document.getElementById('target-m6-' + detektifM6Targets[currentDetektifM6Index]).style.display = 'block';
            } else {
                showCustomModal("PENCARIAN SELESAI!", "Kamu berhasil menemukan semua benda. Saatnya menuju Area Pertemuan!", checkIcon, "alert", () => {
                    // Kembalikan Mode Layar Normal
                    document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
                    document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
                    document.querySelector('.mission-header').style.display = 'flex';
                    
                    nextMissionStage(6); // Lanjut ke Tahap 6
                });
            }
        });
    } else {
        reduceLife();
        showCustomModal("KURANG TEPAT!", "Coba ingat lagi materi adaptasinya! (Nyawa Berkurang 1)", lockIcon, "error", () => {
            if (chapterLives[currentChapter] > 0) {
                let data = dataDetektifM6[detektifM6Targets[currentDetektifM6Index]];
                let quizDialog = [{
                    text: data.dialog, mood: "warning", isChoice: true,
                    btn1Text: data.ans1, btn2Text: data.ans2,
                    onYes: () => handleDetektifM6Answer(1, data.correct),
                    onNo: () => handleDetektifM6Answer(2, data.correct)
                }];
                startVnDialog(quizDialog, "Petualang Nagata", "npc1", null);
            }
        });
    }
};

// ================= MESIN UJIAN KILAT (MISI 6 TAHAP 6) =================
let taM6Questions = [];
let currentTaM6Index = 0;
let taM6TimerInterval;
let taM6TimeLeft = 100;

const dataTaM6 = [
    { text: "Manusia memiliki 5 indra utama: Mata, Telinga, Hidung, Lidah, Kulit.", isTrue: true, msg: "Benar! Kelimanya disebut dengan Pancaindra." },
    { text: "Pupil adalah bagian mata yang berfungsi memberikan warna cokelat atau hitam pada matamu.", isTrue: false, msg: "Salah! Yang memberi warna mata adalah Iris. Pupil bertugas mengatur cahaya masuk." },
    { text: "Gendang telinga adalah selaput tebal dan keras yang tidak bisa robek.", isTrue: false, msg: "Salah! Gendang telinga itu sangat tipis dan bisa robek jika ditusuk benda keras." },
    { text: "Rambut hidung berguna untuk menyaring debu agar udara yang masuk ke paru-paru tetap bersih.", isTrue: true, msg: "Tepat sekali! Rambut hidung adalah pahlawan penyaring kotoran." },
    { text: "Papila adalah bintik-bintik kasar di lidah tempat bersarangnya ujung saraf pengecap rasa.", isTrue: true, msg: "Benar! Bintik itulah yang membantumu merasakan manis dan pahit." },
    { text: "Kulit hanya bisa merasakan tekstur kasar dan halus, tapi tidak bisa merasakan perubahan suhu cuaca.", isTrue: false, msg: "Salah! Ujung saraf kulit sangat peka terhadap suhu panas dan dingin." },
    { text: "Pahlawan Tunanetra (tidak bisa melihat) membaca buku menggunakan sentuhan jari pada Huruf Braille.", isTrue: true, msg: "Benar! Huruf Braille memiliki tekstur timbul yang bisa diraba." },
    { text: "Anjing pelacak menggunakan indra pendengarannya yang tajam untuk mencari jejak penjahat.", isTrue: false, msg: "Salah! Anjing melacak jejak menggunakan Indra Pembau (hidung)." },
    { text: "Kelelawar menggunakan metode Ekolokasi (pantulan suara) untuk terbang tanpa menabrak di malam hari.", isTrue: true, msg: "Benar! Telinga kelelawar bekerja seperti radar canggih." },
    { text: "Menggosok mata dengan tangan yang kotor dapat menyebabkan penyakit Konjungtivitis (Sakit Mata Merah).", isTrue: true, msg: "Tepat! Tangan kotor mengandung kuman yang menyebabkan iritasi." }
];

window.startTaM6 = function() {
    document.getElementById('ta-m6-intro').style.display = 'none';
    document.getElementById('ta-m6-container').style.display = 'flex';
    taM6Questions = [...dataTaM6].sort(() => Math.random() - 0.5); // Acak 10 soal
    currentTaM6Index = 0;
    loadTaM6Question();
};

window.loadTaM6Question = function() {
    if (currentTaM6Index >= taM6Questions.length) {
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
        showCustomModal("LULUS UJIAN KILAT!", "Otakmu berpikir secepat kilat! Saatnya maju ke Boss Akhir.", checkIcon, "alert", () => triggerPostDialog(6));
        return;
    }

    const q = taM6Questions[currentTaM6Index];
    document.getElementById('ta-m6-question').innerText = `Pertanyaan ${currentTaM6Index + 1} / 10:\n\n"${q.text}"`;

    taM6TimeLeft = 100;
    const bar = document.getElementById('ta-m6-bar');
    bar.style.width = '100%';
    bar.style.backgroundColor = '#2ed573';

    clearInterval(taM6TimerInterval);
    taM6TimerInterval = setInterval(() => {
        taM6TimeLeft -= 0.6; // Waktu sedikit dilonggarkan agar nyaman dibaca
        bar.style.width = `${taM6TimeLeft}%`;
        if(taM6TimeLeft < 50) bar.style.backgroundColor = '#ffa502';
        if(taM6TimeLeft < 20) bar.style.backgroundColor = '#ff4757';

        if (taM6TimeLeft <= 0) {
            clearInterval(taM6TimerInterval);
            handleTaM6Answer(null, true);
        }
    }, 100);
};

window.handleTaM6Answer = function(isBenar, isTimeout = false) {
    clearInterval(taM6TimerInterval);
    const q = taM6Questions[currentTaM6Index];
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;

    if (isTimeout) {
        reduceLife();
        showCustomModal("WAKTU HABIS!", "Wah, waktumu habis! Pikirkan lebih cepat. (Nyawa Berkurang 1)", lockIcon, "error", () => loadTaM6Question());
    } else if (isBenar === q.isTrue) {
        addScore(10);
        showCustomModal("TEPAT SEKALI!", q.msg, "", "alert", () => { currentTaM6Index++; loadTaM6Question(); });
    } else {
        reduceLife();
        const missionBox = document.querySelector('.mission-full-box');
        missionBox.classList.remove('shake-screen'); void missionBox.offsetWidth; missionBox.classList.add('shake-screen');
        setTimeout(() => missionBox.classList.remove('shake-screen'), 500);

        showCustomModal("JAWABAN SALAH!", `Perhatikan lagi pernyataannya! ${q.msg}\n(Nyawa Berkurang 1)`, lockIcon, "error", () => loadTaM6Question());
    }
};

// ================= MESIN BOSS EVALUASI AKHIR (MISI 6 TAHAP 7) =================
let bossM6Index = 0;
let bossM6Timer;
let bossM6TimeLeft = 100;
let bossM6QuestionsActive = [];

const dataBossM6 = [
    { q: "Bagian mata yang berfungsi bagaikan pintu untuk mengatur jumlah cahaya yang masuk ke dalam bola mata adalah...", opts: ["Pupil", "Iris", "Kornea", "Lensa"], ans: "Pupil", msg: "Pupil akan mengecil saat cuaca terang, dan membesar di tempat gelap." },
    { q: "Bentuk luar daun telinga manusia yang melebar seperti corong memiliki fungsi utama untuk...", opts: ["Menangkap getaran suara", "Menyaring udara kotor", "Memproduksi kotoran telinga", "Menjaga keseimbangan tubuh"], ans: "Menangkap getaran suara", msg: "Bentuk daun telinga sangat pas untuk mengumpulkan suara dari berbagai arah." },
    { q: "Ujung saraf pengecap rasa PAHIT (seperti saat meminum obat atau jamu) terletak pada lidah bagian...", opts: ["Pangkal Belakang", "Ujung Depan", "Samping Kiri & Kanan", "Bawah Lidah"], ans: "Pangkal Belakang", msg: "Pangkal lidah adalah benteng pertahanan terakhir pendeteksi rasa pahit." },
    { q: "Penyakit kulit yang ditandai dengan munculnya bercak putih dan terasa sangat gatal akibat infeksi jamur disebut...", opts: ["Panu", "Katarak", "Sariawan", "Polip Hidung"], ans: "Panu", msg: "Panu sering muncul jika kita malas mandi saat tubuh berkeringat kotor." },
    { q: "Saraf pada kulit yang bertugas mengirimkan sinyal rasa sakit dan perubahan suhu (panas/dingin) ke otak disebut...", opts: ["Ujung Saraf", "Kelenjar Keringat", "Batang Rambut", "Epidermis"], ans: "Ujung Saraf", msg: "Ujung Saraf adalah saklar ajaib pendeteksi sentuhan pada kulit." },
    { q: "Pahlawan adaptasi yang kehilangan fungsi pendengarannya pada telinga, sering dikenal dengan sebutan...", opts: ["Tunarungu", "Tunanetra", "Tunawicara", "Tunadaksa"], ans: "Tunarungu", msg: "Mereka sering beradaptasi menggunakan alat bantu dengar atau bahasa isyarat." },
    { q: "Hewan super yang memiliki struktur mata teleskopik, sehingga mampu melihat mangsa di darat dari atas langit yang tinggi adalah...", opts: ["Burung Elang", "Kelelawar", "Ikan Lele", "Ular Kobra"], ans: "Burung Elang", msg: "Penglihatan elang berkali-kali lipat lebih tajam daripada mata manusia." },
    { q: "Tahukah kamu, cairan khusus penyeimbang tubuh agar kita tidak mudah pusing dan jatuh (Indra Keseimbangan) terletak di dalam organ...", opts: ["Telinga Bagian Dalam", "Rongga Hidung Atas", "Bola Mata Belakang", "Bawah Pangkal Lidah"], ans: "Telinga Bagian Dalam", msg: "Cairan di dalam telinga inilah pelampung penyeimbang tubuhmu!" },
    { q: "Untuk merawat kesehatan lidah agar terhindar dari perihnya sariawan, kita sebaiknya rajin memakan buah yang banyak mengandung...", opts: ["Vitamin C", "Vitamin A", "Kalsium", "Karbohidrat"], ans: "Vitamin C", msg: "Buah-buahan asam seperti jeruk sangat kaya akan Vitamin C." },
    { q: "Indra apakah yang sedang bekerja saat kamu menutup mata namun mengetahui bahwa ibu sedang memasak sate ayam di dapur?", opts: ["Indra Pembau", "Indra Peraba", "Indra Pengecap", "Indra Pendengar"], ans: "Indra Pembau", msg: "Hidungmu menangkap partikel aroma sate bakar yang beterbangan di udara!" }
];

window.startBossM6 = function() {
    document.getElementById('boss-m6-intro').style.display = 'none';
    document.getElementById('boss-m6-container').style.display = 'flex';
    bossM6QuestionsActive = [...dataBossM6].sort(() => Math.random() - 0.5);
    bossM6Index = 0;
    loadBossM6Question();
};

window.loadBossM6Question = function() {
    if (bossM6Index >= bossM6QuestionsActive.length) {
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
        showCustomModal("LULUS EVALUASI AKHIR!", "Sempurna! Kamu telah menaklukkan Boss Bukit Gandrung!", checkIcon, "alert", () => triggerPostDialog(7));
        return;
    }

    const q = bossM6QuestionsActive[bossM6Index];
    document.getElementById('boss-m6-question').innerText = `Pertanyaan ${bossM6Index + 1} / 10:\n\n${q.q}`;

    const optionsBox = document.getElementById('boss-m6-options');
    optionsBox.innerHTML = '';
    
    const shuffledOpts = [...q.opts].sort(() => Math.random() - 0.5);
    shuffledOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-explore'; 
        btn.innerText = opt;
        btn.onclick = () => handleBossM6Answer(btn, opt === q.ans, q.msg);
        optionsBox.appendChild(btn);
    });

    bossM6TimeLeft = 100;
    const bar = document.getElementById('boss-m6-bar');
    bar.style.width = '100%';
    bar.style.backgroundColor = '#2ed573';

    clearInterval(bossM6Timer);
    bossM6Timer = setInterval(() => {
        bossM6TimeLeft -= 0.3; 
        bar.style.width = `${bossM6TimeLeft}%`;
        
        if(bossM6TimeLeft < 50) bar.style.backgroundColor = '#ffa502';
        if(bossM6TimeLeft < 20) bar.style.backgroundColor = '#ff4757';

        if (bossM6TimeLeft <= 0) {
            clearInterval(bossM6Timer);
            handleBossM6Timeout();
        }
    }, 100);
};

window.handleBossM6Answer = function(btnClicked, isCorrect, msg) {
    if (btnClicked.classList.contains('btn-correct') || btnClicked.classList.contains('btn-wrong')) return;
    clearInterval(bossM6Timer); 
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;

    if (isCorrect) {
        btnClicked.classList.add('btn-correct');
        addScore(30);
        showCustomModal("TEPAT SEKALI!", msg, "", "alert", () => { bossM6Index++; loadBossM6Question(); });
    } else {
        btnClicked.classList.add('btn-wrong');
        reduceLife();
        const missionBox = document.querySelector('.mission-full-box');
        missionBox.classList.remove('shake-screen'); void missionBox.offsetWidth; missionBox.classList.add('shake-screen');
        setTimeout(() => missionBox.classList.remove('shake-screen'), 500);
        showCustomModal("JAWABAN SALAH!", `Perhatikan lagi pertanyaannya! ${msg}\n(Nyawa Berkurang 1)`, lockIcon, "error", () => loadBossM6Question());
    }
};

window.handleBossM6Timeout = function() {
    reduceLife();
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
    showCustomModal("WAKTU HABIS!", "Wah, waktumu habis! Membaca dan berpikirlah dengan lebih cepat.\n(Nyawa Berkurang 1)", lockIcon, "error", () => loadBossM6Question());
};

// ================= PENYIMPANAN SKOR (TAMAT BAB 1) =================
const btnSaveScore = document.getElementById('btn-save-score');
if (btnSaveScore) {
    btnSaveScore.addEventListener('click', () => {
        // Ambil nama dari inputan (Beri nama bawaan jika kosong)
        const playerName = document.getElementById('player-name-input').value.trim() || "Pahlawan Tanpa Nama";
        
        // Ambil data skor lama (jika sebelumnya sudah ada yang main)
        let savedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
        
        // Tambahkan skor milik siswa saat ini ke dalam array
        savedScores.push({ name: playerName, score: globalScore });
        
        // Kemas ulang menjadi teks dan simpan permanen ke dalam otak browser
        localStorage.setItem('leaderboard', JSON.stringify(savedScores));
        
        // Sembunyikan Pop-up input nama
        document.getElementById('name-modal').classList.remove('active');
        
        // Beri tahu siswa bahwa ia berhasil masuk peringkat, lalu lempar kembali ke Peta
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
        showCustomModal("SKOR TERSIMPAN!", `Luar biasa ${playerName}! Skormu berhasil dicatat di Papan Peringkat.`, checkIcon, "alert", () => {
            exitMissionScreen();
        });
    });
}

/**
 * Fungsi Pintar Analisis Warna (Mode HSL)
 * Super Akurat & Tahan Gelap untuk 15 Variasi Warna
 */
function isColorMatchHSL(r, g, b, targetColor) {
    r /= 255; g /= 255; b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; 
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    
    h = Math.round(h * 360); 
    s = Math.round(s * 100); 
    l = Math.round(l * 100); 

    // 1. KATEGORI PIXEL NETRAL (Dipersempit agar warna kusam tetap bisa lolos)
    let isBlack = l < 15; // Hitam harus benar-benar gelap gulita
    let isWhite = l > 85 && s < 25; 
    let isGray = l >= 15 && l <= 85 && s < 12; // Saturasi abu-abu diturunkan agar warna pudar lolos

    if (targetColor.includes("HITAM") || targetColor.includes("GELAP")) return isBlack;
    if (targetColor.includes("PUTIH")) return isWhite;
    if (targetColor.includes("ABU")) return isGray;

    if (isBlack || isWhite || isGray) return false;

    // 2. Filter Kecerahan Mutlak (Lebih longgar lagi untuk kamera gelap)
    if (s < 10 || l < 10) return false;

    // 3. Pengecekan Spektrum Nada Warna (Hue) Diperlebar Secara Maksimal
    if (targetColor.includes("KUNING")) return (h >= 30 && h <= 90); // Menangkap kuning yang menghijau/mengoranye
    if (targetColor.includes("MERAH") && !targetColor.includes("PINK")) return (h >= 330 || h <= 30); // Sangat lebar
    if (targetColor.includes("BIRU")) return (h >= 150 && h <= 280);
    if (targetColor.includes("HIJAU")) return (h > 65 && h < 165);
    if (targetColor.includes("ORANYE")) return (h > 5 && h <= 45); 
    if (targetColor.includes("COKELAT")) return (h >= 0 && h <= 50) && l <= 60; 
    if (targetColor.includes("UNGU")) return (h > 240 && h <= 320);
    if (targetColor.includes("PINK")) return (h > 300 && h < 350);
    
    return false;
}

// ================= MESIN BOSS MISI 1 (10 SOAL BERUNTUN) =================
const misi1BossQuestions = [
    { q: "Berapa jumlah alat sensor utama yang dimiliki oleh manusia?", opts: ["3 Indra", "4 Indra", "5 Indra", "6 Indra"], ans: "5 Indra" },
    { q: "Bagian tubuh mana yang berfungsi untuk mendengarkan lagu atau musik?", opts: ["Mata", "Telinga", "Hidung", "Lidah"], ans: "Telinga" },
    { q: "Untuk mengetahui harumnya bunga mawar di taman, kita menggunakan indra...", opts: ["Penglihat (Mata)", "Pembau (Hidung)", "Pengecap (Lidah)", "Peraba (Kulit)"], ans: "Pembau (Hidung)" },
    { q: "Saat memakan es krim, organ apa yang bekerja mengecap rasa manisnya?", opts: ["Hidung", "Kulit", "Lidah", "Mata"], ans: "Lidah" },
    { q: "Alat sensor yang menutupi seluruh tubuh kita dan bertugas merasakan sentuhan adalah...", opts: ["Kulit", "Rambut", "Kuku", "Tulang"], ans: "Kulit" },
    { q: "Kita bisa melihat pelangi yang indah di langit setelah hujan menggunakan indra...", opts: ["Pendengar", "Peraba", "Penglihat", "Pengecap"], ans: "Penglihat" },
    { q: "Kelima alat sensor ajaib kita (Mata, Telinga, Hidung, Lidah, Kulit) secara bersamaan disebut dengan nama...", opts: ["Pancasila", "Pancaindra", "Pancawarna", "Pancajiwa"], ans: "Pancaindra" },
    { q: "Jika kamu menutup mata rapat-rapat saat bermain petak umpet, indra apa yang sedang tidak bisa digunakan?", opts: ["Indra Peraba", "Indra Pendengar", "Indra Penglihat", "Indra Pembau"], ans: "Indra Penglihat" },
    { q: "Saat berjalan tanpa sandal dan kakimu menginjak kerikil tajam, organ apa yang mengirimkan rasa sakit itu ke otak?", opts: ["Kulit kaki", "Mata kaki", "Bulu kaki", "Kuku kaki"], ans: "Kulit kaki" },
    { q: "Suara petir yang sangat keras menggema di saat hujan lebat ditangkap oleh indra...", opts: ["Penglihat", "Peraba", "Pengecap", "Pendengar"], ans: "Pendengar" }
];

let currentMisi1BossIndex = 0;

function loadMisi1BossQuestion() {
    const qBox = document.getElementById('quiz-question');
    const optBox = document.getElementById('quiz-options');
    if (!qBox || !optBox) return;

    // Jika ke-10 soal sudah habis dijawab benar
    if (currentMisi1BossIndex >= misi1BossQuestions.length) {
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
        showCustomModal(
            "LULUS UJIAN MISI 1!", 
            "Luar Biasa! Kamu berhasil menjawab 10 soal dasar Pancaindra dengan sangat tepat.", 
            checkIcon, 
            "alert", 
            () => {
                triggerPostDialog(7); // Panggil dialog Visual Novel kelulusan Boss
            }
        );
        return;
    }

    // Tampilkan Soal
    const currentQ = misi1BossQuestions[currentMisi1BossIndex];
    qBox.innerText = `Pertanyaan ${currentMisi1BossIndex + 1} / 10:\n\n${currentQ.q}`;
    
    // Ubah tampilan opsi menjadi bentuk kotak "Arcade" (btn-explore)
    optBox.innerHTML = '';
    optBox.className = 'explore-grid'; 
    optBox.style.width = '100%';
    
    // Acak posisi jawaban
    const shuffledOpts = [...currentQ.opts].sort(() => Math.random() - 0.5);
    
    shuffledOpts.forEach(optText => {
        const btn = document.createElement('button');
        btn.className = 'btn-explore';
        btn.innerText = optText;
        
        btn.onclick = () => {
            // Tahan input jika tombol sudah diklik
            if (btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
            
            if (optText === currentQ.ans) {
                // JAWABAN BENAR
                sfxBenar.currentTime = 0; sfxBenar.play().catch(e => console.warn(e));
                btn.classList.add('btn-correct');
                addScore(10); // Beri +10 Skor setiap 1 soal benar
                
                // Jeda 0.6 detik agar siswa sempat melihat tombol hijau, lalu lanjut soal
                setTimeout(() => {
                    currentMisi1BossIndex++;
                    loadMisi1BossQuestion();
                }, 600);
                
            } else {
                // JAWABAN SALAH
                btn.classList.add('btn-wrong');
                reduceLife(); // Kurangi nyawa. Jika 0, sistem UKS akan otomatis mencegah layar.
                
                const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                showCustomModal("SALAH!", "Coba ingat-ingat lagi materi yang baru dipelajari!\n(Nyawa Berkurang 1)", lockIcon, "error");
            }
        };
        optBox.appendChild(btn);
    });
}