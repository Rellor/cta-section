import ArrowRight from "@/components/icons/ArrowRight";

const BaseButton = () => {
  return (
    <button className="text-orangeRed hover:text-orangeRedHover group active:text-orangeRedActive disabled:text-black/30 text-normal w-fit cursor-pointer transoition-colors duration-200">
      Optional button <ArrowRight className="inline" usedColor="orangeRed" />
    </button>
  );
};

export default BaseButton;
