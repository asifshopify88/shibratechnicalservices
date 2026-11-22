// Add Shibra's verified UAE WhatsApp number below, digits only (example: 9715XXXXXXXX).
const WHATSAPP_NUMBER = "971500000000";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (WHATSAPP_NUMBER === "971500000000") {
        alert("Please add the company's real WhatsApp number in script.js before testing the enquiry form.");
        return;
      }
      const data = new FormData(form);
      const message = [
        "Hello Shibra Technical Services, I would like to request a quotation.",
        "Name: " + data.get("name"),
        "Email: " + data.get("email"),
        "Phone: " + data.get("phone"),
        "Service: " + data.get("service"),
        "Project details: " + data.get("message")
      ].join("\n");
      window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message), "_blank", "noopener");
    });
  }

  document.querySelectorAll(".whatsapp").forEach(link => {
    link.href = "https://wa.me/" + WHATSAPP_NUMBER;
  });
});