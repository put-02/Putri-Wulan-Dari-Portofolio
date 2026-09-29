/* =====================================================
   PUTRI WULANDARI PORTFOLIO
   DETAIL PAGE SYSTEM
===================================================== */


/* =====================================================
   CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");

const follower =
    document.querySelector(".cursor-follower");


if (cursor && follower) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";

        follower.style.left =
            e.clientX + "px";

        follower.style.top =
            e.clientY + "px";

    });

}


/* =====================================================
   REVEAL
===================================================== */

const reveals =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    reveals.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        if (
            top <
            window.innerHeight - 80
        ) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);


/* =====================================================
   DETAIL PAGE ELEMENTS
===================================================== */

const detailPage =
    document.getElementById(
        "detailPage"
    );

const detailNumber =
    document.getElementById(
        "detailNumber"
    );

const detailCategory =
    document.getElementById(
        "detailCategory"
    );

const detailLabel =
    document.getElementById(
        "detailLabel"
    );

const detailTitle =
    document.getElementById(
        "detailTitle"
    );

const detailDescription =
    document.getElementById(
        "detailDescription"
    );

const detailType =
    document.getElementById(
        "detailType"
    );

const detailYear =
    document.getElementById(
        "detailYear"
    );

const detailRole =
    document.getElementById(
        "detailRole"
    );

const detailOverview =
    document.getElementById(
        "detailOverview"
    );

const detailFeatures =
    document.getElementById(
        "detailFeatures"
    );

const detailTags =
    document.getElementById(
        "detailTags"
    );

const detailImage =
    document.getElementById(
        "detailImage"
    );

const detailPlaceholder =
    document.getElementById(
        "detailPlaceholder"
    );

const detailVisualNumber =
    document.getElementById(
        "detailVisualNumber"
    );


/* Certificate */

const certificatePreview =
    document.getElementById(
        "certificatePreview"
    );

const certificateImage =
    document.getElementById(
        "certificateImage"
    );

const certificatePlaceholder =
    document.getElementById(
        "certificatePlaceholder"
    );


/* =====================================================
   OPEN DETAIL
===================================================== */

function openDetail(
    number,
    title,
    description,
    items
) {

    /*
       Detect category from title
       / clicked section.
    */

    let category =
        "PROJECT";

    let type =
        "Business Project";

    let role =
        "Project Member";

    let imagePath = "";

    let isCertificate = false;


    /* ================= CERTIFICATE ================= */

    if (
        title.toLowerCase()
            .includes("certificate")
    ) {

        category =
            "CERTIFICATE";

        type =
            "Professional Development";

        role =
            "Participant";

        isCertificate = true;

        imagePath =
            `sertifikat-${number}.jpg`;

    }


    /* ================= EXPERIENCE ================= */

    else if (

        title.toLowerCase()
            .includes("experience")

        ||

        title.toLowerCase()
            .includes("organization")

        ||

        title.toLowerCase()
            .includes("operations")

        ||

        title.toLowerCase()
            .includes("coordination")

        ||

        title.toLowerCase()
            .includes("team")

        ||

        title.toLowerCase()
            .includes("academic")

    ) {

        category =
            "EXPERIENCE";

        type =
            "Experience";

        role =
            "Team Member";

        imagePath =
            `experience-${number}.jpg`;

    }


    /* ================= PROJECT ================= */

    else {

        category =
            "PROJECT";

        type =
            "Business / Marketing";

        role =
            "Project Member";

        imagePath =
            `project-${number}.jpg`;

    }


    /* =================================================
       TEXT
    ================================================= */

    detailNumber.textContent =
        number;

    detailVisualNumber.textContent =
        number;

    detailCategory.textContent =
        category;

    detailLabel.textContent =
        category;

    detailTitle.textContent =
        title;

    detailDescription.textContent =
        description;

    detailType.textContent =
        type;

    detailYear.textContent =
        "2026";

    detailRole.textContent =
        role;

    detailOverview.textContent =
        description +
        " This experience represents part of my professional and academic journey, where I developed practical skills, collaboration, communication, and problem-solving through real activities and responsibilities.";


    /* =================================================
       FEATURES
    ================================================= */

    detailFeatures.innerHTML = "";


    items.forEach(
        (item, index) => {

            const feature =
                document.createElement(
                    "div"
                );

            feature.className =
                "detail-feature";


            feature.innerHTML = `

                <div class="detail-feature-number">
                    0${index + 1}
                </div>

                <p>
                    ${item}
                </p>

            `;


            detailFeatures.appendChild(
                feature
            );

        }
    );


    /* =================================================
       TAGS
    ================================================= */

    detailTags.innerHTML = "";


    const tags = [

        "Project Management",

        "Communication",

        "Teamwork",

        "Organization",

        "Problem Solving"

    ];


    if (category === "MARKETING") {

        tags.push(
            "Marketing",
            "Promotion"
        );

    }


    if (category === "CERTIFICATE") {

        tags.push(
            "Professional Development",
            "Learning"
        );

    }


    tags.forEach(
        (tag) => {

            const span =
                document.createElement(
                    "span"
                );

            span.className =
                "detail-tag";

            span.textContent =
                tag;

            detailTags.appendChild(
                span
            );

        }
    );


    /* =================================================
       IMAGE
    ================================================= */

    loadDetailImage(
        detailImage,
        detailPlaceholder,
        imagePath
    );


    /* =================================================
       CERTIFICATE
    ================================================= */

    if (isCertificate) {

        certificatePreview
            .classList.add(
                "active"
            );


        loadDetailImage(
            certificateImage,
            certificatePlaceholder,
            imagePath
        );

    }

    else {

        certificatePreview
            .classList.remove(
                "active"
            );

    }


    /* =================================================
       SHOW
    ================================================= */

    detailPage.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";


    /* scroll detail to top */

    detailPage.scrollTop = 0;


    /* browser history */

    history.pushState(
        {
            detail: true
        },
        "",
        "#detail-" + number
    );

}


/* =====================================================
   LOAD IMAGE
===================================================== */

function loadDetailImage(
    image,
    placeholder,
    path
) {

    image.classList.remove(
        "loaded"
    );

    placeholder.style.display =
        "flex";


    image.onload = () => {

        image.classList.add(
            "loaded"
        );

        placeholder.style.display =
            "none";

    };


    image.onerror = () => {

        image.classList.remove(
            "loaded"
        );

        placeholder.style.display =
            "flex";

    };


    image.src = path;

}


/* =====================================================
   CLOSE DETAIL
===================================================== */

function closeDetailPage() {

    detailPage.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";


    if (
        window.location.hash
            .startsWith("#detail-")
    ) {

        history.pushState(
            "",
            document.title,
            window.location.pathname +
            window.location.search
        );

    }

}


/* =====================================================
   ESCAPE
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            detailPage.classList.contains(
                "active"
            )
        ) {

            closeDetailPage();

        }

    }
);


/* =====================================================
   BACK BUTTON
===================================================== */

window.addEventListener(
    "popstate",
    () => {

        if (
            detailPage.classList.contains(
                "active"
            )
        ) {

            closeDetailPage();

        }

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const navbar =
    document.querySelector(
        ".navbar"
    );

const nav =
    document.querySelector(
        ".navbar nav"
    );


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            navbar.classList.toggle(
                "mobile-open"
            );


            if (
                navbar.classList.contains(
                    "mobile-open"
                )
            ) {

                nav.style.display =
                    "flex";

                nav.style.position =
                    "absolute";

                nav.style.top =
                    "70px";

                nav.style.left =
                    "0";

                nav.style.right =
                    "0";

                nav.style.padding =
                    "15px";

                nav.style.flexDirection =
                    "column";

                nav.style.background =
                    "rgba(255,250,245,.98)";

                nav.style.borderRadius =
                    "25px";

            }

            else {

                nav.style.display =
                    "";

            }

        }
    );

}


/* =====================================================
   CLOSE MOBILE NAV
===================================================== */

document
    .querySelectorAll(
        ".navbar nav a"
    )
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navbar.classList.remove(
                        "mobile-open"
                    );

                    nav.style.display =
                        "";

                }
            );

        }
    );


/* =====================================================
   ACTIVE NAV
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            (section) => {

                const top =
                    section.offsetTop -
                    250;


                if (
                    window.scrollY >=
                    top
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   PROJECT / EXPERIENCE CARD ANIMATION
===================================================== */

document
    .querySelectorAll(
        ".info-card, .certificate"
    )
    .forEach(
        (card, index) => {

            card.style.transitionDelay =
                (index % 5) * 0.07 +
                "s";

        }
    );


/* =====================================================
   IMAGE PARALLAX
===================================================== */

const heroImage =
    document.querySelector(
        ".photo-wrapper img"
    );


if (heroImage) {

    window.addEventListener(
        "mousemove",
        (e) => {

            const x =
                (
                    window.innerWidth /
                    2 -
                    e.clientX
                ) / 100;


            const y =
                (
                    window.innerHeight /
                    2 -
                    e.clientY
                ) / 100;


            heroImage.style.transform =
                `scale(1.03)
                 translate(${x}px,${y}px)`;

        }
    );

}