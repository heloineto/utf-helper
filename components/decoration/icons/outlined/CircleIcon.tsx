interface Props extends ComponentProps<'svg'> {
  strokeWidth?: number;
}

const CircleIcon = ({ strokeWidth = 4, ...svgProps }: Props) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <circle
      cx="14"
      cy="14"
      r="11.4"
      stroke="url(#paint0_linear_812_1341)"
      strokeWidth={strokeWidth}
    />
    <defs>
      <linearGradient
        id="paint0_linear_812_1341"
        x1="3.08"
        y1="24.92"
        x2="24.2"
        y2="2.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5459" />
        <stop offset="1" stopColor="#F9371C" />
      </linearGradient>
    </defs>
  </svg>
);

export default CircleIcon;
