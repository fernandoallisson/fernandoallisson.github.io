// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== MENU MOBILE =====
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("main-nav");

  navToggle.addEventListener("click", () => {
    const expanded =
      navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
    navMenu.classList.toggle("nav-open");
  });

  // ===== ANIMAÇÕES DE ENTRADA =====
  const animatedItems = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  animatedItems.forEach((item) => observer.observe(item));

  // ===== ANIMAÇÃO DAS BARRAS DE PROGRESSO =====
  const progressBars = document.querySelectorAll(".progress-bar");
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target.dataset.target;
          entry.target.style.width = target + "%";
          progressObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  progressBars.forEach((bar) => progressObserver.observe(bar));

  // ===== MODAL DE PROJETOS =====
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalStack = document.getElementById("modal-stack");
  const modalLink = document.getElementById("modal-link");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".view-more").forEach((button) => {
    button.addEventListener("click", (e) => {
      const project = e.target.closest(".project");
      modalImg.src = project.dataset.img;
      modalTitle.textContent = project.dataset.title;
      modalDesc.textContent = project.dataset.desc;
      modalStack.textContent = project.dataset.stack;
      modalLink.href = project.querySelector("a.btn.ghost").href;
      modal.setAttribute("aria-hidden", "false");
      modal.classList.add("open");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  });

  // ===== ANO AUTOMÁTICO NO RODAPÉ =====
  document.getElementById("year").textContent = new Date().getFullYear();

  // ===== VOLTAR AO TOPO =====
  document.querySelectorAll('a[href="#top"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // ===== VALIDAÇÃO DE FORMULÁRIO =====
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");
    const formStatus = document.getElementById("form-status");

    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent = "";

    if (name.value.trim() === "") {
      errorName.textContent = "Digite seu nome.";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      errorEmail.textContent = "Digite um e-mail válido.";
      valid = false;
    }

    if (message.value.trim() === "") {
      errorMessage.textContent = "Digite sua mensagem.";
      valid = false;
    }

    if (valid) {
      formStatus.textContent = "Mensagem enviada com sucesso!";
      formStatus.style.color = "lightgreen";
      contactForm.reset();
    } else {
      formStatus.textContent = "Por favor, corrija os erros acima.";
      formStatus.style.color = "red";
    }
  });
});
