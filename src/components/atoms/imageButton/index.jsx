import ArrowButton from "@/components/atoms/arrowButton";

const ImageButton = ({ className, title, text }) => {
  return (
    // Could also be possible to add hover:scale-[1.01] transition-all duration-200 for a bit more feedback when hovering
    // Aspect ratio for mobile says 19/16 but that doesnt fit the design. Ill use 4/2 which is closer to the design height and width aspect ratio
    <button
      className={`bg-black aspect-4/3 sm:aspect-3/4 lg:aspect-4/3  rounded-sm relative bg-cover bg-center cursor-pointer group ${className}`}
      style={{ backgroundImage: "url('/images/Image.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-[#141414] rounded-sm"></div>
      {/* Is it correct that the bottom is slightly more than left/right in the design? */}
      <div className="absolute left-6 right-6 bottom-8 z-10 text-left flex justify-between gap-4">
        <div className="flex flex-col gap-2">
          {/* on xs mobile screens the text could be too big*/}
          <h4 className="text-white">{title}</h4>
          <p className="text-softWhite/50">{text}</p>
        </div>
        <ArrowButton usedColor="white" />
      </div>
    </button>
  );
};

export default ImageButton;
