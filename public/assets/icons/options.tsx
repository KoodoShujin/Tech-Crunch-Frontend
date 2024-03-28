import { IIcon } from "@/@types/shared/icons.types";

const Options = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "18";
  height = height ?? "4";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 4"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.59033 3.6875C3.52231 3.6875 4.27783 2.93198 4.27783 2C4.27783 1.06802 3.52231 0.3125 2.59033 0.3125C1.65835 0.3125 0.902832 1.06802 0.902832 2C0.902832 2.93198 1.65835 3.6875 2.59033 3.6875Z"
        fill={fill ?? "#D9D9D9"}
        className={className}
      />
      <path
        d="M9.39283 3.6875C10.3248 3.6875 11.0803 2.93198 11.0803 2C11.0803 1.06802 10.3248 0.3125 9.39283 0.3125C8.46085 0.3125 7.70533 1.06802 7.70533 2C7.70533 2.93198 8.46085 3.6875 9.39283 3.6875Z"
        fill={fill ?? "#D9D9D9"}
        className={className}
      />
      <path
        d="M16.1953 3.6875C17.1273 3.6875 17.8828 2.93198 17.8828 2C17.8828 1.06802 17.1273 0.3125 16.1953 0.3125C15.2634 0.3125 14.5078 1.06802 14.5078 2C14.5078 2.93198 15.2634 3.6875 16.1953 3.6875Z"
        fill={fill ?? "#D9D9D9"}
        className={className}
      />
    </svg>
  );
};

export default Options;
