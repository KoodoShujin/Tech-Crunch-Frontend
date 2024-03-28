import { IIcon } from "@/@types/shared/icons.types";

const Send = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "35";
  height = height ?? "34";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1306 19.4418L22.4291 32.6731C22.4969 32.7839 22.595 32.8731 22.7117 32.9303C22.8284 32.9874 22.959 33.0102 23.0882 32.9958C23.2174 32.9815 23.3399 32.9306 23.4412 32.8493C23.5425 32.7679 23.6186 32.6594 23.6604 32.5364L33.8796 1.90481C33.9211 1.78384 33.9277 1.65368 33.8988 1.52911C33.8699 1.40455 33.8066 1.29059 33.7162 1.20017C33.6257 1.10976 33.5116 1.04652 33.3869 1.01765C33.2623 0.988779 33.132 0.99543 33.0109 1.03685L2.36682 11.2474C2.24374 11.2892 2.13512 11.3651 2.05368 11.4664C1.97225 11.5676 1.92137 11.6899 1.90702 11.819C1.89266 11.9481 1.91542 12.0786 1.97262 12.1952C2.02983 12.3119 2.11912 12.4098 2.23002 12.4776L15.1306 19.4418ZM15.1306 19.4418L33.7291 1.22137"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Send;
