const translations = {
  it: {
    subtitle: "Programmatore in Python, C, HTML, CSS, Bash, Batch; Sviluppatore siti web e sistemi operativi",
    platforms: "Piattaforme:",
    projectsTitle: "I miei progetti",
    proj1Desc: "Aria - La startup dei sistemi operativi",
    visit: "Visita"
  },
  en: {
    subtitle: "Programmer in Python, C, HTML, CSS, Bash, Batch; Web and OS developer",
    platforms: "Platforms:",
    projectsTitle: "My Projects",
    proj1Desc: "Aria - The operating system startup",
    visit: "Visit"
  }
};

function setLang(lang) {
  document.getElementById("subtitle").textContent = translations[lang].subtitle;
  document.getElementById("platforms-label").textContent = translations[lang].platforms;
  document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
  document.getElementById("proj1-desc").innerHTML = `${translations[lang].proj1Desc} <br> <a href='https://ariaos.netlify.app/' target='_blank'>${translations[lang].visit}</a>`;
}
