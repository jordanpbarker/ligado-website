export default function Badge({ children, dark = false, className = '' }) {
  return (
    <span className={`inline-block text-xs font-medium tracking-wider uppercase ${
      dark ? 'text-accent' : 'text-navy-700'
    } ${className}`}>
      {children}
    </span>
  );
}
