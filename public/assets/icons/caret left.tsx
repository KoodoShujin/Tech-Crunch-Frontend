import { IIcon } from "@/@types/shared/icons.types";

const CaretLeft = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width;
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
        d="M10 2L2.69159 9.64877C2.30976 10.0484 2.32452 10.682 2.72454 11.0634L10 18"
        stroke={stroke ?? "#F2F2F2"}
        className={className}
        className={className}
        strokeWidth={strokeWidth ?? "3"}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CaretLeft;
