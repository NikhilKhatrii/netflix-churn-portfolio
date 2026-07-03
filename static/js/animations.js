/* ═══════════════════════════════════════════════════════════════
   animations.js — Scroll-triggered reveals, counters, and bars
   ═══════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ─── Intersection Observer: Fade-in reveals ────────────── */
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Trigger counters inside this element
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(startCounter);

                    // Trigger comparison bar fills
                    const bars = entry.target.querySelectorAll('.bar-fill');
                    bars.forEach((bar) => bar.classList.add('animate-bar'));

                    // Trigger indicator fills
                    const indFills = entry.target.querySelectorAll('.ind-fill');
                    indFills.forEach((fill) => {
                        const w = fill.style.width;
                        fill.style.setProperty('--target-width', w);
                        fill.style.width = '0';
                        requestAnimationFrame(() => {
                            fill.classList.add('animate-ind');
                        });
                    });

                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px',
        }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        revealObserver.observe(el);
    });


    /* ─── Animated Counters ─────────────────────────────────── */
    const countedElements = new WeakSet();

    function startCounter(counterEl) {
        if (countedElements.has(counterEl)) return;
        countedElements.add(counterEl);

        const target   = parseFloat(counterEl.dataset.target)   || 0;
        const decimals = parseInt(counterEl.dataset.decimals, 10) || 0;
        const suffix   = counterEl.dataset.suffix || '';
        const duration = 2000; // ms
        const startTime = performance.now();

        function easeOutQuart(t) {
            return 1 - Math.pow(1 - t, 4);
        }

        function tick(now) {
            const elapsed  = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased    = easeOutQuart(progress);
            const current  = eased * target;

            counterEl.textContent = current.toFixed(decimals) + suffix;

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        }

        requestAnimationFrame(tick);
    }

    /* Also observe counters that are standalone (not inside .animate-on-scroll) */
    const standaloneCounterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    standaloneCounterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll('.counter').forEach((el) => {
        // Only observe if NOT already inside an .animate-on-scroll wrapper
        if (!el.closest('.animate-on-scroll')) {
            standaloneCounterObserver.observe(el);
        }
    });

})();
