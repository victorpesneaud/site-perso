import React, { useState, useEffect } from 'react';
import './App.css';

const experiences = [
  {
    company: "Université Gustave Eiffel",
    yearStarted: 2026,
    imgSrc: process.env.PUBLIC_URL + '/logo-lisaa.png', 
    jobTitle: "Concepteur Redacteur Web",
    description: "Création de site web, de contenu web et d'outils de communication pour le LISAA",
    task : {
      task1 : 'Conception du site web du LISAA édition',
      task2 : 'Rédaction de contenu pour le site web du LISAA',
      task3 : 'Création d\'outil de communication pour le LISAA',
    },
    skills : ["Wordpress", "Photoshop", "inDesign"]
  },
  {
    company: "CorText",
    yearStarted: 2025,
    imgSrc: process.env.PUBLIC_URL + '/logo-cortext.png', 
    jobTitle: "Développeur VueJS Full-Stack",
    description: "Développement d'une application web de visualisation de données liée à l'adaptation au changement climatique pour l'entreprise CorText",
    task : {
      task1 : 'Conception de maquettes UI/UX',
      task2 : 'Création et tenue d\'un cahier des charges en relation avec le client',
      task3 : 'Création et maintient d\'image docker et de dépots GIT pour le projet',
      task4 : 'Développement de l\'interface web de navigation dans les données et dans les résultats',
      task5 : 'Livraison d\'un premier prototype fonctionnel en 6 mois'
    },
    skills : ["VueJS", "PiniaJS", "Bootstrap", "GIT", "Docker", "UX", "UI", "Figma", "Relation client", "Cahier des charges"]
  },
  {
    company: "SNCF",
    yearStarted: 2024,
    imgSrc: process.env.PUBLIC_URL + '/logo-sncf3.png', 
    jobTitle: "Développeur de solutions informatiques pour le Plateau commun de Paris Nord",
    description: "Développement de solution Informatiques au sein du plateau commun Paris-Nord du groupe SNCF en VBA, Pyhton et PostGreSQL",
    task : {
      task1 : 'Concertation avec les acteurs et réalisation d’un cahier des charges',
      task2 : 'Automatisation de récupération de données et de calculs en Python/SQL',
      task3 : 'Développement de macro en VBA'
    },
    skills : ["VBA", "Python", "Pandas", "PostgreSQL","PowerBI", "Data Visualisation"]
  },
  {
    company: "Romus",
    yearStarted: "2023 - 2024",
    imgSrc: process.env.PUBLIC_URL + '/logo-romus.png',
    jobTitle: "Etude et Développement Service Informatique",
    description: "Travail en méthode agile au sein du Service Informatique de ROMUS en utilisant principalement PHP, SQL, Javascript",
    task : {
      task1 : 'Réalisatisation de pages et implémentation de features pour le système de tracking interne de coli',
      task2 : 'Gestions de flux via Data Exchange Orchestrator',
      task3 : 'résolution de problèmes  informatiques divers et variés pour les nombreux employés de l’entreprise '
    },
    skills : ["PHP", "Symfony", "Twig", "Javascript", "IT", "DexOP", "SQL", "Agile"]
  },
  {
    company: "Molotov (Puis Fubo TV)",
    yearStarted: '2021 - 2022',
    imgSrc: process.env.PUBLIC_URL + '/logo-molotov.png',
    jobTitle: "Développeur Front-End ReactJS",
    description: " Travail en méthode agile au sein de la squad B2C de l’entreprise en utilisant principalement React et Redux",
    task : {
      task1 : 'Réalisation de pages sur le site landing et Création de composant React',
      task2 : 'Release de la webapp app.molotov.tv',
      task3 : 'Améliorations des performances du site landing et de l\'app',
      task4 : 'Travail en Anglais avec des équipes internationales suite au rachat de Molotov par Fubo'
    },
    skills : ["ReactJS", "Redux", "l18n", "Agile", "Lighthouse", "Storybook", "B2C", "Scrum", "Electron", "English"]
  },
  {
    company: "Les artisans Numériques",
    yearStarted: 2019,
    imgSrc: process.env.PUBLIC_URL + '/logo-artnum.png',
    jobTitle: "Stage en tant que Développeur front-end",
    description: "Développeur Front-End",
    task : {
      task1 : 'Réalisation de pages pour le site Coallia.org via Wordpress',
      task2 : 'Réalisation de maquettes et de prototypes pour le site Luxe.tv',
      task3 : 'Gestion des Administrateurs pour Coallia'
    },
    skills : ["Javascript", "PHP", "UX", "Wordpress"]
  }
];

const formation = [
  {
    ecole: "ECV Digital",
    yearStarted: "2023 - 2025",
    imgSrc: process.env.PUBLIC_URL + '/logo-ecv-digital.png', 
    jobTitle: "Mastère Lead Developer Front-End + Manager de l'ingénierie digitale",
    description: "Obtention du Mastère Lead Developer Front End + Manager de l'ingénierie digitale (RNCP38590)",
    task : {
      task1 : 'L\'analyse de l\'environnement et des besoins digitaux d\'une entité cliente',
      task2 : 'L\'élaboration de projet digitaux au service d\'une entité cliente',
      task3 : 'Le pilotage de projet digital au service d\'une entité cliente',
      task4 : 'La mise en place et le management d\'une stratégie digitale au service d\'une entité cliente'
    }
  },
  {
    ecole: "l'Ecole Multimédia",
    yearStarted: "2020 - 2022",
    imgSrc: process.env.PUBLIC_URL + '/logo-ecole-multimedia.png', 
    jobTitle: "Bachelor Développeur Front-End",
    description: "Obtention de mon Bachelor de développeur Multimédia (RNCP 13595)",
    task : {
      task1 : 'Gérer un projet technique',
      task2 : 'Développer des applications de bureau',
      task3 : 'Développer des applications mobiles',
      task4 : 'Et des Cours complémentaires (Bootstrap, RGPD, Git, Web 3, Sécurité, Performances web et autre'
    }
  },
];

const projets = [
  {
    name: "FM-Moneyball",
    description: "Un outil d'analyse de données pour Football Manager qui identifie les joueurs sous-évalués à l'aide de statistiques avancées — inspiré de la philosophie de « Moneyball.",
    stack: ["NextJS", "React", "Typescript"],
    url: "https://github.com/victorpesneaud/fm-moneyball",
  },
  {
    name: "Spotifind",
    description: "Plateforme de notation et de reccomendation de musique (à la Letterboxd) - projet d'école.",
    stack: ["VueJS", "Pinia", "MongoDB", "API Rest"],
    url: "https://github.com/victorpesneaud/PFE-Spotify",
  },
  {
    name: "JobScraper",
    description: "Outil permettant de récupérer les annonces de postes disponnibles sur les job boards les plus connus en se basant sur les intitulés de postes pertinents.",
    stack: ["Python"],
    url: "https://github.com/victorpesneaud/fm-moneyball",
  },
  {
    name: "Création d'affiches",
    description: "Affiches réalisé pour l'université du pays basque et l'université Gustave eiffel dans le cadre d'une journée d'étude.",
    stack: ["InDesign, Photoshop"],
    imgSrc: process.env.PUBLIC_URL + '/affiche resistir fracturar inventar 4-1.png',
    url: "https://lisaa.univ-gustave-eiffel.fr/actualites/actualite/je-resistir-fracturar-inventar-formas-de-la-contestacion-en-america-latina-y-la-peninsula-iberica-siglos-xx-xxi",
  }
]

const App = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const sections = ['accueil', 'projets', 'experiences', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.8, 
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='nav-container'>
      <nav className='navbar-header'>
          <div className='navbar-brand'>
            <div className='navbar-avatar'>VP</div>
            <div className='navbar-brand-text'>
              <span className='navbar-name'>Victor Pesneaud</span>
              <span className='navbar-subtitle'>Développeur</span>
            </div>
          </div>
          <ul className='navbar-links'>
            <a href='#accueil'><li className={activeSection === 'accueil' ? 'active' : ''}>Accueil</li></a>
            <a href='#projets'><li className={activeSection === 'projets' ? 'active' : ''}>Projets</li></a>
            <a href='#experiences'><li className={activeSection === 'experiences' ? 'active' : ''}>Expériences Professionnelles</li></a>
            <a href='#contact'><li className={activeSection === 'contact' ? 'active' : ''}>Contact</li></a>
          </ul>
          <div className='navbar-right'>
            <div className='navbar-icons'>
              <a href='https://github.com/victorpesneaud'>
                <img src={process.env.PUBLIC_URL + '/github-brands-solid.svg'} alt='GitHub' />
              </a>
              <a href='https://www.linkedin.com/in/victor-pesneaud-5875661b7/'>
                <img src={process.env.PUBLIC_URL + '/linkedin-brands-solid.svg'} alt='LinkedIn' />
              </a>
            </div>
            <a href='mailto:vpesneaud@gmail.com' className='navbar-cta'>
              Me contacter →
            </a>
          </div>
        </nav>
        <div className='header' id="accueil">
          <div className='portrait-wrapper'>
            <img src={process.env.PUBLIC_URL + '/Screenshot_289.png'} alt="moi" className='portrait'/>
          </div>
        </div>

        <div className='header-text'>
          <h1 className='header-name'>Victor Pesneaud</h1>
          <p className='header-role'>Développeur Web Full-Stack</p>
        </div>

        <div className='header-icons-container'>
          <a href='https://github.com/victorpesneaud' className='header-icon-link'>
            <img src={process.env.PUBLIC_URL + '/github-brands-solid.svg'} alt='GitHub' className='icons'/>
          </a>
          <a href='https://www.linkedin.com/in/victor-pesneaud-5875661b7/' className='header-icon-link'>
            <img src={process.env.PUBLIC_URL + '/linkedin-brands-solid.svg'} alt='LinkedIn' className='icons'/>
          </a>
          <a href='mailto:vpesneaud@gmail.com' className='header-icon-link'>
            <img src={process.env.PUBLIC_URL + '/envelope-solid.svg'} alt='Email' className='icons'/>
          </a>
        </div>
        <p className='header-role'>Ma Stack :</p>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/react.svg'} alt="" />
            <span>React</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/typescript.svg'} alt="" />
            <span>TypeScript</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/javascript.svg'} alt="" />
            <span>Javascript</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/vue.svg'} alt="" />
            <span>VueJS</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/nodejs.svg'} alt="" />
            <span>Node.js</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/python.svg'} alt="" />
            <span>Python</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/redux.svg'} alt="" />
            <span>Redux</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/docker.svg'} alt="" />
            <span>Docker</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/pinia.svg'} alt="" />
            <span>PiniaJS</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/postgresql.svg'} alt="" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/github-brands-solid.svg'} alt="" />
            <span>Git</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/nextjs.svg'} alt="" />
            <span>Next.js</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/html.svg'} alt="" />
            <span>HTML</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/css.svg'} alt="" />
            <span>CSS</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/pandas.svg'} alt="" />
            <span>Pandas</span>
          </div>
        </div>
      <h1 className='section-title'>Projets personnels</h1>
      <span className='underline-section-title'></span>
      <div id="projets">
        {projets.map((projet, index) => (
          <div key={index} className='projets-container'>
            <a href={projet.url}><h2>{index + 1}. {projet.name}</h2></a>
            <p>{projet.description}</p>
            <img src={projet.imgSrc} className='company-logo'></img>

            <ul className='project-list-container'>
              {Object.values(projet.stack).map((skill, i) => (
                      <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h1>Expériences Professionnelles</h1>
      <span className='underline-section-title'></span>
      <div className='component-container'>
        {experiences.map((experience, index) => (
          <div key={index} className='card-container' id="experiences">
            <div className='card-header'><img src={experience.imgSrc} alt={experience.company} className='company-logo'/><h1>{experience.company} ({experience.yearStarted})</h1></div>
            <h2>{experience.jobTitle}</h2>
            <p>{experience.description}</p>
            <div style={{ marginTop: '10px' }}>
                  <h3>Tâches principales effectuées :</h3>
                  <ul>
                    {Object.values(experience.task).map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className='skills-grid-job'>
                    {Object.values(experience.skills).map((task, i) => (
                      <div className='skill-card'>
                      <li key={i}>{task}</li>
                      </div>
                    ))}
                </div>
          </div>
        ))}
      </div>
      <h1>Formations</h1>
      <span className='underline-section-title'></span>
      <div className='component-container'>
      {formation.map((formation, index) => (
        <div key={index} className='card-container'>
          <div className='card-header'><img src={formation.imgSrc} alt={formation.company} className='company-logo'/><h1>{formation.company} ({formation.yearStarted})</h1></div>
          <h2>{formation.jobTitle}</h2>
          <p>{formation.description}</p>
          <div style={{ marginTop: '10px' }}>
                <h3>L'école définit 4 grands axes à ce cursus :</h3>
                <ul>
                  {Object.values(formation.task).map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
        </div>
      ))}
    </div>
    <h1 id="contact">Me contacter</h1>
    <span className='underline-section-title'></span>
    <div className='contacts-cards-container'>
      <a href='mailto:vpesneaud@gmail.com' className='contacts-card-link'>
        <div className='contacts-card'>
          <img src={process.env.PUBLIC_URL + '/envelope-solid.svg'} alt="" />
          <div>
            <p className='navbar-subtitle'>Email</p>
            <h2>vpesneaud@gmail.com</h2>
          </div>
        </div>
      </a>
      <a href='https://github.com/victorpesneaud' target='_blank' rel='noreferrer' className='contacts-card-link'>
        <div className='contacts-card'>
          <img src={process.env.PUBLIC_URL + '/github-brands-solid.svg'} alt="" />
          <p className='navbar-subtitle'>Github</p>
          <h2>victorpesneaud</h2>
        </div>
      </a>
      <a href='https://www.linkedin.com/in/victor-pesneaud-5875661b7/' target='_blank' rel='noreferrer' className='contacts-card-link'>
        <div className='contacts-card'>
          <img src={process.env.PUBLIC_URL + '/linkedin-brands-solid.svg'} alt="" />
          <p className='navbar-subtitle'>Linkedin</p>
          <h2>Victor Pesneaud</h2>
        </div>
      </a>
    </div>
    </div>
  );
};

export default App;