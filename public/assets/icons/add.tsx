import { IIcon } from "@/@types/shared/icons.types";

const Add = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "25";
  height = height ?? "24";
  return (
    <svg
      width={width}
      height={height}
      fill={fill ?? "none"}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1816 0V24M0.181641 12H24.1816"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "4"}
        className={className}
        className={className}
      />
    </svg>
  );
};

export default Add;
