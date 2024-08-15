interface Props {
  width: string,
  height: string
}

const CircleSVG = ({width, height}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='12'
        cy='12'
        r='9'
        stroke='#000000'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CircleSVG;