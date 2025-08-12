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

