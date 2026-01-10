import ArrowRight from "@/components/icons/ArrowRight";

const ArrowButton = ({ standalone, usedColor = "black" }) => {
  const Component = standalone ? "button" : "div";

  return (
    <Component
      className={`p-4 border-2 ${
        usedColor === "black"
          ? "border-black group-hover:border-black/50 group-active:border-black/80"
          : "border-white/30 group-hover:border-white/50 group-active:border-white/80"
      } rounded-sm cursor-pointer transition-colors duration-200 w-fit`}
    >
      <ArrowRight
        className={standalone ? "inline" : ""}
        usedColor={usedColor}
      />
    </Component>
  );
};

export default ArrowButton;
