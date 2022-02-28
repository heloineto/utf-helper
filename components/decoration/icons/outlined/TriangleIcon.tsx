interface Props extends ComponentProps<'svg'> {
  strokeWidth?: number;
}

const TriangleIcon = ({ strokeWidth = 3.5, ...svgProps }: Props) => (
  <svg
    width="28"
    height="27"
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M22.1459 22.5H3.8541C3.48241 22.5 3.24066 22.1088 3.40689 21.7764L12.5528 3.4846C12.737 3.11607 13.263 3.11608 13.4472 3.4846L22.5931 21.7764C22.7593 22.1088 22.5176 22.5 22.1459 22.5Z"
      stroke="black"
      stroke-width={strokeWidth}
    />
    <path
      d="M22.1459 22.5H3.8541C3.48241 22.5 3.24066 22.1088 3.40689 21.7764L12.5528 3.4846C12.737 3.11607 13.263 3.11608 13.4472 3.4846L22.5931 21.7764C22.7593 22.1088 22.5176 22.5 22.1459 22.5Z"
      stroke="url(#paint0_linear_812_1339)"
      stroke-width={strokeWidth}
    />
    <defs>
      <linearGradient
        id="paint0_linear_812_1339"
        x1="2.08"
        y1="21.92"
        x2="24.2"
        y2="-0.199999"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#DA22FE" />
        <stop offset="1" stop-color="#FA05FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default TriangleIcon;
