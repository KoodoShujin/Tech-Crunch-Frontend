import { IIcon } from "@/@types/shared/icons.types";

const Bell = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "23";
  height = height ?? "26";
  return (
    <svg
      width={width}
      height={height}
      fill={fill ?? "none"}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3138 3.5868V2.91198C13.3138 2.40489 13.1123 1.91857 12.7538 1.56001C12.3952 1.20144 11.9089 1 11.4018 1C10.8947 1 10.4084 1.20144 10.0498 1.56001C9.69124 1.91857 9.4898 2.40489 9.4898 2.91198V3.52812M13.3578 22.6626C13.3578 23.2825 13.1115 23.877 12.6732 24.3154C12.2348 24.7537 11.6403 25 11.0204 25C10.4004 25 9.80591 24.7537 9.36756 24.3154C8.92921 23.877 8.68295 23.2825 8.68295 22.6626M1.62183 22.6626V20.1883C1.62183 20.1883 4.09126 20.066 4.09126 17.7139V9.88998C4.09126 9.88998 4.06681 3.40098 11.0741 3.40098C17.2697 3.40098 18.7367 7.00978 18.7367 9.65526V18.154C18.7367 18.154 18.5558 20.2078 21.1817 20.2078V22.6528L1.62183 22.6626Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
    </svg>
  );
};

export default Bell;
