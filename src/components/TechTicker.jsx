import { TECHNOLOGIES } from '../data/tech';
import './TechTicker.css';

function TickerTrack({ ariaHidden }) {
  return (
    <div className="ticker__track" aria-hidden={ariaHidden}>
      {TECHNOLOGIES.map((tech) => (
        <span key={tech.id} className="ticker__chip">
          {tech.label}
        </span>
      ))}
    </div>
  );
}

export default function TechTicker() {
  return (
    <section id="stack" className="ticker anim-fade-up anim-delay-ticker" aria-label="Tecnologías con las que trabajo">
      <div className="ticker__viewport">
        <div className="ticker__rail">
          <TickerTrack />
          <TickerTrack ariaHidden="true" />
        </div>
      </div>
    </section>
  );
}
