export default function SectionContainer({ children, dark = false, className = '', id }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${dark ? 'bg-navy-950 text-white' : 'bg-white text-navy-950'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {children}
      </div>
    </section>
  );
}
