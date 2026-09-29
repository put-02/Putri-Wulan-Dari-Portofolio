const projects = [

    {
        number: "01 / WEBSITE",

        title: "Landing Page Sekolah",

        description:
            "Landing page sekolah dengan konsep modern dan profesional. Project ini menampilkan halaman utama sekolah, informasi program, dan navigasi yang sederhana.",

        type: "school"
    },

    {
        number: "02 / WEB APP",

        title: "Student Dashboard",

        description:
            "Dashboard siswa untuk menampilkan nilai, kehadiran, tugas, dan statistik perkembangan siswa dalam satu tampilan.",

        type: "dashboard"
    },

    {
        number: "03 / E-COMMERCE",

        title: "Product Landing Page",

        description:
            "Landing page produk dengan konsep minimalis untuk mempromosikan produk secara visual dan memberikan pengalaman browsing yang modern.",

        type: "product"
    }

];


// ===============================
// ELEMENT
// ===============================

const modal = document.getElementById("modal");
const modalPreview = document.getElementById("modalPreview");
const modalTitle = document.getElementById("modalTitle");
const modalNumber = document.getElementById("modalNumber");
const modalDescription = document.getElementById("modalDescription");


// ===============================
// OPEN PROJECT
// ===============================

function openProject(index) {

    const project = projects[index];

    modalTitle.textContent = project.title;
    modalNumber.textContent = project.number;
    modalDescription.textContent = project.description;


    // Ambil preview dari project yang diklik
    const projectCards =
        document.querySelectorAll(".project");

    const preview =
        projectCards[index]
            .querySelector(".browser")
            .cloneNode(true);


    modalPreview.innerHTML = "";

    modalPreview.appendChild(preview);


    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ===============================
// CLOSE PROJECT
// ===============================

function closeProject() {

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


// ===============================
// ESC
// ===============================

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        closeProject();
    }

});


// ===============================
// MOBILE MENU
// ===============================

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("show");

});


// Tutup menu ketika link diklik

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});


// ===============================
// NAV ACTIVE
// ===============================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ===============================
// FOOTER YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();