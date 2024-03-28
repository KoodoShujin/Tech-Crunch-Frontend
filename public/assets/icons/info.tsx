import { IIcon } from "@/@types/shared/icons.types";

const Info = ({
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
        d="M13.0346 7.82392V7.49237M13.0347 17.1072V10.9563H10.9217M9.02145 17.8297H17.0429M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Info;
