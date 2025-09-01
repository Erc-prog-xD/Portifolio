import './Content.css';   
import About from './about/About';
import Experiences from './experiences/Experiences';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Training from './training/Training';
function Content() {
  return (
    <div>
      <About />
      <Experiences/>
      <Training/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default Content;
