// Fecha objetivo: 21 de marzo de 2026, 15:30 (3:30 p.m. hora de la ceremonia)
const weddingDate = new Date("2026-03-21T15:30:00");

// Elementos del DOM
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("countdown-message");

let intervalId = null;

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) {
    // Si ya es el gran día o pasó la hora
    daysEl.textContent = "0";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    messageEl.textContent =
      "¡Hoy es el gran día! Gracias por acompañarnos en este momento tan especial.";
    if (intervalId) clearInterval(intervalId);
    return;
  }

  const secondsTotal = Math.floor(diff / 1000);

  const days = Math.floor(secondsTotal / (60 * 60 * 24));
  const hours = Math.floor((secondsTotal % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
  const seconds = secondsTotal % 60;

  daysEl.textContent = String(days);
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");

  // Mensaje dinámico
  if (days <= 7 && days > 1) {
    messageEl.textContent = "¡Faltan solo " + days + " días para nuestra boda!";
  } else if (days === 1) {
    messageEl.textContent = "¡Mañana es el gran día!";
  } else if (days === 0) {
    messageEl.textContent = "¡Ya casi! Disfrutemos la cuenta regresiva.";
  } else {
    messageEl.textContent = "";
  }
}

// Actualizamos inmediatamente al cargar
updateCountdown();
// Y luego cada segundo
intervalId = setInterval(updateCountdown, 1000);
