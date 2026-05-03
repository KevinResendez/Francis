// ===== CARTA + NARRACIÓN =====
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");
const narracion = document.getElementById("narracion");

// 🎁 abrir carta
function abrirCarta() {
  modalCarta.classList.add("activo");

  // 🔉 bajar música
  cancion.volume = 0.05;

  // 🎙️ iniciar narración
  narracion.currentTime = 0;
  narracion.volume = 1;
  narracion.play();
}

regalo.addEventListener("click", abrirCarta);
regalos.addEventListener("click", abrirCarta);

// ❌ cerrar carta
modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");

  // 🔊 restaurar música
  cancion.volume = 0.5;

  // ⛔ detener narración
  narracion.pause();
});

// ===== SONIDO + EFECTO =====
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", () => {

  // 🔥 sonido de soplar
  soplido.currentTime = 0;
  soplido.play();

  // 🔥 animación de apagar vela
  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {

    // 🎶 iniciar canción
    cancion.currentTime = 0;
    cancion.loop = true;

    // 🔊 fade suave
    cancion.volume = 0;
    cancion.play();

    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.5) {
        vol += 0.05;
        cancion.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

    // 🌑 quitar oscuridad
    overlay.classList.add("hidden");

  }, 1000);
});
