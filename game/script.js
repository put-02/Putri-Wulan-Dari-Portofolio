/* =========================
   CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorRing.style.left = e.clientX + "px";
    cursorRing.style.top = e.clientY + "px";

});


/* =========================
   PARTICLES
========================= */

const particles = document.getElementById("particles");

for (let i = 0; i < 60; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        5 + Math.random() * 10 + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particles.appendChild(particle);
}


/* =========================
   TYPING EFFECT
========================= */

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Game Developer",
    "Programmer",
    "UI Designer",
    "Creative Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

reveals.forEach(el => observer.observe(el));


/* =========================
   SKILL ANIMATION
========================= */

const skillObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const progress =
                    entry.target.querySelector(".skill-progress");

                if (progress) {

                    progress.style.width =
                        progress.dataset.width;

                }

            }

        });

    },

    {
        threshold: .5
    }

);

document
    .querySelectorAll(".skill-card")
    .forEach(card => skillObserver.observe(card));


/* =========================
   COUNTER
========================= */

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target =
                Number(counter.dataset.count);

            let current = 0;

            const duration = 1500;

            const increment =
                target / (duration / 16);

            function update() {

                current += increment;

                if (current >= target) {

                    counter.textContent = target;

                    return;

                }

                counter.textContent =
                    Math.floor(current);

                requestAnimationFrame(update);
            }

            update();

            counterObserver.unobserve(counter);

        });

    }

);

counters.forEach(counter =>
    counterObserver.observe(counter)
);


/* =========================
   PROJECT MODAL
========================= */

const modal =
    document.getElementById("projectModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalPreview =
    document.getElementById("modalPreview");

const closeModal =
    document.querySelector(".close-modal");


const projectData = {

    portfolio: {

        title: "Personal Portfolio",

        description:
            "Website portfolio pribadi dengan desain modern, animasi interaktif, responsive layout, dan berbagai efek visual.",

        preview:
            `
            <div class="mock-browser"
                 style="width:80%;height:160px">
                <div class="browser-top">
                    <i></i><i></i><i></i>
                </div>

                <div class="mock-content">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            `
    },

    game: {

        title: "Stealth Game",

        description:
            "Konsep game 3D stealth dengan karakter rubah, sistem penjaga, area tersembunyi, dan mekanik mengendap-endap.",

        preview:
            `
            <div class="game-scene"
                 style="width:80%;height:190px">

                <div class="moon"></div>
                <div class="mountain"></div>
                <div class="character">🦊</div>

            </div>
            `
    },

    website: {

        title: "Creative Website",

        description:
            "Website eksperimen dengan tampilan futuristic, animasi, efek glow, dan interaksi menggunakan JavaScript.",

        preview:
            `
            <div class="code-window">

                <div>&lt;html&gt;</div>
                <div>&nbsp; &lt;body&gt;</div>
                <div>&nbsp;&nbsp;&nbsp; Hello World</div>
                <div>&nbsp; &lt;/body&gt;</div>
                <div>&lt;/html&gt;</div>

            </div>
            `
    }

};


document.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.project;

        const data = projectData[id];

        modalTitle.textContent =
            data.title;

        modalDescription.textContent =
            data.description;

        modalPreview.innerHTML =
            data.preview;

        modal.classList.add("active");

    });

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


modal.addEventListener("click", e => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});


/* =========================
   PARALLAX HERO
========================= */

document.addEventListener("mousemove", e => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    document.querySelectorAll(".hero-glow")
    .forEach(glow => {

        glow.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.querySelector(".menu-btn");

const nav =
    document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";

        nav.style.top = "70px";

        nav.style.left = "5%";

        nav.style.right = "5%";

        nav.style.padding = "25px";

        nav.style.flexDirection = "column";

        nav.style.background =
            "rgba(7,11,22,.95)";

        nav.style.borderRadius = "20px";

    }

});


/* =========================
   ACTIVE NAV
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (pageYOffset >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});