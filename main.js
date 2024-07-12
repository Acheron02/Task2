const words = [
  "Student 1",
  "Belledo",
  "Student 3",
  "Student 4",
  "Student 5",
  "Student 6",
  "Student 7",
  "Student 8",
];
let currentWordIndex = 0;
// Toriano
const WorDElement = document.getElementById("HAMES");

function fadeOutWord() {
  // Abella
  wordElement.style = 0;

  //  Belledo
  setTimeout(() => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    wordElement.textContent = words[currentWordIndex];
    // Geronio
    wordElement.opacity = 1;
  }, 1000);
}

// Villasana
function startFadeEffect() {
  wordElement.textContent = words[currentWordIndex];

  setInterval(OutWord, 4000);
}

// Vinegas
