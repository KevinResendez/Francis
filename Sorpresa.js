// ===== ELEMENTOS =====
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");
const narracion = document.getElementById("narracion");

const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");


// ===== 🎁 ABRIR CARTA + NARRACIÓN =====
function abrirCarta() {
  modalCarta.classList.add("activo");

  // 💥 FIX iPhone: reiniciar audio con volumen bajo
  cancion.pause();
  cancion.currentTime = cancion.currentTime; // mantiene donde iba
  cancion.volume = 0.05;
  cancion.play();

  // 🎙️ iniciar narración
  narracion.currentTime = 0;
  narracion.volume = 1;
  narracion.play();
}

regalo.addEventListener("click", abrirCarta);
regalos.addEventListener("click", abrirCarta);


// ===== ❌ CERRAR CARTA =====
modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");

  // 🔊 restaurar música (fix iPhone)
  cancion.pause();
  cancion.volume = 0.5;
  cancion.play();

  // ⛔ detener narración
  narracion.pause();
});


// ===== 🔥 SOPLAR VELA + INICIAR MÚSICA =====
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

    // 🔊 fade suave (compatible móvil)
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
