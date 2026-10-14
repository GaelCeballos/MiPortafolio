import { CONTACT } from '../data/contact';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contacto" className="footer anim-fade-up">
      <div className="footer__card">
        <h2 className="footer__title">¿Construimos algo juntos?</h2>
        <p className="footer__text">
          Cuéntame qué necesitas —app móvil, panel web o backend— y te digo cómo lo resolvemos.
        </p>

        <div className="btn-border-wrap footer__cta-wrap">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="pill-btn pill-btn--lg pill-btn--slide-right"
          >
            <span>Escríbeme por WhatsApp</span>
          </a>
        </div>

        <div className="footer__links">
          <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="underline-link">
            Instagram
          </a>
          <a href={CONTACT.githubUrl} target="_blank" rel="noreferrer" className="underline-link">
            GitHub
          </a>
          <a href={`mailto:${CONTACT.email}`} className="underline-link">
            {CONTACT.email}
          </a>
        </div>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} {CONTACT.name} · {CONTACT.role}
      </p>
    </footer>
  );
}
