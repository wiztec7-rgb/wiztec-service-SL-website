const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    document.getElementById("serviceSelect").value = service;
  });
});

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(this);
  const name = data.get("name");
  const phone = data.get("phone");
  const service = data.get("service");
  const details = data.get("details");

  const message =
`Hello WIZTEC Service SL,

I would like to request a quote.

Name: ${name}
Phone: ${phone}
Service: ${service}
Project details: ${details}`;

  window.open(
    "https://wa.me/23280957763?text=" + encodeURIComponent(message),
    "_blank",
    "noopener"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
