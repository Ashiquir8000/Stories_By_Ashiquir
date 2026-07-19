/**
 * Core Structural Engine Database & Configuration
 */
const PORTFOLIO_CONFIG = {
    profile: {
        name: "MD ASHIQUIR RAHMAN",
        phone: "01405777271",
        gmail: "2023200000382@seu.edu.bd",
        location: "Mirpur 14, North Ibrahimpur, Dhaka",
        website: "www.ashiquir13.com",
        whatsappTarget: "8801405777271"
    },
    hero: {
        roles: ["System Enthusiast", "Software Developer", "Problem Solver", "Java Expert"],
        profilePic: "images/hero-profile.png"
    },
    about: {
        bio: "A highly motivated and curious software developer with expert-level skills in Java and a strong foundation in data structures and algorithms. Passionate about tackling complex problems and exploring creative solutions.<br><br>I am a system enthusiast who is highly interested in knowing the ins and outs of systems. Language is not my barrier, it can be any language as long as I understand the system."
    },
    skills: [
        { category: "Programming Languages", items: [{name: "Java", level: 95}, {name: "C++", level: 80}, {name: "Python", level: 80}, {name: "C", level: 80}, {name: "HTML", level: 50}, {name: "CSS", level: 50}] },
        { category: "Frameworks & Technologies", items: [{name: "Java FXML", level: 90}] },
        { category: "Tools & IDEs", items: [{name: "IntelliJ IDEA", level: 90}, {name: "Scene Builder", level: 90}] },
        { category: "Core Concepts", items: [{name: "Data Structures", level: 90}, {name: "Algorithms", level: 85}, {name: "Object-Oriented Programming (OOP)", level: 95}] },
        { category: "Database", items: [{name: "MySQL", level: 85}] },
        { category: "Extra Curricular & Soft Skills", items: [{name: "Competitive Programming (Codeforces, Hackathons)", level: 85}, {name: "Leadership & Teamwork", level: 95}, {name: "Strategic Thinking", level: 90}, {name: "Analytical Skills", level: 90}, {name: "Public Speaking (English, Hindi)", level: 85}, {name: "Tutoring", level: 90}, {name: "Storytelling", level: 85}] }
    ],
    projects: [
        {
            title: "Craft Your Drobe",
            desc: "Full Stack Web Application using Java, OOP, JavaFXML. Designed with modern UI layers and object logic.",
            images: ["images/Craft.jpg"]
        },
        {
            title: "TalentTender",
            desc: "Full Stack Web Application combining professional networking and freelance services. Powered by Java, OOP, JavaFXML.",
            images: [
                "images/Talen1.jpg", "images/Talen2.jpg", "images/Talen3.jpg",
                "images/Talen4.jpg", "images/Talen5.jpg", "images/Talen6.jpg", "images/Talen7.jpg"
            ]
        },
        {
            title: "Project Kenabecha",
            desc: "E-commerce database architecture & logical system design. A structured prototype for console-based python programmed e-commerce systems.",
            images: ["images/Kena1.jpg", "images/Kena2.jpg"]
        },
        {
            title: "SohoJatri",
            desc: "Ride-sharing mobile application prototype built with optimized cost-splitting and route features.",
            images: ["images/Soho1.jpg", "images/Soho2.jpg", "images/Soho3.jpg"]
        },
        {
            title: "AI ML Leukemia Survival Architecture",
            desc: "A dedicated academic research paper proposing an advanced machine learning benchmark model to compute survival rates.",
            images: [
                "images/Leu1.jpg", "images/Leu2.jpg", "images/Leu3.jpg", "images/Leu4.jpg", "images/Leu5.jpg"
            ]
        }
    ],
    education: [
        { title: "BSc in Computer Science Engineering", institution: "Southeast University", result: "AVG CGPA: 3.91" },
        { title: "HSC", institution: "Shaheed Police Smriti College", result: "GPA 5.00" },
        { title: "SSC", institution: "Shaheed Police Smriti College", result: "GPA 4.87" }
    ],
    achievements: [
        { title: "************", desc: "Recognized for Student Management System using Java, JavaFX, and FXML" },
        { title: "***********", desc: "***********" },
        { title: "*********", desc: "***********" },
        { title: "********", desc: "************" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    // Mobile Context Navigation Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
    }

    // SAFE DOM INJECTION HELPERS (Prevents Null Reference Errors)
    const setElemText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
    const setElemHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
    const setElemLink = (id, link) => { const el = document.getElementById(id); if (el) el.href = link; };
    const setElemSrc = (id, src) => { const el = document.getElementById(id); if (el) el.src = src; };

    // Node Parameter Injections
    setElemText('nav-brand', PORTFOLIO_CONFIG.profile.name.split(' ')[2] + '.');
    setElemText('hero-name', PORTFOLIO_CONFIG.profile.name);
    setElemSrc('hero-img', PORTFOLIO_CONFIG.hero.profilePic);

    setElemLink('hero-email-link', `mailto:${PORTFOLIO_CONFIG.profile.gmail}`);
    setElemLink('hero-website-link', `http://${PORTFOLIO_CONFIG.profile.website}`);

    setElemHTML('about-bio', PORTFOLIO_CONFIG.about.bio);
    setElemText('about-location', PORTFOLIO_CONFIG.profile.location);
    setElemText('about-phone', PORTFOLIO_CONFIG.profile.phone);
    setElemText('about-email', PORTFOLIO_CONFIG.profile.gmail);
    setElemText('about-website', PORTFOLIO_CONFIG.profile.website);

    setElemText('contact-location', PORTFOLIO_CONFIG.profile.location);
    setElemText('contact-phone', PORTFOLIO_CONFIG.profile.phone);
    setElemText('contact-email', PORTFOLIO_CONFIG.profile.gmail);

    setElemText('footer-name', PORTFOLIO_CONFIG.profile.name);
    setElemText('current-year', new Date().getFullYear());

    // Dynamically Compiling Capability Grid Matrix
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        PORTFOLIO_CONFIG.skills.forEach(skillCategory => {
            let itemsHTML = '';
            skillCategory.items.forEach(skill => {
                itemsHTML += `
                    <div class="mb-5">
                        <div class="flex justify-between mb-2 font-tech text-[11px] tracking-widest">
                            <span class="text-gray-400 font-medium uppercase">${skill.name}</span>
                            <span class="text-cyberCyan font-bold">${skill.level}%</span>
                        </div>
                        <div class="w-full bg-white/5 border border-white/5 rounded-full h-2 overflow-hidden">
                            <div class="bg-gradient-to-r from-blue-500 to-cyberCyan h-full rounded-full progress-bar-fill" style="width: 0%" data-width="${skill.level}%"></div>
                        </div>
                    </div>
                `;
            });
            skillsContainer.innerHTML += `
                <div class="bg-black/40 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-xl">
                    <h3 class="font-tech text-xs font-bold tracking-widest text-white uppercase mb-6 border-b border-white/5 pb-3">// ${skillCategory.category}</h3>
                    ${itemsHTML}
                </div>
            `;
        });
    }

    // Lazy Loader Capability Array Execution Observer
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    if (progressBars.length > 0 && window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.style.width = entry.target.getAttribute('data-width'); }
            });
        }, { threshold: 0.2 });
        progressBars.forEach(bar => observer.observe(bar));
    }

    // Compiled Grid Processing Sequence
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        PORTFOLIO_CONFIG.projects.forEach(project => {
            let imagesHTML = '';
            project.images.forEach(imgUrl => {
                imagesHTML += `<img src="${imgUrl}" alt="${project.title}" loading="lazy">`;
            });
            projectsContainer.innerHTML += `
                <div class="project-card bg-black/40 rounded-2xl border border-white/5 shadow-2xl overflow-hidden group backdrop-blur-xl">
                    <div class="project-scroll-container border-b border-white/5">
                        <div class="project-scroll-content">${imagesHTML}</div>
                    </div>
                    <div class="p-6 md:p-8 relative">
                        <div class="absolute top-0 right-6 w-8 h-[1px] bg-cyberCyan group-hover:w-16 transition-all duration-500"></div>
                        <h3 class="font-tech text-base font-bold text-white mb-2 tracking-wide group-hover:text-cyberCyan transition-colors duration-300 uppercase">${project.title}</h3>
                        <p class="text-gray-400 text-xs leading-relaxed font-light">${project.desc}</p>
                    </div>
                </div>
            `;
        });
    }

    // Timeline Node Matrix Rendering
    const eduContainer = document.getElementById('education-container');
    const achContainer = document.getElementById('achievements-container');
    function renderTimelineItem(item, container) {
        if (!container) return;
        const subText = item.result ? item.result : item.desc;
        container.innerHTML += `
            <div class="relative pl-8 group">
                <div class="absolute left-2.5 top-2.5 w-2 h-2 rounded-full bg-darkCore border border-cyberCyan shadow-[0_0_8px_#00f5d4] group-hover:scale-125 transition-transform duration-300 z-10"></div>
                <div class="bg-black/30 border border-white/5 p-5 rounded-2xl shadow-xl transition-all duration-300 hover:border-cyberCyan/20">
                    <h4 class="font-tech font-bold text-sm text-white">${item.title}</h4>
                    ${item.institution ? `<p class="font-tech text-[10px] tracking-wider text-cyberCyan my-1 uppercase">${item.institution}</p>` : ''}
                    <p class="text-gray-400 text-xs mt-2 font-light font-sans">${subText}</p>
                </div>
            </div>
        `;
    }
    PORTFOLIO_CONFIG.education.forEach(edu => renderTimelineItem(edu, eduContainer));
    PORTFOLIO_CONFIG.achievements.forEach(ach => renderTimelineItem(ach, achContainer));

    // Dynamic Typist Module Engine Loop
    const typedSpan = document.getElementById("typed-text");
    if (typedSpan) {
        const roles = PORTFOLIO_CONFIG.hero.roles;
        let roleIndex = 0, charIndex = 0, isDeleting = false;
        function typeEffect() {
            const currentRole = roles[roleIndex];
            typedSpan.textContent = isDeleting ? currentRole.substring(0, charIndex - 1) : currentRole.substring(0, charIndex + 1);
            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
            let typeSpeed = isDeleting ? 30 : 75;
            if (!isDeleting && charIndex === currentRole.length) { typeSpeed = 2500; isDeleting = true; }
            else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typeSpeed = 400; }
            setTimeout(typeEffect, typeSpeed);
        }
        setTimeout(typeEffect, 800);
    }
});

// Outbound Data Transmission Gateway
function sendToWhatsApp(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('wa-name').value,
        phone: document.getElementById('wa-phone').value,
        email: document.getElementById('wa-email').value,
        message: document.getElementById('wa-msg').value
    };


    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.text())
        .then(data => {
            alert("Success! Check your email inbox.");
            document.getElementById('whatsapp-form').reset(); // ফর্ম খালি করা
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Transmission failed!");
        });
}