import { IIcon } from "@/@types/shared/icons.types";

const Mail = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "30";
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
        d="M1.71679 1L15.2225 12.7933L27.6278 1.38649M2.64008 1H26.6884C27.4295 1 28.0304 1.60083 28.0304 2.34198V23.658C28.0304 24.3992 27.4295 25 26.6884 25H2.64008C1.89892 25 1.2981 24.3992 1.2981 23.658V2.34198C1.2981 1.60083 1.89892 1 2.64008 1Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
    </svg>
  );
};

export default Mail;
