/**
 * THE ART OF ALMOST — MAIN SCRIPT
 * Version 1.0 (Phase 5: Responsive Refinement & Accessibility)
 */

import { siteConfig } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  // 0. Ensure clean top scroll position on refresh and prevent lingering hash jumps
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);
  }

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Editorial colophon in developer console
  console.info(
    `%c${siteConfig.persona.brandName}%c\n${siteConfig.persona.tagline}\n© ${siteConfig.persona.year} — ${siteConfig.persona.copyright}`,
    'font-family: serif; font-size: 16px; font-weight: bold; color: #F1EFE8; background: #111110; padding: 4px 8px;',
    'font-family: sans-serif; font-size: 11px; color: #A4A29B; line-height: 1.5;'
  );

  // 2. Hydrate owner details from config
  const ownerNameEl = document.getElementById('owner-name');
  const footerOwnerNameEl = document.getElementById('footer-owner-name');
  const contactLinkEl = document.getElementById('contact-link');
  const contactEmailEl = document.getElementById('contact-email');

  if (ownerNameEl && siteConfig.person.name) {
    ownerNameEl.textContent = siteConfig.person.name;
  }
  if (footerOwnerNameEl && siteConfig.person.name) {
    footerOwnerNameEl.textContent = siteConfig.person.name;
  }
  if (contactLinkEl && siteConfig.person.contactEmail) {
    contactLinkEl.href = `mailto:${siteConfig.person.contactEmail}`;
    contactLinkEl.setAttribute('aria-label', `Send email to ${siteConfig.person.contactEmail}`);
  }
  if (contactEmailEl && siteConfig.person.contactEmail) {
    contactEmailEl.textContent = siteConfig.person.contactEmail;
  }

  // 3. Accessible Mobile Navigation Pattern
  const navToggleBtn = document.getElementById('nav-toggle');
  const navToggleText = document.getElementById('nav-toggle-text');
  const primaryNav = document.getElementById('primary-nav');

  if (navToggleBtn && primaryNav) {
    document.documentElement.classList.add('js-nav-ready');

    const closeMobileMenu = () => {
      primaryNav.classList.remove('is-open');
      navToggleBtn.setAttribute('aria-expanded', 'false');
      navToggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
      if (navToggleText) navToggleText.textContent = 'Menu';
    };

    const openMobileMenu = () => {
      primaryNav.classList.add('is-open');
      navToggleBtn.setAttribute('aria-expanded', 'true');
      navToggleBtn.setAttribute('aria-label', 'Close navigation menu');
      if (navToggleText) navToggleText.textContent = 'Close';
    };

    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = primaryNav.classList.contains('is-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking any nav link
    const mobileLinks = primaryNav.querySelectorAll('.nav-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        closeMobileMenu();
        navToggleBtn.focus();
      }
    });

    // Close on outside click or tap
    const handleOutsideDismiss = (e) => {
      if (primaryNav.classList.contains('is-open') && !primaryNav.contains(e.target) && !navToggleBtn.contains(e.target)) {
        closeMobileMenu();
      }
    };
    document.addEventListener('click', handleOutsideDismiss);
    document.addEventListener('touchend', handleOutsideDismiss, { passive: true });

    // Reset mobile menu if window resizes to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && primaryNav.classList.contains('is-open')) {
        closeMobileMenu();
      }
    }, { passive: true });
  }

  // 4. Smooth Navigation & Header Offset Coordination
  const internalNavAnchors = document.querySelectorAll('a[href^="#"]');
  internalNavAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 76; // Accommodate sticky header with breathing room
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: targetId === '#home' ? 0 : offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // 5. Subtle Navigation Scroll-Spy (Progressive Enhancement)
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => navObserver.observe(section));

    // Clear active indicators when user is near or at top
    window.addEventListener('scroll', () => {
      if (window.scrollY < 120) {
        navLinks.forEach((link) => link.classList.remove('is-active'));
      }
    }, { passive: true });
  }

  // 6. Restrained Scroll Reveal Observer
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-reveal-active');
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // 7. Selected Works Easter Egg (Refined & Accessible)
  const easterEggBtn = document.getElementById('easter-egg-btn');
  const easterEggOutput = document.getElementById('easter-egg-output');

  if (easterEggBtn && easterEggOutput) {
    easterEggBtn.addEventListener('click', () => {
      const isExpanded = easterEggBtn.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;

      easterEggBtn.setAttribute('aria-expanded', String(nextState));
      easterEggOutput.hidden = !nextState;

      if (nextState) {
        easterEggBtn.textContent = 'Acknowledge void';
      } else {
        easterEggBtn.textContent = 'Reveal more';
      }
    });
  }

  // 8. Interactive Direct Transmission Copy
  const copyStatusEl = document.getElementById('copy-status');
  if (contactEmailEl && copyStatusEl) {
    const handleCopy = () => {
      const email = contactEmailEl.textContent.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          copyStatusEl.style.display = 'inline-block';
          copyStatusEl.textContent = '(Copied)';
          setTimeout(() => {
            copyStatusEl.style.display = 'none';
          }, 2200);
        }).catch(() => {});
      }
    };

    contactEmailEl.addEventListener('click', handleCopy);
    contactEmailEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCopy();
      }
    });
  }
});
