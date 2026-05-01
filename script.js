const correctPassword = "02052023"; // change this

function unlockSite() {
  const entered = document.getElementById("password").value;
  if (entered === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    startTyping();
  } else {
    alert("Wrong date 😅");
  }
}

function showMessage() {
  document.getElementById("hiddenMessage").style.display = "block";
}

// TYPEWRITER EFFECT
const text = "Write your personal love letter here...";
let i = 0;

function startTyping() {
  const speed = 40;
  function type() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}