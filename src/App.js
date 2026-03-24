import React, { useState } from 'react';
import './App.css';


const experiences = [
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
    }
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
    }
  },
  {
    company: "Rommus",
    yearStarted: "2023 - 2024",
    imgSrc: process.env.PUBLIC_URL + '/logo-romus.png',
    jobTitle: "Etude et Développement Service Informatique",
    description: "Travail en méthode agile au sein du Service Informatique de ROMUS en utilisant principalement PHP, SQL, Javascript",
    task : {
      task1 : 'Réalisatisation de pages et implémentation de features pour le système de tracking interne de coli',
      task2 : 'Gestions de flux via Data Exchange Orchestrator',
      task3 : 'résolution de problèmes  informatiques divers et variés pour les nombreux employés de l’entreprise '
    }
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
    }
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
    }
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

const ComponentA = () => {
  return <div className='component-container'>
  {experiences.map((experience, index) => (
    <div key={index} className='card-container'>
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
    </div>
  ))}
</div>;
};

const ComponentB = () => {
  return <div className='component-container'>
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
</div>;
};

const ComponentC = () => {
  return <div className='component-container'>
    <div className='card-container'>
      <p>En cours de mise à jour</p>
      {/* <h1>Lien entre le site et la web app de Molotov</h1>
      <p>Après avoir participé au développement et au lancement de la webapp <a href='https://app.molotov.tv'>molotov</a>, l'objectif de ce projet était de relié la partie Programme TV
      du site vitrine aux programmes disponible uniquement en streaming sur la webapp</p>
      <img src={process.env.PUBLIC_URL + '/capture-molotov1.png'} className='projet-molotov-img' alt=''/>
      <p>En appuyant sur le bouton "Regarder Maintenant" l'utilisateur se retrouve face au programme </p>
      <img src={process.env.PUBLIC_URL + '/capture-molotov2.png'} className='projet-molotov-img' alt=''/> */}
    </div>
  </div>;
};

const App = () => {
  // traque le State actuel
  const [currentComponent, setCurrentComponent] = useState('A');

  // retourne le nom de classe active si la variable currentComponent du State est = à 
  return (
    <div className='nav-container'>
      <nav>
        <button onClick={() => setCurrentComponent('A')} className={currentComponent === 'A' ? 'active' : ''}>
          Expérience Professionnelle
        </button>
        <button onClick={() => setCurrentComponent('B')} className={currentComponent === 'B' ? 'active' : ''}>
          Formation
        </button>
        <button onClick={() => setCurrentComponent('C')} className={currentComponent === 'C' ? 'active' : ''}>
          Mes Projets
        </button>
      </nav>

      {/* render le composant selon la valeur de currentComponent */}
      {currentComponent === 'A' && <ComponentA />}
      {currentComponent === 'B' && <ComponentB />}
      {currentComponent === 'C' && <ComponentC />}
    </div>
  );
};

export default App;