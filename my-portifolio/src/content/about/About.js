import './About.css';   
import ProfilePic from '../../assets/Profile.pdf';
import euImg from '../../assets/eu.png'; // Importe a imagem

function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        <div className="about-content">
          <div className='text-about'>
              <div className="social-media">
                <a href={ProfilePic} download className="btn purple">📄 Download CV</a>
                <a href="https://www.linkedin.com/in/eric-albuquerque-b08087218/" target="_blank" rel="noreferrer"> 🟦 Linkedin</a>
              </div>
            <p>Olá! Meu nome é Eric. Sou um desenvolvedor full-stack e analista de qualidade Jr.</p>
          </div>
        </div>
        <div className="img-me">
          <img src={euImg} alt="Minha foto" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
        </div>
      </div>
    </section>
  );
}

export default About;
