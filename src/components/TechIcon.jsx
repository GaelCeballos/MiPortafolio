export default function TechIcon({ icon, size = 22 }) {
  if (!icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill={icon.color}
      role="img"
      aria-label={icon.label}
    >
      <path d={icon.path} />
    </svg>
  );
}
