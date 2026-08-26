// ================= MESIN GENERATOR MISI & PENYIMPANAN TEMPLATE =================
// Kita foto bentuk asli HTML Misi 1 agar bisa dikembalikan saat Misi 1 ditekan
let originalMission1HTML = "";
let originalFloatingNextHTML = "";
document.addEventListener('DOMContentLoaded', () => {
    originalMission1HTML = document.getElementById('mission-content-area').innerHTML;
    originalFloatingNextHTML = document.getElementById('floating-next-container').innerHTML;
});

// Generator Misi 2: Menyulap isi kotak secara dinamis (Edisi Deep Learning Wasit Lapangan)
function buildMission2() {
    document.getElementById('mission-title').innerText = "MISI 2: WASIT LAPANGAN TAMBI";
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    contentArea.innerHTML = `
        <div id="stage-1" class="mission-stage active-stage">
            <h3 class="stage-title">TAHAP 1: MEJA INSPEKSI WASIT</h3>
            
            <div id="m2-s1-intro" style="display:flex; flex-direction:column; align-items:center; width: 100%;">
                <div class="mission-text-box" style="font-size: 1.4cqw; text-align: center; margin-bottom: 2cqw;">
                    <p>Selamat datang di <b>Markas Wasit Lapangan Tambi</b>!</p>
                    <p>Sebelum turun ke lapangan, seorang wasit harus mengkalibrasi logika otaknya dalam menyelesaikan insiden. Di mejamu terdapat 5 berkas laporan insiden.</p>
                    <p>Tarik lencana pancaindra yang paling tepat untuk menangani setiap insiden tersebut!</p>
                </div>
                <button class="btn btn-play" style="font-size: 1.5cqw; padding: 1cqw 3cqw;" onclick="document.getElementById('m2-s1-intro').style.display='none'; document.getElementById('m2-s1-game').style.display='flex';">MULAI INSPEKSI BERKAS</button>
            </div>
            
            <div id="m2-s1-game" style="display:none; flex-direction:column; align-items:center; width:100%;">
                <p class="mission-text-box" style="margin-bottom: 1cqw; text-align: center; padding: 0.6cqw 1.5cqw !important;">Tarik Lencana Sensor di bawah dan tempelkan ke Kotak Insiden yang membutuhkan fungsinya!</p>
                
                <div class="dnd-game-area" style="flex-direction: column !important; gap: 0.8cqw !important; width: 100%;">
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1cqw; width: 100%; box-sizing: border-box;">
                        <!-- Insiden 1 -->
                        <div style="background: rgba(255,255,255,0.9); border: 0.3cqw solid #2c3e50; border-radius: 0.5cqw; padding: 0.8cqw 1cqw; width: 100%; display: flex; align-items: center; justify-content: space-between; box-shadow: 0.2cqw 0.2cqw 0 #111; box-sizing: border-box;">
                            <span style="font-size: 1.2cqw; font-weight: bold; color: #111; width: 70%; text-align: left; line-height: 1.2;">"Cek video ulangan (VAR) apakah bola melewati garis gawang."</span>
                            <div class="dnd-drop-zone" data-match="l_mata" style="position: relative !important; transform: none !important; width: 7cqw; height: 2.5cqw; border: 0.2cqw dashed #111;"></div>
                        </div>
                        
                        <!-- Insiden 2 -->
                        <div style="background: rgba(255,255,255,0.9); border: 0.3cqw solid #2c3e50; border-radius: 0.5cqw; padding: 0.8cqw 1cqw; width: 100%; display: flex; align-items: center; justify-content: space-between; box-shadow: 0.2cqw 0.2cqw 0 #111; box-sizing: border-box;">
                            <span style="font-size: 1.2cqw; font-weight: bold; color: #111; width: 70%; text-align: left; line-height: 1.2;">"Pastikan bunyi peluit tersebut asli dari wasit utama."</span>
                            <div class="dnd-drop-zone" data-match="l_telinga" style="position: relative !important; transform: none !important; width: 7cqw; height: 2.5cqw; border: 0.2cqw dashed #111;"></div>
                        </div>

                        <!-- Insiden 3 -->
                        <div style="background: rgba(255,255,255,0.9); border: 0.3cqw solid #2c3e50; border-radius: 0.5cqw; padding: 0.8cqw 1cqw; width: 100%; display: flex; align-items: center; justify-content: space-between; box-shadow: 0.2cqw 0.2cqw 0 #111; box-sizing: border-box;">
                            <span style="font-size: 1.2cqw; font-weight: bold; color: #111; width: 70%; text-align: left; line-height: 1.2;">"Periksa apakah bekal makanan atlet ini sudah basi."</span>
                            <div class="dnd-drop-zone" data-match="l_hidung" style="position: relative !important; transform: none !important; width: 7cqw; height: 2.5cqw; border: 0.2cqw dashed #111;"></div>
                        </div>

                        <!-- Insiden 4 -->
                        <div style="background: rgba(255,255,255,0.9); border: 0.3cqw solid #2c3e50; border-radius: 0.5cqw; padding: 0.8cqw 1cqw; width: 100%; display: flex; align-items: center; justify-content: space-between; box-shadow: 0.2cqw 0.2cqw 0 #111; box-sizing: border-box;">
                            <span style="font-size: 1.2cqw; font-weight: bold; color: #111; width: 70%; text-align: left; line-height: 1.2;">"Cicipi minuman atlet agar tak tertukar air garam."</span>
                            <div class="dnd-drop-zone" data-match="l_lidah" style="position: relative !important; transform: none !important; width: 7cqw; height: 2.5cqw; border: 0.2cqw dashed #111;"></div>
                        </div>

                        <!-- Insiden 5 (Ditengah Bawah) -->
                        <div style="background: rgba(255,255,255,0.9); border: 0.3cqw solid #2c3e50; border-radius: 0.5cqw; padding: 0.8cqw 1cqw; display: flex; align-items: center; justify-content: space-between; box-shadow: 0.2cqw 0.2cqw 0 #111; box-sizing: border-box; grid-column: 1 / -1; justify-self: center; width: 60%;">
                            <span style="font-size: 1.2cqw; font-weight: bold; color: #111; width: 70%; text-align: left; line-height: 1.2;">"Cek rumput lapangan, apakah terlalu licin sehabis hujan."</span>
                            <div class="dnd-drop-zone" data-match="l_kulit" style="position: relative !important; transform: none !important; width: 7cqw; height: 2.5cqw; border: 0.2cqw dashed #111;"></div>
                        </div>
                    </div>

                    <div class="dnd-bank" style="width: 100% !important; flex-direction: row !important; margin-top: 1cqw; min-height: auto !important;">
                        <div class="dnd-item" style="background: #e74c3c;" data-id="l_mata">Sensor Mata</div>
                        <div class="dnd-item" style="background: #e67e22;" data-id="l_hidung">Sensor Hidung</div>
                        <div class="dnd-item" style="background: #27ae60;" data-id="l_kulit">Sensor Kulit</div>
                        <div class="dnd-item" style="background: #8e44ad;" data-id="l_telinga">Sensor Telinga</div>
                        <div class="dnd-item" style="background: #2980b9;" data-id="l_lidah">Sensor Lidah</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .btn-arcade {
                    background: #fff; border: 0.4cqw solid #111; border-radius: 1cqw; padding: 1cqw;
                    box-shadow: 0.4cqw 0.4cqw 0 #111; cursor: pointer; transition: all 0.1s;
                }
                .btn-arcade:active { transform: translate(0.3cqw, 0.3cqw); box-shadow: 0 0 0 #111; }
                .btn-arcade:hover { background: #f1c40f; }
            </style>

            <!-- STAGE ARCADE (SELINGAN UJI REFLEKS FULLSCREEN) -->
            <div id="stage-arcade" class="mission-stage" style="width: 100%; height: 100%;">
                <div class="ar-container" style="background-image: url('assets/background/mission2.webp'); background-size: cover; background-position: center; position: relative; width: 100%; height: 100%; border: none; border-radius: 0; box-shadow: none;">
                    
                    <div id="arcade-intro" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 30; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                        <h2 style="color: #f1c40f; font-size: 3.5cqw; text-shadow: 0.2cqw 0.2cqw 0 #111; margin-bottom: 1cqw;">UJI REFLEKS SENSORI WASIT</h2>
                        <p style="color: white; font-size: 1.8cqw; text-align: center; margin-bottom: 2cqw; padding: 0 5cqw;">10 Kartu Kejadian Lapangan akan muncul di layar secara bergantian!<br>Serang dan hancurkan kartu kejadian tersebut dengan <b>melemparkan Tombol Pancaindra</b> yang paling tepat.</p>
                        <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw;" onclick="startArcadeM2()">MULAI UJIAN!</button>
                    </div>

                    <button class="btn-close-mission" style="position: absolute; top: 1.5cqw; right: 1.5cqw; z-index: 35;" onclick="exitMissionScreen()">X</button>

                    <!-- Area Pertarungan Tengah -->
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;" id="arcade-battle-area">
                        <!-- Kartu Target -->
                        <div id="arcade-target-card" style="background: white; color: #111; border: 0.5cqw solid #111; border-radius: 1cqw; padding: 3cqw 5cqw; font-size: 2.5cqw; font-weight: 900; text-align: center; box-shadow: 0.5cqw 0.5cqw 0 #111; z-index: 10; display: none; text-transform: uppercase; max-width: 70%;">
                            MEMUAT KEJADIAN...
                        </div>
                    </div>

                    <!-- Tombol Lencana Bawah (Menempel di Dasar Layar Penuh) -->
                    <div style="position: absolute; bottom: 5%; left: 50%; transform: translateX(-50%); display: flex; gap: 2cqw; z-index: 20; justify-content: center; width: 100%;">
                        <button class="btn-arcade" id="btn-arc-mata" onclick="throwOrganM2('mata')"><img src="assets/item/alat-mata.webp" style="width:6cqw; display:block;"></button>
                        <button class="btn-arcade" id="btn-arc-telinga" onclick="throwOrganM2('telinga')"><img src="assets/item/alat-telinga.webp" style="width:6cqw; display:block;"></button>
                        <button class="btn-arcade" id="btn-arc-hidung" onclick="throwOrganM2('hidung')"><img src="assets/item/alat-hidung.webp" style="width:6cqw; display:block;"></button>
                        <button class="btn-arcade" id="btn-arc-lidah" onclick="throwOrganM2('lidah')"><img src="assets/item/alat-lidah.webp" style="width:6cqw; display:block;"></button>
                        <button class="btn-arcade" id="btn-arc-kulit" onclick="throwOrganM2('kulit')"><img src="assets/item/alat-kulit.webp" style="width:6cqw; display:block;"></button>
                    </div>

                </div>
            </div>

        <div id="stage-2" class="mission-stage">
            <h3 class="stage-title" style="color: #2980b9;">TAHAP 2: 3 INSIDEN PENGLIHATAN (MATA)</h3>
            <div id="stage-2-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/mata.glb', 'MATA (INDRA PENGLIHAT)')">
                    <img src="assets/item/anatomi-mata.webp" alt="Mata" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Fungsi utama <b>MATA</b> di lapangan bukan sekadar melihat, melainkan menganalisis situasi kritis, menguji fakta medis, dan mengambil urutan keputusan darurat.</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(2)">MULAI 3 KASUS MATA</button>
                </div>
            </div>
            <div id="stage-2-quiz" class="stage-layout" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <div id="m2-s2-content-box" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                    <!-- Soal dinamis akan disuntikkan oleh Javascript -->
                </div>
            </div>
        </div>

        <div id="stage-3" class="mission-stage">
            <h3 class="stage-title" style="color: #8e44ad;">TAHAP 3: INSIDEN PENDENGARAN</h3>
            <div id="stage-3-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/telinga.glb', 'TELINGA (INDRA PENDENGAR)')">
                    <img src="assets/item/anatomi-telinga.webp" alt="Telinga" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;">Fungsi <b>TELINGA</b> sangat vital sebagai sistem peringatan dini. Ia dapat mendeteksi arah dan jenis bahaya meskipun mata terhalang oleh keramaian.</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(3)">SELESAIKAN INSIDEN</button>
                </div>
            </div>
            <div id="stage-3-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <div id="m2-s3-content-box" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                    <!-- Soal dinamis Tahap 3 disuntikkan oleh JS -->
                </div>
            </div>
        </div>

        <!-- STAGE SELINGAN: DETEKTIF SUARA (FULLSCREEN) -->
        <div id="stage-audio-detektif" class="mission-stage" style="width: 100%; height: 100%;">
            <div class="ar-container" style="background: linear-gradient(135deg, #2c3e50, #1a252f); position: relative; width: 100%; height: 100%; border: none; border-radius: 0; box-shadow: none; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3cqw;">
                
                <button class="btn-close-mission" style="position: absolute; top: 1.5cqw; right: 1.5cqw; z-index: 35;" onclick="exitMissionScreen()">X</button>

                <div id="audio-detektif-intro" style="text-align: center; display: flex; flex-direction: column; align-items: center; max-width: 80%;">
                    <h2 style="color: #f1c40f; font-size: 3.2cqw; margin-bottom: 1cqw; text-shadow: 0.2cqw 0.2cqw 0 #111;">MINI GAME: DETEKTIF SUARA</h2>
                    <p style="color: white; font-size: 1.6cqw; margin-bottom: 2cqw; line-height: 1.5;">Kabut tebal menutup pandangan di Lapangan Tambi! Gunakan <b>Indra Pendengaranmu</b> untuk menebak 5 sumber suara misterius yang diputar secara berulang.<br>Dengarkan baik-baik suaranya, lalu pilih jawaban yang paling tepat!</p>
                    <button class="btn btn-play" style="font-size: 1.8cqw; padding: 1cqw 3cqw;" onclick="startAudioDetektifM2()">MULAI INVESTIGASI SUARA</button>
                </div>

                <div id="audio-detektif-game" style="display: none; flex-direction: column; align-items: center; width: 100%; max-width: 70%; text-align: center;">
                    <div style="background: rgba(255,255,255,0.1); border: 0.3cqw dashed #f1c40f; border-radius: 1cqw; padding: 1.5cqw 3cqw; margin-bottom: 2cqw; width: 100%;">
                        <div style="font-size: 1.4cqw; color: #f1c40f; margin-bottom: 0.5cqw; font-weight: bold;" id="audio-progress-text">PERTANYAAN 1 DARI 5</div>
                        <div style="font-size: 2.2cqw; color: white; font-weight: bold;">🔊 SUARA APAKAH INI?</div>
                        <p style="color: #bdc3c7; font-size: 1.1cqw; margin-top: 0.5cqw;">(Audio berputar otomatis dan berulang sampai kamu menjawab benar)</p>
                    </div>

                    <!-- 3 Pilihan Tombol Jawaban -->
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5cqw; width: 100%;" id="audio-options-grid">
                        <!-- Disuntikkan via JS -->
                    </div>
                </div>

            </div>
        </div>

        <div id="stage-4" class="mission-stage">
            <h3 class="stage-title" style="color: #d35400;">TAHAP 4: INSIDEN LOGISTIK</h3>
            <div id="stage-4-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/hidung.glb', 'HIDUNG (INDRA PEMBAU)')">
                    <img src="assets/item/anatomi-hidung.webp" alt="Hidung" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;"><b>HIDUNG</b> dan <b>LIDAH</b> bekerja sama sebagai sensor pertahanan kimiawi tubuh. Mereka mencegah kita menelan zat yang beracun atau sudah rusak.</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(4)">MULAI 3 KASUS HIDUNG & LIDAH</button>
                </div>
            </div>
            <div id="stage-4-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <div id="m2-s4-content-box" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                    <!-- Soal dinamis Tahap 4 disuntikkan JS -->
                </div>
            </div>
        </div>

        <div id="stage-5" class="mission-stage">
            <h3 class="stage-title" style="color: #27ae60;">TAHAP 5: INSIDEN CUACA KELUD</h3>
            <div id="stage-5-intro" class="stage-layout">
                <div class="stage-img-box" onclick="open3DViewer('assets/3d/kulit.glb', 'KULIT (INDRA PERABA)')">
                    <img src="assets/item/anatomi-kulit1.webp" alt="Kulit" style="width: 100%; height: 12cqw; object-fit: cover; background: #dfe6e9;">
                </div>
                <div class="stage-content-right">
                    <p class="mission-text-box" style="width: auto; font-size: 1.3cqw;"><b>KULIT</b> adalah sensor suhu yang menyelubungi tubuh. Kulit mendeteksi perubahan lingkungan secara kilat agar tubuh bisa segera berlindung.</p>
                    <button class="btn btn-play" style="font-size: 1.5cqw;" onclick="proceedToQuiz(5)">MULAI 3 KASUS KULIT</button>
                </div>
            </div>
            <div id="stage-5-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <div id="m2-s5-content-box" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                    <!-- Soal dinamis Tahap 5 disuntikkan JS -->
                </div>
            </div>
        </div>

        <div id="stage-6" class="mission-stage">
            <h3 class="stage-title" style="color: #ff4757;">TAHAP 6: LAPORAN AKHIR WASIT (BOSS)</h3>
            <p class="mission-text-box">Sebagai laporan akhir kepada Kepala Wasit, kamu harus menggabungkan analisis dua sensor tubuh sekaligus pada insiden di bawah ini!</p>
            <div class="match-container">
                <svg class="match-svg"></svg>
                <div class="match-col match-left">
                    <div class="match-item" data-match="u_1" style="order: ${Math.floor(Math.random()*4)}">Melihat bola melayang ke wajah lalu tanganmu merasakan sakit saat menangkis.</div>
                    <div class="match-item" data-match="u_2" style="order: ${Math.floor(Math.random()*4)}">Mendengar suara gemuruh lalu melihat awan hitam pekat mendekat.</div>
                    <div class="match-item" data-match="u_3" style="order: ${Math.floor(Math.random()*4)}">Mencium bau gosong dari kios lalu mengecap rasa pahit pada makanan.</div>
                    <div class="match-item" data-match="u_4" style="order: ${Math.floor(Math.random()*4)}">Merasakan lantai bergetar lalu telinga mendengar suara ledakan.</div>
                </div>
                <div class="match-col match-right">
                    <div class="match-target" data-id="u_2" style="order: ${Math.floor(Math.random()*4)}">Telinga & Mata</div>
                    <div class="match-target" data-id="u_4" style="order: ${Math.floor(Math.random()*4)}">Kulit & Telinga</div>
                    <div class="match-target" data-id="u_1" style="order: ${Math.floor(Math.random()*4)}">Mata & Kulit</div>
                    <div class="match-target" data-id="u_3" style="order: ${Math.floor(Math.random()*4)}">Hidung & Lidah</div>
                </div>
            </div>
        </div>
    `;

    // Pasang tombol Tab Lanjutkan dengan transisi ke Arcade (M2) dan Detektif Suara (M2)
    let floatingHTML = `<button class="btn btn-play btn-floating-next" id="btn-next-1" style="display: none;" onclick="nextMissionStage('arcade')">LANJUTKAN</button>`;
    floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-2" style="display: none;" onclick="nextMissionStage(3)">LANJUTKAN</button>`;
    floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-3" style="display: none;" onclick="nextMissionStage('audio-detektif')">LANJUTKAN</button>`;
    for(let i=4; i<=5; i++) {
        floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-${i}" style="display: none;" onclick="nextMissionStage(${i+1})">LANJUTKAN</button>`;
    }
    floatingNext.innerHTML = floatingHTML;

    // Logika Uji Refleks Sensori (Arcade Mode)
    const arcadeData = [
        { text: "Warna Kartu Merah!", ans: "mata" },
        { text: "Suara Peluit Wasit!", ans: "telinga" },
        { text: "Angin Dingin Kelud!", ans: "kulit" },
        { text: "Bau Asap Bakaran!", ans: "hidung" },
        { text: "Rasa Air Minum Asin!", ans: "lidah" },
        { text: "Pemain Jatuh Keras!", ans: "mata" },
        { text: "Teriakan Minta Tolong!", ans: "telinga" },
        { text: "Minuman Basi Asam!", ans: "lidah" },
        { text: "Rumput Licin Basah!", ans: "kulit" },
        { text: "Aroma Baju Keringat!", ans: "hidung" }
    ];
    let currentArcadeIndex = 0;
    let isArcadeAnimating = false;

    window.startArcadeM2 = function() {
        document.getElementById('arcade-intro').style.display = 'none';
        document.getElementById('arcade-target-card').style.display = 'block';
        currentArcadeIndex = 0;
        
        // Acak urutan ke-10 kartu kejadian agar tidak bisa dihafal
        arcadeData.sort(() => Math.random() - 0.5); 
        loadArcadeCard();
    };

    window.loadArcadeCard = function() {
        if(currentArcadeIndex >= 10) {
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2H8V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            showCustomModal("REFLEKS SUPER!", "Luar biasa! Kamu berhasil menghancurkan semua kartu kejadian dengan sensor yang tepat. Kamu sudah siap menjadi Wasit Utama!", checkIcon, "alert", () => {
                // Kembalikan ukuran kotak misi normal sebelum masuk Tahap 2
                document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
                document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
                document.querySelector('.mission-header').style.display = 'flex';
                
                nextMissionStage(2); // Lanjut ke Tahap 2 setelah memenangkan Arcade
            });
            return;
        }
        
        // Munculkan Kartu dengan Efek "Pop In"
        const card = document.getElementById('arcade-target-card');
        card.innerText = arcadeData[currentArcadeIndex].text;
        card.style.transform = 'scale(0)';
        card.style.opacity = '0';
        card.style.backgroundColor = '#fff';
        card.style.color = '#111';
        
        setTimeout(() => {
            card.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.transform = 'scale(1)';
            card.style.opacity = '1';
        }, 50);
    };

    // Fungsi Melempar Proyektil Alat Indra
    window.throwOrganM2 = function(organ) {
        if(isArcadeAnimating) return; // Kunci tombol saat ada proyektil yang sedang terbang
        isArcadeAnimating = true;

        const btn = document.getElementById('btn-arc-' + organ);
        const card = document.getElementById('arcade-target-card');

        // Dapatkan titik koordinat awal (tombol) dan akhir (kartu target) secara akurat dari layarmu
        const btnRect = btn.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        // Buat kloningan gambar untuk efek melayang (Projectile)
        const proj = document.createElement('img');
        proj.src = `assets/item/alat-${organ}.webp`;
        proj.style.position = 'fixed';
        proj.style.left = (btnRect.left + btnRect.width / 4) + 'px';
        proj.style.top = btnRect.top + 'px';
        proj.style.width = '6cqw';
        proj.style.zIndex = '9999';
        proj.style.transition = 'all 0.3s ease-in'; // Durasi terbang
        proj.style.filter = 'drop-shadow(0.3cqw 0.3cqw 0px rgba(0,0,0,0.6))';
        document.body.appendChild(proj);

        if(typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime = 0; sfxTangkap.play().catch(()=>{}); }

        // Eksekusi pergerakan terbang ke arah kartu
        setTimeout(() => {
            proj.style.left = (cardRect.left + cardRect.width / 2 - btnRect.width / 2) + 'px';
            proj.style.top = (cardRect.top + cardRect.height / 2 - btnRect.height / 2) + 'px';
            proj.style.transform = 'scale(1.5) rotate(360deg)';
        }, 20);

        // Efek Benturan (Impact) setelah 320ms (sedikit lebih lama dari durasi terbang)
        setTimeout(() => {
            proj.remove(); // Hapus projektil dari layar

            const isCorrect = (organ === arcadeData[currentArcadeIndex].ans);

            if(isCorrect) {
                // JIKA BENAR (HANCURKAN KARTU)
                if(typeof sfxBenar !== 'undefined') { sfxBenar.currentTime = 0; sfxBenar.play().catch(()=>{}); }
                addScore(15);
                
                // Efek Kartu Hancur (Warna Kuning menyala lalu menghilang)
                card.style.backgroundColor = '#f1c40f';
                card.style.color = '#fff';
                card.style.transform = 'scale(1.2)';
                
                setTimeout(() => {
                    card.style.transform = 'scale(0) rotate(-15deg)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        currentArcadeIndex++;
                        isArcadeAnimating = false; // Buka kunci tombol kembali
                        loadArcadeCard(); // Muat kartu selanjutnya
                    }, 300);
                }, 200);

            } else {
                // JIKA SALAH (KARTU MENANGKIS DAN BERTARUNG KEMBALI)
                if(typeof sfxSalah !== 'undefined') { sfxSalah.currentTime = 0; sfxSalah.play().catch(()=>{}); }
                reduceLife();
                
                // Efek Layar Bergetar Parah
                const missionBox = document.querySelector('.mission-full-box');
                missionBox.classList.remove('shake-screen'); 
                void missionBox.offsetWidth; 
                missionBox.classList.add('shake-screen');
                
                // Efek Kartu Bertahan (Warna Merah menyala lalu kembali normal)
                card.style.backgroundColor = '#ff4757';
                card.style.color = '#fff';
                card.style.animation = 'shakeWrong 0.4s ease forwards';
                
                setTimeout(() => {
                    card.style.animation = 'none';
                    card.style.backgroundColor = '#fff'; // Kartu kembali putih
                    card.style.color = '#111';
                    isArcadeAnimating = false; // BUKA KUNCI AGAR PEMAIN BISA MELEMPAR ORGAN LAIN!
                }, 400);
            }
        }, 320); 
    };

    // Logika Mini Game Detektif Suara Misi 2
    let audioDetektifList = [
        { file: "kucing.mp3", name: "Suara Kucing Meow" },
        { file: "jangkrik.mp3", name: "Suara Jangkrik Malam" },
        { file: "burung.mp3", name: "Suara Kicau Burung" },
        { file: "hujan.mp3", name: "Suara Rintik Hujan" },
        { file: "ayam.mp3", name: "Suara Ayam Berkokok" },
        { file: "lari.mp3", name: "Suara Langkah Kaki Lari" },
        { file: "peluit.mp3", name: "Suara Peluit Wasit" },
        { file: "jam.mp3", name: "Suara Detik Jam Dinding" },
        { file: "mesin.mp3", name: "Suara Mesin Mobil" },
        { file: "kereta.mp3", name: "Suara Kereta Api" }
    ];
    let activeAudioGame = null;
    let currentAudioIndex = 0;
    let activeAudioQuestions = [];

    window.startAudioDetektifM2 = function() {
        // Aktifkan mode fullscreen khusus mini game
        document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
        document.querySelector('.mission-full-box').classList.add('fullscreen-mode');
        document.querySelector('.mission-header').style.display = 'none';

        document.getElementById('audio-detektif-intro').style.display = 'none';
        document.getElementById('audio-detektif-game').style.display = 'flex';

        currentAudioIndex = 0;
        // Acak dan ambil 5 soal saja dari 10 total suara
        activeAudioQuestions = [...audioDetektifList].sort(() => Math.random() - 0.5).slice(0, 5);
        
        loadAudioQuestion();
    };

    window.loadAudioQuestion = function() {
        activeAudioanganStop(); // Hentikan audio sebelumnya jika ada
        if (currentAudioIndex >= 5) {
            // Selesai 5 soal!
            if (activeAudioGame) { activeAudioGame.pause(); activeAudioGame = null; }
            
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            showCustomModal("PENDENGARAN TAJAM!", "Luar biasa! Kamu berhasil menebak seluruh sumber suara dengan sangat akurat menggunakan telingamu.", checkIcon, "alert", () => {
                // Kembalikan kotak misi ke ukuran normal sebelum masuk Tahap 4
                document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
                document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
                document.querySelector('.mission-header').style.display = 'flex';

                nextMissionStage(4); // Lanjut ke Tahap 4
            });
            return;
        }

        document.getElementById('audio-progress-text').innerText = `PERTANYAAN ${currentAudioIndex + 1} DARI 5`;

        let currentQ = activeAudioQuestions[currentAudioIndex];

        // Putar audio otomatis dan loop
        if (activeAudioGame) { activeAudioGame.pause(); }
        activeAudioGame = new Audio(`assets/sound/${currentQ.file}`);
        activeAudioGame.loop = true;
        activeAudioGame.play().catch(e => console.log("Audio play error: ", e));

        // Siapkan 3 pilihan (1 benar, 2 pengecoh acak dari sisa list)
        let choices = [currentQ.name];
        let distractors = audioDetektifList.filter(item => item.name !== currentQ.name).sort(() => Math.random() - 0.5);
        choices.push(distractors[0].name);
        choices.push(distractors[1].name);
        choices.sort(() => Math.random() - 0.5); // Acak posisi tombol

        // Render tombol opsi
        let grid = document.getElementById('audio-options-grid');
        grid.innerHTML = '';

        choices.forEach(optName => {
            let btn = document.createElement('button');
            btn.className = 'btn btn-play';
            btn.style.cssText = 'background: #3498db; font-size: 1.5cqw; padding: 1.2cqw; margin: 0; border: 0.3cqw solid #111; border-radius: 0.8cqw; box-shadow: 0.3cqw 0.3cqw 0 #111; cursor: pointer; transition: 0.1s;';
            btn.innerText = optName;

            btn.onclick = () => {
                if (optName === currentQ.name) {
                    // JAWABAN BENAR
                    if (typeof sfxBenar !== 'undefined') { sfxBenar.currentTime = 0; sfxBenar.play(); }
                    if (activeAudioGame) { activeAudioGame.pause(); }
                    addScore(20);

                    showCustomModal("BENAR SEKALI!", `Itu adalah suara ${currentQ.name}! Pendengaranmu sangat peka.`, "", "alert", () => {
                        currentAudioIndex++;
                        loadAudioQuestion();
                    });
                } else {
                    // JAWABAN SALAH
                    if (typeof sfxSalah !== 'undefined') { sfxSalah.currentTime = 0; sfxSalah.play(); }
                    reduceLife();
                    showCustomModal("KURANG TEPAT!", "Bukannya suara itu. Coba dengarkan lagi baik-baik ulangannya! (Nyawa -1)", "", "error");
                }
            };
            grid.appendChild(btn);
        });
    };

    function activeAudioanganStop() {
        if (activeAudioGame) {
            activeAudioGame.pause();
            activeAudioGame = null;
        }
    }

    // Database 3 Kasus Bervariasi untuk Tahap 2 (Mata)
    const m2QuizBank = {
        2: [
            // Permasalahan 1: Pilihan Ganda Analisis Situasi
            {
                type: "choice",
                title: "Kasus 1: Pelanggaran Garis Batas (Analisis Visual)",
                q: "Saat lomba balap karung berlangsung, banyak debu beterbangan. Kamu harus mengawasi kaki pemain. Informasi visual apa yang membantumu memutuskan bahwa seorang pemain telah melanggar aturan?",
                opts: [
                    { text: "Posisi kakinya melewati garis putih batas jalur.", isCorrect: true, msg: "Tepat! Mata memberikan data spasial akurat tentang posisi objek terhadap garis." },
                    { text: "Mendengar suara lompatannya yang terlalu keras.", isCorrect: false, msg: "Suara ditangkap oleh telinga, bukan informasi visual." },
                    { text: "Melihat bajunya yang berwarna merah.", isCorrect: false, msg: "Warna baju tidak menentukan apakah pemain tersebut melanggar batas lintasan." },
                    { text: "Merasakan getaran saat ia melompat.", isCorrect: false, msg: "Getaran dirasakan oleh kulit peraba, bukan mata." }
                ]
            },
            // Permasalahan 2: Mode Detektif Cek Fakta (Benar / Salah)
            {
                type: "truesfalse",
                title: "Kasus 2: Mitos atau Fakta P3K Mata",
                q: "Pernyataan Medis: 'Jika mata penari kelilipan abu vulkanik Gunung Kelud, tindakan paling benar adalah langsung menguceknya sekuat tenaga dengan tangan.'",
                isTrue: false,
                msg: "Salah Besar! Mengucek mata berdebu justru akan membuat partikel tajam menggores kornea matamu."
            },
            // Permasalahan 3: Urutan Aksi Tanggap Darurat (Sequencing)
            {
                type: "sequence",
                title: "Kasus 3: Urutan Aksi Tanggap Darurat Mata",
                q: "Susunlah 3 urutan tindakan yang benar saat ada debu yang masuk ke dalam mata atlet:",
                steps: [
                    "Jangan panik dan dilarang keras mengucek mata",
                    "Buka kelopak mata perlahan di bawah air mengalir bersih",
                    "Kedipkan mata beberapa kali hingga air mata alami membilas debunya"
                ],
                msg: "Luar biasa! Prosedur medis darurat matamu sudah sangat profesional."
            }
        ],
        3: [
            // Permasalahan 1: Pilihan Ganda Analisis Telinga
            {
                type: "choice",
                title: "Kasus 1: Sinyal Darurat Telinga",
                q: "Lapangan Tambi sangat riuh oleh teriakan suporter sehingga pandanganmu terhalang. Tiba-tiba, dari ujung lapangan terdengar dua kali tiupan peluit melengking. Apa aksi logis yang harus kamu ambil?",
                opts: [
                    { text: "Mempercayai telinga dan segera menghentikan pertandingan sementara.", isCorrect: true, msg: "Benar! Telinga berfungsi sebagai alarm bahaya yang menembus halangan visual." },
                    { text: "Abaikan saja karena matamu tidak melihat kejadiannya langsung.", isCorrect: false, msg: "Bahaya! Menolak informasi dari telinga bisa menyebabkan jatuhnya korban jika ada insiden serius." },
                    { text: "Ikut bersorak bersama kerumunan penonton.", isCorrect: false, msg: "Sebagai wasit, kamu harus menganalisis setiap bunyi yang aneh." },
                    { text: "Mencari sumber cahaya dari arah peluit.", isCorrect: false, msg: "Peluit menghasilkan suara, bukan cahaya terang." }
                ]
            },
            // Permasalahan 2: Detektif Fakta / Mitos Telinga
            {
                type: "truesfalse",
                title: "Kasus 2: Mitos atau Fakta P3K Telinga",
                q: "Pernyataan Medis: 'Jika telinga terasa gatal atau kemasukan air kotor usai berenang, tindakan yang paling aman adalah mengoreknya menggunakan lidi kayu tajam.'",
                isTrue: false,
                msg: "Salah! Benda keras atau tajam sangat berbahaya dan dapat merobek selaput gendang telingamu."
            },
            // Permasalahan 3: Urutan Tindakan Darurat Telinga (Sequencing)
            {
                type: "sequence",
                title: "Kasus 3: Urutan Penanganan Telinga Berdengung",
                q: "Susunlah 3 urutan tindakan yang benar jika kamu mendengar suara ledakan keras di dekatmu:",
                steps: [
                    "1. Segera tutup kedua telinga menggunakan kedua tangan rapat-rapat",
                    "2. Buka sedikit mulutmu untuk menyeimbangkan tekanan udara di gendang",
                    "3. Jauhi sumber suara keras dan cari tempat yang lebih tenang"
                ],
                msg: "Luar biasa! Prosedur perlindungan gendang telingamu sudah sangat tepat."
            }
        ],
        4: [
            // Kasus 1: Pilihan Ganda Logistik
            {
                type: "choice",
                title: "Kasus 1: Inspeksi Makanan Atlet",
                q: "Waktu istirahat tiba. Panitia membagikan jajanan lokal Tahu Takwa untuk atlet. Sebelum memakannya, kamu mencium aroma asam yang menyengat dari tahu tersebut. Analisis apa yang paling tepat?",
                opts: [
                    { text: "Tahu tersebut sudah rusak/basi, segera buang agar atlet tidak keracunan.", isCorrect: true, msg: "Tepat! Hidung bekerja sebagai pos satpam yang menyeleksi udara dan makanan." },
                    { text: "Tahu itu sangat lezat, langsung makan tanpa ragu.", isCorrect: false, msg: "Aroma asam menyengat adalah peringatan alami dari hidung." },
                    { text: "Aroma tidak masalah asalkan bentuk tahunya masih kotak.", isCorrect: false, msg: "Bakteri pembusuk mengubah zat kimia sebelum merusak bentuk." },
                    { text: "Mencuci tahu dengan air lalu memakannya.", isCorrect: false, msg: "Racun bakteri pembusuk sudah meresap ke dalam makanan." }
                ]
            },
            // Kasus 2: Detektif Fakta / Mitos Hidung & Lidah
            {
                type: "truesfalse",
                title: "Kasus 2: Mitos atau Fakta Indra Kimiawi",
                q: "Pernyataan Medis: 'Hidung dan lidah manusia bekerja secara terpisah dan tidak saling mempengaruhi saat kita menikmati kelezatan makanan.'",
                isTrue: false,
                msg: "Salah! 80% rasa lezat makanan yang kita kecap sebenarnya berasal dari aroma yang dicium oleh hidung."
            },
            // Kasus 3: Urutan Aksi (Sequencing)
            {
                type: "sequence",
                title: "Kasus 3: Urutan Cek Kelayakan Makanan",
                q: "Susunlah 3 urutan yang benar saat kamu ingin memastikan suatu makanan aman dikonsumsi:",
                steps: [
                    "1. Amati bentuk fisik makanan secara visual dari dekat",
                    "2. Cium aromanya menggunakan hidung untuk mendeteksi bau asam/busuk",
                    "3. Cicipi sedikit menggunakan ujung lidah untuk memastikan rasanya normal"
                ],
                msg: "Luar biasa! Urutan sensor kimiawi tubuhmu sudah sangat sempurna."
            }
        ],
        5: [
            // Kasus 1: Pilihan Ganda Cuaca
            {
                type: "choice",
                title: "Kasus 1: Sensor Cuaca Ekstrem",
                q: "Pertandingan final sedang seru. Namun tiba-tiba dari arah pegunungan berhembus angin kencang. Kulitmu seketika merinding merasakan suhu yang sangat dingin dan rintik tajam menerpa wajah. Apa keputusanmu?",
                opts: [
                    { text: "Menunda pertandingan karena suhu menandakan badai akan segera tiba.", isCorrect: true, msg: "Luar biasa! Kulit mendeteksi perubahan cuaca ekstrem untuk melindungi tubuh." },
                    { text: "Tetap melanjutkan lomba karena cuaca dingin menyegarkan.", isCorrect: false, msg: "Rintik tajam dan dingin ekstrem adalah tanda ancaman badai alam." },
                    { text: "Hanya menyuruh panitia memakai jaket tanpa peduli atlet.", isCorrect: false, msg: "Keselamatan seluruh peserta di lapangan terbuka adalah prioritas." },
                    { text: "Mengelap keringat karena udara terasa panas terik.", isCorrect: false, msg: "Kondisi kulit merasakan suhu dingin, bukan panas." }
                ]
            },
            // Kasus 2: Detektif Fakta / Mitos Kulit
            {
                type: "truesfalse",
                title: "Kasus 2: Mitos atau Fakta Kulit",
                q: "Pernyataan Medis: 'Kulit manusia hanya berfungsi sebagai penutup tubuh luar dan tidak memiliki kemampuan mendeteksi bahaya suhu panas atau dingin.'",
                isTrue: false,
                msg: "Salah! Jaringan ujung saraf di kulit bertindak sebagai termometer canggih pengirim sinyal darurat ke otak."
            },
            // Kasus 3: Urutan Aksi Darurat Kulit (Sequencing)
            {
                type: "sequence",
                title: "Kasus 3: Urutan Tindakan Saat Kulit Terbakar Matahari",
                q: "Susunlah 3 urutan pertolongan pertama yang benar jika kulitmu tersengat terik matahari:",
                steps: [
                    "1. Segera bernaung di tempat yang teduh dan sejuk",
                    "2. Kompres bagian kulit yang panas menggunakan air dingin bersih",
                    "3. Oleskan pelembap/lotion penenang kulit untuk meredakan perih"
                ],
                msg: "Hebat! Penanganan medis darurat kulitmu sudah sangat tepat."
            }
        ],
    };

    // Mekanisme Fail-Safe (Pendeteksi Kegagalan)
    if (!window.m2FailSafe) window.m2FailSafe = {};

    // Mesin Pemuat Multi-Permasalahan (Mendukung Pilihan Ganda, Benar/Salah, dan Urutan)
    if (!window.m2ActiveIndex) window.m2ActiveIndex = {};

    window.loadM2Quiz = function(stage) {
        const questions = m2QuizBank[stage];
        if (!window.m2ActiveIndex[stage]) window.m2ActiveIndex[stage] = 0;
        let qIndex = window.m2ActiveIndex[stage];

        const container = document.getElementById(`m2-s${stage}-content-box`) || document.getElementById(`grid-m2-s${stage}`);
        if (!container) return;

        if (qIndex >= questions.length) {
            // Semua permasalahan di tahap ini selesai!
            window.m2ActiveIndex[stage] = 0;
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            showCustomModal("TAHAP SELESAI!", "Luar biasa! Kamu berhasil menuntaskan seluruh analisis insiden dengan sempurna.", checkIcon, "alert", () => {
                const nextBtn = document.getElementById(`btn-next-${stage}`);
                if(nextBtn) nextBtn.style.display = 'inline-flex';
            });
            return;
        }

        const currentQ = questions[qIndex];
        container.innerHTML = '';

        // Judul Kasus
        let titleEl = document.createElement('h4');
        titleEl.style.cssText = 'color: #f1c40f; font-size: 1.5cqw; margin: 0 0 0.8cqw 0; text-shadow: 0.1cqw 0.1cqw 0 #111;';
        titleEl.innerText = `${currentQ.title} (Soal ${qIndex + 1} dari ${questions.length})`;
        container.appendChild(titleEl);

        let qBox = document.createElement('div');
        qBox.className = 'mission-text-box';
        qBox.style.cssText = 'width: 100%; font-size: 1.3cqw; text-align: left; margin-bottom: 1.2cqw;';
        qBox.innerText = currentQ.q;
        container.appendChild(qBox);

        if (!window.m2FailSafe[stage]) window.m2FailSafe[stage] = 0;

        // RENDER BERDASARKAN TIPE SOAL
        if (currentQ.type === 'choice') {
            let grid = document.createElement('div');
            grid.className = 'explore-grid';
            grid.style.width = '100%';

            const shuffledOpts = [...currentQ.opts].sort(() => Math.random() - 0.5);
            shuffledOpts.forEach(opt => {
                let btn = document.createElement('button');
                btn.className = 'btn-explore btn-option-m2';
                btn.innerText = opt.text;
                btn.onclick = () => {
                    if (btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
                    if (opt.isCorrect) {
                        if (typeof sfxBenar !== 'undefined') { sfxBenar.currentTime = 0; sfxBenar.play(); }
                        btn.classList.add('btn-correct');
                        addScore(15);
                        showCustomModal("ANALISIS TEPAT!", opt.msg, "", "alert", () => {
                            window.m2FailSafe[stage] = 0;
                            window.m2ActiveIndex[stage]++;
                            loadM2Quiz(stage);
                        });
                    } else {
                        if (typeof sfxSalah !== 'undefined') { sfxSalah.currentTime = 0; sfxSalah.play(); }
                        btn.classList.add('btn-wrong');
                        reduceLife();
                        window.m2FailSafe[stage]++;
                        
                        if (window.m2FailSafe[stage] >= 2) {
                            showCustomModal("BANTUAN WASIT", "Dua pilihan salah telah disingkirkan untuk membantumu fokus!", "", "alert", () => {
                                let wrongBtns = Array.from(grid.querySelectorAll('.btn-option-m2:not(.btn-wrong)')).filter(b => b.innerText !== currentQ.opts.find(o => o.isCorrect).text);
                                if(wrongBtns.length >= 2) { wrongBtns[0].style.visibility = 'hidden'; wrongBtns[1].style.visibility = 'hidden'; }
                            });
                        } else {
                            showCustomModal("KELIRU!", opt.msg + " (Nyawa -1)", "", "error");
                        }
                    }
                };
                grid.appendChild(btn);
            });
            container.appendChild(grid);

        } else if (currentQ.type === 'truesfalse') {
            let tfGroup = document.createElement('div');
            tfGroup.style.cssText = 'display: flex; gap: 2cqw; width: 100%; justify-content: center;';
            
            let btnB = document.createElement('button');
            btnB.className = 'btn btn-play';
            btnB.style.cssText = 'background: #2ed573; font-size: 1.5cqw; padding: 1cqw 3cqw; margin: 0;';
            btnB.innerText = 'FAKTA (BENAR)';
            
            let btnS = document.createElement('button');
            btnS.className = 'btn btn-play';
            btnS.style.cssText = 'background: #ff4757; font-size: 1.5cqw; padding: 1cqw 3cqw; margin: 0;';
            btnS.innerText = 'MITOS (SALAH)';

            const evalTF = (userAns) => {
                if (userAns === currentQ.isTrue) {
                    if (typeof sfxBenar !== 'undefined') { sfxBenar.currentTime = 0; sfxBenar.play(); }
                    addScore(15);
                    showCustomModal("JAWABAN BENAR!", currentQ.msg, "", "alert", () => {
                        window.m2FailSafe[stage] = 0;
                        window.m2ActiveIndex[stage]++;
                        loadM2Quiz(stage);
                    });
                } else {
                    if (typeof sfxSalah !== 'undefined') { sfxSalah.currentTime = 0; sfxSalah.play(); }
                    reduceLife();
                    showCustomModal("KELIRU!", currentQ.msg + " (Nyawa -1)", "", "error");
                }
            };

            btnB.onclick = () => evalTF(true);
            btnS.onclick = () => evalTF(false);
            
            tfGroup.appendChild(btnB);
            tfGroup.appendChild(btnS);
            container.appendChild(tfGroup);

        } else if (currentQ.type === 'sequence') {
            let seqBox = document.createElement('div');
            seqBox.style.cssText = 'display: flex; flex-direction: column; gap: 0.8cqw; width: 100%;';
            
            let shuffledSteps = [...currentQ.steps].sort(() => Math.random() - 0.5);
            
            shuffledSteps.forEach((stepText) => {
                let stepCard = document.createElement('div');
                stepCard.style.cssText = 'background: #3498db; color: white; padding: 1cqw 1.5cqw; border: 0.3cqw solid #111; border-radius: 0.5cqw; font-size: 1.2cqw; font-weight: bold; cursor: pointer; box-shadow: 0.3cqw 0.3cqw 0 #111; text-align: left;';
                stepCard.innerText = stepText;
                
                stepCard.onclick = () => {
                    // Validasi apakah diklik sesuai urutan teks aslinya
                    if (stepText === currentQ.steps[window.m2SubSeqIdx || 0]) {
                        stepCard.style.background = '#2ed573';
                        stepCard.style.pointerEvents = 'none';
                        window.m2SubSeqIdx = (window.m2SubSeqIdx || 0) + 1;
                        
                        if (window.m2SubSeqIdx >= currentQ.steps.length) {
                            window.m2SubSeqIdx = 0;
                            if (typeof sfxBenar !== 'undefined') { sfxBenar.currentTime = 0; sfxBenar.play(); }
                            addScore(20);
                            showCustomModal(" URUTAN TEPAT!", currentQ.msg, "", "alert", () => {
                                window.m2FailSafe[stage] = 0;
                                window.m2ActiveIndex[stage]++;
                                loadM2Quiz(stage);
                            });
                        }
                    } else {
                        if (typeof sfxSalah !== 'undefined') { sfxSalah.currentTime = 0; sfxSalah.play(); }
                        reduceLife();
                        showCustomModal("URUTAN SALAH!", "Langkah tersebut belum tepat urutannya. Coba pikirkan prioritas pertolongan pertamanya! (Nyawa -1)", "", "error");
                    }
                };
                seqBox.appendChild(stepCard);
            });
            container.appendChild(seqBox);
        }
    };

    // Eksekusi Pemuat Kuis untuk Tahap 2, 3, 4, 5
    [2, 3, 4, 5].forEach(stage => loadM2Quiz(stage));

    // Naskah NPC Kelulusan Akhir
    currentMissionDialogs = {
        1: { 
            dialog: [
                { text: "Kalibrasi yang sangat sempurna! Kamu sudah memahami fungsi dasar setiap sensor dengan logis.", mood: "happy" },
                { text: "Sekarang saatnya kita terjun langsung ke Lapangan Tambi untuk mengatasi insiden nyata secara langsung. Bersiaplah!", mood: "neutral" }
            ]
        },
        6: { 
            isBoss: true,
            dialog: [
                { text: "Luar biasa! Pemikiran logismu menyelamatkan Festival Lapangan Tambi dari kekacauan.", mood: "happy" },
                { text: "Ternyata, fungsi alat indra sangat vital untuk mengambil keputusan di dunia nyata. Kamu berhak atas Lencana Wasit dan 100 Koin Emas!", mood: "happy" },
                { text: "Buku Jurnal Misi 2 telah diisi. Ayo kembali ke peta dan bersiap masuk ke Misi 3!", mood: "neutral" }
            ]
        }
    };
}

// Generator Misi 3: DOKTER CILIK SLG (Deep Learning & Kearifan Lokal)
function buildMission3() {
    document.getElementById('mission-title').innerText = "MISI 3: DOKTER CILIK SLG";
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    contentArea.innerHTML = `
        <div id="stage-1" class="mission-stage active-stage" style="width: 100%; height: 100%;">
            <!-- INTRO -->
            <div id="m3-s1-intro" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 30; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <button class="btn-close-mission" style="position: absolute; top: 1.5cqw; right: 1.5cqw; z-index: 35;" onclick="abortM3QRScanner()">X</button>
                <h2 style="color: #f1c40f; font-size: 3.5cqw; text-shadow: 0.2cqw 0.2cqw 0 #000; margin-bottom: 1cqw;">INSPEKSI BARANG RAHASIA</h2>
                <p style="color: white; font-size: 1.8cqw; margin-bottom: 2cqw; text-align: center; padding: 0 5cqw;">Arahkan kameramu dan pindai Kartu QR rahasia.<br>Gunakan kelima alat indra untuk menyelidiki barang rahasia yang muncul dan tebak isinya!</p>
                <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw;" onclick="startM3QRScanner()">MULAI PEMINDAIAN</button>
            </div>
            
            <!-- KAMERA PEMINDAI QR -->
            <div id="m3-s1-camera-area" class="ar-container" style="display: none; background: #000; position: relative;">
                <div class="ar-hud">
                    <div class="ar-score-box">Barang Ditemukan: <span id="m3-qr-score-txt">0 / 5</span></div>
                    <button class="btn-close-mission" style="position: static; margin-left: auto;" onclick="abortM3QRScanner()">X</button>
                </div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20cqw; height: 20cqw; border: 0.6cqw dashed #2ed573; z-index: 5; box-shadow: 0 0 0 100vw rgba(0,0,0,0.5);">
                    <div style="position: absolute; bottom: -3cqw; width: 100%; text-align: center; color: #2ed573; font-weight: bold; font-size: 1.5cqw; text-shadow: 0.1cqw 0.1cqw 0 #000;">SCAN DI SINI</div>
                </div>
                <video id="m3-qr-video" class="ar-video" playsinline></video>
                <canvas id="m3-qr-canvas" style="display: none;"></canvas>
            </div>

            <!-- AREA INVESTIGASI BARANG -->
            <div id="m3-s1-investigate-area" class="ar-container" style="display: none; background-image: url('assets/background/kios-tahu.webp'); background-size: cover; background-position: center; position: relative; flex-direction: column;">
                <div class="m1-modal-box" style="width: 85%; max-height: 95%; background: rgba(47, 53, 66, 0.95);">
                    <h3 style="color: #fbc531; margin-top: 0; font-size: 1.8cqw; margin-bottom: 0.5cqw;">INVESTIGASI BARANG <span id="m3-inv-count">1</span>/5</h3>
                    <div style="width: 12cqw; height: 12cqw; background: #111; border: 0.3cqw solid #fff; border-radius: 1cqw; display: flex; justify-content: center; align-items: center; margin-bottom: 1cqw;">
                        <span style="font-size: 5cqw; color: #fff; font-family: monospace;">?</span>
                    </div>
                    <p style="color: #dfe6e9; font-size: 1.3cqw; margin-bottom: 1cqw; text-align: center;">Sentuh alat pancaindra untuk menyelidiki barang ini!</p>
                    <div class="m1-inspect-tools" id="m3-inspect-tools-container" style="margin-bottom: 1cqw;">
                        <img src="assets/item/alat-mata.webp" class="m1-tool-btn" data-sense="mata" onclick="inspectM3Item('mata', this)">
                        <img src="assets/item/alat-telinga.webp" class="m1-tool-btn" data-sense="telinga" onclick="inspectM3Item('telinga', this)">
                        <img src="assets/item/alat-hidung.webp" class="m1-tool-btn" data-sense="hidung" onclick="inspectM3Item('hidung', this)">
                        <img src="assets/item/alat-lidah.webp" class="m1-tool-btn" data-sense="lidah" onclick="inspectM3Item('lidah', this)">
                        <img src="assets/item/alat-kulit.webp" class="m1-tool-btn" data-sense="kulit" onclick="inspectM3Item('kulit', this)">
                    </div>
                    <div id="m3-inspect-quiz" style="width: 100%; display: none; flex-direction: column; align-items: center;">
                        <p style="font-weight: bold; margin-bottom: 1cqw; font-size: 1.4cqw; text-align: center; color: #fff;">Berdasarkan penyelidikan pancaindra, barang apakah ini?</p>
                        <div class="explore-grid" id="m3-inspect-opts" style="width: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="stage-2" class="mission-stage">
            <h3 class="stage-title" style="color: #2980b9;">TAHAP 2: BENTUK PELINDUNG MATA</h3>
            <div id="stage-2-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-mata.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-mata.webp" alt="Anatomi Mata">
                        <div id="highlight-2" class="anatomy-highlight"></div> 
                    </div>
                    <div class="anatomy-text-col" id="anat-col-2" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#2980b9;"><span>Mata (Indra Penglihat)</span>Bentuk mata membulat agar bisa bebas melirik. Namun, mata sangat rentan terhadap kotoran dari luar.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Analisis Bentuk & Fungsi</span>Tahukah kamu mengapa kita memiliki <b>Bulu Mata</b> yang melengkung ke atas? Bentuk ini diciptakan khusus seperti jaring untuk menjebak debu (seperti debu vulkanik Gunung Kelud) agar tidak langsung jatuh melukai bola mata!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_alis" style="display:none;"><span>Alis Mata</span>Bentuk melengkungnya bertugas menahan tetesan keringat dari dahi.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_kelopak" style="display:none;"><span>Kelopak Mata</span>Bentuk kulit lipatan tipis yang refleks menutup kilat untuk menangkis benturan.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_bulu" style="display:none;"><span>Bulu Mata</span>Jaring penahan debu dan serangga kecil.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_iris" style="display:none;"><span>Iris</span>Otot pelindung berwarna yang mengatur besar/kecilnya lubang pupil.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_pupil" style="display:none;"><span>Pupil</span>Celah masuknya cahaya ke dalam mata.</div>
                    </div>
                </div>
                <button id="btn-anat-2" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(2)">BACA ANALISIS 🔽</button>
            </div>
            <div id="stage-2-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Tarik label ke tempatnya! <br><span style="color: #ff4757; font-size: 1.2cqw;">💡 TIPS DOKTER: Jika kesulitan, cocokkan warna garis kotak target dengan imajinasimu!</span></p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-mata.webp" alt="Papan Mata">
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
            <h3 class="stage-title" style="color: #8e44ad;">TAHAP 3: LORONG PENANGKAP SUARA</h3>
            <div id="stage-3-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-telinga.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-telinga.webp" alt="Anatomi Telinga">
                        <div id="highlight-3" class="anatomy-highlight"></div>
                    </div>
                    <div class="anatomy-text-col" id="anat-col-3" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#8e44ad;"><span>Telinga (Indra Pendengar)</span>Telinga tidak berbentuk bulat rata, melainkan memiliki banyak lorong bergelombang.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Analisis Bentuk & Fungsi</span>Mengapa Daun Telinga kita berlekuk-lekuk? Lekukan ini berfungsi seperti corong raksasa Gua Selomangleng yang menjebak dan memantulkan suara Gamelan Jaranan agar masuk tepat sasaran ke dalam lubang telingamu!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_daun" style="display:none;"><span>Daun Telinga</span>Bentuk corong berlekuk luar penjebak getaran suara.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_lubang" style="display:none;"><span>Lubang Telinga</span>Lorong sempit untuk menyalurkan gelombang suara ke dalam.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_gendang" style="display:none;"><span>Gendang Telinga</span>Selaput sangat tipis yang dirancang khusus untuk bergetar saat tertabrak suara.</div>
                    </div>
                </div>
                <button id="btn-anat-3" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(3)">BACA ANALISIS 🔽</button>
            </div>
            <div id="stage-3-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Tarik label ke tempatnya! <br><span style="color: #ff4757; font-size: 1.2cqw;">💡 TIPS DOKTER: Ingat urutan jalurnya: Ditangkap luar -> Masuk lorong -> Menabrak gendang.</span></p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-telinga.webp" alt="Papan Telinga">
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

        <!-- STAGE M3 AR: TANGKAP BUAH (INTERMEZZO) -->
        <div id="stage-m3-ar" class="mission-stage" style="width: 100%; height: 100%;">
            <div id="m3-ar-game-area" class="ar-container" style="display: none;">
                <div id="m3-ar-target-overlay-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none; align-items: center; justify-content: center; z-index: 50; pointer-events: none;">
                    <div id="m3-ar-target-overlay" style="background: #2f3542; border: 0.6cqw solid #fbc531; padding: 2cqw 4cqw; color: #fff; font-size: 3cqw; font-weight: 900; text-align: center; border-radius: 1cqw; box-shadow: inset -0.3cqw -0.3cqw 0px rgba(0,0,0,0.5), inset 0.3cqw 0.3cqw 0px rgba(255,255,255,0.2), 1cqw 1cqw 0 rgba(0,0,0,0.8); text-shadow: 0.2cqw 0.2cqw 0 #111; max-width: 80%; word-wrap: break-word;">TANGKAP BUAH!</div>
                </div>
                <div class="ar-hud">
                    <div class="ar-score-box">Buah Terkumpul: <span id="m3-ar-score-txt">0 / 30</span></div>
                    <button class="btn-close-mission" style="position: static; margin-left: auto;" onclick="abortM3AR()">X</button>
                </div>
                <div class="ar-frame"></div>
                <div id="m3-ar-face-guide" class="ar-face-guide">
                    <div class="face-guide-box">AREA AMAN<br>(JANGAN ADA TANGAN)</div>
                </div>
                <video id="m3-ar-video" class="ar-video" autoplay playsinline></video>
                <canvas id="m3-ar-hidden-canvas" style="display: none;"></canvas>
            </div>
        </div>

        <div id="stage-4" class="mission-stage">
            <h3 class="stage-title" style="color: #d35400;">TAHAP 4: RONGGA PENYARING DEBU</h3>
            <div id="stage-4-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-hidung.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-hidung.webp" alt="Anatomi Hidung">
                        <div id="highlight-4" class="anatomy-highlight"></div>
                    </div>
                    <div class="anatomy-text-col" id="anat-col-4" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#d35400;"><span>Hidung (Indra Pembau)</span>Lubang hidung menghadap ke bawah, bukan ke atas, agar kotoran dan air hujan tidak mudah masuk.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Analisis Bentuk & Fungsi</span>Di dalam rongga, Saraf Pembau terletak sangat tersembunyi di bagian <b>paling atas</b>. Itulah sebabnya saat kita ingin mencium lezatnya sate di pasar, kita refleks menarik napas kuat-kuat agar uap bau naik ke atap rongga hidung!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_lubang_hidung" style="display:none;"><span>Lubang Hidung</span>Dua pintu utama masuknya udara.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_rambut" style="display:none;"><span>Rambut Hidung</span>Jaring bulu lebat penyaring debu kotoran di depan pintu masuk.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_saraf" style="display:none;"><span>Saraf Pembau</span>Sensor pendeteksi jenis bau yang aman bertengger di atap rongga hidung.</div>
                    </div>
                </div>
                <button id="btn-anat-4" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(4)">BACA ANALISIS 🔽</button>
            </div>
            <div id="stage-4-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Tarik label ke tempatnya! <br><span style="color: #ff4757; font-size: 1.2cqw;">💡 TIPS DOKTER: Urutkan dari lubang paling luar hingga ke atap atas!</span></p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-hidung.webp" alt="Papan Hidung">
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
            <h3 class="stage-title" style="color: #e84393;">TAHAP 5: OTOT KASAR PENGECAP</h3>
            <div id="stage-5-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-lidah.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-lidah.webp" alt="Anatomi Lidah">
                        <div id="highlight-5" class="anatomy-highlight"></div>
                    </div>
                    <div class="anatomy-text-col" id="anat-col-5" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#e84393;"><span>Lidah (Indra Pengecap)</span>Lidah adalah otot terkuat yang bisa membolak-balikkan makanan dan membantu manusia berbicara.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Analisis Bentuk & Fungsi</span>Permukaan lidahmu terasa kasar karena dipenuhi <b>Papila</b>. Kekasaran ini sangat penting untuk menahan agar makanan (seperti Gethuk Pisang) tidak langsung tergelincir masuk ke tenggorokan sebelum dikunyah hancur!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_ujung" style="display:none;"><span>Ujung Lidah</span>Bentuk melancip di depan yang ahli mendeteksi rasa manis gula.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_samping" style="display:none;"><span>Samping Lidah</span>Sisi ganda kiri-kanan yang peka mengecap rasa asam dan asin.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_pangkal" style="display:none;"><span>Pangkal Lidah</span>Benteng pertahanan terakhir di paling belakang lidah pendeteksi rasa pahit (jamu / racun).</div>
                    </div>
                </div>
                <button id="btn-anat-5" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(5)">BACA ANALISIS 🔽</button>
            </div>
            <div id="stage-5-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Pindai dan letakkan label sensor rasa pada lidah! <br><span style="color: #ff4757; font-size: 1.2cqw;">💡 TIPS DOKTER: Rasa pahit selalu berjaga di gerbang paling belakang.</span></p>
                <div class="dnd-game-area">
                    <div class="dnd-image-wrapper">
                        <img src="assets/item/anatomi-lidah.webp" alt="Papan Lidah">
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
            <h3 class="stage-title" style="color: #27ae60;">TAHAP 6: PABRIK PENDINGIN TUBUH</h3>
            <div id="stage-6-intro" style="width: 100%;">
                <div class="anatomy-layout">
                    <div class="anatomy-img-col" onclick="showImagePopup('assets/item/anatomi-kulit1.webp')" title="Perbesar Gambar">
                        <img src="assets/item/anatomi-kulit1.webp" alt="Anatomi Kulit Voxel">
                        <div id="highlight-6" class="anatomy-highlight"></div>
                    </div>
                    <div class="anatomy-text-col" id="anat-col-6" data-step="0">
                        <div class="anatomy-part-box anat-step" style="display:block; border-color:#27ae60;"><span>Kulit (Indra Peraba)</span>Meski terlihat tipis di permukaan, kulit menyimpan banyak struktur pelindung canggih di bawahnya.</div>
                        <div class="anatomy-part-box anat-step" style="display:none; border-color:#e67e22;"><span>Analisis Bentuk & Fungsi</span>Di bawah kulit terdapat <b>Kelenjar Keringat</b> berbentuk seperti selang spiral mesin pendingin. Saat penari Barong kepanasan memakai topeng kayu yang berat, kelenjar ini menyemprotkan cairan keringat ke luar untuk menurunkan suhu mesin tubuhnya!</div>
                        <div class="anatomy-part-box anat-step" data-target="d_permukaan" style="display:none;"><span>Permukaan Kulit</span>Lapisan tebal teratas (Epidermis). Ini tameng tubuh dari luka dan kuman.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_rambut" style="display:none;"><span>Batang Rambut</span>Struktur memanjang. Jika kedinginan, akar ototnya menarik rambut agar berdiri menjaga panas tubuh.</div>
                        <div class="anatomy-part-box anat-step" data-target="d_keringat" style="display:none;"><span>Kelenjar Keringat</span>Struktur melingkar spiral biru (Pabrik Pendingin Tubuh).</div>
                        <div class="anatomy-part-box anat-step" data-target="d_saraf" style="display:none;"><span>Ujung Saraf</span>Ranting akar sensor pendeteksi sentuhan, tekanan, dan nyeri.</div>
                    </div>
                </div>
                <button id="btn-anat-6" class="btn btn-play" style="width: 100%; font-size: 1.5cqw;" onclick="advanceAnatomy(6)">BACA ANALISIS 🔽</button>
            </div>
            <div id="stage-6-quiz" style="display: none; width: 100%; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="width: 100%; margin: 0; text-align: center;">Letakkan struktur kulit sesuai posisinya! <br><span style="color: #ff4757; font-size: 1.2cqw;">💡 TIPS DOKTER: Kelenjar Keringat melingkar di bawah, Permukaan Kulit membentang di atas.</span></p>
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
            <h3 class="stage-title" style="color: #ff4757;">TAHAP 7: DIAGNOSIS PASIEN (BOSS)</h3>
            <p class="mission-text-box">Waktunya membuktikan analisismu, Dokter Cilik! Para Penari Jaranan di luar butuh pertolonganmu. Tarik garis untuk mencocokkan keluhan medis mereka dengan bagian organ yang mengalami kelelahan/bekerja keras.</p>
            <div class="match-container">
                <svg class="match-svg"></svg>
                <div class="match-col match-left">
                    <div class="match-item" data-match="u_mata" style="order: ${Math.floor(Math.random()*4)}">"Mata saya pedih kelilipan debu abu vulkanik dari angin Gunung Kelud."</div>
                    <div class="match-item" data-match="u_telinga" style="order: ${Math.floor(Math.random()*4)}">"Telinga saya sakit menahan suara pecut (cambuk) Jaranan yang keras."</div>
                    <div class="match-item" data-match="u_kulit" style="order: ${Math.floor(Math.random()*4)}">"Saya sangat kepanasan memakai kostum topeng Barong raksasa ini."</div>
                    <div class="match-item" data-match="u_lidah" style="order: ${Math.floor(Math.random()*4)}">"Saya merasa sangat pahit sehabis meminum jamu beras kencur ini."</div>
                </div>
                <div class="match-col match-right">
                    <div class="match-target" data-id="u_kulit" style="order: ${Math.floor(Math.random()*4)}">Kelenjar Keringat Kulit</div>
                    <div class="match-target" data-id="u_lidah" style="order: ${Math.floor(Math.random()*4)}">Pangkal Lidah</div>
                    <div class="match-target" data-id="u_mata" style="order: ${Math.floor(Math.random()*4)}">Kelopak & Bulu Mata</div>
                    <div class="match-target" data-id="u_telinga" style="order: ${Math.floor(Math.random()*4)}">Gendang Telinga</div>
                </div>
            </div>
        </div>
    `;

    let floatingHTML = '';
    floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-1" style="display: none;" onclick="nextMissionStage(2)">LANJUTKAN</button>`;
    floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-2" style="display: none;" onclick="nextMissionStage(3)">LANJUTKAN</button>`;
    floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-3" style="display: none;" onclick="mulaiM3AR()">LANJUTKAN</button>`;
    floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-4" style="display: none;" onclick="nextMissionStage(5)">LANJUTKAN</button>`;
    floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-5" style="display: none;" onclick="nextMissionStage(6)">LANJUTKAN</button>`;
    floatingHTML += `<button class="btn btn-play btn-floating-next" id="btn-next-6" style="display: none;" onclick="nextMissionStage(7)">LANJUTKAN</button>`;
    floatingNext.innerHTML = floatingHTML;

    // Aktifkan mode layar penuh (Fullscreen) untuk arena kamera AR
    document.querySelector('.mission-header').style.display = 'none';
    document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.add('fullscreen-mode');

    currentMissionDialogs = {
        2: { dialog: [
            { text: "Bentuk pelindung matamu sangat hebat, bukan? Bulu mata menjebak debu tebal, kelopak mata berkedip seperti tameng.", mood: "happy" },
            { text: "Berkat desain khusus ini, bola matamu tetap aman bekerja menangkap cahaya. Ayo periksa anatomi selanjutnya!", mood: "neutral" }
        ]},
        3: { dialog: [
            { text: "Bagus! Kamu berhasil menyusun kembali lorong telinga.", mood: "neutral" },
            { text: "Desain berlekuk dan bentuk corong daun telinga memang dirancang Sang Pencipta agar tidak ada satu pun suara yang terlewat! Mengagumkan!", mood: "happy" }
        ]},
        4: { dialog: [
            { text: "Pintar! Menempatkan rambut hidung di depan terbukti sangat efektif menahan debu jalanan agar tidak terhirup masuk.", mood: "happy" },
            { text: "Sementara saraf pembau yang berharga diletakkan aman tinggi di atas rongga. Desain yang sempurna!", mood: "neutral" }
        ]},
        5: { dialog: [
            { text: "Tepat sekali! Desain jalan berbatu papila membuat lidah mampu menahan licinnya makanan.", mood: "happy" },
            { text: "Lalu saraf rasa dipisah dengan cerdas: manis di depan untuk nikmatnya gula, pahit dijaga di gerbang belakang sebagai alarm anti-racun!", mood: "neutral" }
        ]},
        6: { dialog: [
            { text: "Wah, kamu berhasil menyusun lapisan pelindung kulit dengan sangat tepat!", mood: "happy" },
            { text: "Desain Kelenjar Keringat yang berbentuk spiral terbukti bekerja seperti AC alami pendingin tubuh saat cuaca ekstrem melanda.", mood: "neutral" }
        ]},
        7: { 
            isBoss: true,
            dialog: [
                { text: "Diagnosis yang sangat brilian! Kamu berhasil mengenali kelemahan dan kekuatan struktur setiap organ para penari.", mood: "happy" },
                { text: "Para penari Jaranan kini bisa beristirahat dengan tenang berkat penangananmu. Kamu berhak atas 100 Koin Emas sebagai hadiah!", mood: "happy" },
                { text: "Segel ajaib Misi 4 telah terbuka! Mari kita kembali ke Peta Utama untuk misi edukasi selanjutnya!", mood: "neutral" }
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
            onYes: () => {
                    document.getElementById('vn-overlay').style.display = 'none';
                    showMissionQuestBoard(missionId, title1, title2, () => enterMissionScreen(title1, title2, missionId));
                } 
        };
    }
}

// ================= GENERATOR MISI 1 (KEBANGKITAN SENSORI PASAR KANDANGAN) =================
function buildMission1() {
    document.getElementById('mission-title').innerText = "MISI 1: MISTERI PASAR KANDANGAN";
    const contentArea = document.getElementById('mission-content-area');
    const floatingNext = document.getElementById('floating-next-container');
    
    // Matikan BGM misi biasa untuk menciptakan keheningan
    bgmMission.pause();
    if(typeof window.bgmPasarM1 === 'undefined') {
        window.bgmPasarM1 = new Audio('assets/sound/bgm-pasar.mp3');
        window.bgmPasarM1.loop = true;
        window.bgmPasarM1.volume = 0.4;
    } else {
        window.bgmPasarM1.pause();
        window.bgmPasarM1.currentTime = 0;
    }

    // Aktifkan mode layar penuh (Fullscreen) untuk eksplorasi map
    document.querySelector('.mission-header').style.display = 'none';
    document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.add('fullscreen-mode');

    contentArea.innerHTML = `
        <!-- TAHAP 1: KEBANGKITAN SENSORI (HIDDEN OBJECT MAP) -->
        <div id="stage-1" class="mission-stage active-stage" style="width: 100%; height: 100%;">
            <div id="m1-map-area" class="ar-container" style="background-image: url('assets/background/mission1.webp'); background-size: cover; background-position: center; position: relative;">
                
                <div id="m1-target-overlay-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none; align-items: center; justify-content: center; z-index: 50; pointer-events: none;">
                    <div id="m1-target-overlay" style="background: #2f3542; border: 0.6cqw solid #fbc531; padding: 2cqw 4cqw; color: #fff; font-size: 3cqw; font-weight: 900; text-align: center; border-radius: 1cqw; box-shadow: inset -0.3cqw -0.3cqw 0px rgba(0,0,0,0.5), inset 0.3cqw 0.3cqw 0px rgba(255,255,255,0.2), 1cqw 1cqw 0 rgba(0,0,0,0.8); text-shadow: 0.2cqw 0.2cqw 0 #111; max-width: 80%; word-wrap: break-word;">CARI MATA!</div>
                </div>

                <div id="m1-dark-layer" class="m1-dark-bg"></div>
                
                <img src="assets/item/alat-mata.webp" class="m1-hidden-obj" id="ho-mata" style="top:25%; left:35%;" onclick="hoClickM1('mata')">
                <img src="assets/item/alat-telinga.webp" class="m1-hidden-obj" id="ho-telinga" style="top:55%; left:75%;" onclick="hoClickM1('telinga')">
                <img src="assets/item/alat-hidung.webp" class="m1-hidden-obj" id="ho-hidung" style="top:75%; left:20%;" onclick="hoClickM1('hidung')">
                <img src="assets/item/alat-lidah.webp" class="m1-hidden-obj" id="ho-lidah" style="top:45%; left:50%;" onclick="hoClickM1('lidah')">
                <img src="assets/item/alat-kulit.webp" class="m1-hidden-obj" id="ho-kulit" style="top:80%; left:85%;" onclick="hoClickM1('kulit')">
            </div>
        </div>

        <!-- STAGE MATA (KUIS PILIHAN GANDA) -->
        <div id="stage-m1mata" class="mission-stage">
            <h3 class="stage-title" style="color: #2980b9;">KUIS FUNGSI MATA</h3>
            <div id="m1-quiz-mata-container" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p id="m1-mata-q" class="quiz-text"></p>
                <div class="explore-grid" id="m1-mata-opts"></div>
            </div>
        </div>

        <!-- STAGE TELINGA (TARIK GARIS) -->
        <div id="stage-m1telinga" class="mission-stage">
            <h3 class="stage-title" style="color: #8e44ad;">COCOKKAN SUARA</h3>
            <p class="mission-text-box">Tarik garis untuk mencocokkan kejadian suara di pasar dengan makna/fungsinya!</p>
            <div class="match-container">
                <svg class="match-svg"></svg>
                <div class="match-col match-left">
                    <div class="match-item" data-match="m1t_1" style="order: ${Math.floor(Math.random()*3)}">Klakson dari belakang</div>
                    <div class="match-item" data-match="m1t_2" style="order: ${Math.floor(Math.random()*3)}">Suara lonceng makin keras</div>
                    <div class="match-item" data-match="m1t_3" style="order: ${Math.floor(Math.random()*3)}">Menutup lubang telinga</div>
                </div>
                <div class="match-col match-right">
                    <div class="match-target" data-id="m1t_2" style="order: ${Math.floor(Math.random()*3)}">Sumber suara mendekat</div>
                    <div class="match-target" data-id="m1t_3" style="order: ${Math.floor(Math.random()*3)}">Menghalangi gelombang suara</div>
                    <div class="match-target" data-id="m1t_1" style="order: ${Math.floor(Math.random()*3)}">Peringatan bahaya arah buta</div>
                </div>
            </div>
        </div>

        <!-- STAGE HIDUNG (KUIS PILIHAN GANDA) -->
        <div id="stage-m1hidung" class="mission-stage">
            <h3 class="stage-title" style="color: #d35400;">KUIS FUNGSI HIDUNG</h3>
            <div id="m1-quiz-hidung-container" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p id="m1-hidung-q" class="quiz-text"></p>
                <div class="explore-grid" id="m1-hidung-opts"></div>
            </div>
        </div>

        <!-- STAGE LIDAH (BENAR/SALAH) -->
        <div id="stage-m1lidah" class="mission-stage">
            <h3 class="stage-title" style="color: #e84393;">KUIS FUNGSI LIDAH</h3>
            <div id="m1-quiz-lidah-container" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p id="m1-lidah-q" class="quiz-text"></p>
                <div class="ta-btn-group" style="width: 90%; margin-top: 1cqw;">
                    <button class="btn-ta benar" onclick="jawabM1Lidah(true)">BENAR</button>
                    <button class="btn-ta salah" onclick="jawabM1Lidah(false)">SALAH</button>
                </div>
            </div>
        </div>

        <!-- STAGE KULIT (TARIK GARIS) -->
        <div id="stage-m1kulit" class="mission-stage">
            <h3 class="stage-title" style="color: #27ae60;">COCOKKAN SENTUHAN</h3>
            <p class="mission-text-box">Tarik garis untuk mencocokkan kejadian sentuhan dengan refleks pelindung kulit!</p>
            <div class="match-container">
                <svg class="match-svg"></svg>
                <div class="match-col match-left">
                    <div class="match-item" data-match="m1k_1" style="order: ${Math.floor(Math.random()*3)}">Tangan menyentuh wajan panas</div>
                    <div class="match-item" data-match="m1k_2" style="order: ${Math.floor(Math.random()*3)}">Memegang dan meraba buah salak</div>
                    <div class="match-item" data-match="m1k_3" style="order: ${Math.floor(Math.random()*3)}">Berdiri di pasar saat siang terik</div>
                </div>
                <div class="match-col match-right">
                    <div class="match-target" data-id="m1k_2" style="order: ${Math.floor(Math.random()*3)}">Terasa tajam dan kasar</div>
                    <div class="match-target" data-id="m1k_1" style="order: ${Math.floor(Math.random()*3)}">Menarik tangan dengan kilat</div>
                    <div class="match-target" data-id="m1k_3" style="order: ${Math.floor(Math.random()*3)}">Mengeluarkan air keringat</div>
                </div>
            </div>
        </div>
        
        <!-- STAGE AR INTERMEZZO (TANGKAP BUAH) -->
        <div id="stage-m1-ar" class="mission-stage" style="width: 100%; height: 100%;">
            <div id="m1-ar-game-area" class="ar-container" style="display: none;">
                <div id="m1-ar-target-overlay-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none; align-items: center; justify-content: center; z-index: 50; pointer-events: none;">
                    <div id="m1-ar-target-overlay" style="background: #2f3542; border: 0.6cqw solid #fbc531; padding: 2cqw 4cqw; color: #fff; font-size: 3cqw; font-weight: 900; text-align: center; border-radius: 1cqw; box-shadow: inset -0.3cqw -0.3cqw 0px rgba(0,0,0,0.5), inset 0.3cqw 0.3cqw 0px rgba(255,255,255,0.2), 1cqw 1cqw 0 rgba(0,0,0,0.8); text-shadow: 0.2cqw 0.2cqw 0 #111; max-width: 80%; word-wrap: break-word;">TANGKAP BUAH!</div>
                </div>
                <div class="ar-hud">
                    <div class="ar-score-box">Buah Terkumpul: <span id="m1-ar-score-txt">0 / 20</span></div>
                    <button class="btn-close-mission" style="position: static; margin-left: auto;" onclick="abortMisi1AR()">X</button>
                </div>
                <div class="ar-frame"></div>
                <div id="m1-ar-face-guide" class="ar-face-guide">
                    <div class="face-guide-box">AREA AMAN<br>(JANGAN ADA TANGAN)</div>
                </div>
                <video id="m1-ar-video" class="ar-video" autoplay playsinline></video>
                <canvas id="m1-ar-hidden-canvas" style="display: none;"></canvas>
            </div>
        </div>

        <!-- STAGE 2: GUDANG MISTERI PAK KUMIS (5 KARUNG FULLSCREEN) -->
        <div id="stage-2" class="mission-stage" style="width: 100%; height: 100%;">
            <div class="ar-container" style="background-image: url('assets/background/kios-tahu.webp'); background-size: cover; background-position: center; position: relative;">
                
                <!-- Layar Pengantar Gudang -->
                <div id="intro-gudang" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 30; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h2 style="color: #f1c40f; font-size: 3.5cqw; text-shadow: 0.2cqw 0.2cqw 0 #000; margin-bottom: 1cqw;">GUDANG MISTERI PAK KUMIS</h2>
                    <p style="color: white; font-size: 1.8cqw; margin-bottom: 2cqw; text-align: center; padding: 0 5cqw;">Listrik padam membuat barang-barang Pak Kumis tercampur di dalam 5 karung!<br>Pilih karung di bawah, gunakan kelima alat indra untuk menyelidikinya, lalu tebak isinya!</p>
                    <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw;" onclick="document.getElementById('intro-gudang').style.display='none';">MULAI PENYELIDIKAN</button>
                </div>

                <button class="btn-close-mission" style="position: absolute; top: 1.5cqw; right: 1.5cqw; z-index: 35;" onclick="abortMisi1AR()">X</button>

                <!-- Wadah Karung di Bawah Layar -->
                <div style="position: absolute; bottom: 5%; width: 90%; display: flex; justify-content: space-around; align-items: flex-end; z-index: 20;">
                    <div class="m1-sack-wrapper" id="sack-wrap-0" onclick="openM1Sack(0)">
                        <svg class="m1-sack-svg" id="sack-0" viewBox="0 0 100 100">
                            <path fill="#b33900" d="M 30 15 h 40 v 10 h -10 v 10 h 20 v 60 h -60 v -60 h 20 v -10 h -10 z"/>
                            <path fill="#e67e22" d="M 35 15 h 30 v 10 h -10 v 10 h 15 v 55 h -50 v -55 h 15 v -10 h -10 z"/>
                            <rect x="35" y="30" width="30" height="5" fill="#f1c40f"/>
                            <text x="50" y="72" fill="#fff" font-family="monospace" font-size="25" font-weight="900" text-anchor="middle">1</text>
                        </svg>
                    </div>
                    <div class="m1-sack-wrapper" id="sack-wrap-1" onclick="openM1Sack(1)">
                        <svg class="m1-sack-svg" id="sack-1" viewBox="0 0 100 100">
                            <path fill="#b33900" d="M 30 15 h 40 v 10 h -10 v 10 h 20 v 60 h -60 v -60 h 20 v -10 h -10 z"/>
                            <path fill="#e67e22" d="M 35 15 h 30 v 10 h -10 v 10 h 15 v 55 h -50 v -55 h 15 v -10 h -10 z"/>
                            <rect x="35" y="30" width="30" height="5" fill="#f1c40f"/>
                            <text x="50" y="72" fill="#fff" font-family="monospace" font-size="25" font-weight="900" text-anchor="middle">2</text>
                        </svg>
                    </div>
                    <div class="m1-sack-wrapper" id="sack-wrap-2" onclick="openM1Sack(2)">
                        <svg class="m1-sack-svg" id="sack-2" viewBox="0 0 100 100">
                            <path fill="#b33900" d="M 30 15 h 40 v 10 h -10 v 10 h 20 v 60 h -60 v -60 h 20 v -10 h -10 z"/>
                            <path fill="#e67e22" d="M 35 15 h 30 v 10 h -10 v 10 h 15 v 55 h -50 v -55 h 15 v -10 h -10 z"/>
                            <rect x="35" y="30" width="30" height="5" fill="#f1c40f"/>
                            <text x="50" y="72" fill="#fff" font-family="monospace" font-size="25" font-weight="900" text-anchor="middle">3</text>
                        </svg>
                    </div>
                    <div class="m1-sack-wrapper" id="sack-wrap-3" onclick="openM1Sack(3)">
                        <svg class="m1-sack-svg" id="sack-3" viewBox="0 0 100 100">
                            <path fill="#b33900" d="M 30 15 h 40 v 10 h -10 v 10 h 20 v 60 h -60 v -60 h 20 v -10 h -10 z"/>
                            <path fill="#e67e22" d="M 35 15 h 30 v 10 h -10 v 10 h 15 v 55 h -50 v -55 h 15 v -10 h -10 z"/>
                            <rect x="35" y="30" width="30" height="5" fill="#f1c40f"/>
                            <text x="50" y="72" fill="#fff" font-family="monospace" font-size="25" font-weight="900" text-anchor="middle">4</text>
                        </svg>
                    </div>
                    <div class="m1-sack-wrapper" id="sack-wrap-4" onclick="openM1Sack(4)">
                        <svg class="m1-sack-svg" id="sack-4" viewBox="0 0 100 100">
                            <path fill="#b33900" d="M 30 15 h 40 v 10 h -10 v 10 h 20 v 60 h -60 v -60 h 20 v -10 h -10 z"/>
                            <path fill="#e67e22" d="M 35 15 h 30 v 10 h -10 v 10 h 15 v 55 h -50 v -55 h 15 v -10 h -10 z"/>
                            <rect x="35" y="30" width="30" height="5" fill="#f1c40f"/>
                            <text x="50" y="72" fill="#fff" font-family="monospace" font-size="25" font-weight="900" text-anchor="middle">5</text>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Modal Pop-up Investigasi Karung -->
            <div id="m1-inspect-modal" class="m1-modal-overlay">
                <div class="m1-modal-box">
                    <h3 id="m1-inspect-title" style="color: #fbc531; margin-top: 0; font-size: 1.8cqw; margin-bottom: 1cqw;">INVESTIGASI KARUNG</h3>
                    
                    <div class="m1-modal-sack-target" id="m1-sack-drop-target">
                        <svg style="width: 100%; height: 100%; filter: drop-shadow(0.4cqw 0.4cqw 0 rgba(0,0,0,0.7));" viewBox="0 0 100 100">
                            <path fill="#b33900" d="M 30 15 h 40 v 10 h -10 v 10 h 20 v 60 h -60 v -60 h 20 v -10 h -10 z"/>
                            <path fill="#e67e22" d="M 35 15 h 30 v 10 h -10 v 10 h 15 v 55 h -50 v -55 h 15 v -10 h -10 z"/>
                            <rect x="35" y="30" width="30" height="5" fill="#f1c40f"/>
                            <text x="50" y="72" fill="#fff" font-family="monospace" font-size="30" font-weight="900" text-anchor="middle">?</text>
                        </svg>
                    </div>

                    <p style="color: #dfe6e9; font-size: 1.3cqw; margin-bottom: 1.5cqw; text-align: center;">Geser alat pancaindra ke arah karung di atas untuk menyelidikinya!</p>

                    <div class="m1-inspect-tools" id="m1-inspect-tools-container">
                        <img src="assets/item/alat-mata.webp" class="m1-tool-btn" data-sense="mata" onclick="triggerSackInspectionClick('mata', this)">
                        <img src="assets/item/alat-telinga.webp" class="m1-tool-btn" data-sense="telinga" onclick="triggerSackInspectionClick('telinga', this)">
                        <img src="assets/item/alat-hidung.webp" class="m1-tool-btn" data-sense="hidung" onclick="triggerSackInspectionClick('hidung', this)">
                        <img src="assets/item/alat-lidah.webp" class="m1-tool-btn" data-sense="lidah" onclick="triggerSackInspectionClick('lidah', this)">
                        <img src="assets/item/alat-kulit.webp" class="m1-tool-btn" data-sense="kulit" onclick="triggerSackInspectionClick('kulit', this)">
                    </div>

                    <div id="m1-inspect-quiz" style="width: 100%; display: none; flex-direction: column; align-items: center;">
                        <p style="font-weight: bold; margin-bottom: 1cqw; font-size: 1.4cqw; text-align: center;">Berdasarkan penyelidikan panca indra, apa benda di dalam karung ini?</p>
                        <div class="explore-grid" id="m1-inspect-opts" style="width: 100%;"></div>
                    </div>
                    <button class="btn btn-menu" style="margin-top: 1.5cqw; padding: 0.8cqw 2cqw;" onclick="closeM1Modal()">TUTUP</button>
                </div>
            </div>
        </div>

        <!-- STAGE M1 COLOR DETECTIVE (DETEKTIF WARNA PENUTUP) -->
        <div id="stage-m1-color" class="mission-stage" style="width: 100%; height: 100%;">
            <div id="m1-ar-color-area" class="ar-container" style="display: none;">
                <div id="m1-ar-color-overlay-wrapper" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none; align-items: center; justify-content: center; z-index: 50; pointer-events: none;">
                    <div id="m1-ar-color-overlay" style="background: #2f3542; border: 0.6cqw solid #fbc531; padding: 2cqw 4cqw; color: #fff; font-size: 3cqw; font-weight: 900; text-align: center; border-radius: 1cqw; box-shadow: inset -0.3cqw -0.3cqw 0px rgba(0,0,0,0.5), inset 0.3cqw 0.3cqw 0px rgba(255,255,255,0.2), 1cqw 1cqw 0 rgba(0,0,0,0.8); text-shadow: 0.2cqw 0.2cqw 0 #111; max-width: 80%; word-wrap: break-word;">CARI WARNA!</div>
                </div>
                <div class="ar-hud">
                    <div class="ar-score-box">Target: <span id="m1-ar-color-target-txt">MEMUAT...</span></div>
                    <button class="btn-close-mission" style="position: static; margin-left: auto;" onclick="abortMisi1Color()">X</button>
                </div>
                <div class="ar-color-target"></div>
                <div id="m1-ar-detected-color" style="position: absolute; top: 66%; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: #fff; padding: 0.5cqw 1.5cqw; border-radius: 0.5cqw; font-size: 1.5cqw; font-weight: bold; z-index: 10; border: 0.2cqw solid #fff; pointer-events: none; text-shadow: 0.1cqw 0.1cqw 0 #000; white-space: nowrap;">Terdeteksi: -</div>
                <div class="ar-color-timer-container">
                    <div id="m1-ar-color-timer-fill" class="ar-color-timer-fill"></div>
                </div>
                <video id="m1-ar-color-video" class="ar-video" autoplay playsinline></video>
                <canvas id="m1-ar-color-hidden-canvas" style="display: none;"></canvas>
            </div>
        </div>

        <!-- STAGE 3: MEMBERSIHKAN LORONG PASAR (CARI SAMPAH & MENGHINDARI BUAH) -->
        <div id="stage-3" class="mission-stage" style="width: 100%; height: 100%;">
            <div class="ar-container" style="background-image: url('assets/background/lorong-pasar.webp'); background-size: cover; background-position: center; position: relative;">
                
                <div id="intro-sampah" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 30; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h2 style="color: #2ed573; font-size: 3.5cqw; text-shadow: 0.2cqw 0.2cqw 0 #000; margin-bottom: 1cqw;">OPERASI BERSIH PASAR</h2>
                    <p style="color: white; font-size: 1.8cqw; margin-bottom: 2cqw; text-align: center; padding: 0 5cqw;">Lorong pasar terlihat kotor! Gunakan ketajaman MATAMU untuk mencari 10 kantong sampah kecil yang tersembunyi.<br>Abaikan buah-buahan segar yang terjatuh, fokus temukan sampahnya!</p>
                    <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw;" onclick="startCariSampah()">MULAI MENCARI</button>
                </div>

                <div class="ar-hud">
                    <div class="ar-score-box">Sampah Ditemukan: <span id="m1-sampah-score">0 / 10</span></div>
                    <button class="btn-close-mission" style="position: static; margin-left: auto;" onclick="abortMisi1CariSampah()">X</button>
                </div>

                <div id="sampah-game-area" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10;">
                    <!-- Sampah dan pengecoh akan di-generate otomatis secara acak oleh Javascript di sini -->
                </div>
            </div>
        </div>

        <!-- STAGE 4: UJIAN AKHIR PASAR KANDANGAN (BOSS) -->
        <div id="stage-4" class="mission-stage">
            <h3 class="stage-title" style="color: #ff4757;">TAHAP 4: UJIAN PASAR KANDANGAN</h3>
            <div id="boss-m1-intro" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box" style="font-size: 1.6cqw; margin-top: 2cqw;">Sebagai penghargaan karena telah membantu membersihkan pasar, Pak Kumis memberikan tantangan terakhir!<br><br>Jawab 10 pertanyaan dasar tentang Pancaindra ini untuk mendapatkan hadiah Koin Emas dan menyelesaikan Misi 1 secara resmi.</p>
                <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw; background: #ff4757; margin-top: 2cqw; box-shadow: 0.4cqw 0.4cqw 0 #111;" onclick="document.getElementById('boss-m1-intro').style.display='none'; document.getElementById('boss-m1-container').style.display='flex'; currentMisi1BossIndex = 0; loadMisi1BossQuestion();">MULAI UJIAN AKHIR!</button>
            </div>
            <div id="boss-m1-container" style="display: none; flex-direction: column; align-items: center; width: 100%; margin-top: 2cqw;">
                <div id="quiz-question" class="ta-card" style="width: 90%; font-size: 1.5cqw; margin-bottom: 2cqw;">Memuat Pertanyaan...</div>
                <div id="quiz-options" class="explore-grid" style="width: 90%;"></div>
            </div>
        </div>
    `;

    // Pasang tombol Tab Melayang untuk semua sub-misi
    floatingNext.innerHTML = `
        <button class="btn btn-play btn-floating-next" id="btn-next-m1mata" style="display: none;" onclick="kembaliKeMapM1()">KEMBALI KE PASAR</button>
        <button class="btn btn-play btn-floating-next" id="btn-next-m1telinga" style="display: none;" onclick="kembaliKeMapM1()">KEMBALI KE PASAR</button>
        <button class="btn btn-play btn-floating-next" id="btn-next-m1hidung" style="display: none;" onclick="kembaliKeMapM1()">KEMBALI KE PASAR</button>
        <button class="btn btn-play btn-floating-next" id="btn-next-m1lidah" style="display: none;" onclick="kembaliKeMapM1()">KEMBALI KE PASAR</button>
        <button class="btn btn-play btn-floating-next" id="btn-next-m1kulit" style="display: none;" onclick="kembaliKeMapM1()">KEMBALI KE PASAR</button>
        <button class="btn btn-play btn-floating-next" id="btn-next-2" style="display: none;" onclick="exitMissionScreen()">SELESAI</button>
    `;

    window.showM1TargetOverlay = function(text) {
        const wrapper = document.getElementById('m1-target-overlay-wrapper');
        const overlay = document.getElementById('m1-target-overlay');
        if(!wrapper || !overlay) return;
        
        overlay.innerText = text;
        wrapper.style.display = 'flex';
        overlay.classList.remove('animate-pop');
        void overlay.offsetWidth;
        overlay.classList.add('animate-pop');
        
        setTimeout(() => { wrapper.style.display = 'none'; }, 2500);
    };

    // Fungsi ini disimpan dan baru akan dipanggil nanti setelah pemain menekan tombol mulai petualangan
    window.triggerMataPopup = function() {
        if (window.m1Progress && window.m1Progress.mata) return; // Pengaman ekstra agar tidak muncul dua kali

        const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
        showCustomModal("GELAP GULITA!", "Cari dan sentuh pancaindra yang digunakan manusia untuk melihat agar layar tidak gelap!", warnIcon, "alert", () => {
            window.showM1TargetOverlay("CARI ALAT PENGLIHAT!");
        });
    };

    // --- LOGIKA FLASHLIGHT (SENTER) ---

    // --- LOGIKA FLASHLIGHT (SENTER) ---
    window.m1Progress = { mata: false, telinga: false, hidung: false, lidah: false, kulit: false };
    const mapArea = document.getElementById('m1-map-area');
    const darkLayer = document.getElementById('m1-dark-layer');

    const updateFlashlightM1 = (e) => {
        if (!darkLayer || darkLayer.style.display === 'none') return;
        const rect = mapArea.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;
        darkLayer.style.setProperty('--x', x + '%');
        darkLayer.style.setProperty('--y', y + '%');
    };
    mapArea.addEventListener('mousemove', updateFlashlightM1);
    mapArea.addEventListener('touchmove', updateFlashlightM1, {passive: true});

    // --- DATABASE KUIS HOTS ---
    const qsMata = [
        { q: "Ibu menyuruhmu membeli pisang yang sudah matang. Bagaimana caramu membedakan pisang matang dan mentah dari kejauhan tanpa menyentuhnya?", opts: [{t:"Mencium aromanya", c:false}, {t:"Melihat perbedaan warna kuning dan hijau", c:true}, {t:"Mendengarkan suaranya", c:false}, {t:"Merasakan suhu kulit pisang", c:false}] },
        { q: "Kamu sedang berjalan dan melihat ada genangan air licin di depanmu. Pesan kilat apa yang dikirimkan mata ke otakmu?", opts: [{t:"Segera menghindar agar tidak terpeleset", c:true}, {t:"Langsung meminumnya", c:false}, {t:"Tutup mata rapat-rapat", c:false}, {t:"Menginjaknya dengan kuat", c:false}] },
        { q: "Mengapa di tempat yang sangat gelap gulita seperti tadi, matamu tidak bisa melihat benda dengan jelas?", opts: [{t:"Karena mata sedang tidur", c:false}, {t:"Karena mata butuh cahaya untuk memantulkan bayangan", c:true}, {t:"Karena mata kita rusak", c:false}, {t:"Karena benda tersebut transparan", c:false}] }
    ];
    let qMataIdx = 0;

    window.loadQMata = function() {
        if (qMataIdx >= qsMata.length) {
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            showCustomModal("LULUS KUIS MATA!", "Hebat! Kamu menguasai fungsi mata dengan baik.", checkIcon, "alert", () => triggerPostDialog('m1mata'));
            return;
        }
        let item = qsMata[qMataIdx];
        document.getElementById('m1-mata-q').innerText = `Kasus ${qMataIdx+1}/3:\n\n${item.q}`;
        let grid = document.getElementById('m1-mata-opts');
        grid.innerHTML = '';
        let shuffled = [...item.opts].sort(() => Math.random() - 0.5);
        
        shuffled.forEach(opt => {
            let btn = document.createElement('button');
            btn.className = 'btn-explore';
            btn.innerText = opt.t;
            btn.onclick = function() {
                if(btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
                if(opt.c) {
                    btn.classList.add('btn-correct');
                    if(typeof sfxBenar !== 'undefined') { sfxBenar.currentTime=0; sfxBenar.play(); }
                    addScore(10);
                    setTimeout(() => { qMataIdx++; loadQMata(); }, 600);
                } else {
                    btn.classList.add('btn-wrong');
                    if(typeof sfxSalah !== 'undefined') { sfxSalah.currentTime=0; sfxSalah.play(); }
                    reduceLife();
                    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                    showCustomModal("SALAH!", "Coba analisis lagi situasinya! (Nyawa -1)", lockIcon, "error");
                }
            };
            grid.appendChild(btn);
        });
    };

    const qsHidung = [
        { q: "Kamu mencium bau asap yang sangat menyengat dari kios sebelah. Apa arti bau tersebut bagimu?", opts: [{t:"Ada orang sedang mandi", c:false}, {t:"Tanda bahaya, mungkin ada api atau kebakaran", c:true}] },
        { q: "Bagaimana caramu mengetahui bahwa tahu di keranjang Pak Kumis sudah basi tanpa harus memakannya?", opts: [{t:"Mencium aroma asam dan busuk dari tahu", c:true}, {t:"Mendengarkan suara tahu", c:false}] },
        { q: "Saat kamu sedang sakit pilek berat, mengapa wangi masakan Ibu jadi tidak tercium?", opts: [{t:"Karena lendir menutupi saraf pembau di dalam hidung", c:true}, {t:"Karena hidung kita sedang libur", c:false}] }
    ];
    let qHidungIdx = 0;

    window.loadQHidung = function() {
        if (qHidungIdx >= qsHidung.length) {
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            showCustomModal("LULUS KUIS HIDUNG!", "Penciuman analisis yang tajam!", checkIcon, "alert", () => triggerPostDialog('m1hidung'));
            return;
        }
        let item = qsHidung[qHidungIdx];
        document.getElementById('m1-hidung-q').innerText = `Kasus ${qHidungIdx+1}/3:\n\n${item.q}`;
        let grid = document.getElementById('m1-hidung-opts');
        grid.innerHTML = '';
        let shuffled = [...item.opts].sort(() => Math.random() - 0.5);
        
        shuffled.forEach(opt => {
            let btn = document.createElement('button');
            btn.className = 'btn-explore';
            btn.innerText = opt.t;
            btn.onclick = function() {
                if(btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
                if(opt.c) {
                    btn.classList.add('btn-correct');
                    if(typeof sfxBenar !== 'undefined') { sfxBenar.currentTime=0; sfxBenar.play(); }
                    addScore(10);
                    setTimeout(() => { qHidungIdx++; loadQHidung(); }, 600);
                } else {
                    btn.classList.add('btn-wrong');
                    if(typeof sfxSalah !== 'undefined') { sfxSalah.currentTime=0; sfxSalah.play(); }
                    reduceLife();
                    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                    showCustomModal("SALAH!", "Coba analisis lagi situasinya! (Nyawa -1)", lockIcon, "error");
                }
            };
            grid.appendChild(btn);
        });
    };

    const qsLidah = [
        { q: "Jika kamu meminum perasan jeruk nipis murni tanpa gula, lidahmu akan mengecap rasa manis yang lezat.", c: false },
        { q: "Meminum teh yang baru saja mendidih sangat berbahaya karena bisa membuat saraf lidah melepuh dan mati rasa sementara.", c: true },
        { q: "Lidah manusia hanya berfungsi untuk mengecap makanan, dan tidak ada hubungannya sama sekali dengan suara saat kita berbicara.", c: false }
    ];
    let qLidahIdx = 0;

    window.loadQLidah = function() {
        if (qLidahIdx >= qsLidah.length) {
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            showCustomModal("LULUS KUIS LIDAH!", "Lidahmu sangat peka terhadap informasi!", checkIcon, "alert", () => triggerPostDialog('m1lidah'));
            return;
        }
        document.getElementById('m1-lidah-q').innerText = `Pernyataan ${qLidahIdx+1}/3:\n\n${qsLidah[qLidahIdx].q}`;
    };

    window.jawabM1Lidah = function(ans) {
        let item = qsLidah[qLidahIdx];
        if (ans === item.c) {
            if(typeof sfxBenar !== 'undefined') { sfxBenar.currentTime=0; sfxBenar.play(); }
            addScore(10);
            qLidahIdx++; loadQLidah();
        } else {
            if(typeof sfxSalah !== 'undefined') { sfxSalah.currentTime=0; sfxSalah.play(); }
            reduceLife();
            const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
            showCustomModal("SALAH!", "Pernyataan itu " + (item.c ? "BENAR" : "SALAH") + "! (Nyawa -1)", lockIcon, "error");
        }
    };

    // --- LOGIKA KLIK OBJEK & PINDAH LAYAR ---
    window.hoClickM1 = function(type) {
        if (m1Progress[type]) return; 

        if (type !== 'mata' && !m1Progress.mata) {
            showCustomModal("TERLALU GELAP!", "Itu bukan Mata! Temukan alat-mata terlebih dahulu agar kita bisa melihat sekitar!", mapIcon, "alert");
            return;
        }
        if (type !== 'mata' && type !== 'telinga' && !m1Progress.telinga) {
            showCustomModal("TERLALU SEPI!", "Itu bukan Telinga! Temukan alat-telinga terlebih dahulu agar kita bisa mendengar suara kehidupan pasar!", mapIcon, "alert");
            return;
        }

        m1Progress[type] = true;
        document.getElementById('ho-' + type).classList.add('found');
        if(typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime=0; sfxTangkap.play(); }
        
        const removeFullscreen = () => {
            document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
            document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
            document.querySelector('.mission-header').style.display = 'flex';
        };

        if (type === 'mata') {
            document.getElementById('m1-dark-layer').style.opacity = '0';
            setTimeout(() => document.getElementById('m1-dark-layer').style.display = 'none', 500);
            
            const dialogMata = [
                { text: "Kerja bagus! Cahaya sudah kembali. Matamu menangkap pantulan cahaya sehingga kamu bisa mengenali bentuk dan warna benda.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                { text: "Sekarang, buktikan kehebatan analisismu dalam kuis kasus mata ini!", mood: "neutral", name: "Petualang Nagata", npc: "npc1" }
            ];
            startVnDialog(dialogMata, "Petualang Nagata", "npc1", () => {
                removeFullscreen(); nextMissionStage('m1mata'); qMataIdx = 0; loadQMata();
            });
        }
        else if (type === 'telinga') {
            window.bgmPasarM1.play().catch(e=>console.log(e));
            bgmMission.play().catch(e=>console.log(e));
            const dialogTelinga = [
                { text: "Wah, ramai sekali! Telingamu menangkap gelombang suara yang merambat di udara dari segala arah.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                { text: "Berkat telinga, kamu tahu apa yang terjadi di sekitarmu bahkan dari arah belakang yang buta! Ayo hubungkan kejadian suara ini!", mood: "neutral", name: "Petualang Nagata", npc: "npc1" }
            ];
            startVnDialog(dialogTelinga, "Petualang Nagata", "npc1", () => {
                removeFullscreen(); nextMissionStage('m1telinga');
            });
        }
        else if (type === 'hidung') {
            const dialogHidung = [
                { text: "Ini dia Hidung! Sensor penyaring udara ini memiliki saraf khusus di bagian atas rongganya.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                { text: "Ia bertugas mendeteksi partikel wangi atau bau busuk di udara. Mari kita uji ketajaman penciumanmu!", mood: "neutral", name: "Petualang Nagata", npc: "npc1" }
            ];
            startVnDialog(dialogHidung, "Petualang Nagata", "npc1", () => {
                removeFullscreen(); nextMissionStage('m1hidung'); qHidungIdx = 0; loadQHidung();
            });
        }
        else if (type === 'lidah') {
            const dialogLidah = [
                { text: "Nyam! Lidahmu dipenuhi bintik-bintik pengecap bernama papila.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                { text: "Ia membantumu membedakan makanan enak dan berbahaya, sekaligus membantumu berbicara dengan jelas. Buktikan logikamu!", mood: "neutral", name: "Petualang Nagata", npc: "npc1" }
            ];
            startVnDialog(dialogLidah, "Petualang Nagata", "npc1", () => {
                removeFullscreen(); nextMissionStage('m1lidah'); qLidahIdx = 0; loadQLidah();
            });
        }
        else if (type === 'kulit') {
            const dialogKulit = [
                { text: "Berhasil! Kulit adalah selimut pelindung yang peka untuk seluruh tubuhmu.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                { text: "Ujung saraf di bawahnya adalah alarm super cepat untuk merasakan sentuhan, tekstur, serta suhu. Cocokkan situasi berikut!", mood: "neutral", name: "Petualang Nagata", npc: "npc1" }
            ];
            startVnDialog(dialogKulit, "Petualang Nagata", "npc1", () => {
                removeFullscreen(); nextMissionStage('m1kulit');
            });
        }
    };

    window.kembaliKeMapM1 = function() {
        if (m1Progress.mata && m1Progress.telinga && m1Progress.hidung && m1Progress.lidah && m1Progress.kulit) {
            // AKTIFKAN KEMBALI MODE FULLSCREEN UNTUK GAME AR
            document.querySelector('.mission-header').style.display = 'none';
            document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
            document.querySelector('.mission-full-box').classList.add('fullscreen-mode');

            // Pindah ke stage layar AR
            nextMissionStage('m1-ar');
            
            // Jeda sejenak, lalu munculkan dialog pengantar dari Nagata
            setTimeout(() => {
                const dialogIntroAR = [
                    { text: "Luar biasa! Kamu berhasil menemukan dan menguasai kelima alat pancaindra.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                    { text: "Sebelum kita membantu Pak Kumis, ayo kita lakukan pemanasan refleks mata dan otot tanganmu terlebih dahulu!", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                    { text: "Sapu tanganmu di udara di depan kamera untuk menangkap buah. Hindari buah jebakannya! Kumpulkan 20 buah saja ya.", mood: "warning", name: "Petualang Nagata", npc: "npc1" }
                ];
                startVnDialog(dialogIntroAR, "Petualang Nagata", "npc1", () => {
                    startMisi1AR(); // Nyalakan kamera setelah obrolan selesai
                });
            }, 500);
        } else {
            document.querySelector('.mission-header').style.display = 'none';
            document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
            document.querySelector('.mission-full-box').classList.add('fullscreen-mode');
            nextMissionStage(1);

            if (m1Progress.mata && !m1Progress.telinga) {
                setTimeout(() => { 
                    const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
                    showCustomModal("SUNYI SENYAP!", "Cari dan sentuh pancaindra yang digunakan manusia untuk mendengar agar pasar kembali bersuara!", warnIcon, "alert", () => {
                        window.showM1TargetOverlay("CARI ALAT PENDENGAR!");
                    });
                }, 500);
            } else if (m1Progress.mata && m1Progress.telinga) {
                setTimeout(() => { window.showM1TargetOverlay("CARI SISA ALAT SENSOR!"); }, 500);
            }
        }
    };

    // --- LOGIKA MINI GAME AR (INTERMEZZO M1) ---
    window.abortMisi1AR = function() {
        bgmBoss.pause();
        bgmBoss.currentTime = 0;
        if (typeof window.bgmPasarM1 !== 'undefined' && window.bgmPasarM1) { window.bgmPasarM1.pause(); window.bgmPasarM1.currentTime = 0; }
        if (window.arStream) {
            window.arStream.getTracks().forEach(track => track.stop());
            window.arStream = null;
        }
        window.arActive = false;
        clearInterval(window.arLoop);
        clearInterval(window.arSpawner);
        
        document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
        document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
        document.querySelector('.mission-header').style.display = 'flex';
        exitMissionScreen();
    };

    window.startMisi1AR = function() {
        document.getElementById('m1-ar-game-area').style.display = 'flex';
        
        bgmMission.pause();
        if (typeof window.bgmPasarM1 !== 'undefined' && window.bgmPasarM1) window.bgmPasarM1.pause();
        bgmBoss.currentTime = 0;
        bgmBoss.play().catch(e => console.log(e));

        const video = document.getElementById('m1-ar-video');
        const canvas = document.getElementById('m1-ar-hidden-canvas');
        if (!video || !canvas) return;
        
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        canvas.width = 160; 
        canvas.height = 90;

        let previousImg = null;
        let arBoxesData = [];
        let arScore = 0;
        window.arActive = false; 

        // Target buah acak, dengan jebakan
        let targetPhases = [
            { fruits: ['apel'], text: 'HINDARI BUAH APEL!' },
            { fruits: ['mangga'], text: 'HINDARI BUAH MANGGA!' },
            { fruits: ['pisang'], text: 'HINDARI BUAH PISANG!' },
            { fruits: ['jeruk'], text: 'HINDARI BUAH JERUK!' },
            { fruits: ['semangka'], text: 'HINDARI BUAH SEMANGKA!' }
        ].sort(() => Math.random() - 0.5);
        
        let currentPhaseIndex = 0;

        function showPhaseOverlay(phase) {
            window.arActive = false; 
            const wrapper = document.getElementById('m1-ar-target-overlay-wrapper');
            const overlay = document.getElementById('m1-ar-target-overlay');
            overlay.innerText = phase.text;
            wrapper.style.display = 'flex';
            overlay.classList.remove('animate-pop');
            void overlay.offsetWidth; 
            overlay.classList.add('animate-pop');

            try {
                if(typeof audioArCmd !== 'undefined' && audioArCmd[phase.text]) {
                    audioArCmd[phase.text].currentTime = 0;
                    audioArCmd[phase.text].play().catch(() => {});
                }
            } catch (e) {}

            setTimeout(() => {
                wrapper.style.display = 'none';
                window.arActive = true; 
            }, 2500); 
        }

        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
        .then(stream => {
            window.arStream = stream;
            video.srcObject = stream;
            video.play();
            
            const faceGuide = document.getElementById('m1-ar-face-guide');
            if (faceGuide) {
                faceGuide.style.opacity = '1';
                setTimeout(() => { faceGuide.style.opacity = '0'; }, 4000);
            }
            
            setTimeout(() => { showPhaseOverlay(targetPhases[currentPhaseIndex]); }, 500);
            
            let lastLane = -1;

            window.arSpawner = setInterval(() => {
                if (!window.arActive) return;
                const fruits = ['apel', 'pisang', 'jeruk', 'anggur', 'mangga', 'semangka', 'stroberi'];
                let type = fruits[Math.floor(Math.random() * fruits.length)];
                
                let boxEl = document.createElement('div');
                boxEl.className = 'ar-fruit ' + type;
                
                let lane;
                do { lane = Math.floor(Math.random() * 6); } while (lane === lastLane);
                lastLane = lane;
                
                let startX = 10 + (lane * 14); 
                boxEl.style.left = startX + '%';
                boxEl.style.top = '-15%';
                document.getElementById('m1-ar-game-area').appendChild(boxEl);
                
                arBoxesData.push({
                    el: boxEl, x: startX, y: -15, type: type, isHit: false,
                    speed: Math.random() * 0.6 + 0.8 
                });
            }, 1200);

            window.arLoop = setInterval(() => {
                if (!window.arActive) return;

                for (let i = arBoxesData.length - 1; i >= 0; i--) {
                    const box = arBoxesData[i];

                    box.y += box.speed;
                    box.el.style.top = box.y + '%';

                    if (box.y > 110) {
                        box.el.remove();
                        arBoxesData.splice(i, 1);
                    }
                }
                
                try {
                    ctx.drawImage(video, 0, 0, 160, 90);
                    let currentImg = ctx.getImageData(0, 0, 160, 90);
                    
                    if (previousImg) {
                        arBoxesData.forEach(box => {
                            if (box.isHit || box.y < 0 || box.y > 90) return;
                            
                            let canvasX = Math.floor((1 - (box.x/100) - 0.08) * 160); 
                            let canvasY = Math.floor((box.y/100) * 90);
                            
                            let motionPx = 0, totalPx = 0;
                            for (let y = canvasY-5; y < canvasY + 25; y++) {
                                for (let x = canvasX-5; x < canvasX + 25; x++) {
                                    if (x >= 0 && x < 160 && y >= 0 && y < 90) {
                                        let idx = (y * 160 + x) * 4;
                                        let r = currentImg.data[idx];
                                        let g = currentImg.data[idx+1];
                                        let b = currentImg.data[idx+2];
                                        
                                        let rDiff = Math.abs(r - previousImg.data[idx]);
                                        let gDiff = Math.abs(g - previousImg.data[idx+1]);
                                        let bDiff = Math.abs(b - previousImg.data[idx+2]);
                                        
                                        if (rDiff + gDiff + bDiff > 90) { 
                                            let isSkin = (r > 60 && g > 35 && b > 15 && r > g && r > b && Math.abs(r - g) > 10);
                                            if (isSkin) {
                                                let isHead = (x > 60 && x < 100 && y > 15 && y < 55);
                                                let isBody = (x > 40 && x < 120 && y >= 55);
                                                if (!(isHead || isBody)) motionPx++;
                                            }
                                        }
                                        totalPx++;
                                    }
                                }
                            }
                            
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
            showCustomModal("KAMERA DIBLOKIR!", "Tantangan ini butuh akses kamera. Izinkan akses kamera lalu ulangi!", warnIcon, "error", () => window.abortMisi1AR());
        });

        function handleARHit(box) {
            const currentTarget = targetPhases[currentPhaseIndex];
            const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;

            if (!currentTarget.fruits.includes(box.type)) {
                box.el.classList.add('ar-effect');
                setTimeout(() => box.el.remove(), 200);
                
                arScore++;
                document.getElementById('m1-ar-score-txt').innerText = `${arScore} / 20`;
                addScore(10, true); 

                if (arScore >= 20) {
                    bgmBoss.pause();
                    bgmBoss.currentTime = 0;
                    window.arActive = false;
                    
                    if (window.arStream) {
                        window.arStream.getTracks().forEach(track => track.stop());
                        window.arStream = null;
                    }
                    clearInterval(window.arLoop);
                    clearInterval(window.arSpawner);

                    showCustomModal("PEMANASAN SELESAI!", "Hebat! Refleks motorik dan penglihatanmu sudah sinkron. Saatnya menuju ke Fase 2 untuk membantu Pak Kumis!", checkIcon, "alert", () => {
                        // KITA TETAP PERTAHANKAN FULLSCREEN UNTUK STAGE 2
                        
                        // Matikan AR view, munculkan Stage 2
                        document.getElementById('m1-ar-game-area').style.display = 'none';
                        
                        // Nyalakan kembali musik misi (music-mission) dan suara pasar secara berdampingan
                        if (typeof window.bgmPasarM1 !== 'undefined' && window.bgmPasarM1) window.bgmPasarM1.play().catch(e => console.log(e));
                        bgmMission.currentTime = 0;
                        bgmMission.play().catch(e => console.log(e));
                        
                        nextMissionStage(2); 
                    });

                } else if (arScore % 5 === 0 && currentPhaseIndex < targetPhases.length - 1) {
                    currentPhaseIndex++;
                    showPhaseOverlay(targetPhases[currentPhaseIndex]);
                }
            } else {
                reduceLife(true); 
                window.arActive = false; 
                const expected = currentTarget.text.replace('HINDARI ', '').replace('!', '');
                
                showCustomModal("AWAS JEBAKAN!", `Fokuskan matamu! Kamu harus menghindari: ${expected}\\n(Nyawa Berkurang 1)`, lockIcon, "error", () => {
                    if (chapterLives[currentChapter] > 0) {
                        setTimeout(() => { window.arActive = true; }, 1500);
                    } else {
                        window.abortMisi1AR(); 
                    }
                });
            }
        }
    };

    // --- DATABASE & LOGIKA FASE 2 (GUDANG MISTERI 5 KARUNG) ---
    window.m1SacksData = [
        { id: 'tahu_segar', img: 'assets/item/tahu-taqwa.webp', name: 'Tahu Takwa', 
          desc: { mata: "Warnanya kuning pekat khas Kediri dan berbentuk kotak rapi.", hidung: "Tercium aroma gurih kunyit segar yang khas.", kulit: "Teksturnya padat, kenyal, dan kokoh saat dipegang.", lidah: "Rasanya gurih dan lezat, sangat cocok untuk lauk.", telinga: "Tidak mengeluarkan suara apapun." },
          correctAnswer: "Tahu Takwa Segar", options: ["Tahu Takwa Segar", "Tahu Basi / Asam", "Buah Mangga", "Buah Jeruk"] },
        { id: 'tahu_busuk', img: 'assets/item/tahu-busuk.webp', name: 'Tahu Basi', 
          desc: { mata: "Warnanya pucat agak kehitaman dan bentuknya mulai hancur.", hidung: "Ugh! Tercium aroma asam dan bau busuk yang sangat menyengat.", kulit: "Teksturnya lembek, berlendir, dan mudah hancur saat diraba.", lidah: "Jangan dicicipi! Ini sudah basi dan berbahaya.", telinga: "Tidak mengeluarkan suara." },
          correctAnswer: "Tahu Basi / Asam", options: ["Tahu Takwa Segar", "Tahu Basi / Asam", "Buah Pisang", "Buah Jeruk"] },
        { id: 'mangga', img: 'assets/item/mangga.webp', name: 'Buah Mangga', 
          desc: { mata: "Kulit buahnya berwarna hijau kekuningan dengan bentuk lonjong.", hidung: "Tercium aroma buah harum yang manis.", kulit: "Kulitnya halus licin, daging buahnya terasa empuk saat matang.", lidah: "Mengecap rasa manis keasaman yang menyegarkan.", telinga: "Tidak ada suara." },
          correctAnswer: "Buah Mangga", options: ["Buah Mangga", "Buah Jeruk", "Buah Pisang", "Tahu Takwa Segar"] },
        { id: 'jeruk', img: 'assets/item/jeruk.webp', name: 'Buah Jeruk', 
          desc: { mata: "Bentuknya bulat dengan kulit berpori-pori kecil berwarna oranye.", hidung: "Tercium aroma segar khas buah jeruk.", kulit: "Permukaannya sedikit berpori dan agak melengkung bulat.", lidah: "Mengecap rasa asam manis yang segar di lidah.", telinga: "Tidak ada suara." },
          correctAnswer: "Buah Jeruk", options: ["Buah Mangga", "Buah Jeruk", "Tahu Basi / Asam", "Buah Pisang"] },
        { id: 'pisang', img: 'assets/item/pisang.webp', name: 'Buah Pisang', 
          desc: { mata: "Bentuknya panjang melengkung dengan warna kulit kuning cerah.", hidung: "Tercium aroma manis khas buah pisang matang.", kulit: "Tekstur kulitnya lembut saat dikupas, buahnya empuk.", lidah: "Mengecap rasa manis yang lembut.", telinga: "Tidak ada suara." },
          correctAnswer: "Buah Pisang", options: ["Buah Pisang", "Buah Mangga", "Buah Jeruk", "Tahu Takwa Segar"] }
    ];

    window.m1SacksCleared = [false, false, false, false, false];
    window.currentActiveSackIndex = null;
    window.m1SackInspectedSenses = new Set();

    window.openM1Sack = function(index) {
        if (window.m1SacksCleared[index]) return;
        window.currentActiveSackIndex = index;
        window.m1SackInspectedSenses.clear();

        document.getElementById('m1-inspect-title').innerText = `INVESTIGASI KARUNG ${index + 1}`;
        document.getElementById('m1-inspect-quiz').style.display = 'none';
        document.getElementById('m1-inspect-tools-container').style.display = 'flex';
        
        // Reset status tombol alat indra (hapus kelas hitam putih)
        document.querySelectorAll('.m1-tool-btn').forEach(btn => btn.classList.remove('used'));
        
        document.getElementById('m1-inspect-modal').style.display = 'flex';
    };

    // --- LOGIKA KLIK ALAT INDRA UNTUK INVESTIGASI KARUNG ---
    window.triggerSackInspectionClick = function(sense, toolElem) {
        if (toolElem.classList.contains('used')) return;
        toolElem.classList.add('used'); // Ubah ikon alat indra menjadi hitam putih

        let sackObj = window.m1SacksData[window.currentActiveSackIndex];
        let descText = sackObj.desc[sense];

        if (typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime = 0; sfxTangkap.play(); }

        window.m1SackInspectedSenses.add(sense);

        // Munculkan pernyataan dalam bentuk pop-up kustom game
        const senseIconSvg = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 5h2v2H7V5zm0 3h2v3H7V8z"/></svg>`;
        showCustomModal(`HASIL INDRA ${sense.toUpperCase()}`, descText, senseIconSvg, "alert", () => {
            // Setelah pop-up pernyataan ditutup, cek apakah kelima indra sudah digunakan
            if (window.m1SackInspectedSenses.size >= 5) {
                document.getElementById('m1-inspect-tools-container').style.display = 'none';
                document.getElementById('m1-inspect-quiz').style.display = 'flex';
                
                let optsBox = document.getElementById('m1-inspect-opts');
                optsBox.innerHTML = '';
                let shuffled = [...sackObj.options].sort(() => Math.random() - 0.5);
                
                shuffled.forEach(opt => {
                    let btn = document.createElement('button');
                    btn.className = 'btn-explore';
                    btn.innerText = opt;
                    btn.onclick = function() {
                        if (btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
                        if (opt === sackObj.correctAnswer) {
                            btn.classList.add('btn-correct');
                            if (typeof sfxBenar !== 'undefined') { sfxBenar.currentTime = 0; sfxBenar.play(); }
                            addScore(20);
                            
                            window.m1SacksCleared[window.currentActiveSackIndex] = true;
                            
                            // Ganti gambar karung menjadi gambar barang aslinya dengan efek animasi
                            let sackWrap = document.getElementById('sack-wrap-' + window.currentActiveSackIndex);
                            if (sackWrap) {
                                sackWrap.innerHTML = `<img src="${sackObj.img}" style="width: 12cqw; height: 12cqw; object-fit: contain; filter: drop-shadow(0.4cqw 0.4cqw 0px rgba(0,0,0,0.7)); animation: popIn 0.5s ease-out forwards;">`;
                            }

                            setTimeout(() => {
                                document.getElementById('m1-inspect-modal').style.display = 'none';
                                
                                // Cek apakah kelima karung sudah bersih semua
                                if (window.m1SacksCleared.every(val => val === true)) {
                                    const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2H8V4zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
                                    showCustomModal("GUDANG BERSIH!", "Luar biasa! Gudang Pak Kumis sudah rapi. Sekarang saatnya uji ketajaman mata terakhir!", checkIcon, "alert", () => {
                                        // Aktifkan mode layar penuh
                                        document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
                                        document.querySelector('.mission-full-box').classList.add('fullscreen-mode');
                                        document.querySelector('.mission-header').style.display = 'none';

                                        nextMissionStage('m1-color');
                                        
                                        setTimeout(() => {
                                            const dialogColorM1 = [
                                                { text: "Hebat! Semua karung berhasil diidentifikasi dengan benar.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                                                { text: "Sebagai penutup Misi 1, mari uji ketajaman MATAMU untuk mencari warna-warna benda di sekitar menggunakan pemindai kamera!", mood: "neutral", name: "Petualang Nagata", npc: "npc1" },
                                                { text: "Temukan 3 warna yang diminta dengan mengarahkan kamera ke benda nyata di sekitarmu!", mood: "warning", name: "Petualang Nagata", npc: "npc1" }
                                            ];
                                            startVnDialog(dialogColorM1, "Petualang Nagata", "npc1", () => {
                                                startM1ColorGame();
                                            });
                                        }, 500);
                                    });
                                }
                            }, 800);
                        } else {
                            btn.classList.add('btn-wrong');
                            if (typeof sfxSalah !== 'undefined') { sfxSalah.currentTime = 0; sfxSalah.play(); }
                            reduceLife();
                            const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                            showCustomModal("SALAH TEBAKAN!", "Bukan itu isinya! Analisis lagi catatan indramu. (Nyawa -1)", lockIcon, "error");
                        }
                    };
                    optsBox.appendChild(btn);
                });
            }
        });
    };

    window.closeM1Modal = function() {
        document.getElementById('m1-inspect-modal').style.display = 'none';
    };

    // --- LOGIKA GAME DETEKTIF WARNA (PENUTUP MISI 1) ---
    window.abortMisi1Color = function() {
        bgmBoss.pause();
        bgmBoss.currentTime = 0;
        if (window.arStream) {
            window.arStream.getTracks().forEach(track => track.stop());
            window.arStream = null;
        }
        window.arColorActive = false;
        clearInterval(window.arColorLoop);
        clearInterval(window.arColorTimer);
        
        document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
        document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
        document.querySelector('.mission-header').style.display = 'flex';
        exitMissionScreen();
    };

    window.startM1ColorGame = function() {
        document.getElementById('m1-ar-color-area').style.display = 'flex';
        
        bgmBoss.currentTime = 0;
        bgmBoss.play().catch(e => console.log(e));

        const video = document.getElementById('m1-ar-color-video');
        const canvas = document.getElementById('m1-ar-color-hidden-canvas');
        if (!video || !canvas) return;
        
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        canvas.width = 160; 
        canvas.height = 90;

        window.arColorActive = false;
        let timeRemaining = 30;
        let colorsFound = 0; 
        const targetWin = 3; // Cari 3 warna untuk menyelesaikan Misi 1
        
        const colors = [
            { name: 'KUNING', text: 'CARI BENDA WARNA KUNING (SEPERTI TAHU TAKWA)!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'KUNING') },
            { name: 'MERAH', text: 'CARI BENDA WARNA MERAH!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'MERAH') },
            { name: 'HIJAU', text: 'CARI BENDA WARNA HIJAU!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'HIJAU') },
            { name: 'BIRU', text: 'CARI BENDA WARNA BIRU!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'BIRU') },
            { name: 'PUTIH', text: 'CARI BENDA WARNA PUTIH!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'PUTIH') },
            { name: 'ORANYE', text: 'CARI BENDA WARNA ORANYE!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'ORANYE') },
            { name: 'COKELAT', text: 'CARI BENDA WARNA COKELAT!', rgbMatch: (r,g,b) => isColorMatchHSL(r,g,b, 'COKELAT') }
        ];
        
        let currentColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('m1-ar-color-target-txt').innerText = `${colorsFound}/${targetWin} - ${currentColor.name}`;
    
        function showColorOverlay(phaseText) {
            window.arColorActive = false;
            const overlayWrapper = document.getElementById('m1-ar-color-overlay-wrapper');
            const overlay = document.getElementById('m1-ar-color-overlay');
            
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
            timeRemaining = 30;
            const bar = document.getElementById('m1-ar-color-timer-fill');
            bar.style.width = '100%';
            bar.style.backgroundColor = '#2ed573';
            
            window.arColorTimer = setInterval(() => {
                if (!window.arColorActive) return;
                timeRemaining--;
                let pct = (timeRemaining / 30) * 100;
                bar.style.width = pct + '%';
                
                if (pct <= 50) bar.style.backgroundColor = '#ffa502';
                if (pct <= 20) bar.style.backgroundColor = '#ff4757';
                
                if (timeRemaining <= 0) {
                    window.arColorActive = false;
                    clearInterval(window.arColorTimer);
                    handleColorTimeout();
                }
            }, 1000);
        }

        navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } } })
        .then(stream => {
            window.arStream = stream;
            video.srcObject = stream;
            video.play();
            
            setTimeout(() => { showColorOverlay(currentColor.text); }, 500);
            
            let holdTime = 0;
            
            window.arColorLoop = setInterval(() => {
                if (!window.arColorActive) return;
                
                try {
                    ctx.drawImage(video, 0, 0, 160, 90);
                    let currentImg = ctx.getImageData(0, 0, 160, 90);
                    
                    let matchCount = 0;
                    let totalCount = 0;
                    let colorCounts = {};
                    colors.forEach(c => colorCounts[c.name] = 0);
                    
                    for (let y = 30; y < 60; y+=2) { 
                        for (let x = 50; x < 110; x+=2) {
                            let idx = (y * 160 + x) * 4;
                            let r = currentImg.data[idx];
                            let g = currentImg.data[idx+1];
                            let b = currentImg.data[idx+2];
                            
                            if (currentColor.rgbMatch(r,g,b)) {
                                matchCount++;
                            }
                            
                            for (let i = 0; i < colors.length; i++) {
                                if (colors[i].rgbMatch(r,g,b)) {
                                    colorCounts[colors[i].name]++;
                                    break;
                                }
                            }
                            totalCount++;
                        }
                    }
                    
                    let dominantColor = "-";
                    let maxCount = 0;
                    for (let cName in colorCounts) {
                        if (colorCounts[cName] > maxCount) {
                            maxCount = colorCounts[cName];
                            dominantColor = cName;
                        }
                    }
                    
                    let detectedTextEl = document.getElementById('m1-ar-detected-color');
                    
                    if (matchCount / totalCount > 0.05) {
                        holdTime += 200;
                        if (detectedTextEl) {
                            let sisaDetik = Math.ceil((3000 - holdTime) / 1000);
                            detectedTextEl.innerText = `TAHAN POSISI... ${sisaDetik}`;
                            detectedTextEl.style.color = "#2ed573";
                        }
                        
                        if (holdTime >= 3000) {
                            window.arColorActive = false; 
                            clearInterval(window.arColorTimer);
                            holdTime = 0;
                            handleColorSuccess();
                        }
                    } else {
                        holdTime = 0;
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
            }, 200);
        })
        .catch(err => {
            const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
            showCustomModal("KAMERA DIBLOKIR!", "Tantangan ini butuh akses kamera.", warnIcon, "error", () => window.abortMisi1Color());
        });
        
        function handleColorSuccess() {
            colorsFound++;
            const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
            
            if (colorsFound >= targetWin) {
                bgmBoss.pause();
                bgmBoss.currentTime = 0;
                
                // Matikan mesin kamera dan interval pemindai warna
                window.arColorActive = false;
                clearInterval(window.arColorLoop);
                clearInterval(window.arColorTimer);
                if (window.arStream) {
                    window.arStream.getTracks().forEach(track => track.stop());
                    window.arStream = null;
                }
                document.getElementById('m1-ar-color-area').style.display = 'none';

                addScore(50);
                showCustomModal("WARNA TERDETEKSI!", "BINGO! Matamu berhasil mendeteksi warna dengan sempurna. Mari kita ke lorong pasar untuk tugas selanjutnya!", checkIcon, "alert", () => {
                    document.getElementById('m1-ar-color-area').style.display = 'none';
                    nextMissionStage(3);
                    
                    setTimeout(() => {
                        const dialogSampahM1 = [
                            { text: "Luar biasa! Penyelidikan warnamu selesai dengan gemilang.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
                            { text: "Tetapi tunggu... lorong pasar terlihat sangat kotor karena banyak yang membuang sampah sembarangan.", mood: "sad", name: "Petualang Nagata", npc: "npc1" },
                            { text: "Gunakan ketelitian penglihatanmu untuk mencari 10 sampah kecil yang tersembunyi, lalu buang ke tempatnya. Abaikan buah-buahan yang masih segar ya!", mood: "warning", name: "Petualang Nagata", npc: "npc1" }
                        ];
                        startVnDialog(dialogSampahM1, "Petualang Nagata", "npc1", () => {
                            // Dialog selesai, pemain harus menekan "MULAI MENCARI" di layar
                        });
                    }, 500);
                });
            } else {
                addScore(20);
                showCustomModal("WARNA DITEMUKAN!", `Hebat! Benda warna ${currentColor.name} cocok. Lanjut ke target warna berikutnya!`, checkIcon, "alert", () => {
                    currentColor = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementById('m1-ar-color-target-txt').innerText = `${colorsFound}/${targetWin} - ${currentColor.name}`;
                    showColorOverlay(currentColor.text);
                });
            }
        }
        
        function handleColorTimeout() {
            reduceLife();
            const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
            showCustomModal("WAKTU HABIS!", "Waktumu habis mencari warna! (Nyawa Berkurang 1)", lockIcon, "error", () => {
                if (chapterLives[currentChapter] > 0) {
                    currentColor = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementById('m1-ar-color-target-txt').innerText = `${colorsFound}/${targetWin} - ${currentColor.name}`;
                    showColorOverlay(currentColor.text);
                } else {
                    window.abortMisi1Color();
                }
            });
        }
    };

    // --- LOGIKA GAME CARI SAMPAH (TAHAP 3 - PENUTUP) ---
    window.sampahM1Found = 0;
    
    // Kumpulan Aset Gambar Sampah (Gambar Acak Berulang)
    const asetSampah = [
        { img: 'sampah-botol.webp', msg: 'Kulit jarimu bisa merasakan permukaan botol plastik yang licin dan sedikit penyok saat mengambilnya.', title: 'RESPONS KULIT' },
        { img: 'sampah-jajan.webp', msg: 'Kresek! Telingamu mendengar suara nyaring saat bungkus jajan ringan ini diremas.', title: 'RESPONS TELINGA' },
        { img: 'sampah-kaleng.webp', msg: 'Terdengar denting logam yang cukup keras saat kaleng kosong ini berbenturan.', title: 'RESPONS TELINGA' },
        { img: 'sampah-kantong.webp', msg: 'Bau pengap seketika tercium oleh hidungmu saat menyentuh kantong ini.', title: 'RESPONS HIDUNG' },
        { img: 'sampah-koran.webp', msg: 'Ujung jarimu merasakan tekstur kasar dan rapuh dari kertas koran bekas ini.', title: 'RESPONS KULIT' },
        { img: 'sampah-kresek.webp', msg: 'Warnanya sangat kotor dan terlihat menjijikkan oleh matamu.', title: 'RESPONS MATA' },
        { img: 'paku.webp', msg: 'Awas! Matamu menemukan benda berkarat tajam yang sangat berbahaya jika sampai terinjak.', title: 'RESPONS MATA' }
    ];

    // Kumpulan Aset Gambar Pengecoh (Decoy)
    const asetPengecoh = [
        { img: 'apel.webp', name: 'Buah Apel' },
        { img: 'kucing.webp', name: 'Kucing Lucu' },
        { img: 'mawar.webp', name: 'Bunga Mawar' },
        { img: 'jeruk.webp', name: 'Buah Jeruk' },
        { img: 'tahu-taqwa.webp', name: 'Tahu Takwa' },
        { img: 'mobil.webp', name: 'Mainan Mobil' }
    ];
    
    window.startCariSampah = function() {
        document.getElementById('intro-sampah').style.display = 'none';
        
        const gameArea = document.getElementById('sampah-game-area');
        gameArea.style.pointerEvents = 'auto'; // Mengizinkan klik
        gameArea.innerHTML = ''; // Pastikan arena bersih sebelum membuat barang
        
        // 1. Munculkan 10 Sampah Acak
        for (let i = 0; i < 10; i++) {
            let acakSampah = asetSampah[Math.floor(Math.random() * asetSampah.length)];
            
            // Atur posisi lantai agar logis (Top antara 45% s/d 90%, Left antara 5% s/d 90%)
            let posTop = Math.floor(Math.random() * 45) + 45;
            let posLeft = Math.floor(Math.random() * 85) + 5;
            let ukuran = Math.random() * 1.5 + 3.5; // Ukuran kecil antara 3.5cqw s/d 5cqw
            
            let imgElem = document.createElement('img');
            imgElem.src = `assets/item/${acakSampah.img}`;
            imgElem.className = 'm1-sampah-item';
            imgElem.style = `position: absolute; top: ${posTop}%; left: ${posLeft}%; width: ${ukuran}cqw; cursor: pointer; filter: drop-shadow(0.2cqw 0.2cqw 0 #111); transition: transform 0.2s; z-index: 10;`;
            
            imgElem.onmouseover = function() { this.style.transform = 'scale(1.2)'; };
            imgElem.onmouseout = function() { this.style.transform = 'scale(1)'; };
            
            // Ketika diklik, jalankan fungsi utama dengan pesan edukasinya
            imgElem.onclick = function() { clickSampahM1(this, acakSampah.msg, acakSampah.title); };
            
            gameArea.appendChild(imgElem);
        }
        
        // 2. Munculkan 8 Benda Pengecoh Acak
        for (let i = 0; i < 8; i++) {
            let acakDecoy = asetPengecoh[Math.floor(Math.random() * asetPengecoh.length)];
            
            let posTop = Math.floor(Math.random() * 45) + 45;
            let posLeft = Math.floor(Math.random() * 85) + 5;
            let ukuran = Math.random() * 2 + 5; // Ukuran pengecoh agak sedikit lebih besar (5cqw - 7cqw)
            
            let imgElem = document.createElement('img');
            imgElem.src = `assets/item/${acakDecoy.img}`;
            imgElem.style = `position: absolute; top: ${posTop}%; left: ${posLeft}%; width: ${ukuran}cqw; cursor: pointer; filter: drop-shadow(0.3cqw 0.3cqw 0 rgba(0,0,0,0.6)); transition: transform 0.2s; z-index: 5;`;
            
            imgElem.onmouseover = function() { this.style.transform = 'scale(1.2)'; };
            imgElem.onmouseout = function() { this.style.transform = 'scale(1)'; };
            
            imgElem.onclick = function() { clickDecoyM1(acakDecoy.name); };
            
            gameArea.appendChild(imgElem);
        }
    };

    window.clickSampahM1 = function(elem, msg, title) {
        if (elem.classList.contains('found')) return;
        
        elem.classList.add('found');
        elem.style.display = 'none'; // Hilangkan sampah dari layar
        
        if (typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime = 0; sfxTangkap.play(); }
        
        window.sampahM1Found++;
        document.getElementById('m1-sampah-score').innerText = `${window.sampahM1Found} / 10`;
        addScore(15);
        
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
        
        if (window.sampahM1Found >= 10) {
            showCustomModal("PASAR BERSIH!", msg + "\n\nLuar biasa! Kamu menggunakan seluruh indramu untuk membersihkan pasar dari semua sampah dengan sangat bersih. Mari temui Pak Kumis!", checkIcon, "alert", () => {
                
                // Kembalikan Mode Layar Normal untuk Kuis
                document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
                document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
                document.querySelector('.mission-header').style.display = 'flex';
                
                // Pindah ke Tahap 4
                nextMissionStage(4);
                
                // Matikan musik pasar, nyalakan musik Boss
                if (typeof window.bgmPasarM1 !== 'undefined' && window.bgmPasarM1) window.bgmPasarM1.pause();
                bgmMission.pause();
                bgmBoss.currentTime = 0;
                bgmBoss.play().catch(e => console.log(e));
            });
        } else {
            // Tampilkan pop-up penjelasan indra
            showCustomModal(title, msg, checkIcon, "alert");
        }
    };

    window.clickDecoyM1 = function(nama) {
        reduceLife();
        const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
        showCustomModal("BUKAN SAMPAH!", `Itu adalah ${nama} segar yang terjatuh, bukan sampah kotor! Fokus gunakan matamu.\n(Nyawa Berkurang 1)`, lockIcon, "error");
    };

    window.abortMisi1CariSampah = function() {
        document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
        document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
        document.querySelector('.mission-header').style.display = 'flex';
        exitMissionScreen();
    };

    // --- DIALOG SETELAH MINI GAME SELESAI ---
    currentMissionDialogs = {
        'm1mata': { dialog: [{ text: "Hebat! Kamu telah menyelesaikan evaluasi Mata. Ayo kembali ke pasar dan cari sisa alat sensor lainnya!", mood: "happy", name: "Petualang Nagata", npc: "npc1" }] },
        'm1telinga': { dialog: [{ text: "Luar biasa! Telingamu bekerja dengan baik. Jangan lupa, masih ada 3 sensor lain yang tersebar di pasar! Bebas pilih yang mana saja.", mood: "happy", name: "Petualang Nagata", npc: "npc1" }] },
        'm1hidung': { dialog: [{ text: "Penciumanmu sangat tajam! Fungsi hidung berhasil dikuasai. Mari kita lanjutkan pencarian!", mood: "happy", name: "Petualang Nagata", npc: "npc1" }] },
        'm1lidah': { dialog: [{ text: "Jawaban yang sangat cerdas! Lidahmu dalam kondisi sempurna. Kembali ke pencarian yuk!", mood: "happy", name: "Petualang Nagata", npc: "npc1" }] },
        'm1kulit': { dialog: [{ text: "Sempurna! Kamu memahami refleks dan fungsi kulit dengan sangat baik. Mari kembali ke pasar!", mood: "happy", name: "Petualang Nagata", npc: "npc1" }] },
        2: { 
            isBoss: true, 
            dialog: [
                { text: "Luar biasa! Kamu berhasil menemukan kelima pancaindra dan menguasai fungsi utamanya dalam kehidupan nyata.", mood: "happy", name: "Petualang Nagata", npc: "npc1" }, 
                { text: "Kini tubuhmu sudah berfungsi sempurna. Misteri lanjutan di kios Pak Kumis akan kita buka pada pertemuan selanjutnya! Kamu berhak mendapat 100 Koin Emas.", mood: "happy", name: "Petualang Nagata", npc: "npc1" }
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

        let pahlawanName = localStorage.getItem('playerName') || "Pahlawan";
        let dramaMisi1 = [
            { text: "Pahlawan, gawat! Pasar Kandangan mendadak gelap gulita dan sunyi senyap. Alat sensor tubuh kita nonaktif!", mood: "sad", name: "Petualang Nagata", npc: "npc1" },
            { text: "Kamu harus segera masuk ke pasar. Geser sentermu dan temukan ikon MATA terlebih dahulu agar kita bisa memulihkan cahaya di dunia ini!", mood: "warning", name: "Petualang Nagata", npc: "npc1" },
            { 
                text: "Kamu siap memulai pencarian sensori ini?", 
                mood: "neutral", isChoice: true, name: "Petualang Nagata", npc: "npc1",
                onYes: () => {
                    document.getElementById('vn-overlay').style.display = 'none';
                    showMissionQuestBoard(1, "MISI 1", "MISTERI PASAR KANDANGAN", () => {
                        // Cukup panggil masuk misi. Sisanya diurus otomatis oleh engine.js
                        enterMissionScreen("MISI 1", "MISTERI PASAR KANDANGAN", 1);
                    });
                }
            }
        ];

        // Jika sudah selesai, ubah dialog untuk memunculkan Opsi Ke-3 (Lihat Jurnal)
        if (isCompleted) {
            dramaMisi1[2].text = `Kamu sudah menyelesaikan misi ini. Ingin mengulangnya, atau melihat jurnal petualanganmu, ${pahlawanName}?`;
            dramaMisi1[2].btn1Text = "ULANGI MISI";
            dramaMisi1[2].btn2Text = "TUTUP";
            dramaMisi1[2].btn3Text = "LIHAT JURNAL";
            
            dramaMisi1[2].onBtn3 = () => {
                showJurnalRecap(1); 
            };
            dramaMisi1[2].onNo = () => {
                document.getElementById('vn-overlay').style.display = 'none'; 
            };
            dramaMisi1[2].onYes = () => {
                document.getElementById('vn-overlay').style.display = 'none';
                showMissionQuestBoard(1, "MISI 1", "MISTERI PASAR KANDANGAN", () => {
                    enterMissionScreen("MISI 1", "MISTERI PASAR KANDANGAN", 1);
                });
            }
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

        let pahlawanName = localStorage.getItem('playerName') || "Pahlawan";
        let dramaMisi2 = [
            { text: `Wah, kamu kembali lagi ke Lapangan Tambi yang luas dan ramai ini, ${pahlawanName}!`, mood: "happy" },
            { 
                text: `Apakah kamu ingin kembali membedah fungsi utama dari masing-masing pancaindra, ${pahlawanName}?`, 
                mood: "neutral", isChoice: true,
                onYes: () => {
                    document.getElementById('vn-overlay').style.display = 'none';
                    showMissionQuestBoard(2, "MISI 2", "FUNGSI UTAMA", () => enterMissionScreen("MISI 2", "FUNGSI UTAMA", 2));
                },
                onNo: () => {
                    activeScript.push(getRejectionDialog(2, "MISI 2", "FUNGSI UTAMA"));
                    currentVnIndex++; updateVnDialog();
                }
            }
        ];

        // Jika sudah selesai, ubah dialog untuk memunculkan Opsi Ke-3 (Lihat Jurnal)
        if (isCompleted) {
            dramaMisi2[1].text = `Kamu sudah menyelesaikan misi ini. Ingin mengulangnya, atau melihat jurnal petualanganmu, ${pahlawanName}?`;
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

        let pahlawanName = localStorage.getItem('playerName') || "Pahlawan";
        let dramaMisi3 = [
            { text: `Selamat! Segel Misi 3 telah terbuka. Kali ini kita akan berkunjung ke tempat yang sangat bersih dan tenang, ${pahlawanName}.`, mood: "happy" },
            { 
                text: `Kita sedang berada di Puskesmas Kandangan! Di sini kita akan belajar mengenali bagian-bagian penyusun pancaindra. Sudah siap bertemu dokter, ${pahlawanName}?`, 
                mood: "neutral", isChoice: true,
                onYes: () => {
                    document.getElementById('vn-overlay').style.display = 'none';
                    showMissionQuestBoard(3, "MISI 3", "BENTUK & BAGIAN", () => enterMissionScreen("MISI 3", "BENTUK & BAGIAN", 3));
                },
                onNo: () => {
                    activeScript.push(getRejectionDialog(3, "MISI 3", "BENTUK & BAGIAN"));
                    currentVnIndex++; updateVnDialog();
                }
            }
        ];

        // Jika sudah selesai, ubah dialog untuk memunculkan Opsi Ke-3 (Lihat Jurnal)
        if (isCompleted) {
            dramaMisi3[1].text = `Kamu sudah menyelesaikan kunjungan ke Puskesmas. Ingin mengulangnya, atau melihat jurnal petualanganmu, ${pahlawanName}?`;
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

        let pahlawanName = localStorage.getItem('playerName') || "Pahlawan";
        let dramaMisi4 = [
            { text: `Hore! Segel Misi 4 telah terbuka. Kita akan pergi ke markas utama petualang hari ini, ${pahlawanName}.`, mood: "happy" },
            { 
                text: `Kita sudah sampai di SD Negeri Medowo 1! Siapkah kamu menghadapi Ujian Dadakan tentang Merawat Pancaindra, ${pahlawanName}?`, 
                mood: "neutral", isChoice: true,
                onYes: () => {
                    document.getElementById('vn-overlay').style.display = 'none';
                    showMissionQuestBoard(4, "MISI 4", "MERAWAT TUBUHKU", () => enterMissionScreen("MISI 4", "MERAWAT TUBUHKU", 4, 'm4-qr'));
                },
                onNo: () => {
                    activeScript.push(getRejectionDialog(4, "MISI 4", "MERAWAT TUBUHKU"));
                    currentVnIndex++; updateVnDialog();
                }
            }
        ];

        // Jika sudah selesai, ubah dialog untuk memunculkan Opsi Ke-3 (Lihat Jurnal)
        if (isCompleted) {
            dramaMisi4[1].text = `Kamu sudah menaklukkan Ujian Dadakan di SD Negeri Medowo 1. Ingin mengulangnya, atau melihat jurnal, ${pahlawanName}?`;
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
                    <div class="ar-score-box">Buah Terkumpul: <span id="ar-score-txt">0 / 50</span></div>
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

// Fungsi Pembatalan / Kabur dari Layar Kamera
window.abortMission5 = function() {
    // Matikan musik boss
    bgmBoss.pause();
    bgmBoss.currentTime = 0;

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
        bgmBoss.currentTime = 0;
        bgmBoss.play().catch(e => console.log("BGM Boss diblokir browser: ", e));

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
            bgmBoss.pause();
            bgmBoss.currentTime = 0;

            addScore(50);
            showCustomModal("MISI 5 SELESAI!", "BINGO! Matamu berhasil mendeteksi dan membedakan spektrum warna dengan sempurna. Kamu resmi menjadi Ahli Detektif Banyu Bening!", checkIcon, "alert", () => {
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
    'HINDARI BUAH APEL!': new Audio('assets/sound/cmd-hindari-apel.mp3'),
    'HINDARI BUAH MANGGA!': new Audio('assets/sound/cmd-hindari-mangga.mp3'),
    'HINDARI BUAH PISANG!': new Audio('assets/sound/cmd-hindari-pisang.mp3'),
    'HINDARI BUAH JERUK!': new Audio('assets/sound/cmd-hindari-jeruk.mp3'),
    'HINDARI BUAH SEMANGKA!': new Audio('assets/sound/cmd-hindari-semangka.mp3'),
    'HINDARI STROBERI & JERUK!': new Audio('assets/sound/cmd-hindari-stroberi-jeruk.mp3'),
    'HINDARI SEMANGKA & ANGGUR!': new Audio('assets/sound/cmd-hindari-semangka-anggur.mp3'),
    'HINDARI MANGGA & APEL!': new Audio('assets/sound/cmd-hindari-mangga-apel.mp3'),
    'HINDARI PISANG & ANGGUR!': new Audio('assets/sound/cmd-hindari-pisang-anggur.mp3'),
    'HINDARI JERUK & APEL!': new Audio('assets/sound/cmd-hindari-jeruk-apel.mp3')
};

window.startBanyuBeningAR = function() {
    // Munculkan kotak kamera secara dramatis setelah dialog NPC selesai
    document.getElementById('ar-game-area').style.display = 'flex';
    
    // Putar Musik Boss
    bgmBoss.currentTime = 0;
    bgmBoss.play().catch(e => console.log("BGM Boss diblokir browser: ", e));

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

    // 10 Pilihan Variatif yang diacak urutannya setiap kali bermain
    let targetPhases = [
        { fruits: ['apel'], text: 'HINDARI BUAH APEL!' },
        { fruits: ['mangga'], text: 'HINDARI BUAH MANGGA!' },
        { fruits: ['pisang'], text: 'HINDARI BUAH PISANG!' },
        { fruits: ['jeruk'], text: 'HINDARI BUAH JERUK!' },
        { fruits: ['semangka'], text: 'HINDARI BUAH SEMANGKA!' },
        { fruits: ['stroberi', 'jeruk'], text: 'HINDARI STROBERI & JERUK!' },
        { fruits: ['semangka', 'anggur'], text: 'HINDARI SEMANGKA & ANGGUR!' },
        { fruits: ['mangga', 'apel'], text: 'HINDARI MANGGA & APEL!' },
        { fruits: ['pisang', 'anggur'], text: 'HINDARI PISANG & ANGGUR!' },
        { fruits: ['jeruk', 'apel'], text: 'HINDARI JERUK & APEL!' }
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

            for (let i = arBoxesData.length - 1; i >= 0; i--) {
                const box = arBoxesData[i];

                box.y += box.speed;
                box.el.style.top = box.y + '%';

                if (box.y > 110) {
                    box.el.remove();
                    arBoxesData.splice(i, 1);
                }
            }
            
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

        // Pengecekan Ketepatan Buah (DIBALIK: Menghindari buah jebakan)
        if (!currentTarget.fruits.includes(box.type)) {
            
            // JIKA BENAR (MENANGKAP SELAIN JEBAKAN): Ledakkan buah dan tambah poin
            box.el.classList.add('ar-effect');
            setTimeout(() => box.el.remove(), 200);
            
            arScore++;
            document.getElementById('ar-score-txt').innerText = `${arScore} / 50`;
            addScore(10, true); // true = Mainkan suara tangkap.mp3 

            if (arScore >= 50) {
                // MENANG TOTAL
                bgmBoss.pause();
                bgmBoss.currentTime = 0;
                
                window.arActive = false;
                
                if (window.arStream) {
                    window.arStream.getTracks().forEach(track => track.stop());
                    window.arStream = null;
                }
                clearInterval(window.arLoop);
                clearInterval(window.arSpawner);

                showCustomModal("TANGKAPAN BERHASIL!", "Luar biasa! Matamu sangat teliti. Kamu berhasil memanen 50 buah dengan sempurna tanpa terkena jebakan!", checkIcon, "alert", () => {
                    // Tetap pertahankan mode Fullscreen untuk Tahap 2
                    nextMissionStage(2); 
                });

            } else if (arScore % 10 === 0 && currentPhaseIndex < targetPhases.length - 1) {
                // 🌟 GANTI TARGET JEBAKAN SETIAP 10 BUAH TERTANGKAP (Munculkan Overlay Baru)
                currentPhaseIndex++;
                showPhaseOverlay(targetPhases[currentPhaseIndex]);
            }

        } else {
            
            // JIKA SALAH (MENYENTUH BUAH JEBAKAN)
            reduceLife(true); // true = Mainkan suara nottangkap.mp3
            window.arActive = false; // Tahan sensor saat Modal Error muncul
            
            // Ambil nama jebakan dari Teks (contoh: "HINDARI BUAH APEL!" -> "BUAH APEL")
            const expected = currentTarget.text.replace('HINDARI ', '').replace('!', '');
            
            showCustomModal("AWAS JEBAKAN!", `Fokuskan matamu! Kamu harus menghindari: ${expected}\\n(Nyawa Berkurang 1)`, lockIcon, "error", () => {
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
            // Memanggil Papan Quest, menggantikan Pop-up Confirm bawaan
            showMissionQuestBoard(5, "MISI 5", "TANTANGAN RAHASIA", () => {
                enterMissionScreen("MISI 5", "TANTANGAN RAHASIA", 5);
                
                // Tunggu animasi pisau transisi Persona selesai (sekitar 2.8 detik)
                setTimeout(() => {
                    const dramaMisi5 = [
                        { text: "Wah, akhirnya kita sampai di Wisata Banyu Bening Medowo! Sungainya sangat jernih dan udaranya segar.", mood: "happy" },
                        { text: "Untuk membuka segel wilayah ini, aku punya permainan khusus untukmu. Kita akan panen buah-buahan segar!", mood: "happy" },
                        { text: "Tantangan ini akan menguji kejelian MATAMU (fokus bentuk & warna) dan kecepatan refleks OTOT SENDIMU (keseimbangan tubuh).", mood: "neutral" },
                        { text: "Akan ada instruksi target buah di layarmu. Arahkan dan sapu tanganmu di udara HANYA ke arah buah yang diperintahkan ya!", mood: "warning" },
                        { text: "Tekan tombol LANJUT, izinkan akses kamera di browsermu jika diminta, dan mari kita mulai panennya!", mood: "happy" }
                    ];
                    
                    startVnDialog(dramaMisi5, "Petualang Nagata", "npc1", () => {
                        startBanyuBeningAR();
                    });
                }, 2800);
            });
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
                onYes: () => {
                    document.getElementById('vn-overlay').style.display = 'none';
                    showMissionQuestBoard(6, "MISI 6", "UJIAN BUKIT GANDRUNG", () => enterMissionScreen("MISI 6", "UJIAN AKHIR", 6));
                },
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
                    onYes: () => {
                        document.getElementById('vn-overlay').style.display = 'none';
                        showMissionQuestBoard(6, "MISI 6", "UJIAN BUKIT GANDRUNG", () => enterMissionScreen("MISI 6", "UJIAN AKHIR", 6));
                    },
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
                { text: `Petualangan kita di sini telah selesai. Teruslah belajar, dan nantikan pembaruan game ini untuk membuka wilayah Kepung. Sampai jumpa, ${localStorage.getItem('playerName') || 'Pahlawan'}!`, mood: "happy" }
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

// Data Ujian (HOTS & Kearifan Lokal) untuk Pelatihan Siaga
const taData = {
    2: [
        { text: "Saat ada abu vulkanik Gunung Kelud berterbangan, segera bilas matamu dengan air bersih jika kelilipan.", isTrue: true, msg: "Tepat! Jangan menguceknya, air bersih akan menghanyutkan debu tajam tersebut." },
        { text: "Menutup telinga rapat-rapat saat mendengar suara ledakan mercon yang sangat keras di perayaan desa.", isTrue: true, msg: "Benar! Suara ledakan tajam bisa merobek selaput tipis gendang telinga." },
        { text: "Makan Gethuk Pisang yang baru saja digoreng dan masih mendidih panas.", isTrue: false, msg: "Bahaya! Suhu yang terlalu panas bisa membuat papila (saraf pengecap) di lidahmu melepuh." },
        { text: "Membaca buku panduan pramuka di bawah pohon dengan cahaya yang sangat redup dan gelap.", isTrue: false, msg: "Membaca di tempat gelap memaksa otot mata bekerja terlalu keras dan merusaknya." },
        { text: "Memakai topi atau tabir surya (sunscreen) saat kemah di siang bolong yang sangat terik.", isTrue: true, msg: "Sempurna! Kulit harus dilindungi dari sengatan sinar ultraviolet matahari." },
        { text: "Membersihkan telinga bagian dalam menggunakan batang lidi kayu atau peniti logam.", isTrue: false, msg: "Sangat dilarang! Benda keras dan tajam akan melukai saluran dan gendang telinga." },
        { text: "Mencuci hidung menggunakan larutan air garam steril saat sedang pilek berat di musim hujan.", isTrue: true, msg: "Bagus! Ini membantu membersihkan lendir dan kuman yang bersarang di rongga hidung." },
        { text: "Mandi secara teratur menggunakan sabun setelah selesai bermain tanah di lapangan olahraga.", isTrue: true, msg: "Mandi membasuh keringat dan kuman agar kulit terhindar dari penyakit menular." },
        { text: "Hanya menyikat gigi saja, tanpa menyikat bagian lidah saat menggosok gigi sehari-hari.", isTrue: false, msg: "Sisa makanan di lidah bisa memicu tumbuhnya jamur putih dan menyebabkan bau mulut." },
        { text: "Mendengarkan musik pakai earphone dengan volume paling keras agar tidak terdengar suara luar.", isTrue: false, msg: "Suara maksimal yang ditembakkan langsung ke dalam lubang telinga akan membuatmu tuli." }
    ],
    3: [
        { text: "Bermain air kotor di Sungai Brantas lalu mengucek mata bisa menularkan penyakit Mata Merah (Konjungtivitis).", isTrue: true, msg: "Tepat! Bakteri dari air kotor berpindah dari tangan ke matamu." },
        { text: "Air kotor yang menggenang dan masuk ke dalam telinga saat berenang tidak akan menyebabkan infeksi.", isTrue: false, msg: "Salah! Air kotor yang masuk ke telinga dan tidak dibersihkan bisa memicu infeksi (Otitis)." },
        { text: "Penyakit Sariawan di mulut disebabkan karena kita terlalu banyak makan buah jeruk.", isTrue: false, msg: "Salah! Justru jeruk sangat kaya Vitamin C dan ampuh mencegah sariawan." },
        { text: "Bercak putih gatal di kulit punggung (Panu) muncul karena kita digigit nyamuk kebun.", isTrue: false, msg: "Salah! Panu disebabkan oleh infeksi jamur karena kita malas mandi saat berkeringat." },
        { text: "Lendir tebal saat kita sakit flu akan menutupi saraf pembau sehingga kita kesulitan mencium aroma masakan.", isTrue: true, msg: "Benar! Saraf pembau di atap hidung terhalang oleh lendir tebal tersebut." }
    ],
    4: [
        { text: "Teman Tunanetra (tidak bisa melihat) membaca buku cerita menggunakan rabaan jari pada Huruf Braille.", isTrue: true, msg: "Tepat! Huruf Braille memiliki pola timbul yang dirasakan oleh saraf peraba di kulit jari." },
        { text: "Cara terbaik memanggil teman Tunarungu (tidak bisa mendengar) adalah dengan berteriak kencang dari belakang punggungnya.", isTrue: false, msg: "Salah! Tepuk pundaknya perlahan atau hampiri dari depan agar ia bisa melihat bibir/bahasa isyaratmu." },
        { text: "Tongkat Putih digunakan oleh teman Tunanetra sebagai perpanjangan indra peraba untuk mendeteksi lubang di jalan.", isTrue: true, msg: "Benar! Tongkat ini menjaga mereka dari bahaya tersandung saat berjalan sendirian." },
        { text: "Orang yang buta warna melihat dunia di sekitarnya hanya berwarna hitam dan putih gelap gulita.", isTrue: false, msg: "Salah! Mereka bisa melihat normal, hanya saja sel matanya tertukar dalam membedakan warna (misal: merah & hijau)." },
        { text: "Orang dengan kulit mati rasa (tidak bisa merasakan sakit) harus selalu memakai alas kaki tebal agar aman.", isTrue: true, msg: "Tepat! Karena tanpa rasa sakit, kakinya bisa terluka parah menginjak paku tanpa ia sadari." }
    ],
    5: [
        { text: "Kelelawar di Gua Selomangleng terbang di kegelapan menggunakan matanya yang besar seperti senter.", isTrue: false, msg: "Salah! Kelelawar buta di kegelapan. Mereka memakai pantulan suara (Ekolokasi) dari telinganya." },
        { text: "Anjing pelacak kepolisian Kediri menggunakan hidungnya yang super tajam untuk mencari jejak orang hilang.", isTrue: true, msg: "Benar! Hidung anjing bisa membedakan jutaan partikel bau kecil di udara." },
        { text: "Burung Elang Jawa yang terbang di atas Gunung Wilis bisa melihat mangsa di tanah karena matanya seperti teropong.", isTrue: true, msg: "Benar! Mata elang sangat tajam dan bisa melakukan zoom objek dari kejauhan." },
        { text: "Ikan Lele menggunakan sisik di ekornya untuk mengecap rasa makanan di air sungai yang keruh.", isTrue: false, msg: "Salah! Lele memakai seluruh kulit tubuh dan kumisnya untuk mengecap rasa (bukan cuma ekor)." },
        { text: "Ular sering menjulurkan lidahnya ke udara untuk menangkap partikel bau dari mangsanya.", isTrue: true, msg: "Benar! Lidah ular bercabang berfungsi ganda sebagai penangkap aroma kimia di udara." }
    ],
    6: [
        { text: "Saat kamu berjalan menyeberangi jembatan gantung Sungai Brantas, cairan di dalam telingamu bekerja menjaga agar kamu tidak jatuh.", isTrue: true, msg: "Benar! Di dalam telinga terdalam terdapat organ penyeimbang tubuh." },
        { text: "Jika matamu ditutup kain, kamu akan langsung lupa dan tidak tahu di mana letak tanganmu sendiri.", isTrue: false, msg: "Salah! Saraf ototmu (Propriosepsi) selalu mengirimkan koordinat posisi tubuh ke otak." },
        { text: "Saat cuaca sangat panas terik, kelenjar di kulitmu otomatis mengeluarkan keringat untuk mendinginkan suhu tubuh.", isTrue: true, msg: "Tepat! Keringat adalah sistem pendingin alami (AC) milik tubuh kita." },
        { text: "Kulit kita hanya bisa merasakan tekstur kasar dan halus, tidak bisa merasakan perubahan cuaca panas atau dingin.", isTrue: false, msg: "Salah! Ujung saraf di kulit sangat peka terhadap perubahan suhu ekstrem." },
        { text: "Kamu bisa menyentuh ujung hidungmu sendiri dengan tepat meskipun di tempat yang sangat gelap gulita.", isTrue: true, msg: "Benar! Ini membuktikan bahwa ototmu memiliki Indra Posisi (GPS Alami) yang bekerja diam-diam." }
    ],
    7: []
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
        <!-- TAHAP QR: DETEKTIF BAU -->
        <div id="stage-m4-qr" class="mission-stage active-stage" style="width: 100%; height: 100%;">
            <div id="m4-qr-intro" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 30; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <button class="btn-close-mission" style="position: absolute; top: 1.5cqw; right: 1.5cqw; z-index: 35;" onclick="abortM4QRScanner()">X</button>
                <h2 style="color: #2ed573; font-size: 3.5cqw; text-shadow: 0.2cqw 0.2cqw 0 #000; margin-bottom: 1cqw;">DETEKTIF BAU</h2>
                <p style="color: white; font-size: 1.8cqw; margin-bottom: 2cqw; text-align: center; padding: 0 5cqw;">Arahkan kameramu dan pindai Kartu QR rahasia.<br>Buktikan ketajaman ingatan penciumanmu dengan menjawab pertanyaan aroma (bau) dari 5 benda tersebut dengan tepat!</p>
                <button class="btn btn-play" style="font-size: 2cqw; padding: 1cqw 3cqw;" onclick="startM4QRScanner()">MULAI PEMINDAIAN</button>
            </div>

            <div id="m4-qr-camera-area" class="ar-container" style="display: none; background: #000; position: relative;">
                <div class="ar-hud">
                    <div class="ar-score-box">Barang Ditemukan: <span id="m4-qr-score-txt">0 / 5</span></div>
                    <button class="btn-close-mission" style="position: static; margin-left: auto;" onclick="abortM4QRScanner()">X</button>
                </div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20cqw; height: 20cqw; border: 0.6cqw dashed #2ed573; z-index: 5; box-shadow: 0 0 0 100vw rgba(0,0,0,0.5);">
                    <div style="position: absolute; bottom: -3cqw; width: 100%; text-align: center; color: #2ed573; font-weight: bold; font-size: 1.5cqw; text-shadow: 0.1cqw 0.1cqw 0 #000;">SCAN DI SINI</div>
                </div>
                <video id="m4-qr-video" class="ar-video" playsinline></video>
                <canvas id="m4-qr-canvas" style="display: none;"></canvas>
            </div>

            <div id="m4-qr-quiz-area" class="ar-container" style="display: none; background-color: #2c3e50; position: relative; flex-direction: column;">
                <div class="m1-modal-box" style="width: 85%; max-height: 95%; background: rgba(47, 53, 66, 0.95);">
                    <h3 style="color: #2ed573; margin-top: 0; font-size: 1.8cqw; margin-bottom: 0.5cqw;">KUIS AROMA <span id="m4-qr-count">1</span>/5</h3>
                    <div id="m4-qr-img-box" style="width: 12cqw; height: 12cqw; background: #fff; border: 0.3cqw solid #fff; border-radius: 1cqw; display: flex; justify-content: center; align-items: center; margin-bottom: 1cqw; overflow: hidden; animation: popIn 0.5s forwards;">
                        <img id="m4-qr-item-img" src="" style="width: 100%; height: 100%; object-fit: contain;">
                    </div>
                    <p id="m4-qr-question" style="color: #fff; font-size: 1.4cqw; font-weight: bold; margin-bottom: 1.5cqw; text-align: center;"></p>
                    <div class="explore-grid" id="m4-qr-opts" style="width: 100%;"></div>
                </div>
            </div>
        </div>

        <!-- TAHAP 1: INTRO -->
        <div id="stage-1" class="mission-stage">
            <h3 class="stage-title">TAHAP 1: MABIGUS SDN MEDOWO 1</h3>
            <div class="mission-text-box" style="text-align: center; min-height: 8cqw; display: flex; align-items: center; justify-content: center;">
                <p id="m4-text-1" style="margin: 0; line-height: 1.5;"></p>
            </div>
            <button class="btn btn-play" style="margin-top: 2cqw;" onclick="nextM4Text('m4-text-1', 2)">LANJUT</button>
        </div>

        <!-- TAHAP 2: CARA MERAWAT (P3K PRAMUKA) -->
        <div id="stage-2" class="mission-stage">
            <h3 class="stage-title">TAHAP 2: MADING P3K SIAGA</h3>
            <div id="mading-intro-2" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box">Klik dan pelajari catatan Pertolongan Pertama (P3K) Pancaindra ini sebelum kemah!</p>
                <div class="mading-board">
                    <div class="sticky-note" style="background: #ff7675; transform: rotate(-3deg);" onclick="openFlipNote(this, 2, 1, '#ff7675', 'anatomi-mata.webp', 'P3K MATA', 'Bahaya: Abu vulkanik letusan Gunung Kelud sangat tajam.\\n\\nSolusi:\\nBilas mata dengan air mengalir (jangan pernah menguceknya!). Gunakan kacamata bening/hitam saat berjalan di area berdebu atau saat matahari sedang terik membakar.')">
                        <img src="assets/item/anatomi-mata.webp"><span>P3K Mata</span>
                    </div>
                    <div class="sticky-note" style="background: #74b9ff; transform: rotate(4deg);" onclick="openFlipNote(this, 2, 2, '#74b9ff', 'anatomi-telinga.webp', 'P3K TELINGA', 'Bahaya: Suara ledakan petasan festival desa atau kemasukan air saat berenang di Sungai Brantas.\\n\\nSolusi:\\nTutup rapat telinga jika ada suara keras yang memekakkan. Keringkan telinga menggunakan handuk lembut (Bukan pakai benda tajam seperti peniti / lidi!).')">
                        <img src="assets/item/anatomi-telinga.webp"><span>P3K Telinga</span>
                    </div>
                    <div class="sticky-note" style="background: #00b894; transform: rotate(-2deg); color: white;" onclick="openFlipNote(this, 2, 3, '#00b894', 'anatomi-hidung.webp', 'P3K HIDUNG', 'Bahaya: Udara dingin hutan pinus sering memicu pilek dan mampet.\\n\\nSolusi:\\nPakailah masker untuk menghangatkan area hidung. Jika sudah terlanjur mampet, kamu bisa mencuci rongga hidungmu dengan semprotan air garam (saline) steril khusus hidung.')">
                        <img src="assets/item/anatomi-hidung.webp"><span>P3K Hidung</span>
                    </div>
                    <div class="sticky-note" style="background: #fd79a8; transform: rotate(3deg); color: white;" onclick="openFlipNote(this, 2, 4, '#fd79a8', 'anatomi-lidah.webp', 'P3K LIDAH', 'Bahaya: Lidah melepuh terkena kuah mendidih atau perih karena sariawan.\\n\\nSolusi:\\nTunggu makanan dingin sebelum dikunyah! Sariawan menandakan tubuhmu butuh asupan Buah bervitamin C. Jangan lupa sikat bagian lidahmu saat menggosok gigi agar jamur putih tidak bersarang.')">
                        <img src="assets/item/anatomi-lidah.webp"><span>P3K Lidah</span>
                    </div>
                    <div class="sticky-note" style="background: #e17055; transform: rotate(-4deg); color: white;" onclick="openFlipNote(this, 2, 5, '#e17055', 'anatomi-kulit1.webp', 'P3K KULIT', 'Bahaya: Sengatan lebah kebun, luka lecet karena jatuh, dan infeksi jamur panu.\\n\\nSolusi:\\nCuci luka lecet dengan air bersih lalu berikan obat merah. Untuk menghindari jamur panu yang gatal, kamu wajib mandi dengan sabun setiap kali tubuhmu dipenuhi keringat kotor.')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>P3K Kulit</span>
                    </div>
                </div>
                <button id="btn-start-ta-2" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(2)">MULAI UJIAN POS 1!</button>
            </div>
            ${generateTaUI(2)}
        </div>

        <!-- TAHAP 3: PENYAKIT PANCAINDRA -->
        <div id="stage-3" class="mission-stage">
            <h3 class="stage-title">TAHAP 3: KLINIK PENYAKIT ALAM</h3>
            <div id="mading-intro-3" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box">Waspadai penyakit yang sering menyerang penjelajah! Klik 5 gambar ini.</p>
                <div class="mading-board">
                    <div class="sticky-note" style="background: #ff7675; transform: rotate(2deg);" onclick="openFlipNote(this, 3, 1, '#ff7675', 'anatomi-mata.webp', 'PENYAKIT MATA', 'Mata Merah (Konjungtivitis):\\nSangat mudah menular! Penyakit ini terjadi karena bakteri dari air sungai yang kotor berpindah ke mata saat kamu menguceknya menggunakan tangan telanjang.')">
                        <img src="assets/item/anatomi-mata.webp"><span>Sakit Mata</span>
                    </div>
                    <div class="sticky-note" style="background: #74b9ff; transform: rotate(-3deg);" onclick="openFlipNote(this, 3, 2, '#74b9ff', 'anatomi-telinga.webp', 'PENYAKIT TELINGA', 'Infeksi Telinga (Otitis):\\nTerjadi saat air keruh terjebak lama di dalam saluran telinga, menjadikannya sarang kuman untuk berkembang biak dan memicu rasa nyeri berdengung.')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Sakit Telinga</span>
                    </div>
                    <div class="sticky-note" style="background: #00b894; transform: rotate(4deg); color: white;" onclick="openFlipNote(this, 3, 3, '#00b894', 'anatomi-hidung.webp', 'PENYAKIT HIDUNG', 'Kehilangan Penciuman (Anosmia):\\nSering terjadi saat flu/pilek berat. Lendir tebal akan menutupi "Atap Saraf Pembau", sehingga aroma wangi makanan seenak apa pun tidak akan bisa kamu cium baunya.')">
                        <img src="assets/item/anatomi-hidung.webp"><span>Sakit Hidung</span>
                    </div>
                    <div class="sticky-note" style="background: #fd79a8; transform: rotate(-1deg); color: white;" onclick="openFlipNote(this, 3, 4, '#fd79a8', 'anatomi-lidah.webp', 'PENYAKIT LIDAH', 'Jamur Putih (Kandidiasis):\\nBintik kasar lidah (papila) sangat mudah dihinggapi kuman sisa makanan jika kamu tidak menyikatnya.\\n\\nSariawan:\\nLuka sobek perih ini muncul karena imun melemah atau tubuh kekurangan asupan buah bervitamin C.')">
                        <img src="assets/item/anatomi-lidah.webp"><span>Sakit Lidah</span>
                    </div>
                    <div class="sticky-note" style="background: #e17055; transform: rotate(3deg); color: white;" onclick="openFlipNote(this, 3, 5, '#e17055', 'anatomi-kulit1.webp', 'PENYAKIT KULIT', 'Panu & Kadas:\\nBercak putih di kulit yang sangat gatal dan menular. Penyakit ini disebabkan oleh JAMUR yang tumbuh karena anak malas mandi saat tubuhnya berkeringat lembap.')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Sakit Kulit</span>
                    </div>
                </div>
                <button id="btn-start-ta-3" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(3)">MULAI UJIAN POS 2</button>
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
                        Simulasi Inklusif: Buka catatan dan tekan "COBA RASAKAN" untuk memulai simulasi!
                    </div>
                    <div class="sticky-note" style="background: #f1c40f; transform: rotate(-3deg);" onclick="openFlipNote(this, 4, 1, '#f1c40f', 'anatomi-mata.webp', 'TUNANETRA', 'Kehilangan fungsi penglihatan karena cacat lahir/kecelakaan.\\n\\nADAPTASI HEBAT:\\nMereka membaca buku menggunakan sentuhan ujung jari pada Huruf Braille (huruf timbul), serta berjalan mandiri meraba jalanan berlubang menggunakan Tongkat Putih khusus.')">
                        <img src="assets/item/anatomi-mata.webp"><span>Tunanetra</span>
                    </div>
                    <div class="sticky-note" style="background: #f1c40f; transform: rotate(2deg);" onclick="openFlipNote(this, 4, 2, '#f1c40f', 'anatomi-telinga.webp', 'TUNARUNGU', 'Kehilangan fungsi pendengaran telinga (Tuli).\\n\\nADAPTASI HEBAT:\\nMereka menajamkan visual mata untuk "mendengar" melalui bacaan gerak bibir. Jangan berteriak dari belakang mereka! Selalu panggil dari depan atau gunakan Bahasa Isyarat Tangan.')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Tunarungu</span>
                    </div>
                    <div class="sticky-note" style="background: #f1c40f; transform: rotate(-4deg);" onclick="openFlipNote(this, 4, 3, '#f1c40f', 'anatomi-mata.webp', 'BUTA WARNA', 'Kelainan genetik di mana sel mata kesulitan membedakan perpaduan warna tertentu (Misal: merah terlihat mirip hijau).\\n\\nADAPTASI HEBAT:\\nMereka tidak melihat gelap gulita! Mereka melihat dunia dengan normal, dan beradaptasi menggunakan kacamata lensa khusus.')">
                        <img src="assets/item/anatomi-mata.webp"><span>Buta Warna</span>
                    </div>
                    <div class="sticky-note" style="background: #f1c40f; transform: rotate(3deg);" onclick="openFlipNote(this, 4, 4, '#f1c40f', 'anatomi-kulit1.webp', 'MATI RASA', 'Kehilangan kepekaan pada saraf peraba di kulit telapak kaki, sering terjadi akibat penyakit saraf.\\n\\nADAPTASI HEBAT:\\nKarena kaki mereka kebal (tidak merasa sakit sama sekali saat menginjak paku), mereka harus selalu memakai alas kaki ekstra tebal agar tetap aman dan tidak infeksi.')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Mati Rasa</span>
                    </div>
                </div>
                <button id="btn-start-ta-4" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(4)">MULAI UJIAN POS 3</button>
            </div>
            ${generateTaUI(4)}
        </div>

        <!-- TAHAP 5: MAKHLUK SUPER -->
        <div id="stage-5" class="mission-stage">
            <h3 class="stage-title">TAHAP 5: MAKHLUK SUPER LOKAL</h3>
            <div id="mading-intro-5" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box">Hewan di sekitar kita punya kekuatan mistis! Klik untuk mengungkap rahasianya.</p>
                <div class="mading-board">
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(-2deg); color: white;" onclick="openFlipNote(this, 5, 1, '#a29bfe', 'anatomi-telinga.webp', 'RADAR GUA', 'Kekuatan: KELELAWAR GUA SELOMANGLENG\\n\\nPenjelasan:\\nKelelawar sebenarnya buta di kegelapan malam! Mereka berteriak melengking lalu telinga lebarnya menangkap "pantulan suara" dari dinding goa untuk mengetahui posisi dinding dan mangsa. Ini disebut Ekolokasi.', 'kelelawar.webp')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Radar Gua</span>
                    </div>
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(3deg); color: white;" onclick="openFlipNote(this, 5, 2, '#a29bfe', 'anatomi-mata.webp', 'TEROPONG WILIS', 'Kekuatan: ELANG JAWA\\n\\nPenjelasan:\\nMata burung elang yang terbang di atas Gunung Wilis dirancang seperti teropong canggih (teleskopik). Mereka sanggup melakukan "Zoom" visual untuk menerkam tikus kecil yang berlari di sawah jauh di bawah sana!', 'elang.webp')">
                        <img src="assets/item/anatomi-mata.webp"><span>Teropong Langit</span>
                    </div>
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(-4deg); color: white;" onclick="openFlipNote(this, 5, 3, '#a29bfe', 'anatomi-hidung.webp', 'HIDUNG KEPOLISIAN', 'Kekuatan: ANJING PELACAK (K-9)\\n\\nPenjelasan:\\nHidung anjing sangat tajam karena memiliki 300 juta sel pendeteksi aroma (manusia hanya punya 5 juta). Polisi memanfaatkannya untuk melacak bom atau orang hilang hanya dari bau jejak kakinya.', 'anjing.webp')">
                        <img src="assets/item/anatomi-hidung.webp"><span>Hidung Detektif</span>
                    </div>
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(2deg); color: white;" onclick="openFlipNote(this, 5, 4, '#a29bfe', 'anatomi-lidah.webp', 'LIDAH ANTENA', 'Kekuatan: ULAR SAWAH\\n\\nPenjelasan:\\nUlar sering menjulurkan lidahnya yang bercabang dua. Lidah itu bukanlah taring untuk menggigit, melainkan "antena sensor kimia" yang bertugas menangkap partikel aroma tubuh mangsa yang bersembunyi di rumput.', 'ular.webp')">
                        <img src="assets/item/anatomi-lidah.webp"><span>Lidah Antena</span>
                    </div>
                    <div class="sticky-note" style="background: #a29bfe; transform: rotate(-3deg); color: white;" onclick="openFlipNote(this, 5, 5, '#a29bfe', 'anatomi-kulit1.webp', 'KULIT PERASA', 'Kekuatan: IKAN LELE\\n\\nPenjelasan:\\nJika manusia mengecap manis asin hanya memakai lidah, Ikan Lele melapisi seluruh kulit tubuh dan kumisnya dengan sel saraf pengecap rasa! Ia tak butuh mata bersih untuk mencari makanan di sungai keruh.', 'lele.webp')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Kulit Perasa</span>
                    </div>
                </div>
                <button id="btn-start-ta-5" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(5)">MULAI UJIAN POS 4</button>
            </div>
            ${generateTaUI(5)}
        </div>

        <!-- TAHAP 6: INDRA RAHASIA (KEKUATAN TERSEMBUNYI) -->
        <div id="stage-6" class="mission-stage">
            <h3 class="stage-title">TAHAP 6: INDRA RAHASIA MANUSIA</h3>
            <div id="mading-intro-6" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <p class="mission-text-box">Di balik 5 sensor utama, tubuhmu punya 3 indra rahasia yang mengawalmu!</p>
                <div class="mading-board">
                    <div class="sticky-note" style="background: #ffeaa7; transform: rotate(-2deg); border-color: #f1c40f;" onclick="openFlipNote(this, 6, 1, '#ffeaa7', 'anatomi-telinga.webp', 'INDRA KESEIMBANGAN', 'Posisi: Telinga Bagian Dalam\\n\\nPenjelasan:\\nCairan ajaib di telinga terdalam adalah pelampung penyeimbang. Berkat organ inilah tubuhmu tidak mudah jatuh terhuyung saat meniti Jembatan Gantung Sungai Brantas yang bergoyang hebat!')">
                        <img src="assets/item/anatomi-telinga.webp"><span>Keseimbangan</span>
                    </div>
                    <div class="sticky-note" style="background: #81ecec; transform: rotate(3deg); border-color: #00cec9;" onclick="openFlipNote(this, 6, 2, '#81ecec', 'anatomi-kulit1.webp', 'INDRA POSISI OTOT', 'Posisi: Otot dan Sendi Tulang (Propriosepsi)\\n\\nPenjelasan:\\nSaraf di otot dan tulangmu selalu mengirim koordinat "GPS" ke otak. Berkat indra rahasia inilah, kamu bisa menyentuh ujung hidungmu sendiri dengan tepat meskipun matamu sedang tertutup rapat tanpa perlu melihat cermin!')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Posisi Tubuh</span>
                    </div>
                    <div class="sticky-note" style="background: #fab1a0; transform: rotate(-1deg); border-color: #e17055;" onclick="openFlipNote(this, 6, 3, '#fab1a0', 'anatomi-kulit1.webp', 'INDRA PENDETEKSI SUHU', 'Posisi: Jaringan Ujung Saraf Kulit\\n\\nPenjelasan:\\nSelain meraba tekstur kasar, saraf kulit juga menjadi termometer alami. Ia akan membuat tubuhmu menggigil saat hawa dingin menyengat (peringatan untuk cari selimut), dan mengeluarkan keringat (AC Alami) saat kepanasan.')">
                        <img src="assets/item/anatomi-kulit1.webp"><span>Sensor Suhu</span>
                    </div>
                </div>
                <button id="btn-start-ta-6" class="btn btn-play" style="width: 80%; display: none; background: #ff4757; margin-top: 1cqw;" onclick="startTaGlobal(6)">MULAI UJIAN POS 5</button>
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
        "Selamat datang di SD Negeri Medowo 1! Hari ini sedang diadakan Pelatihan P3K (Pertolongan Pertama) untuk para Pramuka Siaga Cilik.",
        "Meskipun kelima alat sensor ajaib (Pancaindra) kita sangat tangguh menavigasi dunia, mereka juga bisa rusak parah akibat kelalaian lingkungan.",
        "Kak Pembina (Bapak Aprel) telah menyiapkan Pos Ujian Ketangkasan Keliling. Buktikan kamu layak menyandang gelar Pahlawan Siaga Medowo!"
    ]);

    // Modifikasi Otomatis Pengantar Teks Tahap 4
    const m4IntroAdaptasi = [
        "Seorang Pahlawan Pramuka Sejati tidak hanya cekatan, tetapi juga memiliki rasa EMPATI (kepedulian) yang tinggi terhadap kondisi sesamanya.",
        "Tahukah kamu? Beberapa teman kita di luar sana terlahir dengan fungsi pancaindra yang kurang sempurna akibat faktor genetik atau kecelakaan (Disabilitas Medis).",
        "Namun, keterbatasan tidak membuat mereka menyerah. Mereka adalah Pahlawan Adaptasi sejati yang menyesuaikan diri dengan teknologi dan insting indra lainnya!",
        "Klik Mading Posko ke-3 ini untuk mempelajari keterbatasan mereka, lalu jalani simulasi 'Coba Rasakan' untuk belajar berempati pada keadaan mereka."
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

// 10 Bank Soal Analisis Kasus (HOTS & Kearifan Lokal Kediri)
const bossM4Data = [
    { q: "Saat sedang mendirikan tenda di Gunung Kelud, tiba-tiba angin kencang meniupkan abu vulkanik tajam ke arah wajahmu. Apa tindakan medis pertama yang paling logis?", opts: ["Meniup mata dari jarak dekat", "Membilas mata dengan air mengalir", "Mengucek kelopak mata sekuat tenaga", "Meneteskan air sabun antiseptik"], ans: "Membilas mata dengan air mengalir", msg: "Air bersih akan menghanyutkan debu tajam tanpa menggores lensa kornea matamu." },
    { q: "Kakek sering kesulitan merespons pertanyaan jika dipanggil dari jarak jauh karena faktor usia. Bentuk adaptasi teknologi apa yang paling tepat untuk diberikan kepadanya?", opts: ["Kacamata Lensa Buta Warna", "Alat Bantu Dengar", "Tongkat Putih Lipat Braille", "Sepatu Alas Tebal Mati Rasa"], ans: "Alat Bantu Dengar", msg: "Alat medis ini dipasang di telinga untuk menangkap gelombang suara dan memperkeras volumenya ke gendang telinga Kakek." },
    { q: "Sita selalu mengeluh perih di lidahnya (Sariawan) setiap kali ia mengunyah makanan. Setelah dianalisis, penyakit ini disebabkan karena tubuh Sita kekurangan asupan...", opts: ["Karbohidrat (Nasi Jagung)", "Kalsium (Susu Sapi Segar)", "Vitamin C (Buah Jeruk)", "Protein (Daging Ayam)"], ans: "Vitamin C (Buah Jeruk)", msg: "Vitamin C dari buah-buahan sangat krusial untuk memperbaiki dan menjaga kesehatan selaput tipis pelindung mulut dan lidah." },
    { q: "Adit sering malas mandi usai bermain bola seharian di Lapangan Tambi yang terik. Akibatnya, muncul bercak putih yang sangat gatal dan menular di kulit punggungnya. Penyakit apakah ini?", opts: ["Katarak Mata", "Panu (Infeksi Jamur)", "Anosmia (Hilang Penciuman)", "Sariawan (Luka Putih)"], ans: "Panu (Infeksi Jamur)", msg: "Keringat kotor dan lembap yang menempel di baju adalah habitat favorit jamur kulit untuk berkembang biak liar." },
    { q: "Saat berjalan menyeberangi jembatan gantung yang bergoyang kencang, Doni tidak terjatuh. Organ pendeteksi rahasia penyeimbang gravitasi tubuh ini sesungguhnya tersembunyi di dalam...", opts: ["Telinga Bagian Dalam", "Ujung Akar Rambut Kulit", "Lapisan Permukaan Lidah", "Lensa Bagian Luar Mata"], ans: "Telinga Bagian Dalam", msg: "Cairan khusus yang bergoyang di dalam lorong terdalam telinga bertindak layaknya alat waterpass (penyeimbang kemiringan)." },
    { q: "Andi mendapati ada adik kelas yang Tunanetra (tidak bisa melihat) sedang kebingungan mencari arah ke UKS. Cara P3K paling sopan dan aman untuk menuntunnya berjalan adalah...", opts: ["Meninggalkannya dan memanggil guru dari jauh", "Menawarkan lenganmu untuk ia pegang selama berjalan", "Menarik paksa tongkat putihnya ke arah UKS", "Berteriak kencang di samping telinganya"], ans: "Menawarkan lenganmu untuk ia pegang selama berjalan", msg: "Menawarkan siku lengan sebagai pegangan akan memberinya rasa aman dan kemudi arah yang sangat akurat tanpa unsur paksaan." },
    { q: "Burung Elang Jawa yang bertengger tinggi di lereng Gunung Wilis dapat melihat tepat tikus kecil berlari di rumput bawah. Adaptasi lensa mata burung elang ini bekerja persis seperti fungsi...", opts: ["Lensa Pembesar Mikroskop Air", "Cermin Pantul Cahaya Kendaraan", "Lensa Teleskop Teropong Jauh", "Kaca Anti Silau (Kacamata Hitam)"], ans: "Lensa Teleskop Teropong Jauh", msg: "Otot lensa mata elang mampu melakukan pemfokusan pandangan (*Optical Zoom*) dengan resolusi tinggi hingga berjarak ribuan meter." },
    { q: "Saat kamu sakit pilek berat dan hidungmu mampet, kamu juga akan mendadak kesulitan mengecap rasa lezat pada makananmu. Mengapa hal medis ini bisa terjadi berbarengan?", opts: ["Saraf pembau hidung yang tertutup lendir memutus informasi aroma rasa ke otak", "Bakteri pilek langsung menyerang dan mematikan seluruh papila lidah", "Karena air mata merah (konjungtivitis) menetes masuk ke tenggorokan", "Saraf kulit bibir menjadi kebal dan mati rasa mendadak"], ans: "Saraf pembau hidung yang tertutup lendir memutus informasi aroma rasa ke otak", msg: "Faktanya, 80% kenikmatan rasa makanan yang ditangkap otak manusia sebenarnya berasal dari informasi *aroma penciuman* hidung, bukan lidah!" },
    { q: "Mengapa tangan manusia akan refleks menarik diri dengan secepat kilat saat ujung jarinya tanpa sengaja menyentuh logam panci mendidih di dapur?", opts: ["Karena telinga mendadak menangkap gelombang suara uap air mendidih", "Saraf kulit peraba seketika menembakkan sinyal alarm bahaya nyeri ke otak", "Karena mata mendeteksi perubahan pancaran cahaya warna merah di panci", "Saraf pembau (hidung) menolak bau karat logam panas"], ans: "Saraf kulit peraba seketika menembakkan sinyal alarm bahaya nyeri ke otak", msg: "Sistem saraf mengirimkan impuls listrik sepersekian detik ke otak belakang untuk memerintahkan otot tangan menjauh agar kulit tidak rusak terbakar." },
    { q: "Hewan nokturnal Kelelawar beradaptasi hidup di ruang gelap gulita Gua Selomangleng tanpa mengandalkan cahaya mata, melainkan memancarkan gelombang pantulan suara ultrasonik dari telinga yang disebut...", opts: ["Kamuflase Fisik", "Proses Fotosintesis", "Ekolokasi Sonar", "Metamorfosis Aktif"], ans: "Ekolokasi Sonar", msg: "Gema pantulan ultrasonik ini dianalisis oleh telinga kelelawar sebagai 'Peta 3D' untuk mendeteksi dinding goa dan nyamuk mangsanya di udara kosong." }
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

let activeTargetM6 = ""; // Tambahan variabel penyimpan target yang sedang diklik

    window.startDetektifM6 = function() {
        document.getElementById('intro-detektif-m6').style.display = 'none';
        isFlashlightM6Active = true;
        currentDetektifM6Index = 0; // Digunakan sebagai penghitung jumlah yang sudah ditemukan
        
        detektifM6Targets = ['kemah', 'kolam', 'cafe', 'taman', 'aula']; 
        
        document.getElementById('flashlight-layer-m6').style.display = 'block';
        
        // Tampilkan semua 5 kotak target secara bersamaan agar bisa dicari secara bebas!
        detektifM6Targets.forEach(target => {
            document.getElementById('target-m6-' + target).style.display = 'block';
        });
        
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
    isFlashlightM6Active = false; // Matikan gerakan senter sementara kuis berjalan
    activeTargetM6 = targetName; // Simpan memori target apa yang sedang diklik
    document.getElementById('target-m6-' + targetName).style.display = 'none'; // Sembunyikan agar tidak bisa diklik dobel
    
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
};

window.handleDetektifM6Answer = function(chosen, correct) {
    vnOverlay.style.display = 'none'; // Tutup paksa VN Overlay
    const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
    const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;

    if (chosen === correct) {
        addScore(20);
        showCustomModal("TEPAT SEKALI!", "Kamu memahami cara adaptasi pahlawan dengan baik!", checkIcon, "alert", () => {
            currentDetektifM6Index++; // Menambah jumlah pencarian yang berhasil
            if (currentDetektifM6Index < detektifM6Targets.length) {
                isFlashlightM6Active = true; // Nyalakan senter lagi untuk mencari target yang tersisa
            } else {
                showCustomModal("PENCARIAN SELESAI!", "Kamu berhasil menemukan semua titik wahana. Saatnya menuju Area Pertemuan!", checkIcon, "alert", () => {
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
                let data = dataDetektifM6[activeTargetM6]; // Gunakan memori target aktif
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

// Blok Penyimpanan Skor telah dipindahkan ke engine.js untuk sistem Auto-Save Realtime

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
                // LOGIKA MISI 1 SELESAI SEPENUHNYA
                const currentMissionId = 1;
                const nextMissionId = currentMissionId + 1;
                    
                localStorage.setItem(`misi_${currentMissionId}_completed`, 'true');
                localStorage.setItem(`kandangan_misi_${nextMissionId}`, 'unlocked');
                    
                loadKandanganProgress();
                    
                if (typeof startJurnal === 'function') {
                    startJurnal(currentMissionId, () => {
                        exitMissionScreen();
                    });
                } else {
                    exitMissionScreen();
                }
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

// ================= LOGIKA MINI GAME SCAN QR (MISI 3 TAHAP 1) =================
window.m3QRScannedCount = 0;
window.m3ScannedCodes = [];
window.m3QRStream = null;
window.m3QRLoop = null;
window.m3CurrentItem = null;
window.m3InspectedSenses = new Set();

// Database Barang Rahasia Misi 3
const m3ItemsData = {
    'Mangga': { img: 'mangga.webp', ans: 'Buah Mangga', opts: ['Buah Mangga', 'Buah Jeruk', 'Buah Apel', 'Buah Salak'], desc: { mata: 'Kulitnya berwarna hijau kekuningan.', telinga: 'Tidak mengeluarkan suara.', hidung: 'Harum manis khas mangga.', lidah: 'Rasanya manis menyegarkan.', kulit: 'Kulitnya halus dan empuk.' } },
    'Apel': { img: 'apel.webp', ans: 'Buah Apel', opts: ['Buah Apel', 'Buah Salak', 'Buah Mangga', 'Buah Semangka'], desc: { mata: 'Bentuknya bulat dan warnanya merah cerah.', telinga: 'Bunyi renyah saat digigit.', hidung: 'Aroma segar khas buah apel.', lidah: 'Rasanya manis sedikit asam.', kulit: 'Kulit luarnya licin dan keras.' } },
    'Jeruk': { img: 'jeruk.webp', ans: 'Buah Jeruk', opts: ['Buah Jeruk', 'Buah Mangga', 'Buah Apel', 'Buah Salak'], desc: { mata: 'Warnanya oranye dengan pori-pori kecil di kulit.', telinga: 'Tidak ada suara.', hidung: 'Aromanya asam menyegarkan.', lidah: 'Mengecap rasa asam dan manis.', kulit: 'Permukaan kulitnya sedikit berpori.' } },
    'Salak': { img: 'salak.webp', ans: 'Buah Salak', opts: ['Buah Salak', 'Buah Semangka', 'Buah Jeruk', 'Kucing Lucu'], desc: { mata: 'Bentuknya agak meruncing ke atas dan berwarna cokelat.', telinga: 'Tidak ada suara.', hidung: 'Aromanya sedikit sepat manis.', lidah: 'Rasanya manis kesat.', kulit: 'Kulitnya kasar seperti sisik ular.' } },
    'Anggur': { img: 'anggur.webp', ans: 'Buah Anggur', opts: ['Buah Anggur', 'Buah Apel', 'Bunga Mawar', 'Mainan Mobil'], desc: { mata: 'Bentuknya bulat kecil-kecil berkelompok.', telinga: 'Tidak bersuara.', hidung: 'Aroma buah yang ringan.', lidah: 'Rasanya manis dan banyak air.', kulit: 'Kulitnya sangat tipis dan licin.' } },
    'Mawar': { img: 'mawar.webp', ans: 'Bunga Mawar', opts: ['Bunga Mawar', 'Buah Apel', 'Buah Semangka', 'Sampah Botol'], desc: { mata: 'Kelopaknya berwarna merah berlapis-lapis.', telinga: 'Sunyi, tidak ada suara.', hidung: 'Aromanya sangat harum semerbak.', lidah: 'Berbahaya! Bukan makanan.', kulit: 'Tangkainya berduri tajam.' } },
    'Semangka': { img: 'semangka.webp', ans: 'Buah Semangka', opts: ['Buah Semangka', 'Buah Mangga', 'Bunga Mawar', 'Paku Berkarat'], desc: { mata: 'Bentuknya besar, kulit hijau bergaris, daging merah.', telinga: 'Bunyi nyaring saat ditepuk.', hidung: 'Aroma air yang segar.', lidah: 'Sangat manis dan banyak air.', kulit: 'Kulit luarnya keras dan licin.' } },
    'kucing': { img: 'kucing.webp', ans: 'Kucing Lucu', opts: ['Kucing Lucu', 'Mainan Mobil', 'Paku Berkarat', 'Buah Jeruk'], desc: { mata: 'Memiliki ekor panjang dan kumis.', telinga: 'Terdengar suara mengeong (Meow).', hidung: 'Aroma hewan berbulu.', lidah: 'Bukan makanan.', kulit: 'Bulunya sangat lembut saat dielus.' } },
    'mobil': { img: 'mobil.webp', ans: 'Mainan Mobil', opts: ['Mainan Mobil', 'Kucing Lucu', 'Sampah Botol', 'Buah Salak'], desc: { mata: 'Memiliki empat roda dan kaca jendela.', telinga: 'Terdengar suara mesin menderu.', hidung: 'Kadang tercium bau bensin.', lidah: 'Benda logam, bukan makanan.', kulit: 'Permukaannya keras dan dingin.' } },
    'paku': { img: 'paku.webp', ans: 'Paku Berkarat', opts: ['Paku Berkarat', 'Sampah Kaleng', 'Mainan Mobil', 'Kucing Lucu'], desc: { mata: 'Benda kecil panjang berwarna kecokelatan kusam.', telinga: 'Berdenting saat jatuh ke lantai.', hidung: 'Bau logam berkarat.', lidah: 'Berbahaya! Bukan makanan.', kulit: 'Ujungnya sangat tajam dan kasar.' } },
    'sampah-botol': { img: 'sampah-botol.webp', ans: 'Sampah Botol', opts: ['Sampah Botol', 'Sampah Kaleng', 'Buah Anggur', 'Paku Berkarat'], desc: { mata: 'Benda transparan yang terlihat kusam.', telinga: 'Berbunyi kresek saat diremas.', hidung: 'Bau sisa minuman manis yang basi.', lidah: 'Kotor, jangan dijilat!', kulit: 'Permukaannya licin dan penyok.' } },
    'sampah-kaleng': { img: 'sampah-kaleng.webp', ans: 'Sampah Kaleng', opts: ['Sampah Kaleng', 'Sampah Botol', 'Mainan Mobil', 'Buah Salak'], desc: { mata: 'Berbentuk tabung logam dan mereknya pudar.', telinga: 'Berdenting nyaring saat ditendang.', hidung: 'Bau karat dan sisa minuman.', lidah: 'Kotor dan bisa beracun.', kulit: 'Keras dan bisa melukai jika tajam.' } }
};

window.startM3QRScanner = function() {
    document.getElementById('m3-s1-intro').style.display = 'none';
    document.getElementById('m3-s1-camera-area').style.display = 'flex';
    document.getElementById('m3-qr-score-txt').innerText = window.m3QRScannedCount + ' / 5';

    const video = document.getElementById('m3-qr-video');
    const canvas = document.getElementById('m3-qr-canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    video.style.transform = 'none'; 
    video.setAttribute("playsinline", true);

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
        showCustomModal("KAMERA TIDAK DIDUKUNG!", "Perangkat atau peramban tidak mendukung akses kamera secara langsung.", warnIcon, "error", () => abortM3QRScanner());
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
        window.m3QRStream = stream;
        video.srcObject = stream;
        video.play();
        requestAnimationFrame(scanM3QR);
    })
    .catch(err => {
        const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
        showCustomModal("KAMERA DIBLOKIR!", "Tantangan ini butuh akses kamera. Izinkan akses kamera lalu ulangi!", warnIcon, "error", () => abortM3QRScanner());
    });

    function scanM3QR() {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            if (typeof jsQR !== 'undefined') {
                // Diubah ke "attemptBoth" agar kebal terhadap pantulan cahaya layar HP (Glare)
                let code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "attemptBoth" });
                
                if (code && code.data) {
                    // Paksa huruf menjadi kecil semua untuk menghindari perbedaan (Case-Insensitive)
                    let scannedText = code.data.trim().toLowerCase(); 
                    
                    // Cari barang di database yang cocok namanya, abaikan kapitalisasinya
                    let matchedKey = Object.keys(m3ItemsData).find(key => key.toLowerCase() === scannedText);
                    
                    if (matchedKey) {
                        if (!window.m3ScannedCodes.includes(matchedKey)) {
                            window.m3ScannedCodes.push(matchedKey);
                            window.m3CurrentItem = matchedKey;
                            
                            if (window.m3QRStream) {
                                window.m3QRStream.getTracks().forEach(track => track.stop());
                                window.m3QRStream = null;
                            }
                            if(typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime=0; sfxTangkap.play(); }
                            
                            openM3InvestigateUI(matchedKey);
                            return; // Keluar dari perputaran kamera
                        } else {
                            // Munculkan peringatan jika barang sudah pernah dipindai
                            document.querySelector('#m3-s1-camera-area .ar-score-box').innerText = "Barang sudah dipindai!";
                            setTimeout(() => {
                                document.querySelector('#m3-s1-camera-area .ar-score-box').innerHTML = `Barang Ditemukan: <span id="m3-qr-score-txt">${window.m3QRScannedCount} / 5</span>`;
                            }, 2000);
                        }
                    } else {
                        // MUNCULKAN TEKS ASING: Jika QR terbaca namun isinya tidak ada di database kita
                        document.querySelector('#m3-s1-camera-area .ar-score-box').innerText = "QR Asing: " + code.data;
                    }
                }
            } else {
                // TEKS ERROR: Menandakan kamu salah menyimpan file jsQR.js (Terunduh versi HTML)
                document.querySelector('#m3-s1-camera-area .ar-score-box').innerText = "ERROR: jsQR gagal dimuat!";
            }
        }
        window.m3QRLoop = requestAnimationFrame(scanM3QR);
    }
};

window.openM3InvestigateUI = function(itemKey) {
    document.getElementById('m3-s1-camera-area').style.display = 'none';
    document.getElementById('m3-s1-investigate-area').style.display = 'flex';
    
    document.getElementById('m3-inv-count').innerText = (window.m3QRScannedCount + 1);
    window.m3InspectedSenses.clear();
    
    document.getElementById('m3-inspect-quiz').style.display = 'none';
    document.getElementById('m3-inspect-tools-container').style.display = 'flex';
    
    document.querySelectorAll('#m3-s1-investigate-area .m1-tool-btn').forEach(btn => {
        btn.classList.remove('used');
        btn.style.filter = '';
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    });
};

window.inspectM3Item = function(sense, toolElem) {
    if (toolElem.classList.contains('used')) return;
    toolElem.classList.add('used');
    toolElem.style.filter = 'grayscale(100%)';
    toolElem.style.opacity = '0.4';
    toolElem.style.pointerEvents = 'none';

    if(typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime=0; sfxTangkap.play(); }

    let itemData = m3ItemsData[window.m3CurrentItem];
    let descText = itemData.desc[sense];
    window.m3InspectedSenses.add(sense);

    const senseIconSvg = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 5h2v2H7V5zm0 3h2v3H7V8z"/></svg>`;
    showCustomModal(`HASIL INDRA ${sense.toUpperCase()}`, descText, senseIconSvg, "alert", () => {
        if (window.m3InspectedSenses.size >= 5) {
            document.getElementById('m3-inspect-tools-container').style.display = 'none';
            document.getElementById('m3-inspect-quiz').style.display = 'flex';
            
            let optsBox = document.getElementById('m3-inspect-opts');
            optsBox.innerHTML = '';
            let shuffled = [...itemData.opts].sort(() => Math.random() - 0.5);
            
            shuffled.forEach(opt => {
                let btn = document.createElement('button');
                btn.className = 'btn-explore';
                btn.innerText = opt;
                btn.onclick = function() {
                    if (btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
                    if (opt === itemData.ans) {
                        btn.classList.add('btn-correct');
                        if(typeof sfxBenar !== 'undefined') { sfxBenar.currentTime=0; sfxBenar.play(); }
                        addScore(20);
                        
                        window.m3QRScannedCount++;
                        
                        const imgBox = document.querySelector('#m3-s1-investigate-area .m1-modal-box > div');
                        imgBox.innerHTML = `<img src="assets/item/${itemData.img}" style="width:100%; height:100%; object-fit:contain; animation: popIn 0.5s forwards;">`;
                        imgBox.style.background = 'transparent';
                        imgBox.style.border = 'none';
                        
                        setTimeout(() => {
                            imgBox.innerHTML = `<span style="font-size: 5cqw; color: #fff; font-family: monospace;">?</span>`;
                            imgBox.style.background = '#111';
                            imgBox.style.border = '0.3cqw solid #fff';

                            if (window.m3QRScannedCount >= 5) {
                                const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
                                showCustomModal("INSPEKSI SELESAI!", "Hebat! Kamu berhasil mengidentifikasi 5 barang rahasia. Saatnya kita perbaiki Hologram Medis di Puskesmas!", checkIcon, "alert", () => {
                                    
                                    // Matikan Fullscreen untuk menuju Tahap 2
                                    document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
                                    document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
                                    document.querySelector('.mission-header').style.display = 'flex';
                                    
                                    nextMissionStage(2);
                                });
                            } else {
                                document.getElementById('m3-s1-investigate-area').style.display = 'none';
                                startM3QRScanner(); 
                            }
                        }, 1000);
                    } else {
                        btn.classList.add('btn-wrong');
                        if(typeof sfxSalah !== 'undefined') { sfxSalah.currentTime=0; sfxSalah.play(); }
                        reduceLife();
                        const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                        showCustomModal("TEBAKAN SALAH!", "Itu bukan barangnya! Coba ingat kembali hasil analisis kelima indramu. (Nyawa -1)", lockIcon, "error");
                    }
                };
                optsBox.appendChild(btn);
            });
        }
    });
};

window.abortM3QRScanner = function() {
    if (window.m3QRStream) {
        window.m3QRStream.getTracks().forEach(track => track.stop());
        window.m3QRStream = null;
    }
    cancelAnimationFrame(window.m3QRLoop);
    
    document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
    document.querySelector('.mission-header').style.display = 'flex';
    exitMissionScreen();
};

// ================= LOGIKA MINI GAME DETEKTIF BAU (MISI 4 SEBELUM TAHAP 1) =================
window.m4QRScannedCount = 0;
window.m4ScannedCodes = [];
window.m4QRStream = null;
window.m4QRLoop = null;

const m4SmellData = {
    'jeruk': { img: 'jeruk.webp', q: 'Aroma apa yang dikeluarkan oleh kulit buah jeruk ini saat dikupas?', ans: 'Asam segar khas buah', opts: ['Asam segar khas buah', 'Bau tanah basah', 'Bau gosong', 'Bau amis laut'] },
    'mawar': { img: 'mawar.webp', q: 'Aroma apa yang tercium dari bunga mawar yang mekar ini?', ans: 'Harum semerbak', opts: ['Harum semerbak', 'Bau asap pembakaran', 'Bau asam menyengat', 'Bau amis'] },
    'sampah-botol': { img: 'sampah-botol.webp', q: 'Bagaimana bau dari sisa minuman yang membusuk di dalam botol ini?', ans: 'Bau asam dan tidak sedap', opts: ['Bau asam dan tidak sedap', 'Harum seperti parfum', 'Wangi buah-buahan segar', 'Bau mint'] },
    'sampah-kaleng': { img: 'sampah-kaleng.webp', q: 'Aroma apa yang tercium dari kaleng berkarat yang kotor ini?', ans: 'Bau logam dan kotoran', opts: ['Bau logam dan kotoran', 'Wangi melati', 'Bau manis gula', 'Harum bedak bayi'] },
    'mangga': { img: 'mangga.webp', q: 'Bagaimana aroma dari buah mangga yang sudah matang ini?', ans: 'Harum manis menyegarkan', opts: ['Harum manis menyegarkan', 'Bau busuk menyengat', 'Bau asap knalpot', 'Tidak ada bau sama sekali'] },
    'kucing': { img: 'kucing.webp', q: 'Bau apa yang biasanya tercium dari tubuh hewan berbulu ini jika tidak dimandikan secara rutin?', ans: 'Bau khas hewan / agak amis', opts: ['Bau khas hewan / agak amis', 'Wangi parfum stroberi', 'Bau gosong terbakar', 'Aroma mint segar'] },
    'mobil': { img: 'mobil.webp', q: 'Saat mesin dinyalakan, bau gas apa yang keluar dari knalpot mobil ini?', ans: 'Bau asap pembakaran bensin', opts: ['Bau asap pembakaran bensin', 'Wangi bunga mawar', 'Aroma manis permen', 'Bau amis ikan'] }
};

window.startM4QRScanner = function() {
    document.getElementById('m4-qr-intro').style.display = 'none';
    document.getElementById('m4-qr-camera-area').style.display = 'flex';
    document.getElementById('m4-qr-score-txt').innerText = window.m4QRScannedCount + ' / 5';

    const video = document.getElementById('m4-qr-video');
    const canvas = document.getElementById('m4-qr-canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    video.style.transform = 'none'; 
    video.setAttribute("playsinline", true);

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
        showCustomModal("KAMERA TIDAK DIDUKUNG!", "Perangkat atau peramban tidak mendukung akses kamera secara langsung.", warnIcon, "error", () => abortM4QRScanner());
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
        window.m4QRStream = stream;
        video.srcObject = stream;
        video.play();
        requestAnimationFrame(scanM4QR);
    })
    .catch(err => {
        const warnIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6 0h4v2h2v2h2v8h-2v2H6v-2H4V4h2V2zm2 2H6v10h4V2zm0 8h2v2H8v-2zm0-6h2v4H8V4z"/></svg>`;
        showCustomModal("KAMERA DIBLOKIR!", "Tantangan ini butuh akses kamera. Izinkan akses kamera lalu ulangi!", warnIcon, "error", () => abortM4QRScanner());
    });

    function scanM4QR() {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            if (typeof jsQR !== 'undefined') {
                let code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "attemptBoth" });
                
                if (code && code.data) {
                    let scannedText = code.data.trim().toLowerCase(); 
                    let matchedKey = Object.keys(m4SmellData).find(key => key.toLowerCase() === scannedText);
                    
                    if (matchedKey) {
                        if (!window.m4ScannedCodes.includes(matchedKey)) {
                            window.m4ScannedCodes.push(matchedKey);
                            
                            if (window.m4QRStream) {
                                window.m4QRStream.getTracks().forEach(track => track.stop());
                                window.m4QRStream = null;
                            }
                            if(typeof sfxTangkap !== 'undefined') { sfxTangkap.currentTime=0; sfxTangkap.play(); }
                            
                            openM4SmellQuiz(matchedKey);
                            return; 
                        } else {
                            document.querySelector('#m4-qr-camera-area .ar-score-box').innerText = "Barang sudah dipindai!";
                            setTimeout(() => {
                                document.querySelector('#m4-qr-camera-area .ar-score-box').innerHTML = `Barang Ditemukan: <span id="m4-qr-score-txt">${window.m4QRScannedCount} / 5</span>`;
                            }, 2000);
                        }
                    } else {
                        document.querySelector('#m4-qr-camera-area .ar-score-box').innerText = "QR Asing: " + code.data;
                    }
                }
            } else {
                document.querySelector('#m4-qr-camera-area .ar-score-box').innerText = "ERROR: jsQR gagal dimuat!";
            }
        }
        window.m4QRLoop = requestAnimationFrame(scanM4QR);
    }
};

window.openM4SmellQuiz = function(itemKey) {
    document.getElementById('m4-qr-camera-area').style.display = 'none';
    document.getElementById('m4-qr-quiz-area').style.display = 'flex';
    
    document.getElementById('m4-qr-count').innerText = (window.m4QRScannedCount + 1);
    
    let itemData = m4SmellData[itemKey];
    document.getElementById('m4-qr-item-img').src = `assets/item/${itemData.img}`;
    document.getElementById('m4-qr-question').innerText = itemData.q;
    
    let optsBox = document.getElementById('m4-qr-opts');
    optsBox.innerHTML = '';
    let shuffled = [...itemData.opts].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(opt => {
        let btn = document.createElement('button');
        btn.className = 'btn-explore';
        btn.innerText = opt;
        btn.onclick = function() {
            if (btn.classList.contains('btn-correct') || btn.classList.contains('btn-wrong')) return;
            if (opt === itemData.ans) {
                btn.classList.add('btn-correct');
                if(typeof sfxBenar !== 'undefined') { sfxBenar.currentTime=0; sfxBenar.play(); }
                addScore(20);
                
                window.m4QRScannedCount++;
                
                setTimeout(() => {
                    if (window.m4QRScannedCount >= 5) {
                        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;
                        showCustomModal("DETEKTIF BAU SELESAI!", "Luar biasa! Hidungmu sangat tajam mengenali berbagai memori aroma. Mari kita mulai pelatihan P3K Pramuka!", checkIcon, "alert", () => {
                            
                            // Matikan Fullscreen untuk menuju Tahap 1 Intro biasa
                            document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
                            document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
                            document.querySelector('.mission-header').style.display = 'flex';
                            
                            nextMissionStage(1);
                        });
                    } else {
                        document.getElementById('m4-qr-quiz-area').style.display = 'none';
                        startM4QRScanner(); 
                    }
                }, 1000);
            } else {
                btn.classList.add('btn-wrong');
                if(typeof sfxSalah !== 'undefined') { sfxSalah.currentTime=0; sfxSalah.play(); }
                reduceLife();
                const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
                showCustomModal("SALAH AROMA!", "Itu bukan bau yang tepat! Coba ingat-ingat lagi memori aromanya. (Nyawa -1)", lockIcon, "error");
            }
        };
        optsBox.appendChild(btn);
    });
};

window.abortM4QRScanner = function() {
    if (window.m4QRStream) {
        window.m4QRStream.getTracks().forEach(track => track.stop());
        window.m4QRStream = null;
    }
    cancelAnimationFrame(window.m4QRLoop);
    
    document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
    document.querySelector('.mission-header').style.display = 'flex';
    exitMissionScreen();
};

// ================= LOGIKA MINI GAME AR TANGKAP BUAH (MISI 3) =================
window.mulaiM3AR = function() {
    // Paksa aktifkan mode layar penuh
    document.querySelector('.mission-header').style.display = 'none';
    document.querySelector('.mission-wrapper').classList.add('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.add('fullscreen-mode');

    nextMissionStage('m3-ar');
    
    // Beri jeda sejenak, lalu munculkan percakapan transisi NPC
    setTimeout(() => {
        const dialogIntroAR = [
            { text: "Kerja yang bagus! Kamu berhasil merawat telinga pasien dengan sangat baik.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
            { text: "Tapi tunggu, pasien penari Jaranan kita butuh asupan vitamin! Ayo tangkap 30 buah segar yang jatuh dari pohon.", mood: "happy", name: "Petualang Nagata", npc: "npc1" },
            { text: "Arahkan tanganmu di udara dan sapu buahnya. Ingat, hindari buah jebakan yang disebutkan ya!", mood: "warning", name: "Petualang Nagata", npc: "npc1" }
        ];
        startVnDialog(dialogIntroAR, "Petualang Nagata", "npc1", () => {
            startM3AR(); 
        });
    }, 500);
};

window.abortM3AR = function() {
    bgmBoss.pause();
    bgmBoss.currentTime = 0;
    if (window.arStream) {
        window.arStream.getTracks().forEach(track => track.stop());
        window.arStream = null;
    }
    window.arActive = false;
    clearInterval(window.arLoop);
    clearInterval(window.arSpawner);
    
    document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
    document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
    document.querySelector('.mission-header').style.display = 'flex';
    exitMissionScreen();
};

window.startM3AR = function() {
    document.getElementById('m3-ar-game-area').style.display = 'flex';
    
    bgmMission.pause();
    bgmBoss.currentTime = 0;
    bgmBoss.play().catch(e => console.log(e));

    const video = document.getElementById('m3-ar-video');
    const canvas = document.getElementById('m3-ar-hidden-canvas');
    if (!video || !canvas) return;
    
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    canvas.width = 160; 
    canvas.height = 90;

    let previousImg = null;
    let arBoxesData = [];
    let arScore = 0;
    window.arActive = false; 

    // Target buah acak dengan jebakan
    let targetPhases = [
        { fruits: ['apel'], text: 'HINDARI BUAH APEL!' },
        { fruits: ['mangga'], text: 'HINDARI BUAH MANGGA!' },
        { fruits: ['pisang'], text: 'HINDARI BUAH PISANG!' },
        { fruits: ['jeruk'], text: 'HINDARI BUAH JERUK!' },
        { fruits: ['semangka'], text: 'HINDARI BUAH SEMANGKA!' }
    ].sort(() => Math.random() - 0.5);
    
    let currentPhaseIndex = 0;

    function showPhaseOverlay(phase) {
        window.arActive = false; 
        const wrapper = document.getElementById('m3-ar-target-overlay-wrapper');
        const overlay = document.getElementById('m3-ar-target-overlay');
        overlay.innerText = phase.text;
        wrapper.style.display = 'flex';
        overlay.classList.remove('animate-pop');
        void overlay.offsetWidth; 
        overlay.classList.add('animate-pop');

        try {
            if(typeof audioArCmd !== 'undefined' && audioArCmd[phase.text]) {
                audioArCmd[phase.text].currentTime = 0;
                audioArCmd[phase.text].play().catch(() => {});
            }
        } catch (e) {}

        setTimeout(() => {
            wrapper.style.display = 'none';
            window.arActive = true; 
        }, 2500); 
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
    .then(stream => {
        window.arStream = stream;
        video.srcObject = stream;
        video.play();
        
        const faceGuide = document.getElementById('m3-ar-face-guide');
        if (faceGuide) {
            faceGuide.style.opacity = '1';
            setTimeout(() => { faceGuide.style.opacity = '0'; }, 4000);
        }
        
        setTimeout(() => { showPhaseOverlay(targetPhases[currentPhaseIndex]); }, 500);
        
        let lastLane = -1;

        window.arSpawner = setInterval(() => {
            if (!window.arActive) return;
            const fruits = ['apel', 'pisang', 'jeruk', 'anggur', 'mangga', 'semangka', 'stroberi'];
            let type = fruits[Math.floor(Math.random() * fruits.length)];
            
            let boxEl = document.createElement('div');
            boxEl.className = 'ar-fruit ' + type;
            
            let lane;
            do { lane = Math.floor(Math.random() * 6); } while (lane === lastLane);
            lastLane = lane;
            
            let startX = 10 + (lane * 14); 
            boxEl.style.left = startX + '%';
            boxEl.style.top = '-15%';
            document.getElementById('m3-ar-game-area').appendChild(boxEl);
            
            arBoxesData.push({
                el: boxEl, x: startX, y: -15, type: type, isHit: false,
                speed: Math.random() * 0.6 + 0.8 
            });
        }, 1200);

        window.arLoop = setInterval(() => {
            if (!window.arActive) return;

            for (let i = arBoxesData.length - 1; i >= 0; i--) {
                const box = arBoxesData[i];

                box.y += box.speed;
                box.el.style.top = box.y + '%';

                if (box.y > 110) {
                    box.el.remove();
                    arBoxesData.splice(i, 1);
                }
            }
            
            try {
                ctx.drawImage(video, 0, 0, 160, 90);
                let currentImg = ctx.getImageData(0, 0, 160, 90);
                
                if (previousImg) {
                    arBoxesData.forEach(box => {
                        if (box.isHit || box.y < 0 || box.y > 90) return;
                        
                        let canvasX = Math.floor((1 - (box.x/100) - 0.08) * 160); 
                        let canvasY = Math.floor((box.y/100) * 90);
                        
                        let motionPx = 0, totalPx = 0;
                        for (let y = canvasY-5; y < canvasY + 25; y++) {
                            for (let x = canvasX-5; x < canvasX + 25; x++) {
                                if (x >= 0 && x < 160 && y >= 0 && y < 90) {
                                    let idx = (y * 160 + x) * 4;
                                    let r = currentImg.data[idx];
                                    let g = currentImg.data[idx+1];
                                    let b = currentImg.data[idx+2];
                                    
                                    let rDiff = Math.abs(r - previousImg.data[idx]);
                                    let gDiff = Math.abs(g - previousImg.data[idx+1]);
                                    let bDiff = Math.abs(b - previousImg.data[idx+2]);
                                    
                                    if (rDiff + gDiff + bDiff > 90) { 
                                        let isSkin = (r > 60 && g > 35 && b > 15 && r > g && r > b && Math.abs(r - g) > 10);
                                        if (isSkin) {
                                            let isHead = (x > 60 && x < 100 && y > 15 && y < 55);
                                            let isBody = (x > 40 && x < 120 && y >= 55);
                                            if (!(isHead || isBody)) motionPx++;
                                        }
                                    }
                                    totalPx++;
                                }
                            }
                        }
                        
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
        showCustomModal("KAMERA DIBLOKIR!", "Tantangan ini butuh akses kamera. Izinkan akses kamera lalu ulangi!", warnIcon, "error", () => abortM3AR());
    });

    function handleARHit(box) {
        const currentTarget = targetPhases[currentPhaseIndex];
        const lockIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M4 2h8v2h2v10H2V4h2V2zm2 2v2h4V4H6zm-2 4v4h8V8H4z"/></svg>`;
        const checkIcon = `<svg class="svg-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M14 2h2v2h-2V2zm-2 2h2v2h-2V4zm-2 2h2v2h-2V6zm-2 2h2v2H8V8zm-2 2h2v2H6v-2zm-2 2h2v2H4v-2zm-2-2h2v2H2v-2zm-2-2h2v2H0v-2z"/></svg>`;

        if (!currentTarget.fruits.includes(box.type)) {
            box.el.classList.add('ar-effect');
            setTimeout(() => box.el.remove(), 200);
            
            arScore++;
            document.getElementById('m3-ar-score-txt').innerText = `${arScore} / 30`;
            addScore(10, true); 

            if (arScore >= 30) {
                bgmBoss.pause();
                bgmBoss.currentTime = 0;
                window.arActive = false;
                
                if (window.arStream) {
                    window.arStream.getTracks().forEach(track => track.stop());
                    window.arStream = null;
                }
                clearInterval(window.arLoop);
                clearInterval(window.arSpawner);

                showCustomModal("PANEN BERHASIL!", "Luar biasa! Pasien penari kita pasti cepat sembuh. Saatnya masuk ke ruangan Hidung!", checkIcon, "alert", () => {
                    // Kembali ke mode kotak normal untuk Stage 4
                    document.querySelector('.mission-wrapper').classList.remove('fullscreen-mode');
                    document.querySelector('.mission-full-box').classList.remove('fullscreen-mode');
                    document.querySelector('.mission-header').style.display = 'flex';
                    
                    bgmMission.currentTime = 0;
                    bgmMission.play().catch(e => console.log(e));
                    
                    nextMissionStage(4); 
                });

            } else if (arScore % 10 === 0 && currentPhaseIndex < targetPhases.length - 1) {
                currentPhaseIndex++;
                showPhaseOverlay(targetPhases[currentPhaseIndex]);
            }
        } else {
            reduceLife(true); 
            window.arActive = false; 
            const expected = currentTarget.text.replace('HINDARI ', '').replace('!', '');
            
            showCustomModal("AWAS JEBAKAN!", `Fokuskan matamu! Kamu harus menghindari: ${expected}\\n(Nyawa Berkurang 1)`, lockIcon, "error", () => {
                if (chapterLives[currentChapter] > 0) {
                    setTimeout(() => { window.arActive = true; }, 1500);
                } else {
                    abortM3AR(); 
                }
            });
        }
    }
};

// ================= LOGIKA PELUNCUR MINI GAME KATALOG =================
window.launchMiniGame = function(gameCode) {
    // Tandai bahwa kita sedang bermain lewat jalur pintas Katalog (Arcade Mode)
    window.isArcadeMode = true;
    
    // Sembunyikan layar menu katalog DAN layar beranda utama
    document.getElementById('minigame-screen').classList.remove('active');
    document.getElementById('title-screen').classList.remove('active');

    // Beri jeda sedikit agar layar menu tertutup rapi sebelum transisi Persona dimulai
    setTimeout(() => {
        if (gameCode === 'warna') {
            buildMission1();
            enterMissionScreen("MINI GAME", "DETEKTIF WARNA", 1, 'm1-color');
            setTimeout(() => { startM1ColorGame(); }, 2800);
        } 
        else if (gameCode === 'buah') {
            buildMission5();
            enterMissionScreen("MINI GAME", "PANEN BUAH AR", 5, 1);
            setTimeout(() => { startBanyuBeningAR(); }, 2800);
        } 
        else if (gameCode === 'wasit') {
            buildMission2();
            enterMissionScreen("MINI GAME", "UJI REFLEKS", 2, 'arcade');
            setTimeout(() => { startArcadeM2(); }, 2800);
        } 
        else if (gameCode === 'sampah') {
            buildMission1();
            enterMissionScreen("MINI GAME", "BERSIH PASAR", 1, 3);
            setTimeout(() => { startCariSampah(); }, 2800);
        } 
        else if (gameCode === 'suara') {
            buildMission2();
            enterMissionScreen("MINI GAME", "DETEKTIF SUARA", 2, 'audio-detektif');
            setTimeout(() => { startAudioDetektifM2(); }, 2800);
        } 
        else if (gameCode === 'bau') {
            buildMission4();
            enterMissionScreen("MINI GAME", "DETEKTIF BAU QR", 4, 'm4-qr');
        }
        else if (gameCode === 'qr-barang') {
            buildMission3();
            enterMissionScreen("MINI GAME", "INSPEKSI QR", 3, 1);
        }
        else if (gameCode === 'senter-pasar') {
            buildMission1();
            enterMissionScreen("MINI GAME", "SENTER PASAR", 1, 1);
        }
        else if (gameCode === 'senter-alam') {
            buildMission5();
            enterMissionScreen("MINI GAME", "DETEKTIF ALAM", 5, 2);
        }
        else if (gameCode === 'senter-malam') {
            buildMission6();
            enterMissionScreen("MINI GAME", "DETEKTIF MALAM", 6, 5);
        }
        else if (gameCode === 'sim-netra') {
            buildMission4();
            enterMissionScreen("MINI GAME", "SIM. TUNANETRA", 4, 4);
            setTimeout(() => { startAdaptationSim(1); }, 2800);
        }
        else if (gameCode === 'sim-rungu') {
            buildMission4();
            enterMissionScreen("MINI GAME", "SIM. TUNARUNGU", 4, 4);
            setTimeout(() => { startAdaptationSim(2); }, 2800);
        }
        else if (gameCode === 'sim-butawarna') {
            buildMission4();
            enterMissionScreen("MINI GAME", "SIM. BUTA WARNA", 4, 4);
            setTimeout(() => { startAdaptationSim(3); }, 2800);
        }
        else if (gameCode === 'sim-matirasa') {
            buildMission4();
            enterMissionScreen("MINI GAME", "SIM. MATI RASA", 4, 4);
            setTimeout(() => { startAdaptationSim(4); }, 2800);
        }
    }, 300);
};