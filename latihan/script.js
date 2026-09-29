// Animasi Scroll Reveal (Elemen muncul saat discroll)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // Jarak pemicu animasi dari bawah layar

    reveals.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Jalankan fungsi saat halaman discroll
window.addEventListener('scroll', revealOnScroll);

// Jalankan sekali saat halaman pertama kali dimuat
window.addEventListener('load', () => {
    revealOnScroll();
});

// Efek smooth scroll untuk semua link internal (opsional jika CSS scroll-behavior tidak didukung)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});