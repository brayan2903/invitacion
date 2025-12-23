/* =======================================================
   ⏳ COUNTDOWN
======================================================= */
const weddingDate = new Date("2026-03-21T15:30:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("countdown-message");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    if (messageEl) {
      messageEl.textContent = "¡Hoy es el gran día! 💍";
    }
    return;
  }

  const s = Math.floor(diff / 1000);
  daysEl.textContent = Math.floor(s / 86400);
  hoursEl.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
  minutesEl.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  secondsEl.textContent = String(s % 60).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =======================================================
   🌸 PÉTALOS
======================================================= */
function createPetal() {
  const container = document.querySelector(".page-background");
  if (!container) return;

  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 6 + Math.random() * 6 + "s";

  container.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 700);

/* =======================================================
   🎶 MÚSICA DESDE YOUTUBE (ESTABLE)
======================================================= */
let player = null;
let playing = false;
let ytReady = false;

function onYouTubeIframeAPIReady() {
  if (typeof YT === "undefined") return;

  player = new YT.Player("yt-player", {
    height: "0",
    width: "0",
    videoId: "BdI7hwM0Skg",
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: "BdI7hwM0Skg",
      modestbranding: 1
    },
    events: {
      onReady: function () {
        ytReady = true;
        player.setVolume(50);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("music-toggle");
  if (!musicBtn) return;

  musicBtn.addEventListener("click", () => {
    if (!ytReady || !player) {
      alert("Cargando música… intenta nuevamente 🎵");
      return;
    }

    if (!playing) {
      player.playVideo();
      musicBtn.textContent = "⏸️";
      playing = true;
    } else {
      player.pauseVideo();
      musicBtn.textContent = "🎵";
      playing = false;
    }
  });
});

/* =======================================================
   🎬 ENTRADA CINEMATOGRÁFICA
======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  if (!card) return;

  card.style.opacity = "0";
  card.style.transform = "scale(0.96) translateY(40px)";

  setTimeout(() => {
    card.style.transition = "1.6s ease";
    card.style.opacity = "1";
    card.style.transform = "scale(1) translateY(0)";
  }, 300);
});

/* =======================================================
   📜 SCROLL CINEMATOGRÁFICO (1, 2, 3, 4)
======================================================= */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.25 }
);

sections.forEach(section => observer.observe(section));

/* =======================================================
   ✨ TEXTO CINEMATOGRÁFICO (OPCIONAL)
======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const cinematicText = document.querySelector(".cinematic-text");
  if (!cinematicText) return;

  const text = cinematicText.textContent;
  cinematicText.textContent = "";
  cinematicText.style.opacity = "1";

  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      cinematicText.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 40);
    }
  }

  setTimeout(typeEffect, 1200);
});
/* =======================================================
   INTRO SCROLL
======================================================= */
const intro = document.getElementById("intro-screen");

window.addEventListener("scroll", () => {
  if (!intro) return;

  if (window.scrollY > 30) {
    intro.classList.add("hide");
  }
});
/* =======================================================
   GALERÍA INTERACTIVA
======================================================= */
const gallery = document.querySelector(".gallery-track");

if (gallery) {
  gallery.addEventListener("mouseenter", () => {
    gallery.style.animationPlayState = "paused";
  });

  gallery.addEventListener("mouseleave", () => {
    gallery.style.animationPlayState = "running";
  });

  gallery.addEventListener("touchstart", () => {
    gallery.style.animationPlayState = "paused";
  });
}
