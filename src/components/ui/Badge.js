export default function Badge({ children, dark = false, className = '' }) {
  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase ${
      dark ? 'bg-accent/10 text-accent' : 'bg-navy-950/5 text-navy-900'
    } ${className}`}>
      {children}
    </span>
  );
}
