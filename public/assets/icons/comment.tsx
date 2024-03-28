import { IIcon } from "@/@types/shared/icons.types";

const Comment = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "31";
  height = height ?? "27";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.12718 5.76716H23.1697M5.12718 10.118H15.5997M5.12718 14.4688H19.3583M28.3121 20.3091H13.5064L7.20292 25L7.26156 20.3091H2.65271C2.34169 20.3091 2.0434 20.1855 1.82347 19.9656C1.60354 19.7456 1.47998 19.4474 1.47998 19.1363V2.17273C1.47998 1.86171 1.60354 1.56342 1.82347 1.34349C2.0434 1.12356 2.34169 1 2.65271 1H28.3473C28.6583 1 28.9566 1.12356 29.1766 1.34349C29.3965 1.56342 29.52 1.86171 29.52 2.17273V19.1011C29.52 19.4215 29.3928 19.7287 29.1663 19.9553C28.9397 20.1818 28.6325 20.3091 28.3121 20.3091Z"
        stroke={stroke ?? "#F2F2F2"}
        className={className}
        strokeWidth={strokeWidth ?? "2"}
      />
    </svg>
  );
};

export default Comment;
