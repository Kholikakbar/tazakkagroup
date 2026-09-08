"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Andi Pratama", device: "Service Laptop ASUS", rating: 5, text: "Laptop saya yang mati total karena masalah mainboard bisa diperbaiki di sini. Teknisinya jujur dan estimasi biaya sesuai. Garansi 30 hari juga bikin tenang. Recommended banget!", date: "Agustus 2026", avatar: "AP" },
  { name: "Siti Nurhaliza", device: "Ganti LCD Samsung", rating: 5, text: "LCD HP Samsung saya pecah parah, tapi hasilnya seperti baru lagi. Pengerjaannya cepat, cuma 1 jam langsung selesai. Harga juga bersaing dibanding tempat lain. Puas banget!", date: "Agustus 2026", avatar: "SN" },
  { name: "Budi Setiawan", device: "Rakit PC Gaming", rating: 5, text: "Rakit PC gaming di TGS hasilnya mantap! Tim teknisinya paham banget soal spek dan budget. Cable management rapi, performa kencang. Terima kasih TGS!", date: "Agustus 2026", avatar: "BS" },
  { name: "Dewi Anggraeni", device: "Service Printer Epson", rating: 4, text: "Printer kantor yang sering paper jam akhirnya normal lagi setelah diservice di sini. Teknisi datang tepat waktu dan menjelaskan masalahnya dengan detail. Harga wajar.", date: "Agustus 2026", avatar: "DA" },
  { name: "Rizky Firmansyah", device: "Upgrade SSD Laptop", rating: 5, text: "Upgrade SSD di laptop lama saya dan hasilnya luar biasa! Boot time dari 3 menit jadi 15 detik. Plus install Windows gratis. Pelayanan ramah dan profesional.", date: "Agustus 2026", avatar: "RF" },
  { name: "Maya Putri", device: "Service HP Samsung", rating: 5, text: "HP Samsung saya kena air dan mati total. Awalnya pesimis, tapi ternyata bisa diselamatkan. Data juga aman semua. Teknisinya sabar menjelaskan prosesnya. Top!", date: "Agustus 2026", avatar: "MP" },
  { name: "Fajar Hidayat", device: "Service Laptop Lenovo", rating: 5, text: "Laptop Lenovo saya overheat parah, ternyata thermal paste-nya sudah kering. Setelah diservis di TGS, laptop adem lagi dan performanya kembali normal. Mantap!", date: "Agustus 2026", avatar: "FH" },
  { name: "Nadia Rahma", device: "Ganti Baterai Xiaomi", rating: 5, text: "Baterai HP Xiaomi saya cepat habis, ternyata sudah kembung. Ganti baterai di sini cepat dan hasilnya awet. Sekarang bisa tahan seharian lagi.", date: "Agustus 2026", avatar: "NR" },
  { name: "Hendra Wijaya", device: "Rakit PC Office", rating: 5, text: "Rakit PC untuk kantor dengan budget terbatas, tapi hasilnya luar biasa. Teknisi TGS bantu pilihkan komponen yang pas dan hemat. PC-nya lancar untuk kerja sehari-hari.", date: "Agustus 2026", avatar: "HW" },
  { name: "Rina Susanti", device: "Service HP Xiaomi", rating: 4, text: "HP Xiaomi saya layarnya bergetar sendiri. Ternyata masalah di IC display-nya. Diperbaiki dengan cepat dan harganya masuk akal. Pelayanan oke.", date: "Agustus 2026", avatar: "RS" },
  { name: "Agus Santoso", device: "Upgrade RAM Laptop", rating: 5, text: "Tambah RAM laptop dari 4GB ke 16GB. Sekarang multitasking lancar, buka banyak tab Chrome nggak lag lagi. Proses cepat dan hasilnya sangat memuaskan!", date: "Juli 2026", avatar: "AS" },
  { name: "Lina Marlina", device: "Service Printer Canon", rating: 5, text: "Printer Canon saya nge-blank saat ngeprint. Setelah diservice di TGS, hasilnya kembali jernih dan bersih. Harga servisnya juga sangat terjangkau.", date: "Juli 2026", avatar: "LM" },
  { name: "Doni Kurniawan", device: "Ganti LCD Samsung", rating: 5, text: "LCD Samsung A52 saya retak setelah jatuh. Ganti LCD di TGS hasilnya mulus banget, touch-nya responsif seperti baru. Pengerjaan kurang dari 2 jam.", date: "Juli 2026", avatar: "DK" },
  { name: "Putri Amelia", device: "Service Laptop HP", rating: 5, text: "Laptop HP saya sering blue screen. Ternyata ada masalah di hardisk-nya. Langsung diganti SSD dan diinstall ulang, sekarang super cepat dan stabil!", date: "Juli 2026", avatar: "PA" },
  { name: "Wahyu Prasetyo", device: "Service PC Desktop", rating: 4, text: "PC kantor mati mendadak, ternyata PSU-nya rusak. Diganti dengan yang lebih bagus dan harganya reasonable. PC sekarang jalan normal lagi. Terima kasih!", date: "Juli 2026", avatar: "WP" },
  { name: "Anisa Fitri", device: "Ganti Port Charger HP", rating: 5, text: "Port charger HP saya longgar, harus ditekan baru bisa cas. Setelah diganti di TGS, sekarang cas lancar dan cepat lagi. Cuma 30 menit selesai!", date: "Juli 2026", avatar: "AF" },
  { name: "Rudi Hartono", device: "Rakit PC Workstation", rating: 5, text: "Butuh PC untuk rendering 3D, konsultasi di TGS dan hasilnya perfect. Performa render cepat, stabil, dan sesuai budget. Teknisinya sangat paham!", date: "Juli 2026", avatar: "RH" },
  { name: "Dian Permata", device: "Service HP Oppo", rating: 5, text: "HP Oppo saya kameranya blur dan nggak bisa fokus. Ternyata lensanya lecet. Diganti di TGS dan sekarang foto-foto jernih lagi. Senang banget!", date: "Juli 2026", avatar: "DP" },
  { name: "Ilham Maulana", device: "Upgrade SSD + RAM", rating: 5, text: "Paket upgrade SSD dan RAM di laptop ASUS lama saya. Hasilnya laptop yang hampir mau dijual jadi kencang lagi! Worth it banget, hemat beli laptop baru.", date: "Juli 2026", avatar: "IM" },
  { name: "Nur Hasanah", device: "Service Printer Brother", rating: 4, text: "Printer Brother kantor error terus. Setelah dibawa ke TGS, diperbaiki dalam 2 hari dan dikasih tips maintenance juga. Pelayanan informatif.", date: "Juli 2026", avatar: "NH" },
  { name: "Arief Rahman", device: "Service Laptop Acer", rating: 5, text: "Keyboard laptop Acer saya ada beberapa tombol yang nggak berfungsi. Diganti keyboard baru di TGS, cepat dan harganya masuk akal. Mantap!", date: "Juni 2026", avatar: "AR" },
  { name: "Yuni Kartika", device: "Ganti LCD Vivo", rating: 5, text: "LCD Vivo Y21 pecah, dikerjakan di TGS selesai dalam 45 menit. Layarnya bagus, sentuhan responsif. Harga ganti LCD-nya juga murah dibanding toko lain.", date: "Juni 2026", avatar: "YK" },
  { name: "Bayu Aditya", device: "Rakit PC Gaming", rating: 5, text: "Rakit PC untuk main game dan streaming. Spek yang dipilihkan TGS pas banget, FPS stabil di semua game. Cable management-nya juga estetik!", date: "Juni 2026", avatar: "BA" },
  { name: "Citra Dewi", device: "Service HP Realme", rating: 5, text: "HP Realme saya sering restart sendiri. Dibawa ke TGS, ternyata masalah di IC Power. Setelah diperbaiki, HP stabil lagi dan nggak restart-restart.", date: "Juni 2026", avatar: "CD" },
  { name: "Eko Prasetyo", device: "Service Laptop Dell", rating: 5, text: "Laptop Dell saya engsel-nya patah dan layarnya miring. Diperbaiki di TGS hasilnya rapi banget, engsel kokoh lagi. Harga juga jauh lebih murah dari service center resmi.", date: "Juni 2026", avatar: "EP" },
  { name: "Fitria Sari", device: "Ganti Speaker HP", rating: 5, text: "Speaker HP Samsung saya mati sebelah. Ganti speaker di TGS cepat dan sekarang suaranya jernih stereo lagi. Pelayanannya juga ramah. Recommended!", date: "Juni 2026", avatar: "FS" },
  { name: "Galih Permadi", device: "Upgrade SSD Laptop", rating: 5, text: "Laptop Toshiba jadul saya dikasih SSD 256GB. Sekarang boot cuma 10 detik! Nggak nyangka laptop tua masih bisa secepat ini. TGS emang juara!", date: "Juni 2026", avatar: "GP" },
  { name: "Hesti Rahayu", device: "Service Printer HP", rating: 4, text: "Printer HP LaserJet kantor sering macet kertas. Setelah diservis di TGS, roller-nya diganti dan sekarang lancar. Pengerjaan cuma setengah hari.", date: "Juni 2026", avatar: "HR" },
  { name: "Ivan Saputra", device: "Service HP Oppo", rating: 5, text: "HP Oppo Reno 8 saya kena water damage. TGS berhasil menyelamatkan HP dan data saya. Teknisinya detail dan profesional. Terima kasih banyak!", date: "Juni 2026", avatar: "IS" },
  { name: "Joko Widodo", device: "Rakit PC Kantor", rating: 5, text: "Pesan 5 unit PC kantor sekaligus di TGS. Semua diinstallin software yang dibutuhkan dan siap pakai. Harga kompetitif dan pelayanan cepat!", date: "Juni 2026", avatar: "JW" },
  { name: "Kartini Wulandari", device: "Service Laptop Lenovo", rating: 5, text: "Laptop Lenovo saya nggak bisa connect WiFi. Ternyata modul WiFi-nya rusak, diganti di TGS dan sekarang lancar lagi. Cepat dan profesional!", date: "Mei 2026", avatar: "KW" },
  { name: "Lukman Hakim", device: "Ganti Baterai Samsung", rating: 5, text: "Baterai Samsung S21 kembung dan bahaya. Langsung bawa ke TGS, diganti baterai original. Sekarang HP aman dan baterai awet seharian.", date: "Mei 2026", avatar: "LH" },
  { name: "Melani Susanto", device: "Service PC Desktop", rating: 4, text: "PC rumah tiba-tiba nggak bisa nyala. Ternyata motherboard-nya bermasalah. TGS kasih solusi yang tepat dan harga terjangkau. Good job!", date: "Mei 2026", avatar: "MS" },
  { name: "Nugroho Wibowo", device: "Upgrade RAM PC", rating: 5, text: "Upgrade RAM PC dari 8GB ke 32GB untuk editing video. Sekarang render Premiere Pro jauh lebih cepat! TGS bantu pilih RAM yang compatible.", date: "Mei 2026", avatar: "NW" },
  { name: "Oktavia Sari", device: "Ganti LCD Oppo", rating: 5, text: "LCD Oppo Reno saya bergaris-garis setelah jatuh. Ganti LCD di TGS murah dan cepat, hasilnya layar mulus lagi. Saya pasti akan kembali lagi!", date: "Mei 2026", avatar: "OS" },
  { name: "Prasetya Nugraha", device: "Service Laptop ASUS", rating: 5, text: "Fan laptop ASUS saya berisik banget. Setelah dibersihkan dan diganti thermal paste di TGS, laptop jadi silent dan adem. Top banget!", date: "Mei 2026", avatar: "PN" },
  { name: "Qori Rahmawati", device: "Service HP Infinix", rating: 5, text: "HP Infinix saya touchscreen ghost touch. Diperbaiki di TGS dan sekarang normal kembali. Teknisinya juga kasih tips biar nggak terjadi lagi.", date: "Mei 2026", avatar: "QR" },
  { name: "Reza Pahlevi", device: "Rakit PC Streaming", rating: 5, text: "Rakit PC untuk live streaming game di TGS. Hasilnya smooth banget, bisa streaming 1080p60fps tanpa drop frame. Puas dengan hasilnya!", date: "Mei 2026", avatar: "RP" },
  { name: "Sari Indah", device: "Service Printer Epson", rating: 4, text: "Printer Epson L3110 saya warnanya belang. Setelah diservis di TGS, head print-nya dibersihkan dan sekarang warna cetakan kembali sempurna.", date: "Mei 2026", avatar: "SI" },
  { name: "Taufik Hidayat", device: "Ganti Kamera HP", rating: 5, text: "Kamera belakang HP Samsung saya pecah. Diganti di TGS original, hasilnya foto jernih seperti baru. Cepat banget prosesnya!", date: "Mei 2026", avatar: "TH" },
  { name: "Ulfa Maharani", device: "Service Laptop HP", rating: 5, text: "Laptop HP EliteBook saya nggak bisa charge. Ternyata IC charging-nya rusak. Diperbaiki di TGS dan sekarang charge normal lagi. Mantap!", date: "April 2026", avatar: "UM" },
  { name: "Vino Pratama", device: "Upgrade SSD Laptop", rating: 5, text: "Upgrade HDD ke SSD 512GB di laptop Dell. Beda banget performanya, buka aplikasi instan! Teknisi TGS juga bantu backup data saya. Terima kasih!", date: "April 2026", avatar: "VP" },
  { name: "Winda Lestari", device: "Ganti LCD Vivo", rating: 5, text: "LCD Vivo V25 pecah, diganti di TGS dengan kualitas bagus. Layarnya jernih dan touch-nya responsif. Harga juga lebih murah dari service center resmi!", date: "April 2026", avatar: "WL" },
  { name: "Xavier Tan", device: "Rakit PC Desain", rating: 5, text: "Butuh PC untuk desain grafis. TGS bantu rakitkan dengan spek yang pas buat Adobe suite. Monitor calibration-nya juga oke. Recommended!", date: "April 2026", avatar: "XT" },
  { name: "Yusuf Ahmad", device: "Service HP Poco", rating: 5, text: "HP Poco X3 saya mati total setelah update. TGS berhasil flash ulang dan semua data selamat. Proses cepat, cuma butuh 2 jam. Terima kasih!", date: "April 2026", avatar: "YA" },
  { name: "Zahra Putri", device: "Service PC AIO", rating: 4, text: "PC All-in-One kantor saya sering hang. Ternyata hardisknya hampir bad sector. Diganti SSD di TGS dan sekarang performa lancar jaya!", date: "April 2026", avatar: "ZP" },
  { name: "Ahmad Fauzi", device: "Service Laptop Acer", rating: 5, text: "Laptop Acer Nitro saya GPU-nya error. Diperbaiki di TGS dengan reball GPU. Hasilnya game lancar lagi tanpa artifact. Teknisinya ahli!", date: "April 2026", avatar: "AF" },
  { name: "Bella Safitri", device: "Ganti Baterai Laptop", rating: 5, text: "Baterai laptop saya nggak bisa tahan lebih dari 30 menit. Ganti baterai di TGS dan sekarang bisa tahan 4-5 jam. Kualitas baterainya bagus!", date: "April 2026", avatar: "BS" },
  { name: "Cahyo Nugroho", device: "Service Printer Canon", rating: 5, text: "Printer Canon G2010 saya error 5B00. TGS reset dan bersihkan absorber pad-nya. Sekarang printer normal lagi. Biayanya murah banget!", date: "April 2026", avatar: "CN" },
  { name: "Diana Puspita", device: "Service HP Huawei", rating: 5, text: "HP Huawei saya layarnya gelap tapi masih bunyi. Ternyata flex cable-nya putus. Diperbaiki di TGS, layar nyala lagi dan data aman. Alhamdulillah!", date: "April 2026", avatar: "DP" },
  { name: "Endra Mahardika", device: "Rakit PC Budget", rating: 5, text: "Dengan budget 5 juta, TGS berhasil rakitkan PC yang bisa untuk kerja dan gaming ringan. Spek optimal, harga bersahabat. Sangat puas!", date: "Maret 2026", avatar: "EM" },
  { name: "Fani Oktavia", device: "Ganti Port Charger", rating: 5, text: "Port charger HP Vivo saya rusak, cas harus sambil ditekan. Ganti port di TGS cuma 30 menit dan sekarang cas lancar. Murah pula!", date: "Maret 2026", avatar: "FO" },
  { name: "Gunawan Susilo", device: "Service Laptop MSI", rating: 5, text: "Laptop gaming MSI saya panas banget dan throttling. TGS ganti thermal paste dan bersihkan fan. Sekarang suhu normal, game lancar tanpa lag!", date: "Maret 2026", avatar: "GS" },
  { name: "Hana Pertiwi", device: "Service HP Samsung", rating: 4, text: "Fingerprint HP Samsung saya nggak berfungsi. Diperbaiki di TGS, ternyata sensornya kotor. Sekarang lancar lagi. Cepat dan murah!", date: "Maret 2026", avatar: "HP" },
  { name: "Irfan Habibi", device: "Upgrade SSD + RAM", rating: 5, text: "Upgrade laptop kantor dari HDD ke SSD plus tambah RAM. Sekarang buka Excel besar nggak lag lagi! Produktivitas meningkat. Best investment!", date: "Maret 2026", avatar: "IH" },
  { name: "Jasmine Aurelia", device: "Ganti LCD Xiaomi", rating: 5, text: "LCD Xiaomi Redmi Note retak parah. Ganti di TGS harganya terjangkau dan hasil rapi. Layar mulus, sentuhan akurat. Saya rekomendasikan!", date: "Maret 2026", avatar: "JA" },
  { name: "Kevin Anggara", device: "Service PC Desktop", rating: 5, text: "PC desktop saya sering restart sendiri. TGS diagnosa RAM-nya yang bermasalah. Diganti RAM baru dan sekarang PC stabil 100%. Terima kasih!", date: "Maret 2026", avatar: "KA" },
  { name: "Laras Wati", device: "Service Printer Epson", rating: 5, text: "Printer Epson L360 saya macet dan belepotan tinta. TGS bersihkan total dan ganti selang. Sekarang ngeprint lancar dan bersih. Memuaskan!", date: "Maret 2026", avatar: "LW" },
  { name: "Muhammad Rasyid", device: "Service HP Samsung", rating: 5, text: "Fingerprint Samsung S22 saya nggak berfungsi setelah jatuh. TGS perbaiki modulnya dan sekarang fingerprint lancar lagi. Teknisi yang sangat kompeten!", date: "Maret 2026", avatar: "MR" },
  { name: "Nina Agustina", device: "Rakit PC Editing", rating: 5, text: "Rakit PC untuk editing video 4K. TGS kasih rekomendasi yang pas, render DaVinci Resolve cepat banget. Storage juga lega. Very satisfied!", date: "Maret 2026", avatar: "NA" },
  { name: "Oscar Tandjung", device: "Service Laptop Toshiba", rating: 4, text: "Laptop Toshiba jadul saya dipasang SSD dan diinstal Windows 11. Performanya jadi jauh lebih baik dari sebelumnya. Laptop lama terasa baru!", date: "Februari 2026", avatar: "OT" },
  { name: "Priska Handayani", device: "Ganti Speaker HP", rating: 5, text: "Speaker HP saya pecah suaranya. Diganti di TGS cuma 20 menit, sekarang suara jernih dan bass-nya mantap lagi. Cepat dan profesional!", date: "Februari 2026", avatar: "PH" },
  { name: "Rahmat Dwi", device: "Service HP Redmi", rating: 5, text: "HP Redmi saya bootloop setelah root gagal. TGS berhasil flash ulang dan install custom ROM stabil. HP hidup normal lagi. Mantap jiwa!", date: "Februari 2026", avatar: "RD" },
  { name: "Silvia Paramita", device: "Service Laptop Asus", rating: 5, text: "Layar laptop ASUS saya bergaris-garis. Ternyata kabel flexible-nya putus. Diganti di TGS, layar kembali normal tanpa masalah. Harga fair!", date: "Februari 2026", avatar: "SP" },
  { name: "Tommy Wijaya", device: "Upgrade VGA PC", rating: 5, text: "Upgrade VGA PC dari GT 1030 ke RTX 3060. TGS bantu cek compatibility PSU dan hasilnya gaming jadi super smooth. FPS naik drastis!", date: "Februari 2026", avatar: "TW" },
  { name: "Utami Wulandari", device: "Ganti Backdoor HP", rating: 5, text: "Backdoor HP Samsung saya pecah. Ganti di TGS original, pasnya presisi dan nggak ada celah. Harganya juga sangat terjangkau. Puas!", date: "Februari 2026", avatar: "UW" },
  { name: "Vega Saputri", device: "Service Printer Brother", rating: 4, text: "Printer Brother MFC saya scan error. TGS perbaiki dan update driver-nya. Sekarang scan dan print lancar lagi. Pelayanan informatif.", date: "Februari 2026", avatar: "VS" },
  { name: "Wawan Gunawan", device: "Service Laptop Dell", rating: 5, text: "Laptop Dell XPS saya layarnya flickering. Ternyata inverter-nya rusak. TGS ganti dan sekarang layar stabil, nggak kedip-kedip lagi!", date: "Februari 2026", avatar: "WG" },
  { name: "Xena Marcelina", device: "Service HP Oppo", rating: 5, text: "HP Oppo A74 saya tiba-tiba mati. TGS diagnosa IC Power-nya bermasalah. Diperbaiki dalam 3 hari dan sekarang HP normal. Data selamat!", date: "Februari 2026", avatar: "XM" },
  { name: "Yoga Pratama", device: "Rakit PC Server", rating: 5, text: "Rakit mini server untuk UMKM di TGS. Performanya stabil 24/7, sudah jalan 3 bulan tanpa masalah. Konfigurasi-nya juga dibantu setup!", date: "Februari 2026", avatar: "YP" },
  { name: "Zul Fahmi", device: "Service HP Samsung", rating: 5, text: "Samsung A32 saya sinyal hilang-hilang. TGS perbaiki IC sinyal-nya dan sekarang signal kuat full bar. Pengerjaan cepat dan hasilnya memuaskan!", date: "Januari 2026", avatar: "ZF" },
  { name: "Alya Putri", device: "Service Laptop HP", rating: 5, text: "Laptop HP saya audio-nya mati. Ternyata sound card-nya bermasalah. TGS ganti dan sekarang suara keluar normal. Senang bisa dibantu!", date: "Januari 2026", avatar: "AP" },
  { name: "Bambang Supriadi", device: "Ganti LCD Laptop", rating: 5, text: "LCD laptop pecah gara-gara ketindih buku. TGS gantikan dengan LCD baru, kualitas gambar bagus dan harga jauh lebih murah dari brand!", date: "Januari 2026", avatar: "BS" },
  { name: "Clara Natasha", device: "Service HP Motorola", rating: 4, text: "HP Motorola saya charging lambat sekali. Ternyata port-nya kotor dan rusak. Diganti di TGS, sekarang fast charging normal. Good service!", date: "Januari 2026", avatar: "CN" },
  { name: "David Kurniadi", device: "Service PC Gaming", rating: 5, text: "PC gaming saya tiba-tiba nggak bisa boot. TGS diagnosa BIOS corrupt. Diperbaiki dan sekarang PC nyala normal. Teknisinya expert!", date: "Januari 2026", avatar: "DK" },
  { name: "Elsa Novita", device: "Ganti Baterai Laptop", rating: 5, text: "Baterai laptop Acer saya kembung parah. TGS ganti cepat dan aman. Sekarang laptop bisa mobile lagi tanpa colok charger terus.", date: "Januari 2026", avatar: "EN" },
  { name: "Farhan Akbar", device: "Rakit PC Multimedia", rating: 5, text: "Rakit PC untuk editing foto dan video. TGS kasih saran spek yang optimal sesuai budget 8 juta. Hasilnya performanya top untuk Photoshop!", date: "Januari 2026", avatar: "FA" },
  { name: "Gita Purnama", device: "Service Printer Canon", rating: 5, text: "Printer Canon iP2770 saya error P07. TGS reset counter dan bersihkan waste ink pad. Printer normal lagi, biayanya murah. Terima kasih!", date: "Januari 2026", avatar: "GP" },
  { name: "Hasan Ali", device: "Service HP Realme", rating: 5, text: "HP Realme GT saya mati total. TGS cek ternyata IC Nand-nya bermasalah. Berhasil diperbaiki dalam 5 hari. HP hidup dan data aman. Luar biasa!", date: "Januari 2026", avatar: "HA" },
  { name: "Intan Permata", device: "Upgrade SSD PC", rating: 5, text: "Tambah SSD NVMe 500GB ke PC kantor. Kecepatan baca tulis-nya jauh lebih cepat dari HDD lama. TGS juga bantu clone data-nya. Seamless!", date: "Januari 2026", avatar: "IP" },
  { name: "Johan Christianto", device: "Service Laptop Lenovo", rating: 5, text: "Laptop Lenovo IdeaPad saya USB port-nya mati semua. TGS ganti USB controller-nya dan sekarang semua port berfungsi normal. Skill top!", date: "Desember 2025", avatar: "JC" },
  { name: "Karina Salim", device: "Ganti LCD Realme", rating: 5, text: "LCD Realme 7 Pro saya kena dead pixel banyak. Ganti LCD di TGS, hasilnya layar mulus tanpa cacat. Harganya kompetitif. Sangat puas!", date: "Desember 2025", avatar: "KS" },
  { name: "Leo Pangestu", device: "Service PC Desktop", rating: 4, text: "PC saya sering freeze saat multitasking berat. TGS diagnosa thermal throttling dan pasang pendingin baru. Masalah solved. Thanks!", date: "Desember 2025", avatar: "LP" },
  { name: "Mega Safira", device: "Service HP Vivo", rating: 5, text: "HP Vivo Y15 saya speaker-nya mati. TGS ganti speaker baru dan suaranya kembali jernih. Prosesnya cuma 20 menit. Cepat sekali!", date: "Desember 2025", avatar: "MS" },
  { name: "Nanda Fadhil", device: "Rakit PC HTPC", rating: 5, text: "Rakit mini PC untuk home theater. TGS bantu pilih casing mini-ITX dan komponen low power. Hasilnya compact tapi powerful. Perfect!", date: "Desember 2025", avatar: "NF" },
  { name: "Olivia Chen", device: "Service Laptop ASUS", rating: 5, text: "Laptop ASUS ZenBook saya keyboard-nya macet beberapa tombol. TGS berhasil membersihkan dan memperbaiki tanpa harus ganti keyboard. Hemat biaya!", date: "Desember 2025", avatar: "OC" },
  { name: "Pandu Asmara", device: "Ganti Tombol HP", rating: 5, text: "Tombol power HP Samsung saya macet, nggak bisa ditekan. Diganti di TGS, sekarang tombol responsif lagi. Biaya murah, kerjanya rapi!", date: "Desember 2025", avatar: "PA" },
  { name: "Ratna Dewanti", device: "Service Printer Epson", rating: 5, text: "Printer Epson L565 WiFi-nya error. TGS ganti modul WiFi-nya dan sekarang bisa print wireless lagi. Senang banget, nggak perlu kabel!", date: "Desember 2025", avatar: "RD" },
  { name: "Surya Adinata", device: "Service HP Asus ROG", rating: 5, text: "HP gaming ASUS ROG Phone overheat parah. TGS ganti thermal dan bersihkan internal. Sekarang main game lama nggak panas. Mantap!", date: "Desember 2025", avatar: "SA" },
  { name: "Tiara Anggraini", device: "Upgrade SSD Laptop", rating: 5, text: "Laptop lama dikasih SSD 480GB, windows booting 8 detik! Serius nggak bohong. Teknisi TGS juga install semua driver-nya. Sangat helpful!", date: "Desember 2025", avatar: "TA" },
  { name: "Umar Bakri", device: "Service Laptop Asus", rating: 4, text: "Laptop ASUS saya nggak bisa masuk Windows. TGS diagnosa corrupted file system. Diperbaiki tanpa instal ulang, data selamat semua!", date: "November 2025", avatar: "UB" },
  { name: "Vera Susanti", device: "Ganti LCD Samsung", rating: 5, text: "LCD Samsung S20 FE pecah parah. TGS ganti AMOLED original, warna layarnya hidup dan tajam seperti baru. Worth every penny!", date: "November 2025", avatar: "VS" },
  { name: "Wira Yudha", device: "Rakit PC Gaming", rating: 5, text: "Rakit PC gaming mid-range di TGS. Bisa main semua game AAA di setting high. Teknisinya kasih saran yang objektif, nggak maksa beli mahal!", date: "November 2025", avatar: "WY" },
  { name: "Yeni Hastuti", device: "Service HP Xiaomi", rating: 5, text: "HP Xiaomi Mi 11 saya layar burn-in. TGS kasih solusi yang tepat dan hasilnya memuaskan. Pelayanan ramah dan transparansi harga. Top!", date: "November 2025", avatar: "YH" },
  { name: "Zidan Maulana", device: "Service PC Desktop", rating: 5, text: "PC kantor kena virus ransomware. TGS berhasil clean virus dan recovery sebagian data. Juga pasang antivirus untuk proteksi. Lifesaver!", date: "November 2025", avatar: "ZM" },
  { name: "Ayu Lestari", device: "Ganti Mikrofon HP", rating: 5, text: "Mikrofon HP saya mati, orang nggak bisa dengar suara saya saat telepon. Diganti di TGS cepat dan sekarang mic jernih lagi. Terima kasih!", date: "November 2025", avatar: "AL" },
  { name: "Denny Irawan", device: "Service Laptop Lenovo", rating: 5, text: "Laptop Lenovo ThinkPad saya trackpad-nya error. TGS ganti modul trackpad-nya, pengerjaan rapi dan cepat. Laptop seperti baru lagi!", date: "November 2025", avatar: "DI" },
  { name: "Evi Mardiana", device: "Service Printer HP", rating: 4, text: "Printer HP DeskJet saya streaking saat print. TGS bersihkan cartridge dan alignment. Sekarang print bersih dan rata. Memuaskan!", date: "November 2025", avatar: "EM" },
  { name: "Ferry Setiabudi", device: "Rakit PC Office", rating: 5, text: "Pesan 10 unit PC kantor di TGS. Semua dirakit rapi, diinstal software, dan diantar. Harga paket banyak lebih hemat. Best vendor!", date: "November 2025", avatar: "FS" },
  { name: "Gracia Liem", device: "Ganti LCD Infinix", rating: 5, text: "LCD Infinix Note 12 retak tipis tapi makin lebar. TGS ganti LCD cepat, layarnya bagus dan warnanya tetap akurat. Recommended banget!", date: "November 2025", avatar: "GL" },
  { name: "Hendri Suroso", device: "Service HP OnePlus", rating: 5, text: "HP OnePlus saya charging port-nya rusak. TGS ganti cepat dan sekarang Warp Charge berfungsi normal lagi. Pengerjaan profesional!", date: "Oktober 2025", avatar: "HS" },
  { name: "Ika Nurjannah", device: "Service Laptop Acer", rating: 5, text: "Laptop Acer Aspire saya sering mati sendiri. Ternyata overheating kronis. TGS bersihkan dan ganti thermal. Laptop adem dan stabil!", date: "Oktober 2025", avatar: "IN" },
  { name: "Jefri Tan", device: "Upgrade SSD + RAM", rating: 5, text: "Paket kombo upgrade SSD 512GB + RAM 16GB. Laptop HP lama saya jadi kencang untuk WFH. Zoom meeting lancar, Office ngebut. Worth it!", date: "Oktober 2025", avatar: "JT" },
  { name: "Kusuma Wardani", device: "Service HP Samsung", rating: 5, text: "Samsung Note 20 saya S-Pen nggak terdeteksi. TGS perbaiki sensor digitizer-nya, sekarang S-Pen responsif lagi. Skill teknisinya luar biasa!", date: "Oktober 2025", avatar: "KW" },
  { name: "Lia Permatasari", device: "Service Printer Epson", rating: 5, text: "Printer Epson L1300 saya macet parah. TGS bongkar, bersihkan total, ganti roller. Sekarang ngeprint A3 lancar tanpa hambatan!", date: "Oktober 2025", avatar: "LP" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  // Ensure currentPage is valid if totalPages changes
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  const currentTestimonials = testimonials.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  // Show limited page dots for better UX
  const getVisiblePages = () => {
    const maxVisible = 5;
    let start = Math.max(0, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible);
    if (end - start < maxVisible) {
      start = Math.max(0, end - maxVisible);
    }
    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  return (
    <section className="py-12 md:py-20 bg-tgs-gray" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block bg-tgs-red/10 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Testimoni Pelanggan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tgs-dark mb-3">
            Apa Kata{" "}
            <span className="text-tgs-red">Pelanggan Kami?</span>
          </h2>
          <p className="text-sm md:text-base text-tgs-gray-text max-w-2xl mx-auto">
            Lebih dari <span className="font-bold text-tgs-dark">{testimonials.length}+</span> pelanggan puas dengan layanan Tazakka Group Service.
            Berikut testimoni dari mereka yang sudah merasakan langsung.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {currentTestimonials.map((item, index) => (
            <div
              key={`${currentPage}-${index}`}
              className="group bg-white rounded-2xl p-6 md:p-7 border border-tgs-gray-medium/50 hover:border-tgs-red/20 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col animate-fade-in"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-tgs-red/20" />
              </div>

              {/* Review text */}
              <p className="text-sm text-tgs-gray-text leading-relaxed flex-1 mb-5">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={item.rating} />
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-tgs-gray-medium/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tgs-red to-tgs-red-hover flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {item.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-tgs-dark truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-tgs-gray-text truncate">
                    {item.device} · {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-full bg-white border border-tgs-gray-medium flex items-center justify-center text-tgs-gray-text hover:text-tgs-red hover:border-tgs-red/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page info & dots */}
            <div className="flex items-center gap-2">
              {getVisiblePages()[0] > 0 && (
                <>
                  <button
                    onClick={() => setCurrentPage(0)}
                    className="w-2.5 h-2.5 rounded-full bg-tgs-gray-medium hover:bg-tgs-red/30 transition-all duration-300"
                  />
                  <span className="text-xs text-tgs-gray-text">…</span>
                </>
              )}
              {getVisiblePages().map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "bg-tgs-red w-6"
                      : "bg-tgs-gray-medium hover:bg-tgs-red/30"
                  }`}
                />
              ))}
              {getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1 && (
                <>
                  <span className="text-xs text-tgs-gray-text">…</span>
                  <button
                    onClick={() => setCurrentPage(totalPages - 1)}
                    className="w-2.5 h-2.5 rounded-full bg-tgs-gray-medium hover:bg-tgs-red/30 transition-all duration-300"
                  />
                </>
              )}
            </div>

            <span className="text-xs text-tgs-gray-text font-medium mx-2">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 rounded-full bg-white border border-tgs-gray-medium flex items-center justify-center text-tgs-gray-text hover:text-tgs-red hover:border-tgs-red/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
