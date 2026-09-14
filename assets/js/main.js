// Main JavaScript for Angelo Apolo Executive Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    // 2. Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-blue-600', 'text-white', 'border-blue-500');
                b.classList.add('bg-slate-800/80', 'text-slate-400', 'border-slate-700');
            });
            btn.classList.add('bg-blue-600', 'text-white', 'border-blue-500');
            btn.classList.remove('bg-slate-800/80', 'text-slate-400', 'border-slate-700');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    // 3. Case Study Expand / Collapse Toggle
    window.toggleCaseStudy = function(id) {
        const detailEl = document.getElementById(`case-detail-${id}`);
        const btnEl = document.getElementById(`case-btn-${id}`);
        if (detailEl) {
            const isHidden = detailEl.classList.contains('hidden');
            if (isHidden) {
                detailEl.classList.remove('hidden');
                if (btnEl) {
                    btnEl.innerHTML = `
                        <span>Cerrar Caso de Estudio</span>
                        <i data-lucide="chevron-up" class="w-4 h-4"></i>
                    `;
                }
            } else {
                detailEl.classList.add('hidden');
                if (btnEl) {
                    btnEl.innerHTML = `
                        <span>Explorar Caso de Estudio Completo</span>
                        <i data-lucide="chevron-down" class="w-4 h-4"></i>
                    `;
                }
            }
            if (window.lucide) {
                lucide.createIcons();
            }
            if (window.renderMathInElement) {
                renderMathInElement(detailEl, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '\\[', right: '\\]', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\(', right: '\\)', display: false}
                    ],
                    throwOnError: false
                });
            }
        }
    };

    // 4. Copy to Clipboard Utility
    window.copyToClipboard = function(text, labelId) {
        navigator.clipboard.writeText(text).then(() => {
            const el = document.getElementById(labelId);
            if (el) {
                const orig = el.innerText;
                el.innerText = '¡Copiado!';
                el.classList.add('text-emerald-400');
                setTimeout(() => {
                    el.innerText = orig;
                    el.classList.remove('text-emerald-400');
                }, 2000);
            }
        });
    };

    // 5. SCADA Modal Controller
    window.openScadaModal = function() {
        const modal = document.getElementById('scada-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            const iframe = document.getElementById('scada-iframe');
            if (iframe && !iframe.src) {
                iframe.src = 'https://01optimizacionptarefluentes-production.up.railway.app';
            }
        }
    };

    window.closeScadaModal = function() {
        const modal = document.getElementById('scada-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    };

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeScadaModal();
        }
    });

    // Initialize KaTeX if available
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '\\[', right: '\\]', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false}
            ],
            throwOnError: false
        });
    }
});

// SCADA Carousel Logic
let currentScadaSlide = 0;
let scadaInterval = null;

window.showScadaSlide = function(idx) {
    const container = document.getElementById('scada-carousel-p1');
    if (!container) return;
    const slides = container.querySelectorAll('.scada-slide');
    const dots = container.querySelectorAll('.scada-dot');
    if (!slides.length) return;
    
    currentScadaSlide = (idx + slides.length) % slides.length;
    
    slides.forEach((s, i) => {
        if (i === currentScadaSlide) {
            s.classList.remove('hidden');
        } else {
            s.classList.add('hidden');
        }
    });
    
    dots.forEach((d, i) => {
        if (i === currentScadaSlide) {
            d.classList.remove('bg-slate-600');
            d.classList.add('bg-blue-500');
        } else {
            d.classList.remove('bg-blue-500');
            d.classList.add('bg-slate-600');
        }
    });
};

window.nextScadaSlide = function(e) {
    if (e) e.stopPropagation();
    showScadaSlide(currentScadaSlide + 1);
};

window.prevScadaSlide = function(e) {
    if (e) e.stopPropagation();
    showScadaSlide(currentScadaSlide - 1);
};

window.goToScadaSlide = function(idx, e) {
    if (e) e.stopPropagation();
    showScadaSlide(idx);
};

function startScadaCarousel() {
    if (scadaInterval) clearInterval(scadaInterval);
    scadaInterval = setInterval(() => {
        showScadaSlide(currentScadaSlide + 1);
    }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scada-carousel-p1');
    if (container) {
        container.addEventListener('mouseenter', () => clearInterval(scadaInterval));
        container.addEventListener('mouseleave', () => startScadaCarousel());
        startScadaCarousel();
    }
});
