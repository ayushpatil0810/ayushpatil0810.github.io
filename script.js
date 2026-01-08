/**
 * Portfolio Script
 * Handles: scroll reveals, header state, mobile navigation
 */

(function () {
  'use strict';

  // =====================================================
  // SCROLL REVEAL ANIMATION
  // =====================================================
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optionally unobserve after revealing (one-time animation)
          // revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of element is visible
    }
  );

  reveals.forEach((el) => revealObserver.observe(el));

  // =====================================================
  // HEADER SCROLL STATE
  // =====================================================
  const header = document.getElementById('header');
  let lastScrollY = 0;
  const scrollThreshold = 50;

  function handleHeaderScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  }

  // Throttle scroll handler for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleHeaderScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // =====================================================
  // MOBILE NAVIGATION
  // =====================================================
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  function openNav() {
    navMenu.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
  }

  function closeNav() {
    navMenu.classList.remove('show');
    document.body.style.overflow = ''; // Restore scroll
  }

  if (navToggle) {
    navToggle.addEventListener('click', openNav);
  }

  if (navClose) {
    navClose.addEventListener('click', closeNav);
  }

  // Close nav when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  // Close nav on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show')) {
      closeNav();
    }
  });

  // Close nav on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
      closeNav();
    }
  });

  // =====================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =====================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // =====================================================
  // FORM ENHANCEMENT
  // =====================================================
  const contactForm = document.querySelector('.contact__form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const submitBtn = this.querySelector('.form__submit');
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }
    });
  }

  // =====================================================
  // INIT
  // =====================================================
  // Initial header state check
  handleHeaderScroll();

  // Add loaded class for any page-load animations
  document.body.classList.add('loaded');

})();