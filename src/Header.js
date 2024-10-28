import React from 'react';
import './Header.css';

function Header() {
    return (
      <section className='header-container'>
        <div className='header'>
            <img src={process.env.PUBLIC_URL + '/Screenshot_289.png'} alt="moi" className='portrait'/>
            <div>
              <a href='https://github.com/victorpesneaud'><img src={process.env.PUBLIC_URL + '/github-brands-solid.svg'} alt=''/></a>
              <a href='https://www.linkedin.com/in/victor-pesneaud-5875661b7/'><img src={process.env.PUBLIC_URL + '/linkedin-brands-solid.svg'} alt=''/></a>
              <a href='mailto:vpesneaud@gmail.com'><img src={process.env.PUBLIC_URL + '/envelope-solid.svg'} alt=''/></a>
            </div>
        </div>
        <div>
            <h1 className='à-propos'>Victor Pesneaud - Développeur Front-End</h1>
            <p>Jeune développeur Front bilingue anglais avec deux ans d’expérience professionnelle dans le developpement en recherche d'un contrat d’apprentissage pour la dernière année d’un Mastère de Développement Web à l’école ECV Digital Paris de 2024 à 2025</p>
        </div>
      </section>
    );
  }
  
  export default Header;