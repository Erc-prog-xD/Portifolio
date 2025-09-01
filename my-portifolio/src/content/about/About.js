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
            <p>Atuo como Analista de QA e Dev, colaborando no desenvolvimento e na garantia de qualidade de sistemas bancários, incluindo Web, APIs e microsserviços. Utilizo tecnologias como C#, .Net, ASP Net, Javascript e SQL Server para desenvolver soluções robustas e realizar testes automatizados com PlayWright, garantindo a eficiência e a confiabilidade dos produtos.</p>
            <p>Como estudante de Ciência da Computação na Universidade Federal do Ceará, busco alinhar minha formação acadêmica com meu trabalho, aprimorando habilidades em desenvolvimento de software e resolução de problemas. Sou motivado por desafios técnicos e pela oportunidade de contribuir em equipe para entregar sistemas de alta qualidade.</p>
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
