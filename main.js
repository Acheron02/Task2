const words = [
  "Abella",
  "Belledo",
  "Geronio",
  "Student 4",
  "Student 5",
  "Toriano",
  "Villasana",
  "Vinegas",
];
let currentWordIndex = 0;
// Toriano
const wordElement = document.getElementById("names");

function fadeOutWord() {
  // Abella
  wordElement.style.opacity = 0;

  //  Belledo
  setTimeout(() => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    wordElement.textContent = words[currentWordIndex];
    // Geronio
    wordElement.style.opacity = 1;
  }, 2000);
}

// Villasana
function startFadeEffect() {
  wordElement.textContent = words[currentWordIndex];

  setInterval(fadeOutWord, 4000);
}

// Vinegas
startFadeEffect();
