import './Training.css';
import TrainingCard from './TrainingCard';
import eeepImg from '../../assets/eeep.png'; 
import ufcImg from '../../assets/ufc.png';
function Training() {
  return (
    <section className="training-section" id="formacao">
      <h2>Meus Treinamentos</h2>
      <div className="training-container">
        <TrainingCard
          title="Ensino médio"
          platform="EEEP Deputado José Maria Melo"
          duration="2017 - 2019"
          description="Ensino médio com curso Tecnico em Informática"
          imgSrc={eeepImg}
        />
         <TrainingCard
          title="Ensino Superior"
          platform="Universidade Federal do Ceará - UFC"
          duration="2021 - 2026"
          description="Cursando Bacharelado em Ciência da Computação"
          imgSrc={ufcImg}
        />
      </div>
    </section>
  );
}

export default Training;
