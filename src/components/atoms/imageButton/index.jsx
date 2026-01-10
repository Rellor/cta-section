const ImageButton = ({ className }) => {
  return (
    <button
      className={`bg-black aspect-4/3 rounded-sm relative bg-cover bg-center cursor-pointer ${className}`}
      style={{ backgroundImage: "url('/images/image.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-[#141414] rounded-sm"></div>
      {/* Is it correct that the bottom is slightly more than left/right in the design? */}
      <div className="absolute left-6 bottom-8 z-10 text-left">
        <h4 className="text-white">Title</h4>
        <p className="text-softWhite/50">
          Supporting text about the call-to-action goes here.
        </p>
      </div>
    </button>
  );
};

export default ImageButton;
