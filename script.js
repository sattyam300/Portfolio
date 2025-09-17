const navLinks = document.querySelector('.nav-links');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlighting based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animations to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const fadeElements = [
        '.hero-text h1',
        '.hero-text h2',
        '.hero-text p',
        '.hero-buttons',
        '.profile-img-container',
        '.section-title',
        '.about-text p',
        '.education-item',
        '.experience-item',
        '.skill-item',
        '.service-item',
        '.project-item',
        '.contact-item',
        '.contact-form'
    ];
    
    let delay = 1;
    fadeElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('fade-in');
            el.classList.add(`delay-${delay % 5 + 1}`);
            delay++;
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Thank you ${name} for your message! I'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Skill progress bar animation
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.skill-progress .progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1s ease';
            bar.style.width = width;
        }, 500);
    });
};

// Trigger progress bar animation when skills section is in view
const skillsSection = document.querySelector('.skills');
const options = {
    threshold: 0.3
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, options);

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}