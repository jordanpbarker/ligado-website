const spacingMap = {
  tight: 'py-12 lg:py-16',
  normal: 'py-16 lg:py-24',
  breathing: 'py-20 lg:py-32',
};

export default function SectionContainer({ children, dark = false, className = '', id, spacing = 'normal' }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${dark ? 'bg-navy-950 text-white' : 'bg-white text-navy-950'} ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${spacingMap[spacing]}`}>
        {children}
      </div>
    </section>
  );
}
