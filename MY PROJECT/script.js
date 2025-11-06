const slides = [
  {
    title: "💡 Apa Itu Aritmatika Sosial?",
    text: `Aritmatika sosial membantu kita menghitung hal-hal nyata di kehidupan sehari-hari seperti:<br>
    💰 Untung dan rugi<br>🏷 Harga jual dan beli<br>⚖️ Bruto, Netto, dan Tara<br><br>
    Yuk tonton pengenalan serunya di 
    <a href="https://www.youtube.com/watch?v=Z0q9iSRUBTM" target="_blank">video pembelajaran interaktif!</a>`,
    anim: "https://assets4.lottiefiles.com/packages/lf20_iwmd6pyr.json"
  },
  {
    title: "⚖️ Bruto, Tara, dan Netto",
    text: `<b>Bruto</b> = berat kotor (isi + wadah)<br>
    <b>Tara</b> = berat wadah<br>
    <b>Netto</b> = berat bersih isi<br><br>
    Rumus cepat: Netto = Bruto - Tara<br><br>
    Contoh: susu kaleng 400g (bruto), tara 20g ⇒ netto 380g.`,
    anim: "https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
  },
  {
    title: "💰 Untung dan Rugi",
    text: `Kamu jual barang seharga lebih tinggi dari harga beli? Itu <b>Untung!</b><br>
    Kalau lebih rendah? Itu <b>Rugi!</b><br><br>
    Rumus: <br>Untung = Harga Jual - Harga Beli<br>Rugi = Harga Beli - Harga Jual<br><br>
    📺 Simak contohnya di <a href="https://www.youtube.com/watch?v=AToRgItMfbY" target="_blank">video ini</a>.`,
    anim: "https://assets3.lottiefiles.com/packages/lf20_3vbOcw.json"
  },
  {
    title: "🏷️ Diskon, Pajak, dan Bunga",
    text: `Kadang toko kasih potongan harga (diskon) biar pembeli tertarik 😄<br><br>
    Rumus:<br>
    <b>Harga Setelah Diskon = Harga Awal - (Harga Awal × Persen Diskon)</b><br><br>
    Contoh: Harga Rp100.000, diskon 20% ⇒ bayar Rp80.000.<br><br>
    🎬 Tonton juga video <a href="https://www.youtube.com/watch?v=Z6Q655sDNjQ" target="_blank">Aritmatika Sosial (4) — Diskon, Bunga, dan Pajak</a>`,
    anim: "https://assets4.lottiefiles.com/packages/lf20_puciaact.json"
  },
  {
    title: "🎉 Hebat!",
    text: `Kamu sudah mengenal semua dasar Aritmatika Sosial!<br>
    Dari <b>bruto</b> hingga <b>diskon</b> 🎓<br><br>
    Yuk lanjut ke <b>Pos 2</b> untuk bermain soal dan simulasi!`,
    anim: "https://assets5.lottiefiles.com/packages/lf20_0yfsb3a1.json"
  }
];

const start = document.getElementById("startScreen");
const slideScreen = document.getElementById("slideScreen");
const slideContainer = document.getElementById("slideContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const startBtn = document.getElementById("btnStart");
const playerName = document.getElementById("playerName");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let current = 0;
let musicOn = false;

function showSlide(i) {
  const s = slides[i];
  slideContainer.innerHTML = `
    <h2>${s.title}</h2>
    <lottie-player src="${s.anim}" background="transparent" speed="1" style="width:240px;height:240px;margin:auto" loop autoplay></lottie-player>
    <p>${s.text}</p>`;
  prevBtn.disabled = i === 0;
  nextBtn.textContent = i === slides.length - 1 ? "Selesai ✅" : "Lanjut ➡️";
}

startBtn.onclick = () => {
  if (!playerName.value.trim()) {
    alert("Masukkan namamu dulu ya!");
    return;
  }
  start.classList.add("hidden");
  slideScreen.classList.remove("hidden");
  showSlide(0);

  // Putar musik setelah interaksi
  music.volume = 0.5;
  music.play()
    .then(() => {
      musicOn = true;
      musicToggle.textContent = "🔊";
    })
    .catch(() => console.log("Autoplay dicegah oleh browser"));
};

nextBtn.onclick = () => {
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  } else {
    alert("Keren! Kamu sudah menyelesaikan Pos 1 🎉");
  }
};

prevBtn.onclick = () => {
  if (current > 0) {
    current--;
    showSlide(current);
  }
};

musicToggle.onclick = () => {
  if (!musicOn) {
    music.play();
    musicToggle.textContent = "🔊";
    musicOn = true;
  } else {
    music.pause();
    musicToggle.textContent = "🔇";
    musicOn = false;
  }
};
