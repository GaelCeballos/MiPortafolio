import { CONTACT } from '../data/contact';
import './FloatingSocial.css';

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5c-4.69 0-8.5 3.81-8.5 8.5 0 1.56.42 3.02 1.15 4.28L3.5 20.5l4.38-1.14A8.47 8.47 0 0 0 12 20.5c4.69 0 8.5-3.81 8.5-8.5S16.69 3.5 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.6c0-.5.5-.9.9-.9h.6c.3 0 .6.2.7.5l.5 1.3a.8.8 0 0 1-.2.9l-.4.4c.5 1 1.3 1.8 2.3 2.3l.4-.4a.8.8 0 0 1 .9-.2l1.3.5c.3.1.5.4.5.7v.6c0 .5-.4.9-.9.9-3 .1-6.6-3.5-6.6-6.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FloatingSocial() {
  return (
    <div className="floating-social" aria-label="Redes sociales">
      <a
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-social__btn floating-social__btn--whatsapp"
        title="Escríbeme por WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={CONTACT.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-social__btn floating-social__btn--instagram"
        title="Sígueme en Instagram"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
