const KeyValueComponent = ({ src, title, description }) => {
  return (
    <div className="flex flex-col items-center font-poppins">
      <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">
        {/* rotating ring */}
        <div className="pointer-events-none absolute inset-0 rounded-full border-8 border-dotted border-[#D4AF37] transition-all delay-200 animate-spin-slow"></div>

        {/* inner image sits above the rotating ring and does NOT spin */}
        <img
          src={src}
          alt={src}
          className="relative z-10 h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
        />
      </div>
      <h1 className="py-6 text-lg font-semibold text-[#001a3b]">{title}</h1>
      <p className="max-w-prose text-center text-sm leading-relaxed text-[#001a3b]/90 sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default KeyValueComponent;
