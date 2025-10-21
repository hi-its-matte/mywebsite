document.addEventListener("DOMContentLoaded", () => {
  const blockedProjects = document.querySelectorAll(".blocked-project");

  blockedProjects.forEach(project => {
    const buttons = project.querySelectorAll("a, button");
    
    // Disattiva click e focus
    buttons.forEach(btn => {
      btn.setAttribute("disabled", "disabled");
      btn.setAttribute("aria-disabled", "true");
      btn.tabIndex = -1;
      btn.addEventListener("click", e => e.preventDefault());
    });

    // Mostra overlay al passaggio del mouse
    project.addEventListener("mouseenter", () => {
      project.classList.add("show-overlay");
    });
    project.addEventListener("mouseleave", () => {
      project.classList.remove("show-overlay");
    });
  });
});
       