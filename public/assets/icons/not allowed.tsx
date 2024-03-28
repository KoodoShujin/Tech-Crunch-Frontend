import { IIcon } from "@/@types/shared/icons.types";

const NotAllowed = ({
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
        d="M22.4854 22.4854L5.51462 5.51462M26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "3"}
        className={className}
      />
    </svg>
  );
};

export default NotAllowed;
