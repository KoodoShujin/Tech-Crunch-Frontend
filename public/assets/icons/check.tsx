import { IIcon } from "@/@types/shared/icons.types";

const Check = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "34";
  height = height ?? "24";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.8955 0.703015C33.8328 1.64037 33.8328 3.16263 32.8955 4.09998L13.6985 23.297C12.7611 24.2343 11.2389 24.2343 10.3015 23.297L0.703015 13.6985C-0.234338 12.7611 -0.234338 11.2389 0.703015 10.3015C1.64037 9.36416 3.16263 9.36416 4.09998 10.3015L12.0037 18.1978L29.506 0.703015C30.4434 -0.234338 31.9656 -0.234338 32.903 0.703015H32.8955Z"
        fill={fill ?? "#F2F2F2"}
      />
    </svg>
  );
};

export default Check;
