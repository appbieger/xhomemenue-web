// XHome Menue Landing Page JavaScript

const RESPONSIVE_WIDTH = 1024;

window.onload = function () {
    // GSAP initialisieren
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Dashboard Animationen
        const dashboard = document.getElementById('dashboard');
        if (dashboard) {
            gsap.to('#dashboard', {
                boxShadow: '0px 15px 25px -5px #7e22ceaa',
                duration: 0.3,
                scrollTrigger: {
                    trigger: '#hero-section',
                    start: '60% 60%',
                    end: '80% 80%',
                },
            });

            gsap.to('#dashboard', {
                scale: 1,
                translateY: 0,
                rotateX: '0deg',
                scrollTrigger: {
                    trigger: '#hero-section',
                    start:
                        window.innerWidth > RESPONSIVE_WIDTH
                            ? 'top 95%'
                            : 'top 70%',
                    end: 'bottom bottom',
                    scrub: 1,
                },
            });
        }

        // Reveal-up Animationen für Sektionen
        const sections = document.querySelectorAll('section');

        sections.forEach((sec) => {
            const revealElements = sec.querySelectorAll('.reveal-up');

            if (revealElements.length > 0) {
                const revealUpTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: sec,
                        start: '10% 80%',
                        end: '20% 90%',
                    },
                });

                revealUpTimeline.to(revealElements, {
                    opacity: 1,
                    y: '0%',
                    duration: 0.8,
                    stagger: 0.2,
                });
            }
        });
    }

    // FAQ Accordion Funktionalität
    const faqAccordions = document.querySelectorAll('.faq-accordion');

    faqAccordions.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Toggle active class
            this.classList.toggle('active');
            
            // Toggle plus/minus icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('bi-plus');
                icon.classList.toggle('bi-dash');
            }

            // Get the content element
            const content = this.nextElementSibling;
            if (content) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.style.padding = '0px 18px';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.padding = '20px 18px';
                }
            }
        });
    });
};

// Header Toggle Funktionalität (falls benötigt)
function toggleHeader() {
    const collapseBtn = document.getElementById('collapse-btn');
    const collapseHeaderItems = document.getElementById(
        'collapsed-header-items'
    );

    if (collapseBtn && collapseHeaderItems) {
        const isCollapsed =
            collapseHeaderItems.style.width === '0vw' ||
            !collapseHeaderItems.style.width;

        if (isCollapsed) {
            collapseHeaderItems.style.width = '60vw';
            collapseBtn.classList.remove('bi-list');
            collapseBtn.classList.add('bi-x');
        } else {
            collapseHeaderItems.style.width = '0vw';
            collapseBtn.classList.remove('bi-x');
            collapseBtn.classList.add('bi-list');
        }
    }
}
