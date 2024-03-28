import { IIcon } from "@/@types/shared/icons.types";

const Search = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "28";
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
        d="M17.5312 17.2674L26 26M20.5127 10.8006C20.5127 15.6611 16.3685 19.6013 11.2563 19.6013C6.1442 19.6013 2 15.6611 2 10.8006C2 5.94018 6.1442 2 11.2563 2C16.3685 2 20.5127 5.94018 20.5127 10.8006Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "3"}
        className={className}
      />
    </svg>
  );
};

export default Search;
