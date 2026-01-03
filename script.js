// Bouton retour en haut
const scrollToTopButton = document.createElement("button");
scrollToTopButton.id = "scrollToTop";
scrollToTopButton.innerHTML = "↑";
document.body.appendChild(scrollToTopButton);

// Affichage du bouton après un certain scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Remonter en haut en douceur
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Effet sur le menu lors du scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Animation sur les liens du footer
const footerLinks = document.querySelectorAll(".footer-bottom nav ul li a");
footerLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "yellow";
        link.style.transition = "color 0.3s ease-in-out";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "white";
    });
});

// Animation des informations de contact
const contactInfo = document.querySelector(".contact-info");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        contactInfo.style.opacity = "1";
        contactInfo.style.transform = "translateY(0)";
        contactInfo.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    }
});

