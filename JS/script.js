// Seleciona todas as seções com a tag <section>
const sections = document.querySelectorAll("section");

// Seleciona todos os links dentro da <nav>
const navLinks = document.querySelectorAll("nav a");

// Adiciona um ouvinte de evento para o scroll da página
window.addEventListener("scroll", () => {
  let current = ""; // Variável para armazenar o ID da seção atual

  // Para cada seção, verifica se o scroll já passou por ela
  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // Posição vertical da seção em relação ao topo da página

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }

  });

  // Para cada link do menu
  navLinks.forEach((link) => {
    // Remove a classe "ativo" de todos os links
    link.classList.remove("ativo");

    // Se o href do link for igual ao ID da seção atual
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("ativo");

      const underline = document.getElementById("underline");
      underline.style.left = link.offsetLeft + "px";
      underline.style.width = link.offsetWidth + "px";
    }

  });
});

window.addEventListener("load", () => {
  const activeLink = document.querySelector("nav a.ativo");
  const underline = document.getElementById("underline");
  underline.style.left = activeLink.offsetLeft + "px";
  underline.style.width = activeLink.offsetWidth + "px";
});

const buttonContato = document.querySelector(".button-header");
const opacidade = document.querySelector(".opacidade");
const contatoDiv = document.querySelector(".contato-div");
const fechaContatoDiv = document.querySelector(".fecha-contato-div");

buttonContato.addEventListener("click", () => {
  if (contatoDiv.style.display === "flex") {
    contatoDiv.style.display = "none";
    opacidade.style.display = "none";
  } else {
    contatoDiv.style.display = "flex";
    opacidade.style.display = "block";
  }
});

fechaContatoDiv.addEventListener("click", () => {
  contatoDiv.style.display = "none";
  opacidade.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const certificado1 = document.getElementById("certificado-1");
  const certificado2 = document.getElementById("certificado-2");
  const certificado3 = document.getElementById("certificado-3");

  const CertificadoImg1 = document.getElementById("certificado-img-1");
  const CertificadoImg2 = document.getElementById("certificado-img-2");
  const CertificadoImg3 = document.getElementById("certificado-img-3");

  function ativarCertificado(cert) {
    // remove o "ativo" de todos certificados e dos SVGs
    [certificado1, certificado2, certificado3].forEach(c => {
      c.classList.remove("ativo");
      const svg = c.querySelector(".certificado-svg");
      if (svg) svg.classList.remove("ativo");
    });

    // adiciona o "ativo" no certificado clicado e no SVG
    cert.classList.add("ativo");
    const svg = cert.querySelector(".certificado-svg");
    if (svg) svg.classList.add("ativo");
  }

  function mostrarOuFechar(cert, el) {
    const svg = cert.querySelector(".certificado-svg");

    if (el.style.display === "flex") {
      // se já está aberto, fecha
      el.style.display = "none";
      cert.classList.remove("ativo");
      if (svg) svg.classList.remove("ativo"); // remove também do SVG
    } else {
      // fecha todos os outros
      [CertificadoImg1, CertificadoImg2, CertificadoImg3].forEach(e => e.style.display = "none");
      [certificado1, certificado2, certificado3].forEach(c => {
        c.classList.remove("ativo");
        const s = c.querySelector(".certificado-svg");
        if (s) s.classList.remove("ativo");
      });

      // abre o clicado
      el.style.display = "flex";
      cert.classList.add("ativo");
      if (svg) svg.classList.add("ativo"); // adiciona ativo no SVG
    }
  }

  certificado1.addEventListener("click", () => mostrarOuFechar(certificado1, CertificadoImg1));
  certificado2.addEventListener("click", () => mostrarOuFechar(certificado2, CertificadoImg2));
  certificado3.addEventListener("click", () => mostrarOuFechar(certificado3, CertificadoImg3));
});