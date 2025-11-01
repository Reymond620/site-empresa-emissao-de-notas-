// ===== Contato WhatsApp =====
document.getElementById("whatsappBtnHero").addEventListener("click", () => {
  window.open("https://api.whatsapp.com/send/?phone=5545998181217&text&type=phone_number&app_absent=0", "_blank");
});
document.getElementById("contactWhatsapp").addEventListener("click", () => {
  window.open("https://api.whatsapp.com/send/?phone=5545998181217&text&type=phone_number&app_absent=0", "_blank");
});

// ===== Contato Email =====
document.getElementById("emailBtn").addEventListener("click", () => {
  window.location.href = "mailto:reymondlima8@gmail.com";
});
document.getElementById("contactEmail").addEventListener("click", () => {
  window.location.href = "mailto:reymondlima8@gmail.com";
});

// ===== Fade-in simples para todas as seções =====
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.classList.add('appear');
    appearOnScroll.unobserve(entry);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
