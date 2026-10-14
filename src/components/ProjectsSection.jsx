import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="projects">
      <div className="projects__header anim-fade-up">
        <p className="projects__eyebrow">Trabajo reciente</p>
        <h2 className="projects__title">Proyectos Destacados</h2>
        <p className="projects__subtitle">
          Software a medida construido de punta a punta: móvil, web y backend, para negocios e
          instituciones reales.
        </p>
      </div>

      <div className="projects__grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
