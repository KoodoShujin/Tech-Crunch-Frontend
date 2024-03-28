import { IIcon } from "@/@types/shared/icons.types";

const Logo = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "94";
  height = height ?? "48";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H53.3333V16H0V0Z"
        fill={fill ?? "#2727B4"}
        className={className}
      />
      <path
        d="M34.6667 16L34.6667 48H18.3333L18.3333 16L34.6667 16Z"
        fill={fill ?? "#2727B4"}
      />
      <path
        d="M69.3333 16V48H53.3333V16H69.3333Z"
        fill={fill ?? "#2727B4"}
        className={className}
      />
      <path
        d="M93.3333 48H53.3333V32L93.3333 32V48Z"
        fill={fill ?? "#2727B4"}
        className={className}
      />
      <path
        d="M93.3333 16H69.3333V4.44985e-07L93.3333 2.54313e-06V16Z"
        fill={fill ?? "#2727B4"}
        className={className}
      />
    </svg>
  );
};

export default Logo;
