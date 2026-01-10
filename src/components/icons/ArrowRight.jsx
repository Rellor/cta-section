export default function ArrowRight({
  className,
  usedColor = "#BF564D",
  ...props
}) {
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
        d="M12 6L18 12L12 18"
        stroke={usedColor}
        strokeWidth="1.5"
        strokeMiterlimit="4.62023"
      />
      <path
        d="M6 12L18 12"
        stroke={usedColor}
        strokeWidth="1.5"
        strokeMiterlimit="4.62023"
        strokeLinejoin="round"
      />
    </svg>
  );
}
