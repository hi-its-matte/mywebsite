document.addEventListener("DOMContentLoaded", () => {
  // --------------------
  // LINK WHATSAPP
  // --------------------
  const joinBtn = document.getElementById("join-btn");

  if (joinBtn) {
    const { f, h, g, a, b, c, d, e } = joinBtn.dataset;
    const whatsappLink = `${f}${h}${g}${a}${b}${c}${d}${e}`;

    joinBtn.href = whatsappLink;
    joinBtn.target = "_blank"; // apre in nuova scheda
    joinBtn.rel = "noopener noreferrer"; // sicurezza
  }

  // --------------------
  // BLOCCO PROGETTI
  // --------------------
  const blockedProjects = document.querySelectorAll(".blocked-project");

  blockedProjects.forEach(project => {
    const buttons = project.querySelectorAll("a, button");

    buttons.forEach(btn => {
      btn.disabled = true;
      btn.setAttribute("aria-disabled", "true");
      btn.tabIndex = -1;
      btn.addEventListener("click", e => e.preventDefault());
    });

    project.addEventListener("mouseenter", () => project.classList.add("show-overlay"));
    project.addEventListener("mouseleave", () => project.classList.remove("show-overlay"));
  });
});
