// import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <main className='about-me'>
      <div className='about-container'>
        <section className='profile-section'>
          <div className='profile-image'>
            <div className='avatar'>JD</div>
          </div>
          <div className='profile-info'>
            <h2 style={{ display: 'flex', alignItems: 'center' }}>
              <IoIosArrowBack style={{ height: '30px' }} />
              Terry-Martel
              <IoIosArrowForward style={{ height: '30px' }} />
            </h2>
            <p className='title'>Desarrollador Web Full Stack</p>
          </div>
        </section>

        <section className='bio-section'>
          <h3>Biografía</h3>
          <p>
            Disfruto el ensamblaje de computadoras y comprendo la importancia de
            una base sólida en hardware para el desarrollo de software. Esto me
            permite tener una comprensión profunda de cómo interactúan los
            componentes de hardware y software para crear aplicaciones
            eficientes y robustas, Me formé en el{' '}
            {'"Instituto Tecnológico IDAT"'} y en el bootcamp {'"Soy Henry"'},
            adquiriendo conocimientos sólidos en una amplia gama de tecnologías
            y metodologías de desarrollo.
          </p>
        </section>

        <section className='skills-section'>
          <h3>Habilidades</h3>
          <div className='skills-container'>
            <div className='skill-tag'>React</div>
            <div className='skill-tag'>JavaScript</div>
            <div className='skill-tag'>HTML5</div>
            <div className='skill-tag'>CSS3</div>
            <div className='skill-tag'>Node.js</div>
            <div className='skill-tag'>Express</div>
            <div className='skill-tag'>MongoDB</div>
            <div className='skill-tag'>Git</div>
          </div>
        </section>

        {/* <section className='projects-section'>
          <h3>Proyectos Destacados</h3>
          <div className='projects-container'>
            <div className='project-card'>
              <h4>Tic Tac Toe</h4>
              <p>
                Un juego clásico desarrollado con React y efectos visuales
                modernos.
              </p>
            </div>
            <div className='project-card'>
              <h4>Portfolio Personal</h4>
              <p>
                Sitio web responsive para mostrar mis proyectos y habilidades.
              </p>
            </div>
            <div className='project-card'>
              <h4>API REST</h4>
              <p>
                Backend desarrollado con Node.js y Express para gestión de
                datos.
              </p>
            </div>
          </div>
        </section> */}

        <section className='contact-section'>
          <h3>Contacto</h3>
          <div className='contact-links'>
            <a
              href='https://github.com/cterryc'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/developer-martel/'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
            >
              LinkedIn
            </a>
            <a
              href='https://martel.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
            >
              Portfolio
            </a>
          </div>
        </section>
      </div>

      {/* <div className='navigation-buttons'>
        <Link to='/' className='nav-button'>
          Volver al Juego
        </Link>
      </div> */}
    </main>
  )
}

export default AboutMe
