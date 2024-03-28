import { IIcon } from "@/@types/shared/icons.types";

const Avatar = ({
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
      fill={fill ?? "none"}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 11.7266C16.274 11.7266 18.9282 9.32535 18.9282 6.36329C18.9282 3.40123 16.274 1 13 1C9.72597 1 7.07184 3.40123 7.07184 6.36329C7.07184 9.32535 9.72597 11.7266 13 11.7266Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
      <path
        d="M23 25C24.1046 25 25.0201 24.0956 24.7975 23.0137C24.3571 20.8729 23.2112 18.8847 21.4853 17.3232C19.2348 15.2872 16.1826 14.1434 13 14.1434C9.8174 14.1434 6.76516 15.2872 4.51472 17.3232C2.78879 18.8847 1.6429 20.8729 1.20251 23.0137C0.979946 24.0956 1.89543 25 3 25H23Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
    </svg>
  );
};

export default Avatar;
