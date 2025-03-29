document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.querySelector('.theme-toggle');
    const projectFilterBtns = document.querySelectorAll('.projects .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const certificateFilterBtns = document.querySelectorAll('.certificates .filter-btn');
    const certificateCards = document.querySelectorAll('.certificate-card');
    const contactForm = document.getElementById('contactForm');
    const backToTopBtn = document.querySelector('.back-to-top');
    
    // Check for saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.setAttribute('data-theme', 
                document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    }

    // Mobile Menu Toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks && navLinks.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.hamburger')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking a nav link
    if (navLinks) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', false);
                document.body.style.overflow = '';
            });
        });
    }
    
    // Scroll Effects
    window.addEventListener('scroll', function() {
        // Header shadow on scroll
        if (header) {
            if (window.scrollY > 0) {
                header.style.boxShadow = '0 2px 10px var(--shadow-color)';
            } else {
                header.style.boxShadow = 'none';
            }
        }
        
        // Back to top button visibility
        if (backToTopBtn) {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        }
        
        // Animate elements when they come into view
        animateOnScroll();
    });
    
    // Back to top button click
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Typing Animation
    const typedTextSpan = document.querySelector('.typed-text');
    
    if (typedTextSpan) {
        const textArray = ['Passionate Developer', 'AI & ML Enthusiast', 'Data Science Student'];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;
        
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!typedTextSpan) return;
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } 
            else {
                // erase
                setTimeout(erase, newTextDelay);
            }
        }
        
        function erase() {
            if (charIndex > 0) {
                if (!typedTextSpan) return;
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } 
            else {
                // type next text
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }
        
        // Start the typing effect on page load
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }

    // Project filtering
    if (projectFilterBtns.length > 0 && projectCards.length > 0) {
        projectFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                projectFilterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Certificate Popup
    if (certificateCards.length) {
        certificateCards.forEach(card => {
            card.addEventListener('click', function() {
                const imgSrc = this.getAttribute('data-certificate-img');
                
                if (!imgSrc) return;
                
                const popup = document.createElement('div');
                popup.className = 'certificate-popup-overlay';
                popup.innerHTML = `
                    <div class="certificate-popup">
                        <div class="certificate-popup-close">
                            <i class="fas fa-times"></i>
                        </div>
                        <img src="${imgSrc}" alt="Certificate" loading="lazy">
                    </div>
                `;
                
                document.body.appendChild(popup);
                
                // Show the popup
                setTimeout(() => {
                    popup.classList.add('active');
                }, 10);
                
                // Close popup
                const closeBtn = popup.querySelector('.certificate-popup-close');
                closeBtn.addEventListener('click', function() {
                    popup.classList.remove('active');
                    
                    // Remove the popup from DOM after transition
                    setTimeout(() => {
                        document.body.removeChild(popup);
                    }, 300);
                });
                
                // Close popup when clicking outside
                popup.addEventListener('click', function(e) {
                    if (e.target === popup) {
                        popup.classList.remove('active');
                        
                        // Remove the popup from DOM after transition
                        setTimeout(() => {
                            document.body.removeChild(popup);
                        }, 300);
                    }
                });
            });
        });
    }

    // Scroll Animation
    const animateElements = document.querySelectorAll('.scroll-animation');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100; // Adjust as needed
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animated');
            } else {
                // Uncomment this if you want to remove the animation when scrolling back up
                // element.classList.remove('animated');
            }
        });
    }
    
    // Check if elements are in view on page load
    checkScroll();
    
    // Add and remove scroll animations when scrolling
    window.addEventListener('scroll', checkScroll);

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill out all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            setTimeout(() => {
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
            }, 1500);
            
            showNotification('Sending message...', 'info');
        });
    }
    
    // Create notification element
    function showNotification(message, type) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.setAttribute('role', 'alert');
        notification.innerHTML = message;
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Animate elements when they come into view
    function animateOnScroll() {
        const elementsToAnimate = document.querySelectorAll('.project-card, .main-skill-item, .additional-skill-item, .certificate-card, .section-header h3, .section-line, .section-header p');
        
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.classList.add('animate');
            }
        });
    }
    
    // Active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Add scroll event for updating active nav link
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fix for Safari's handling of vh units
    function setVHVariable() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVHVariable();
    window.addEventListener('resize', setVHVariable);
    
    // Lazy-load images
    if ('loading' in HTMLImageElement.prototype) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            if(img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }
    
    // Initialize
    function init() {
        animateOnScroll();
        updateActiveNavLink();
    }
    
    // Add resize event listener for responsive adjustments
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
            document.body.style.overflow = '';
        }
    });
    
    // Run initialization
    init();
});