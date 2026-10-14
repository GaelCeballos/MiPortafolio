import { useTypewriter } from '../hooks/useTypewriter';
import './TypewriterHeading.css';

export default function TypewriterHeading({
  text,
  splitIndex = text.length,
  speed = 35,
  startDelay = 400,
  as: Tag = 'h1',
  className = '',
}) {
  const { displayed, done } = useTypewriter(text, { speed, startDelay });
  const bright = displayed.slice(0, splitIndex);
  const dim = displayed.slice(splitIndex);

  return (
    <Tag className={`typewriter ${className}`} aria-label={text}>
      <span aria-hidden="true">
        <span className="typewriter__bright">{bright}</span>
        <span className="typewriter__dim">{dim}</span>
        <span className="typewriter__cursor" />
      </span>
    </Tag>
  );
}
