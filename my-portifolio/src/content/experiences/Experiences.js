import './Experiences.css';
import CardExperience from './CardExperience';

function Experiences() {
  return (
    <section className="experience-section" id="experiencias">
      <h2>Experiências de Trabalho</h2>
      <div className='experience-container'>
        <CardExperience
          title="FitBank"
          position="Analista de qualidade Jr"
          duration="Mai 2024 - Ago 2025"
          children={'Atuando no desenvolvimento e garantia de qualidade de sistemas (Web, API e micro serviços) em produtos do ramo bancário utilizando C#, .Net, ASP Net, Javascript e SQL Server.Desenvolvimento de procedimentos armazenados (procedures) no SQL server, realização de testes para garantir a corretude do sistema, utilização de ferramentas como o PlayWright para testes automatizados e comunicação efetiva em equipe para resolução de problemas e ajustes'}
        />
      </div>
    </section>
  );
}

export default Experiences;