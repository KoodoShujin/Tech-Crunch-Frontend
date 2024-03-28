import { IIcon } from "@/@types/shared/icons.types";

const Image = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "27";
  height = height ?? "26";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.04004 18.2239L7.09125 13.0972L11.8345 17.3992L18.9573 8.53775L24.998 17.3992M2.35849 1H23.7216C24.4497 1 25.04 1.59029 25.04 2.31845V23.6815C25.04 24.4097 24.4497 25 23.7216 25H2.35849C1.63033 25 1.04004 24.4097 1.04004 23.6815V2.31845C1.04004 1.59029 1.63033 1 2.35849 1ZM8.67234 6.36835C8.67234 7.50846 7.7481 8.4327 6.608 8.4327C5.46789 8.4327 4.54365 7.50846 4.54365 6.36835C4.54365 5.22824 5.46789 4.30401 6.608 4.30401C7.7481 4.30401 8.67234 5.22824 8.67234 6.36835Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
    </svg>
  );
};

export default Image;
