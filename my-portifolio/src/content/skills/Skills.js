import './Skills.css';

function Skills() {
 const skills = [
    // Front-end
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '💨' },

    // Back-end
    { name: 'C#', icon: '💻' },
    { name: 'C++', icon: '🧠' },
    { name: 'Redis', icon: '🔴' },

    // Testes
    { name: 'Playwright', icon: '🧪' },
    { name: 'Postman', icon: '📬' },

    // Banco de Dados
    { name: 'SQL', icon: '🗃️' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },

    // DevOps
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'Azure DevOps', icon: '☁️' },

    // Outros
    { name: 'Figma', icon: '🎯' },
  ];

  return (
    <section className="skills-section" id="habilidades">
      <h2>Minhas Habilidades e tecnologias já usadas</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
