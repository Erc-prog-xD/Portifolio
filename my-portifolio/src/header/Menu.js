import './Menu.css';
import { useState } from 'react';

function Menu() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <nav>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={open ? 'open' : ''}>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('sobre')}>Sobre mim</li>
        <li onClick={() => scrollToSection('experiencias')}>Experiências</li>
        <li onClick={() => scrollToSection('formacao')}>Formação</li>
        <li onClick={() => scrollToSection('habilidades')}>Habilidades</li>
        <li onClick={() => scrollToSection('projetos')}>Projetos</li>
      </ul>
    </nav>
  );
}

export default Menu;
