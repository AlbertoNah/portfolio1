
const translations = {
    fr: {
        nav: {
            home: 'Accueil', profil: 'Profil', about: 'À propos',
            skills: 'Skills', competences: 'Compétences', projects: 'Projets',
            experience: 'Expérience', education: 'Formation',
            certifications: 'Certifications', lep: 'LEP',
            valeurs: 'Valeurs', vision: 'Vision', contact: 'Contact'
        },
        hero: {
            tag: 'Cybersécurité & Réseaux',
            subtitle: 'Ingénieur Cybersécurité & Réseaux',
            desc: 'Passionné par la sécurité offensive, les tests d\'intrusion et la construction d\'infrastructures sécurisées. Étudiant ingénieur à l\'ESAIP, spécialisé en Réseaux & Cybersécurité.',
            btn_cv: 'Télécharger CV',
            btn_contact: 'Me Contacter',
            badge: 'Cybersécurité'
        },
        profil: {
            tag: '// Qui suis-je ?',
            title: 'Mon Profil & Mon Parcours',
            role: 'Étudiant Ingénieur',
            school: 'ESAIP Engineering School',
            spec: 'Réseaux & Cybersécurité',
            loc1: 'Liban',
            loc2: 'France',
            available: 'Disponible pour opportunités',
            story1_title: 'L\'Élément Déclencheur',
            story1_text: 'Ma passion pour la cybersécurité est née d\'une expérience personnelle : mon compte a été piraté. Depuis, je me consacre à comprendre et maîtriser la sécurité offensive.',
            story2_title: 'Profil Multiculturel',
            story2_text: 'Entre le Liban et la France, avec des expériences Erasmus en Hongrie, Grèce et Espagne — j\'apporte une vision internationale aux défis de cybersécurité modernes.',
            story3_title: 'Sécurité Offensive',
            story3_text: 'Passionné par le red teaming, le penetration testing et la compréhension des vecteurs d\'attaque pour construire des systèmes plus résilients.',
            story4_title: 'Innovation & Création Digitale',
            story4_text: 'Le développement web, la cybersécurité et la création digitale se rejoignent dans ma vision : créer des expériences numériques modernes et sécurisées.'
        },
        about: {
            tag: '// À propos',
            title: 'À propos de moi',
            p1: 'Je suis un professionnel de la cybersécurité et étudiant ingénieur à l\'ESAIP, spécialisé en Réseaux et Cybersécurité. En tant que stagiaire en cybersécurité chez Monty Holding (Monty Mobile), j\'ai développé une expertise pratique en tests d\'intrusion, évaluation des vulnérabilités et opérations red team.',
            p2: 'Ma passion réside dans la sécurité offensive et la compréhension des vecteurs d\'attaque pour construire des systèmes plus résilients. Avec une solide base en infrastructure réseau et en technologies cloud, je m\'engage dans un apprentissage continu et l\'obtention de certifications comme le CEH et l\'EJPT+.',
            p3: 'Entre le Liban et la France, j\'apporte une perspective multiculturelle et une maîtrise de plusieurs langues aux défis internationaux de la cybersécurité.',
            stat1: 'Années d\'Apprentissage',
            stat2: 'Certifications',
            stat3: 'Langues'
        },
        skills: {
            tag: '// Expertise',
            title: 'Compétences Techniques',
            cat1: 'Cybersécurité',
            cat2: 'Réseaux',
            cat3: 'Cloud & DevSecOps',
            cat4: 'Programmation',
            cat5: 'Outils & Plateformes',
            cat6: 'Savoir-être'
        },
        comp: {
            tag: '// Compétences détaillées',
            title: 'Mes Compétences',
            tech_title: 'Compétences Techniques',
            tech_sub: 'Outils & Technologies',
            behav_title: 'Compétences Comportementales',
            behav_sub: 'Savoir-être',
            trans_title: 'Compétences Transversales',
            trans_sub: 'Savoir-faire global',
            prob_solving: 'Résolution de Problèmes',
            analysis: 'Analyse',
            communication: 'Communication',
            teamwork: 'Travail d\'Équipe',
            adaptability: 'Adaptabilité',
            stress: 'Gestion du Stress',
            curiosity: 'Curiosité',
            organization: 'Organisation',
            proj_mgmt: 'Gestion de Projet',
            creative: 'Pensée Créative',
            digital_comm: 'Communication Digitale',
            tech_watch: 'Veille Technologique',
            content: 'Création de Contenu'
        },
        projects: {
            tag: '// Réalisations',
            title: 'Projets',
            p1_title: 'Laboratoire de Test d\'Intrusion',
            p1_cat: 'Sécurité Offensive',
            p1_desc: 'Conception et déploiement d\'un laboratoire dédié aux tests d\'intrusion avec des machines virtuelles pour les environnements attaquant et cible. Tests d\'intrusion complets couvrant la reconnaissance, le scan, l\'exploitation et l\'élévation de privilèges.',
            p1_h1: 'Configuré des serveurs Linux vulnérables',
            p1_h2: 'Exploité des injections SQL et authentifications faibles',
            p1_h3: 'Documenté les recommandations de remédiation',
            p2_title: 'Conception d\'Infrastructure Réseau Entreprise',
            p2_cat: 'Architecture Réseau',
            p2_desc: 'Conception et déploiement d\'une architecture réseau d\'entreprise complète incluant routeurs, commutateurs, serveurs et connexions LAN/WAN sécurisées. Mise en place de mécanismes de sécurité réseau avec VLANs et routage dynamique.',
            p2_h1: 'Implémenté les VLANs et le routage statique/dynamique',
            p2_h2: 'Configuré les mécanismes de sécurité réseau',
            p2_h3: 'Simulé et validé l\'infrastructure complète'
        },
        exp: {
            tag: '// Parcours professionnel',
            title: 'Expérience Professionnelle',
            job_title: 'Stagiaire en Cybersécurité',
            location: 'Liban / France',
            item1: 'Tests d\'intrusion manuels et automatisés',
            item2: 'Analyse de la surface d\'attaque (reconnaissance passive & active)',
            item3: 'Opérations red team en sécurité offensive',
            item4: 'Identification des vulnérabilités et analyse des risques',
            item5: 'Évaluation de la sécurité et recommandations de remédiation'
        },
        edu: {
            tag: '// Formation',
            title: 'Formation',
            deg_title: 'Diplôme d\'Ingénieur – Réseaux & Cybersécurité',
            deg_school: 'École d\'Ingénieurs ESAIP',
            deg_period: '2021 – 2026 (Diplôme Attendu)',
            deg_desc: 'Spécialisation en Réseaux et Cybersécurité avec programmes d\'échange Erasmus',
            bac_title: 'Baccalauréat Scientifique (S)',
            bac_school: 'Lycée Saint Elie, Liban',
            bac_period: '2019–2020',
            bac_desc: 'Mention : Bien'
        },
        cert: {
            tag: '// Certifications',
            title: 'Certifications & Formation',
            status_progress: 'En cours',
            status_done: 'Complété'
        },
        lep: {
            tag: '// Roadmap',
            title: 'Mon LEP sur 2 ans',
            subtitle: 'Ma trajectoire professionnelle & personnelle pour 2026–2027',
            m1_title: 'Approfondir l\'Expertise Cybersécurité',
            m1_desc: 'Obtenir les certifications CEH et eJPT+, renforcer les compétences en sécurité offensive et réaliser des challenges CTF.',
            m2_title: 'Gagner en Expérience Professionnelle',
            m2_desc: 'Décrocher un stage ou une alternance dans un environnement exigeant lié à la cybersécurité ou aux réseaux.',
            m3_title: 'Projets Offensive Security',
            m3_desc: 'Développer des projets concrets en pentesting, red team et analyse de vulnérabilités sur des environnements contrôlés.',
            m4_title: 'Développer des Projets Web Avancés',
            m4_desc: 'Créer des applications modernes et sécurisées en combinant cybersécurité, design et développement web.',
            m5_title: 'Lancer Ma Propre Agence Digitale',
            m5_desc: 'Créer une agence combinant <strong>Marketing Digital</strong>, <strong>Développement Web</strong> et <strong>Services Cybersécurité</strong> — une offre unique sur le marché.',
            m6_title: 'Construire un Réseau International',
            m6_desc: 'Collaborer avec des marques et entreprises à l\'échelle internationale, développer une présence digitale globale et impactante.',
            m7_title: 'Croissance Continue & Excellence',
            m7_desc: 'Continuer à apprendre, évoluer techniquement et créer un impact digital significatif à travers des projets innovants.'
        },
        val: {
            tag: '// Identité',
            title: 'Mes Valeurs & Anti-Valeurs',
            col1: 'Mes Valeurs',
            col2: 'Anti-Valeurs',
            v1: 'Discipline', v2: 'Respect', v3: 'Ambition',
            v4: 'Créativité', v5: 'Esprit d\'Équipe', v6: 'Persévérance',
            av1: 'Paresse', av2: 'Négativité', av3: 'Manque de Communication',
            av4: 'Désorganisation', av5: 'Passivité'
        },
        vision: {
            tag: '// Futur',
            title: 'Comment je me vois dans 3 à 5 ans',
            quote: '"Dans les 3 à 5 prochaines années, je me vois bâtir ma propre agence digitale combinant cybersécurité, développement web, branding, création de contenu et marketing digital."',
            p1_title: 'Cybersécurité',
            p1_desc: 'Expert reconnu en sécurité offensive & défensive',
            p2_title: 'Développement Web',
            p2_desc: 'Applications modernes & expériences digitales premium',
            p3_title: 'Marketing Digital',
            p3_desc: 'Stratégies de communication & branding impactantes',
            p4_title: 'Impact International',
            p4_desc: 'Collaborations mondiales & projets à forte valeur',
            mission: 'Je veux travailler sur des projets à impact, collaborer à l\'international, et continuer à grandir techniquement et créativement. Mon objectif : créer des expériences numériques modernes tout en aidant les entreprises à devenir plus <strong>sécurisées</strong> et <strong>visibles</strong> en ligne.'
        },
        contact: {
            tag: '// Contact',
            title: 'Me Contacter',
            email_label: 'Email',
            phone_label: 'Téléphone',
            loc_label: 'Localisation',
            loc_value: 'Liban & France',
            lang_label: 'Langues',
            lang_value: 'Français (Bilingue) · Anglais (Courant) · Arabe (Natif) · Espagnol (Basique)',
            ph_name: 'Votre Nom',
            ph_email: 'Votre Email',
            ph_subject: 'Sujet',
            ph_message: 'Votre Message',
            send_btn: 'Envoyer le Message'
        },
        footer: {
            copy: '© 2026 Alberto Nahra. Tous droits réservés.',
            back: 'Retour en haut'
        }
    },
    en: {
        nav: {
            home: 'Home', profil: 'Profile', about: 'About',
            skills: 'Skills', competences: 'Skills', projects: 'Projects',
            experience: 'Experience', education: 'Education',
            certifications: 'Certifications', lep: 'LEP',
            valeurs: 'Values', vision: 'Vision', contact: 'Contact'
        },
        hero: {
            tag: 'Cybersecurity & Networks',
            subtitle: 'Cybersecurity & Networks Engineer',
            desc: 'Passionate about offensive security, penetration testing, and building secure infrastructures. Engineering student at ESAIP, specializing in Networks & Cybersecurity.',
            btn_cv: 'Download CV',
            btn_contact: 'Contact Me',
            badge: 'Cybersecurity'
        },
        profil: {
            tag: '// Who am I?',
            title: 'My Profile & Background',
            role: 'Engineering Student',
            school: 'ESAIP Engineering School',
            spec: 'Networks & Cybersecurity',
            loc1: 'Lebanon',
            loc2: 'France',
            available: 'Open to opportunities',
            story1_title: 'The Trigger',
            story1_text: 'My passion for cybersecurity was born from a personal experience: my account was hacked. Since then, I\'ve dedicated myself to understanding and mastering offensive security.',
            story2_title: 'Multicultural Profile',
            story2_text: 'Between Lebanon and France, with Erasmus experiences in Hungary, Greece, and Spain — I bring an international perspective to modern cybersecurity challenges.',
            story3_title: 'Offensive Security',
            story3_text: 'Passionate about red teaming, penetration testing, and understanding attack vectors to build more resilient systems.',
            story4_title: 'Innovation & Digital Creation',
            story4_text: 'Web development, cybersecurity, and digital creation converge in my vision: building modern, secure digital experiences.'
        },
        about: {
            tag: '// About',
            title: 'About Me',
            p1: 'I am a cybersecurity professional and engineering student at ESAIP, specializing in Networks and Cybersecurity. As a cybersecurity intern at Monty Holding (Monty Mobile), I developed hands-on expertise in penetration testing, vulnerability assessment, and red team operations.',
            p2: 'My passion lies in offensive security and understanding attack vectors to build more resilient systems. With a strong foundation in network infrastructure and cloud technologies, I pursue continuous learning and certifications such as CEH and eJPT+.',
            p3: 'Between Lebanon and France, I bring a multicultural perspective and multilingual proficiency to international cybersecurity challenges.',
            stat1: 'Years of Learning',
            stat2: 'Certifications',
            stat3: 'Languages'
        },
        skills: {
            tag: '// Expertise',
            title: 'Technical Skills',
            cat1: 'Cybersecurity',
            cat2: 'Networks',
            cat3: 'Cloud & DevSecOps',
            cat4: 'Programming',
            cat5: 'Tools & Platforms',
            cat6: 'Soft Skills'
        },
        comp: {
            tag: '// Detailed Skills',
            title: 'My Skills',
            tech_title: 'Technical Skills',
            tech_sub: 'Tools & Technologies',
            behav_title: 'Soft Skills',
            behav_sub: 'Interpersonal Abilities',
            trans_title: 'Transferable Skills',
            trans_sub: 'Cross-functional Know-how',
            prob_solving: 'Problem Solving',
            analysis: 'Analysis',
            communication: 'Communication',
            teamwork: 'Teamwork',
            adaptability: 'Adaptability',
            stress: 'Stress Management',
            curiosity: 'Curiosity',
            organization: 'Organization',
            proj_mgmt: 'Project Management',
            creative: 'Creative Thinking',
            digital_comm: 'Digital Communication',
            tech_watch: 'Technology Watch',
            content: 'Content Creation'
        },
        projects: {
            tag: '// Projects',
            title: 'Projects',
            p1_title: 'Penetration Testing Lab',
            p1_cat: 'Offensive Security',
            p1_desc: 'Design and deployment of a dedicated penetration testing lab with virtual machines for attacker and target environments. Full penetration testing covering reconnaissance, scanning, exploitation, and privilege escalation.',
            p1_h1: 'Configured vulnerable Linux servers',
            p1_h2: 'Exploited SQL injections and weak authentications',
            p1_h3: 'Documented remediation recommendations',
            p2_title: 'Enterprise Network Infrastructure Design',
            p2_cat: 'Network Architecture',
            p2_desc: 'Design and deployment of a complete enterprise network architecture including routers, switches, servers, and secure LAN/WAN connections. Implemented network security mechanisms with VLANs and dynamic routing.',
            p2_h1: 'Implemented VLANs and static/dynamic routing',
            p2_h2: 'Configured network security mechanisms',
            p2_h3: 'Simulated and validated the full infrastructure'
        },
        exp: {
            tag: '// Professional Background',
            title: 'Professional Experience',
            job_title: 'Cybersecurity Intern',
            location: 'Lebanon / France',
            item1: 'Manual and automated penetration testing',
            item2: 'Attack surface analysis (passive & active reconnaissance)',
            item3: 'Red team operations in offensive security',
            item4: 'Vulnerability identification and risk analysis',
            item5: 'Security assessment and remediation recommendations'
        },
        edu: {
            tag: '// Education',
            title: 'Education',
            deg_title: 'Engineering Degree – Networks & Cybersecurity',
            deg_school: 'ESAIP Engineering School',
            deg_period: '2021 – 2026 (Expected)',
            deg_desc: 'Specialization in Networks and Cybersecurity with Erasmus exchange programs',
            bac_title: 'Scientific Baccalaureate (S)',
            bac_school: 'Saint Elie High School, Lebanon',
            bac_period: '2019–2020',
            bac_desc: 'Honors: Good'
        },
        cert: {
            tag: '// Certifications',
            title: 'Certifications & Training',
            status_progress: 'In Progress',
            status_done: 'Completed'
        },
        lep: {
            tag: '// Roadmap',
            title: 'My 2-Year LEP',
            subtitle: 'My professional & personal trajectory for 2026–2027',
            m1_title: 'Deepen Cybersecurity Expertise',
            m1_desc: 'Obtain CEH and eJPT+ certifications, strengthen offensive security skills, and complete CTF challenges.',
            m2_title: 'Gain Professional Experience',
            m2_desc: 'Land an internship or work-study placement in a demanding environment related to cybersecurity or networks.',
            m3_title: 'Offensive Security Projects',
            m3_desc: 'Develop concrete projects in pentesting, red team, and vulnerability analysis on controlled environments.',
            m4_title: 'Build Advanced Web Projects',
            m4_desc: 'Create modern, secure applications by combining cybersecurity, design, and web development.',
            m5_title: 'Launch My Own Digital Agency',
            m5_desc: 'Create an agency combining <strong>Digital Marketing</strong>, <strong>Web Development</strong>, and <strong>Cybersecurity Services</strong> — a unique market offering.',
            m6_title: 'Build an International Network',
            m6_desc: 'Collaborate with brands and companies at an international scale, developing a global and impactful digital presence.',
            m7_title: 'Continuous Growth & Excellence',
            m7_desc: 'Keep learning, evolving technically, and creating significant digital impact through innovative projects.'
        },
        val: {
            tag: '// Identity',
            title: 'My Values & Anti-Values',
            col1: 'My Values',
            col2: 'Anti-Values',
            v1: 'Discipline', v2: 'Respect', v3: 'Ambition',
            v4: 'Creativity', v5: 'Team Spirit', v6: 'Perseverance',
            av1: 'Laziness', av2: 'Negativity', av3: 'Lack of Communication',
            av4: 'Disorganization', av5: 'Passivity'
        },
        vision: {
            tag: '// Future',
            title: 'How I See Myself in 3 to 5 Years',
            quote: '"In the next 3 to 5 years, I see myself building my own digital agency combining cybersecurity, web development, branding, content creation, and digital marketing."',
            p1_title: 'Cybersecurity',
            p1_desc: 'Recognized expert in offensive & defensive security',
            p2_title: 'Web Development',
            p2_desc: 'Modern applications & premium digital experiences',
            p3_title: 'Digital Marketing',
            p3_desc: 'Impactful communication & branding strategies',
            p4_title: 'International Impact',
            p4_desc: 'Global collaborations & high-value projects',
            mission: 'I want to work on impactful projects, collaborate internationally, and keep growing technically and creatively. My goal: create modern digital experiences while helping businesses become more <strong>secure</strong> and <strong>visible</strong> online.'
        },
        contact: {
            tag: '// Contact',
            title: 'Get in Touch',
            email_label: 'Email',
            phone_label: 'Phone',
            loc_label: 'Location',
            loc_value: 'Lebanon & France',
            lang_label: 'Languages',
            lang_value: 'French (Bilingual) · English (Fluent) · Arabic (Native) · Spanish (Basic)',
            ph_name: 'Your Name',
            ph_email: 'Your Email',
            ph_subject: 'Subject',
            ph_message: 'Your Message',
            send_btn: 'Send Message'
        },
        footer: {
            copy: '© 2026 Alberto Nahra. All rights reserved.',
            back: 'Back to top'
        }
    }
};

// ========== i18n Engine ==========
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = getNestedValue(t, el.dataset.i18n);
        if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const val = getNestedValue(t, el.dataset.i18nHtml);
        if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const val = getNestedValue(t, el.dataset.i18nPlaceholder);
        if (val !== undefined) el.placeholder = val;
    });
}

function setLanguage(lang) {
    const body = document.body;
    body.classList.add('lang-transitioning');

    setTimeout(() => {
        applyTranslations(lang);
        body.classList.remove('lang-transitioning');
        body.style.animation = 'langFadeIn 0.3s ease-out';
        setTimeout(() => { body.style.animation = ''; }, 300);
    }, 180);

    localStorage.setItem('portfolio-lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

function initLanguage() {
    const saved = localStorage.getItem('portfolio-lang') || 'fr';
    applyTranslations(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === saved;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');

        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

// ========== Initialize on DOM Ready ==========
document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initNavigation();
    initScrollAnimations();
    initScrollReveal();
    initSmoothScroll();
    initContactForm();
    initSkillBars();
    initNavbarScroll();
    initVisionParticles();
    createScrollToTopButton();
});

// ========== Navigation Bar ==========
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    window.addEventListener('scroll', updateActiveNavLinkOnScroll, { passive: true });
    updateActiveNavLinkOnScroll();
}

function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 220) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// ========== Navbar Scroll State ==========
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handler = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler();
}

// ========== Smooth Scroll ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== Existing Scroll Animations (scroll-animate class) ==========
function initScrollAnimations() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    const animateElements = document.querySelectorAll(
        '.skill-category, .project-card, .edu-item, ' +
        '.timeline-item, .cert-card, .contact-item'
    );

    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// ========== New Scroll Reveal (scroll-reveal class) ==========
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// ========== Animated Skill Bars ==========
function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-bar-fill');
                fills.forEach((fill, i) => {
                    const targetWidth = fill.dataset.width || 0;
                    setTimeout(() => {
                        fill.style.width = targetWidth + '%';
                    }, i * 80);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.comp-category').forEach(cat => observer.observe(cat));
}

// ========== Vision Particles ==========
function initVisionParticles() {
    const container = document.querySelector('.vision-particles');
    if (!container) return;

    const colors = [
        'rgba(6, 182, 212, 0.65)',
        'rgba(167, 139, 250, 0.65)',
        'rgba(255, 255, 255, 0.35)',
        'rgba(30, 64, 175, 0.6)'
    ];

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'vision-particle';
        const size = 1.5 + Math.random() * 3.5;
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation-duration: ${6 + Math.random() * 10}s;
            animation-delay: ${Math.random() * 9}s;
        `;
        container.appendChild(particle);
    }
}

// ========== Scroll To Top Button ==========
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.setAttribute('aria-label', 'Back to top');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #1e40af 0%, #0369a1 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 999;
        font-size: 1.1rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 25px rgba(30, 64, 175, 0.4);
        align-items: center;
        justify-content: center;
    `;
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        const show = window.scrollY > 400;
        scrollBtn.style.display = show ? 'flex' : 'none';
        scrollBtn.style.opacity = show ? '1' : '0';
    }, { passive: true });

    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-4px) scale(1.1)';
        scrollBtn.style.boxShadow = '0 16px 40px rgba(30, 64, 175, 0.55)';
    });
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0) scale(1)';
        scrollBtn.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.4)';
    });
}

// ========== Contact Form ==========
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name    = this.querySelector('input[type="text"]').value.trim();
        const email   = this.querySelector('input[type="email"]').value.trim();
        const subject = this.querySelector('input[placeholder="Subject"]').value.trim();
        const message = this.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            showNotification('Veuillez remplir tous les champs requis', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide', 'error');
            return;
        }

        const mailtoLink = `mailto:albertonahra58@gmail.com?subject=${encodeURIComponent(subject || 'Nouveau message du portfolio')}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        showNotification('Merci ! Votre message va être envoyé via votre client email.', 'success');

        setTimeout(() => this.reset(), 500);
    });
}

// ========== Counter Animation ==========
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.dataset.target || stat.textContent);
        let current = 0;
        const step = target / 50;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 28);
    });
}

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                entry.target._obs && entry.target._obs.unobserve(entry.target);
            }
        });
    }).observe(aboutSection);
}

// ========== Skill Tags Animation (existing skills section) ==========
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-tag').forEach((tag, i) => {
                    tag.style.animation = `fadeInUp 0.45s ease-out ${i * 0.07}s both`;
                });
            }
        });
    }, { threshold: 0.15 }).observe(skillsSection);
}

// ========== Utilities ==========
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'info') {
    const colors = { success: '#10b981', error: '#ef4444', info: '#06b6d4' };
    const el = document.createElement('div');
    el.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        padding: 14px 20px;
        background: ${colors[type]};
        color: white;
        border-radius: 10px;
        z-index: 10000;
        font-weight: 600;
        font-size: 0.9rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: slideInRight 0.4s ease-out;
        max-width: 320px;
        line-height: 1.4;
    `;
    el.textContent = message;
    document.body.appendChild(el);

    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.4s';
        setTimeout(() => el.remove(), 400);
    }, 4000);
}

// ========== Keyboard Shortcuts ==========
document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const contact = document.querySelector('#contact');
        if (contact) window.scrollTo({ top: contact.offsetTop - 70, behavior: 'smooth' });
    }
    if ((e.metaKey || e.ctrlKey) && e.key === 'h') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ========== Print =========
window.addEventListener('beforeprint', () => {
    const navbar = document.querySelector('.navbar');
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (navbar) navbar.style.display = 'none';
    if (scrollBtn) scrollBtn.style.display = 'none';
});

window.addEventListener('afterprint', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.removeProperty('display');
});

// ========== Load Complete ==========
window.addEventListener('load', () => {
    document.querySelectorAll('.scroll-animate').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('revealed');
        }
    });
    console.log('%c Alberto Nahra Portfolio', 'font-size:18px;font-weight:bold;color:#06b6d4;');
    console.log('%c Ctrl/Cmd+K → Contact  |  Ctrl/Cmd+H → Top', 'color:#cbd5e1;');
});
