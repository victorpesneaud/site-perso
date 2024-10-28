import React, { useState } from 'react';
import './App.css';


const experiences = [
  {
    company: "SNCF",
    yearStarted: 2024,
    imgSrc: process.env.PUBLIC_URL + '/logo-sncf3.png', 
    jobTitle: "Développeur de solutions informatiques pour le Plateau commun de Paris Nord",
    description: "Développement de solution Informatiques au sein du plateau commun Paris-Nord du groupe SNCF en VBA, Pyhton et PostGreSQL",
    task : {
      task1 : 'Concertation avec les acteurs et réalisation d’un cahier des charges',
      task2 : 'automatisation de récupération de données et de calculs en Python/SQL',
      task3 : ' développement de macro en VBA'
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
    yearStarted: "2023 - Présent",
    imgSrc: process.env.PUBLIC_URL + '/logo-ecv-digital.png', 
    jobTitle: "Mastère Lead Developer Front-End",
    description: "Actuellement en 2ème année de mon cursus en Mastère Lead Developer Front End",
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
      <div className='card-header'><img src={experience.imgSrc} alt={experience.company}/><h1>{experience.company} ({experience.yearStarted})</h1></div>
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
      <div className='card-header'><img src={formation.imgSrc} alt={formation.company}/><h1>{formation.company} ({formation.yearStarted})</h1></div>
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
  return <div><h1>Cette section est encore en développement, un lien github est disponible en dessous de ma photo via le premier pictogramme </h1></div>;
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