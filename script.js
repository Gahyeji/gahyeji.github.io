document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "booting gahyeji.github.io...",
    "loading modules: [cybersecurity, japanese, korean, CTF]",
    "initialisation complete.",
    "↳ welcome !"
  ];
  const textElement = document.getElementById("terminal-text");

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      const line = lines[lineIndex];
      if (charIndex < line.length) {
        textElement.textContent += line[charIndex];
        charIndex++;
        setTimeout(typeLine, 40);
      } else {
        textElement.textContent += "\n";
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, 400);
      }
    } else {
      setTimeout(() => {
        document.getElementById("terminal-intro").classList.add("fade-out");
        setTimeout(() => {
          document.getElementById("terminal-intro").style.display = "none";
        }, 500);
      }, 500);
    }
  }

  typeLine();
});