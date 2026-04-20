document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle
    const input = document.getElementById("theme-toggle");
    if (input) {
        const thumb = input.nextElementSibling;
        const sync = () => {
            const isDark =
                document.documentElement.getAttribute("data-theme") === "dark";
            input.checked = isDark;
            if (thumb) thumb.classList.toggle("active", isDark);
        };
        sync();
        input.addEventListener("change", () => {
            const next = input.checked ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            sync();
        });
    }

    // Mobile nav (hamburger) toggle
    const navToggle = document.getElementById("nav-toggle");
    const mainMenu = document.getElementById("main-menu");
    if (navToggle && mainMenu) {
        const closeMenu = () => {
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Open navigation menu");
            mainMenu.classList.remove("is-open");
        };
        const openMenu = () => {
            navToggle.setAttribute("aria-expanded", "true");
            navToggle.setAttribute("aria-label", "Close navigation menu");
            mainMenu.classList.add("is-open");
        };
        navToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = navToggle.getAttribute("aria-expanded") === "true";
            isOpen ? closeMenu() : openMenu();
        });
        mainMenu.addEventListener("click", (e) => {
            if (e.target.closest("a")) closeMenu();
        });
        document.addEventListener("click", (e) => {
            if (
                mainMenu.classList.contains("is-open") &&
                !mainMenu.contains(e.target) &&
                !navToggle.contains(e.target)
            ) {
                closeMenu();
            }
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMenu();
        });
        const desktopMQ = window.matchMedia("(width > 768px)");
        const onMQChange = (e) => {
            if (e.matches) closeMenu();
        };
        if (desktopMQ.addEventListener) {
            desktopMQ.addEventListener("change", onMQChange);
        } else {
            desktopMQ.addListener(onMQChange);
        }
    }

    // Experience accordion: single-expanded (click one to open, others auto-close)
    document.addEventListener("click", (e) => {
        const header = e.target.closest(".exp-header");
        if (!header) return;
        const wasOpen = header.getAttribute("aria-expanded") === "true";

        // Collapse every header first
        document.querySelectorAll(".exp-header").forEach((h) => {
            h.setAttribute("aria-expanded", "false");
            const b = document.getElementById(h.getAttribute("aria-controls"));
            if (b) b.hidden = true;
        });

        // Open the clicked one only if it was previously closed
        if (!wasOpen) {
            header.setAttribute("aria-expanded", "true");
            const body = document.getElementById(header.getAttribute("aria-controls"));
            if (body) body.hidden = false;
        }
    });

    // Article card image fallback — swap to Scaler logo if original fails
    const FALLBACK_IMG =
        "https://d1g0iq4cbcvjcd.cloudfront.net/topics/images/ScalerTopics_Logo.svg";
    document.querySelectorAll(".article img").forEach((img) => {
        if (img.src === FALLBACK_IMG) return;
        const onError = () => {
            img.src = FALLBACK_IMG;
            img.classList.add("card-img-fallback");
        };
        if (img.complete && img.naturalWidth === 0) {
            onError();
        } else {
            img.addEventListener("error", onError, { once: true });
        }
    });
});
