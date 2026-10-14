import Carousel from './Carousel';

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card anim-fade-up" style={{ animationDelay: `${index * 0.12}s` }}>
      <div className="project-card__media">
        <Carousel images={project.screenshots} accent={project.accent} fallbackGlyph={project.glyph} />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
