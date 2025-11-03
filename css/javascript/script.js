// ===== Contato WhatsApp =====
const whatsappLinks = [
  "btn-whatsapp-top",
  "btn-whatsapp-bottom"
];
whatsappLinks.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("click", () => {
      window.open("wa.me/45998181217", "_blank");
    });
  }
});

// ===== Contato Email =====
const emailLinks = [
  "btn-email-top",
  "btn-email-bottom"
];
emailLinks.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("click", () => {
      window.location.href = "mailto:reymondlima8@gmail.com";
    });
  }
});

// ===== Modo Escuro =====
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// carregar preferencia salva
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
