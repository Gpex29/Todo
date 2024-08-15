interface Props {
  width: string,
  height: string
}

const CompleteSVG = ({width, height}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='24' height='24' fill='white' />
      <path
        d='M7 13.4545L8.97619 15.3409C9.36262 15.7098 9.97072 15.7098 10.3571 15.3409L17 9'
        stroke='#008000'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='12'
        cy='12'
        r='9'
        stroke='#008000'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CompleteSVG;
