import { IIcon } from "@/@types/shared/icons.types";

const Cancel = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "27";
  height = height ?? "28";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.42407 2L25.1584 26M25.4241 2L1.68974 26"
        stroke={stroke ?? "#F2F2F2"}
        className={className}
        strokeWidth={strokeWidth ?? "4"}
      />
    </svg>
  );
};

export default Cancel;
