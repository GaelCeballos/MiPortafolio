import './DevBackground.css';

const GLYPHS = ['</>', '{ }', '=>', ';', '( )', '#!/', '[ ]', '&&'];

export default function DevBackground() {
  return (
    <div className="dev-bg" aria-hidden="true">
      <div className="dev-bg__grid" />
      <div className="dev-bg__orb dev-bg__orb--accent" />
      <div className="dev-bg__orb dev-bg__orb--teal" />
      <div className="dev-bg__orb dev-bg__orb--amber" />
      <div className="dev-bg__scanline" />
      <div className="dev-bg__glyphs">
        {GLYPHS.map((glyph, i) => (
          <span key={glyph} className="dev-bg__glyph" data-index={i}>
            {glyph}
          </span>
        ))}
      </div>
      <div className="dev-bg__vignette" />
    </div>
  );
}
