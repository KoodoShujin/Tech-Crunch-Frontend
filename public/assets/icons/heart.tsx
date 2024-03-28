import { IIcon } from "@/@types/shared/icons.types";

const Heart = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "27";
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
        d="M1.61648 9.25099C0.902095 5.02269 3.54221 1.36 7.65769 1.01405C11.2814 0.712033 13.0777 5.36864 13.4401 6.25823C13.4441 6.27315 13.4526 6.28627 13.4643 6.29562C13.4759 6.30496 13.4902 6.31001 13.5048 6.31001C13.5194 6.31001 13.5336 6.30496 13.5453 6.29562C13.557 6.28627 13.5655 6.27315 13.5695 6.25823C15.2519 1.3655 18.3165 1.15683 19.3933 1.04151C22.2922 0.712033 26.1799 3.08976 25.3983 8.63047C24.2801 16.3183 13.4297 25 13.4297 25C13.4297 25 3.02972 17.5154 1.61648 9.25099Z"
        stroke={stroke ?? "#F2F2F2"}
        className={className}
        strokeWidth={strokeWidth ?? "2"}
      />
    </svg>
  );
};

export default Heart;
