export default function ArrowRight({
  className,
  usedColor = "orangeRed",
  ...props
}) {
  const arrowColor = {
    orangeRed: {
      default: "stroke-orangeRed",
      hover: "group-hover:stroke-orangeRedHover",
      active: "active:stroke-orangeRedActive",
      disabled: "disabled:stroke-black/30",
    },
    black: {
      default: "stroke-black",
      hover: "",
      active: "",
      disabled: "disabled:stroke-black/30",
    },
  };

  const colors = arrowColor[usedColor] || arrowColor.orangeRed;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        className={`${colors.default} ${colors.hover} ${colors.active} ${colors.disabled} transition-colors duration-200`}
        d="M12 6L18 12L12 18"
        strokeWidth="1.5"
        strokeMiterlimit="4.62023"
      />
      <path
        d="M6 12L18 12"
        className={`${colors.default} ${colors.hover} ${colors.active} ${colors.disabled} transition-colors duration-200`}
        strokeWidth="1.5"
        strokeMiterlimit="4.62023"
        strokeLinejoin="round"
      />
    </svg>
  );
}
