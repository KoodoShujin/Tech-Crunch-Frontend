import { IIcon } from "@/@types/shared/icons.types";

const CaretDown = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "18";
  height = height ?? "13";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L8.64877 8.30841C9.04839 8.69024 9.68197 8.67548 10.0634 8.27546L17 1"
        stroke={stroke ?? "#F2F2F2"}
        className={className}
        strokeLinecap="round"
        strokeWidth={strokeWidth ?? "2"}
      />
    </svg>
  );
};

export default CaretDown;
