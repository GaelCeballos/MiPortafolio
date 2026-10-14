import { useState } from 'react';
import './Carousel.css';

function ArrowIcon({ direction }) {
  const d = direction === 'left' ? 'M11 4L5 10L11 16' : 'M9 4L15 10L9 16';
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Carousel({ images, accent, fallbackGlyph }) {
  const [index, setIndex] = useState(0);
  const [broken, setBroken] = useState(() => new Set());
  const count = images.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);
  const prev = (e) => {
    e.stopPropagation();
    goTo(index - 1);
  };
  const next = (e) => {
    e.stopPropagation();
    goTo(index + 1);
  };

  const current = images[index];
  const isBroken = broken.has(current.src);

  function handleError() {
    setBroken((prevSet) => new Set(prevSet).add(current.src));
  }

  return (
    <div className="carousel" style={{ '--project-accent': accent }}>
      <div className="carousel__viewport">
        {isBroken ? (
          <div className="carousel__fallback">
            <span className="carousel__glyph">{fallbackGlyph}</span>
            <span className="carousel__fallback-text">Captura pendiente</span>
          </div>
        ) : (
          <>
            <img className="carousel__backdrop" src={current.src} alt="" aria-hidden="true" />
            <img
              key={current.src}
              className="carousel__image"
              src={current.src}
              alt={current.alt}
              loading="lazy"
              onError={handleError}
            />
          </>
        )}

        {count > 1 && (
          <>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--prev"
              onClick={prev}
              aria-label="Captura anterior"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--next"
              onClick={next}
              aria-label="Siguiente captura"
            >
              <ArrowIcon direction="right" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Paginación de capturas">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir a la captura ${i + 1}`}
              className={`carousel__dot ${i === index ? 'carousel__dot--active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                goTo(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
