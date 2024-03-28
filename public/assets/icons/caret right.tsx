import { IIcon } from "@/@types/shared/icons.types";

const CaretRight = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "14";
  height = height ?? "20";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 2L11.8084 9.64877C12.1902 10.0484 12.1755 10.682 11.7755 11.0634L4.5 18"
        stroke={stroke ?? "#F2F2F2"}
        className={className}
        strokeLinecap="round"
        strokeWidth={strokeWidth ?? "3"}
      />
    </svg>
  );
};

export default CaretRight;
