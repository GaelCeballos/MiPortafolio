import TypewriterHeading from './TypewriterHeading';
import CirclesVisualization from './CirclesVisualization';
import './Hero.css';

const HEADLINE = 'Construyo software real: apps móviles, APIs y paneles web listos para producción.';
const SPLIT_INDEX = 25; // "Construyo software real:" en tono brillante, el resto en tono atenuado

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M6 3.5L12 9L6 14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__left">
        <p className="hero__eyebrow anim-fade-up">Full-Stack Developer</p>

        <TypewriterHeading text={HEADLINE} splitIndex={SPLIT_INDEX} speed={35} startDelay={400} />

        <p className="hero__subtext anim-fade-up anim-delay-subtext">
          Diseño y desarrollo productos de punta a punta: desde la interfaz hasta la base de
          datos, para clientes que necesitan software que funcione desde el primer día.
        </p>

        <div className="hero__cta-row anim-fade-up anim-delay-cta">
          <div className="btn-border-wrap hero__cta-wrap">
            <a href="#proyectos" className="pill-btn pill-btn--lg pill-btn--slide-right">
              <span>Ver Proyectos</span>
              <ChevronRightIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="hero__right anim-scale-in">
        <CirclesVisualization />
      </div>
    </section>
  );
}
