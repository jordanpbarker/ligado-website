import Image from 'next/image';

export default function AlexAvatar({ size = 56, className = '' }) {
  return (
    <div
      className={`rounded-full overflow-hidden bg-navy-950 flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/alex.png"
        alt="Alex - AI Receptionist"
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
