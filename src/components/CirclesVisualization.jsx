import { useCountUp } from '../hooks/useCountUp';
import { ORBITS, TOOLS } from '../data/tools';
import { ICONS } from '../data/icons';
import TechIcon from './TechIcon';
import './CirclesVisualization.css';

function ToolBadge({ tool }) {
  const icon = ICONS[tool.iconId];
  const orbit = ORBITS.find((o) => o.id === tool.orbit);

  return (
    <div
      className="orbit-item__positioner"
      style={{
        transform: `translate(-50%, -50%) rotate(${tool.angle}deg) translate(${tool.radius}px) rotate(${-tool.angle}deg)`,
      }}
    >
      <div
        className={`orbit-item__counter orbit-item__counter--${orbit.direction === 'left' ? 'right' : 'left'}`}
        style={{ animationDuration: `${orbit.duration}s` }}
      >
        <div
          className={`orbit-item__entrance orbit-item__shape--${tool.shape}`}
          style={{
            width: tool.size,
            height: tool.size,
            animationDelay: `${tool.delay}s`,
            '--glow-color': icon.color,
          }}
          title={icon.label}
        >
          <TechIcon icon={icon} size={Math.round(tool.size * 0.42)} />
        </div>
      </div>
    </div>
  );
}

function OrbitRing({ orbit }) {
  const items = TOOLS.filter((tool) => tool.orbit === orbit.id);

  return (
    <div
      className={`orbit-ring orbit-ring--spin-${orbit.direction}`}
      style={{
        width: orbit.diameter,
        height: orbit.diameter,
        animationDuration: `${orbit.duration}s`,
      }}
    >
      {items.map((tool) => (
        <ToolBadge key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default function CirclesVisualization() {
  const count = useCountUp(7, { duration: 2000, delay: 1200 });
  const stackLabel = TOOLS.map((tool) => ICONS[tool.iconId].label).join(', ');

  return (
    <div className="circles-stage">
      <div className="circles" role="img" aria-label={`Stack de herramientas: ${stackLabel}`}>
        {ORBITS.map((orbit) => (
          <OrbitRing key={orbit.id} orbit={orbit} />
        ))}

        <div className="circles__center">
          <span className="circles__count">{count}+</span>
          <span className="circles__label">Proyectos</span>
        </div>
      </div>
    </div>
  );
}
