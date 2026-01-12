import ArrowRight from "@/components/icons/ArrowRight";

const BaseButton = (props) => {
  const colorScheme = props.colorScheme || "orangeRed";

  const usedStyle =
    colorScheme === "orangeRed"
      ? "text-orangeRed hover:text-orangeRedHover active:text-orangeRedFocus"
      : "";

  return (
    <button
      className={`group ${usedStyle} disabled:text-black/30 text-normal w-fit cursor-pointer transoition-colors duration-200 `}
    >
      {props.text} <ArrowRight className="inline" usedColor={colorScheme} />
    </button>
  );
};

export default BaseButton;
