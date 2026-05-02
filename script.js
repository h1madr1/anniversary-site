const correctPassword = "02052023"; // CHANGE THIS

const passwordScreen = document.getElementById("password-screen");
const entryScreen = document.getElementById("entry-screen");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bg-music");

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    passwordScreen.classList.remove("active");
    entryScreen.classList.add("active");
  } else {
    document.getElementById("error").innerText = "Wrong date ❤️ Try again";
  }
}

function startExperience() {
  entryScreen.style.display = "none";
  mainContent.style.display = "block";
  music.play();
}

/* LETTER */
function toggleLetter() {
  const letter = document.getElementById("letter");
  letter.style.display = letter.style.display === "block" ? "none" : "block";
}

/* SLIDESHOW */
const slideImages = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpeg",
  "img11.jpeg",
  "img12.jpeg",
  "img13.jpeg",
  "img14.jpeg",
  "img15.jpeg"
];
let index = 0;
let interval;
let playing = false;

function toggleSlideshow() {
  const box = document.getElementById("slideshow");
  const img = document.getElementById("slideImg");
  box.style.display = "block";

  if (!playing) {
    index = 0;
    img.src = slideImages[index];

    interval = setInterval(() => {
      index++;
      if (index < slideImages.length) {
        img.src = slideImages[index];
      } else {
        clearInterval(interval);
        playing = false;
        box.style.display = "none";
      }
    }, 3000);
    playing = true;
  } else {
    clearInterval(interval);
    playing = false;
  }
}

/* FINAL MESSAGE */
function showFinalMessage() {
  const text = "Once again Happy Anniversary to the most precious person of my life 🤗😘🎀.... \ncheers to 1,096 days 🥂and an eternity more 🧿♥️✨";
  let i = 0;
  const target = document.getElementById("finalText");
  target.innerHTML = "";

  const typing = setInterval(() => {
    target.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(typing);
  }, 40);
}

/* HIDDEN MESSAGE */
function hiddenMsg() {
  document.getElementById("secret").innerText = "I'm always with you ❤️";
}

/* SCROLL ANIMATION */
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fades.forEach(el => observer.observe(el));