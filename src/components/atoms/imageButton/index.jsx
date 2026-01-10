import ArrowButton from "@/components/atoms/arrowButton";

const ImageButton = ({ className }) => {
  return (
    // Could also be possible to add hover:scale-[1.01] transition-all duration-200 for a bit more feedback when hovering
    <button
      className={`bg-black aspect-video sm:aspect-3/4 lg:aspect-4/3  rounded-sm relative bg-cover bg-center cursor-pointer group ${className}`}
      style={{ backgroundImage: "url('/images/image.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-[#141414] rounded-sm"></div>
      {/* Is it correct that the bottom is slightly more than left/right in the design? */}
      <div className="absolute left-6 right-6 bottom-8 z-10 text-left flex justify-between">
        <div>
          <h4 className="text-white">Title</h4>
          <p className="text-softWhite/50">
            Supporting text about the call-to-action goes here.
          </p>
        </div>
        <ArrowButton usedColor="white" />
      </div>
    </button>
  );
};

export default ImageButton;
