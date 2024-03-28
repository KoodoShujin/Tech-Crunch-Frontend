import { IIcon } from "@/@types/shared/icons.types";

const Clear = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "26";
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
        d="M25 1L1 25M23.7884 13C23.7884 19.2483 18.8609 24.3136 12.7824 24.3136C6.70401 24.3136 1.77646 19.2483 1.77646 13C1.77646 6.75169 6.70401 1.68642 12.7824 1.68642C18.8609 1.68642 23.7884 6.75169 23.7884 13Z"
        stroke={stroke ?? "#F2F2F2"}
        className={className}
        strokeLinecap="round"
        strokeWidth={strokeWidth ?? "2"}
      />
    </svg>
  );
};

export default Clear;
