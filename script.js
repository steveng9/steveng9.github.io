// import websiteData from 'research_data.js';
// Global data storage
// let websiteData = {};



// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // loadData();
    populateContent();
    setupNavigation();
    setupBackToTop();
    setupScrollEffects();
});



// // Load data from JSON file
// async function loadData() {
//     try {
//         // Check if we're running on file:// protocol
//         if (window.location.protocol === 'file:') {
//             console.warn('Running on file:// protocol. For best results, use a local server.');
//             console.log('Try: python -m http.server 8000 or npx http-server');
//         }
        
//         const response = await fetch('data.json');
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         websiteData = await response.json();
        
//         console.log('Data loaded successfully:', websiteData);
        
//         // Continue with any other initialization code you need
//         // For example, if you have functions that depend on the data:
//         // initializeWebsite();
//         // populateContent();
        
//     } catch (error) {
//         console.error('Error loading data from data.json:', error);
//         console.error('If you see a CORS error, try running a local server:');
//         console.error('- Python: python -m http.server 8000');
//         console.error('- Node.js: npx http-server');
//         console.error('- VS Code: Install Live Server extension');
        
//         // Optional: Provide fallback behavior
//         // You could either show an error message to the user
//         // or have a fallback data structure
//         websiteData = {};
//     }
// }

// async function loadData() {
//     try {
//         const response = await fetch('research_data.json');
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         websiteData = await response.json();
        
//         console.log('Data loaded successfully:', websiteData);
        
//         // Continue with any other initialization code you need
//         // For example, if you have functions that depend on the data:
//         // initializeWebsite();
//         // populateContent();
        
//     } catch (error) {
//         console.error('Error loading data from data.json:', error);
        
//         // Optional: Provide fallback behavior
//         // You could either show an error message to the user
//         // or have a fallback data structure
//         websiteData = {};
//     }
// }

// Load data from JSON file
// async function loadData() {
//     try {
//         // In a real implementation, you would fetch from data.json
//         // For this demo, we'll include the data inline
//         websiteData = {
//             "personal": {
//                 "name": "Steven Golob",
//                 "title": "Graduate Student, Computer Scientist",
//                 "location": "Tacoma, WA",
//                 "email": "golobs@uw.edu",
//                 "github": "https://github.com/steveng9",
//                 "linkedin": "https://www.linkedin.com/in/steven-golob/",
//                 "bio": "Steven is a lifelong student of mathematics and computer science. Having spent time at the Boeing Company as a software engineer, working on the flight simulator, he is now in the PhD program at the University of Washington Tacoma, studying with Martine De Cock. There, he was the lead of a team that won 1st place in the SNAKE challenge on privacy attacks against synthetic data. He is also the recipient of the SET Outstanding Graduate Research Award (2023) and the Andrew and Julie Fry Innovation Award (2023) for his contributions to the solution with which his research team won 2nd place in the NSF-hosted U.S.-U.K. PETs Prize Challenge 2023. His research interest is in privacy-preserving machine learning (PPML) and fair AI, critical fields that address the widespread concerns of handling personal data securely and equitably. Steven sees research in PPML as a way to contribute meaningfully toward technologies that have huge impacts in people's life. At the same time, working in academia will allow him to fuel his passion for helping and mentoring his fellow computer science students."
//             },
//             "research": [
//                 {
//                     "title": "Securely Generating Synthetic Genomic Data from Distributed Data Silos",
//                     "authors": "T. Claar, S. Golob, S. Pentyala, G. Sitaraman, M. De Cock, J. Banerjee, L. Foschini",
//                     "venue": "11th International Workshop on Genome Privacy and Security (GenoPri'24)",
//                     "year": "2024",
//                     "url": null
//                 },
//                 {
//                     "title": "Privacy Vulnerabilities in Marginals-based Synthetic Data",
//                     "authors": "S. Golob, S. Pentyala, A. Maratkhan, M. De Cock",
//                     "venue": "Proceedings of the Secure and Trustworthy Machine Learning conference (SaTML)",
//                     "year": "2025",
//                     "url": "https://arxiv.org/abs/2410.05506"
//                 },
//                 {
//                     "title": "Examining Health Equity Bias in Synthetic Data Generation Techniques",
//                     "authors": "S. Golob",
//                     "venue": "Extended Abstract and Poster presentation for the AIM-AHEAD All of Us Training Program and AIHES Annual meeting in Atlanta, GA",
//                     "year": "2024",
//                     "url": null
//                 },
//                 {
//                     "title": "High Epsilon Synthetic Data Vulnerabilities in MST and PrivBayes",
//                     "authors": "S. Golob, S. Pentyala, A. Maratkhan, M. De Cock",
//                     "venue": "AAAI-24 Workshop on Privacy-Preserving Artificial Intelligence",
//                     "year": "2024",
//                     "url": "https://arxiv.org/abs/2402.06699"
//                 },
//                 {
//                     "title": "Privacy-Preserving Feature Extraction for Federated Anomaly Detection",
//                     "authors": "J. Vos, S. Pentyala, S. Golob, R. Maia, C. Martins, M. De Cock, A. Nascimento",
//                     "venue": "Proceedings on Privacy Enhancing Technologies (PoPETS)",
//                     "year": "2024",
//                     "url": "https://petsymposium.org/popets/2024/popets-2024-0074.pdf"
//                 },
//                 {
//                     "title": "A Decentralized Information Marketplace Preserving Input and Output Privacy",
//                     "authors": "S. Golob, S. Pentyala, R. Dowsley, B. David, M. Larangeira, M. De Cock, A. Nascimento",
//                     "venue": "Proceedings of the 2nd SIGMOD Data Economy Workshop",
//                     "year": "2023",
//                     "url": "https://dl.acm.org/doi/10.1145/3600046.3600047"
//                 }
//             ],
//             "competitions": [
//                 {
//                     "title": "2025 MIDST Competition",
//                     "description": "The \"Membership Inference over Diffusion-models-based Synthetic Tabular data\" challenge, hosted at the 3rd IEEE Conference on Secure and Trustworthy Machine Learning (SaTML 2025)",
//                     "year": "2025",
//                     "result": null,
//                     "url": "https://vectorinstitute.github.io/MIDST/#getting-started"
//                 },
//                 {
//                     "title": "2023 SNAKE Challenge",
//                     "description": "(SaNitization Algorithm under attacK ...ε)",
//                     "year": "2023",
//                     "result": "First Place!",
//                     "url": "https://www.codabench.org/competitions/879/"
//                 },
//                 {
//                     "title": "2023 iDASH Secure Genome Analysis Competition",
//                     "description": "Track 1: Secure relative detection in forensic databases using homomorphic encryption.",
//                     "year": "2023",
//                     "result": null,
//                     "url": "http://www.humangenomeprivacy.org/2023/competition-tasks.html"
//                 },
//                 {
//                     "title": "U.S. PETs (Privacy Enhancing Technologies) Prize",
//                     "description": "Hosted by the White House.",
//                     "year": "2023",
//                     "result": "2nd Place",
//                     "url": "https://www.drivendata.org/competitions/group/nist-federated-learning/"
//                 },
//                 {
//                     "title": "AdKDD Competition",
//                     "description": "Relational data click-through predictions.",
//                     "year": "2021",
//                     "result": null,
//                     "url": null
//                 },
//                 {
//                     "title": "UW Computational Worlds Best Video Game",
//                     "description": "Won with side-scrolling video game \"Zerlin.\"",
//                     "year": "2019",
//                     "result": "3rd Place",
//                     "url": null
//                 },
//                 {
//                     "title": "ACM International Collegiate Programming Competition",
//                     "description": "Site Winner, division 2.",
//                     "year": "2018",
//                     "result": "Site Winner",
//                     "url": null
//                 }
//             ],
//             "service": [
//                 {
//                     "title": "Journal of Emerging Investigators",
//                     "role": "Volunteer Reviewer",
//                     "period": "July 2023 - present",
//                     "url": "https://emerginginvestigators.org/"
//                 },
//                 {
//                     "title": "UW Tacoma Computer Science Faculty Council",
//                     "role": "Graduate Student Representative",
//                     "period": "September 2022 - June 2023",
//                     "url": null
//                 },
//                 {
//                     "title": "UW Tacoma Computer Science Faculty Council",
//                     "role": "Student Representative",
//                     "period": "September 2018 - June 2019",
//                     "url": null
//                 },
//                 {
//                     "title": "Mathematics Tutor",
//                     "role": "Oakland High School in Tacoma, WA",
//                     "period": "Communities in Schools program, 2018",
//                     "url": null
//                 }
//             ],
//             "awards": [
//                 {
//                     "title": "Proquest Distinguished Thesis Award",
//                     "organization": "Western Association of Graduate Schools (WAGS)",
//                     "year": "2024",
//                     "url": "https://grad.uw.edu/current-students/enrollment-through-graduation/thesis-dissertation/two-uw-graduate-students-receive-wags-and-proquest-thesis-awards/"
//                 },
//                 {
//                     "title": "Distinguished Thesis Award in Mathematics, Physical Sciences and Engineering",
//                     "organization": "University of Washington",
//                     "year": "2024",
//                     "url": "https://grad.uw.edu/current-students/enrollment-through-graduation/thesis-dissertation/dissertation-and-thesis-awards/"
//                 },
//                 {
//                     "title": "AIM-AHEAD All of Us Training Program",
//                     "organization": "Part of the National Institute of Health (NIH)",
//                     "year": "2024",
//                     "url": "https://www.aim-ahead.net/data-science-training-core/aim-ahead-all-of-us-training-program/"
//                 },
//                 {
//                     "title": "Best Poster Award",
//                     "organization": "Research Symposium - School of Engineering and Technology, UW Tacoma",
//                     "year": "2024",
//                     "url": null
//                 },
//                 {
//                     "title": "PPAI Travel Award",
//                     "organization": "Financial award to travel to attend the AAAI Privacy-Preserving Artificial Intelligence Workshop",
//                     "year": "2024",
//                     "url": null
//                 },
//                 {
//                     "title": "Carwein-Andrews Distinguished Fellowship",
//                     "organization": "School of Engineering and Technology, UW Tacoma",
//                     "year": "2023-2024",
//                     "url": "https://www.tacoma.uw.edu/news/phd-tacoma"
//                 },
//                 {
//                     "title": "CSGrad4US Fellowship",
//                     "organization": "First Cohort",
//                     "year": "2021",
//                     "url": null
//                 },
//                 {
//                     "title": "Graduate Merit Scholarship",
//                     "organization": "School of Engineering and Technology, UW Tacoma",
//                     "year": "2023-2024",
//                     "url": null
//                 },
//                 {
//                     "title": "Outstanding Graduate Research Award",
//                     "organization": "School of Engineering and Technology, UW Tacoma",
//                     "year": "2022-2023",
//                     "url": null
//                 },
//                 {
//                     "title": "Andrew and Julie Fry Innovation Award",
//                     "organization": "School of Engineering and Technology, UW Tacoma",
//                     "year": "2022-2023",
//                     "url": null
//                 },
//                 {
//                     "title": "2nd prize for the U.S. PETs Prize Challenge",
//                     "organization": "",
//                     "year": "March 2023",
//                     "url": null
//                 }
//             ]
//         };
        
//         populateContent();
//     } catch (error) {
//         console.error('Error loading data:', error);
//     }
// }

// Populate content from data
function populateContent() {
    // Populate personal information
    const personal = websiteData.personal;
    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-title').textContent = `${personal.title}, ${personal.location}`;
    document.getElementById('bio-text').textContent = personal.bio;
    document.getElementById('email-link').href = `mailto:${personal.email}`;
    document.getElementById('email-link').textContent = personal.email;
    document.getElementById('github-link').href = personal.github;
    document.getElementById('linkedin-link').href = personal.linkedin;

    // Populate research
    populateResearch();
    populateCompetitions();
    populateService();
    populateAwards();
}

// Populate research publications
function populateResearch() {
    const researchGrid = document.getElementById('research-grid');
    researchGrid.innerHTML = '';

    websiteData.research.forEach(paper => {
        const researchItem = document.createElement('div');
        researchItem.className = 'research-item';
        
        researchItem.innerHTML = `
            <h3 class="research-title">${paper.title}</h3>
            <p class="research-authors">${paper.authors}</p>
            <p class="research-venue">${paper.venue}</p>
            <span class="research-year">${paper.year}</span>
            ${paper.url ? `<br><a href="${paper.url}" class="research-link" target="_blank" rel="noopener">View Paper</a>` : ''}
        `;
        
        researchGrid.appendChild(researchItem);
    });
}

// Populate competitions
function populateCompetitions() {
    const competitionsGrid = document.getElementById('competitions-grid');
    competitionsGrid.innerHTML = '';

    websiteData.competitions.forEach(competition => {
        const competitionItem = document.createElement('div');
        competitionItem.className = 'competition-item';
        
        competitionItem.innerHTML = `
            <div class="competition-header">
                <h3 class="competition-title">${competition.title}</h3>
                <div>
                    <span class="competition-year">${competition.year}</span>
                    ${competition.result ? `<span class="competition-result">${competition.result}</span>` : ''}
                </div>
            </div>
            <p class="competition-description">${competition.description}</p>
            ${competition.url ? `<a href="${competition.url}" class="research-link" target="_blank" rel="noopener">Learn More</a>` : ''}
        `;
        
        competitionsGrid.appendChild(competitionItem);
    });
}

// Populate service
function populateService() {
    const serviceGrid = document.getElementById('service-grid');
    serviceGrid.innerHTML = '';

    websiteData.service.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        
        serviceItem.innerHTML = `
            <h3 class="service-title">${service.title}</h3>
            <p class="service-role">${service.role}</p>
            <p class="service-period">${service.period}</p>
            ${service.url ? `<br><a href="${service.url}" class="research-link" target="_blank" rel="noopener">Visit Site</a>` : ''}
        `;
        
        serviceGrid.appendChild(serviceItem);
    });
}

// Populate awards
function populateAwards() {
    const awardsGrid = document.getElementById('awards-grid');
    awardsGrid.innerHTML = '';

    websiteData.awards.forEach(award => {
        const awardItem = document.createElement('div');
        awardItem.className = 'award-item';
        
        awardItem.innerHTML = `
            <div class="award-header">
                <h3 class="award-title">${award.title}</h3>
                <span class="award-year">${award.year}</span>
            </div>
            <p class="award-organization">${award.organization}</p>
            ${award.url ? `<a href="${award.url}" class="award-link" target="_blank" rel="noopener">Learn More</a>` : ''}
        `;
        
        awardsGrid.appendChild(awardItem);
    });
}

// Setup navigation
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Setup back to top button
function setupBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Setup scroll effects
function setupScrollEffects() {
    // Navbar background effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.research-item, .competition-item, .service-item, .award-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(el);
    });
}

// Utility function to create element with classes and content
function createElement(tag, classes = [], content = '') {
    const element = document.createElement(tag);
    element.className = classes.join(' ');
    element.innerHTML = content;
    return element;
}
