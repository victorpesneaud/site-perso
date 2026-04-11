import React from 'react';
import './Header.css';

function Header() {
    return (
      <section>
      {/* <nav className='navbar-header'>
          <div className='navbar-brand'>
            <div className='navbar-avatar'>VP</div>
            <div className='navbar-brand-text'>
              <span className='navbar-name'>Victor Pesneaud</span>
              <span className='navbar-subtitle'>Développeur</span>
            </div>
          </div>
          <ul className='navbar-links'>
            <li className='active'>Accueil</li>
            <li>Projets</li>
            <li>Expérience Professionnelle</li>
            <li>Contact</li>
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
        </nav> */}
      <section className='header-container'>
        {/* <div className='header'>
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
        <div className="skills-grid">
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/react.svg'} alt="" />
            <span>React</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/typescript.svg'} alt="" />
            <span>TypeScript</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/nodejs.svg'} alt="" />
            <span>Node.js</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/python.svg'} alt="" />
            <span>Python</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/postgresql.svg'} alt="" />
            <span>Redux</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/docker.svg'} alt="" />
            <span>Docker</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/graphql.svg'} alt="" />
            <span>PiniaJS</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/aws.svg'} alt="" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/git.svg'} alt="" />
            <span>Git</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/nextjs.svg'} alt="" />
            <span>Next.js</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/nextjs.svg'} alt="" />
            <span>HTML</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/nextjs.svg'} alt="" />
            <span>CSS</span>
          </div>
          <div className="skill-card">
            <img src={process.env.PUBLIC_URL + '/icons/nextjs.svg'} alt="" />
            <span>Pandas</span>
          </div>
        </div> */}
      </section>
      </section>
    );
  }
  
  export default Header;