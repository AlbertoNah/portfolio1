/* ========================================
   PORTFOLIO JAVASCRIPT - Alberto Nahra
   Smooth Scrolling, Animations & Interactions
   ======================================== */

// ========== Initialize on DOM Ready ==========
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
    initContactForm();
});

// ========== Navigation Bar Functionality ==========
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle hamburger menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Update active state
            updateActiveNavLink(this);
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        updateActiveNavLinkOnScroll();
    });

    // Update active nav link on page load
    updateActiveNavLinkOnScroll();
}

// Update active nav link indicator
function updateActiveNavLink(element) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

// Update active nav link based on scroll position
function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ========== Smooth Scroll Animation ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== Scroll Animations ==========
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add scroll animation class to elements
    const animateElements = document.querySelectorAll(
        '.skill-category, .project-card, .edu-item, ' +
        '.timeline-item, .cert-card, .contact-item'
    );

    animateElements.forEach(element => {
        element.classList.add('scroll-animate');
        observer.observe(element);
    });
}

// ========== Contact Form Handling ==========
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;

            // Simple validation
            if (!name || !email || !message) {
                showNotification('Veuillez remplir tous les champs requis', 'error');
                return;
            }

            // Email validation
            if (!isValidEmail(email)) {
                showNotification('Veuillez entrer une adresse email valide', 'error');
                return;
            }

            // Prepare mailto link
            const mailtoLink = `mailto:albertonahra58@gmail.com?subject=${encodeURIComponent(subject || 'Nouveau message du portfolio')}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open default email client
            window.location.href = mailtoLink;

            // Show success message
            showNotification('Merci! Votre message va être envoyé via votre client email.', 'success');

            // Clear form
            setTimeout(() => {
                this.reset();
            }, 500);
        });
    }
}

// ========== Utility Functions ==========

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification message
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#06b6d4'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.5s ease-out;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// ========== Advanced Features ==========

// Scroll to top button
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #1e40af 0%, #0369a1 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 999;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.3);
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.display = 'flex';
            scrollBtn.style.alignItems = 'center';
            scrollBtn.style.justifyContent = 'center';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effects
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-5px) scale(1.1)';
        scrollBtn.style.boxShadow = '0 20px 40px rgba(30, 64, 175, 0.5)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0) scale(1)';
        scrollBtn.style.boxShadow = '0 10px 30px rgba(30, 64, 175, 0.3)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// ========== Counter Animation ==========
function animateCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const targetValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = targetValue / 50; // 50 steps
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                stat.textContent = targetValue + '+';
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(currentValue) + '+';
            }
        }, 30);
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    });
    aboutObserver.observe(aboutSection);
}

// ========== Skill Tags Animation ==========
function animateSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
    });
}

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillTags();
                skillsObserver.unobserve(entry.target);
            }
        });
    });
    skillsObserver.observe(skillsSection);
}

// ========== Keyboard Shortcuts ==========
document.addEventListener('keydown', function(e) {
    // Cmd + K or Ctrl + K to scroll to contact
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Cmd + H or Ctrl + H to scroll to home
    if ((e.metaKey || e.ctrlKey) && e.key === 'h') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// ========== Performance Optimization ==========
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== Debug Console Helpers ==========
console.log('%c👋 Welcome to Alberto Nahra Portfolio!', 'font-size: 20px; font-weight: bold; color: #06b6d4;');
console.log('%cKeyboard Shortcuts:', 'font-size: 14px; font-weight: bold; color: #1e40af;');
console.log('%cCtrl/Cmd + K → Go to Contact', 'color: #cbd5e1;');
console.log('%cCtrl/Cmd + H → Go to Home', 'color: #cbd5e1;');

// ========== Custom Event Listeners ==========
// Add light effects on mouse move
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (hero && e.clientY < window.innerHeight) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        // Subtle effect - commented to avoid performance impact
        // hero.style.backgroundPosition = `${x}% ${y}%`;
    }
});

// ========== Print Friendly Styles ==========
window.addEventListener('beforeprint', function() {
    const navbar = document.querySelector('.navbar');
    const scrollBtn = document.querySelector('.scroll-to-top');
    
    if (navbar) navbar.style.display = 'none';
    if (scrollBtn) scrollBtn.style.display = 'none';
});

window.addEventListener('afterprint', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) navbar.style.display = 'block';
});

// ========== Page Load Complete ==========
window.addEventListener('load', function() {
    console.log('%c✅ Portfolio fully loaded!', 'color: #10b981; font-weight: bold;');
    
    // Trigger initial animations
    document.querySelectorAll('.scroll-animate').forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
