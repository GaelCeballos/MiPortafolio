import { CONTACT } from '../data/contact';
import './Header.css';

const NAV_LINKS = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  return (
    <header className="header anim-fade-down">
      <div className="header__inner">
        <div className="header__left">
          <a href="#inicio" className="header__logo" aria-label="Ir al inicio">
            <span className="header__mark">GC</span>
            <span className="header__name">Gael Ceballos Nava</span>
          </a>
          <nav className="header__nav" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="header__nav-link underline-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="header__right">
          <a
            href={CONTACT.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="header__login underline-link"
          >
            Mi código
          </a>
          <div className="btn-border-wrap">
            <a href="#contacto" className="pill-btn pill-btn--slide-left">
              <span>Hablemos</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
