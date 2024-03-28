import { IIcon } from "@/@types/shared/icons.types";

const CaretUp = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "20";
  height = height ?? "14";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 10L10.3512 2.69159C9.95161 2.30976 9.31803 2.32452 8.93663 2.72454L2 10"
        stroke={stroke ?? "#F2F2F2"}
        className={className}
        strokeLinecap="round"
        strokeWidth={strokeWidth ?? "3"}
      />
    </svg>
  );
};

export default CaretUp;
