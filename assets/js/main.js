// Main JavaScript for Angelo Apolo Executive Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Close on link click
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

    // 3. Copy to Clipboard Utility
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

    // 4. Modal Functions for Live SCADA & Project Details
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

    // Project Details Modals
    window.openProjectModal = function(id) {
        const modal = document.getElementById(`modal-${id}`);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeProjectModal = function(id) {
        const modal = document.getElementById(`modal-${id}`);
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    };

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeScadaModal();
            document.querySelectorAll('[id^="modal-"]').forEach(m => m.classList.add('hidden'));
            document.body.style.overflow = 'auto';
        }
    });
});
