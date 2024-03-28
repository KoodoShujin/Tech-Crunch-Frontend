import { IIcon } from "@/@types/shared/icons.types";

const Show = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "34";
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
        d="M32.9703 13.1045C32.9899 13.0575 33 13.0068 33 12.9557C33 12.9045 32.9899 12.8539 32.9703 12.8069C32.2717 11.4599 26.785 1.24982 17.114 1.00424C7.44313 0.758664 1.83269 11.2515 1.0468 12.7696C1.01614 12.824 1 12.8855 1 12.9483C1 13.011 1.01614 13.0726 1.0468 13.1269C1.90546 14.5631 7.90885 24.2299 15.4258 24.9369C23.7141 25.6811 30.4379 19.7277 32.9703 13.1045Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
      <path
        d="M16.8957 17.9938C19.6728 17.9938 21.924 15.6915 21.924 12.8515C21.924 10.0115 19.6728 7.70926 16.8957 7.70926C14.1187 7.70926 11.8675 10.0115 11.8675 12.8515C11.8675 15.6915 14.1187 17.9938 16.8957 17.9938Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
    </svg>
  );
};

export default Show;
