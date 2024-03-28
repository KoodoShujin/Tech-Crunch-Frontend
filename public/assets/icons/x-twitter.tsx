import { IIcon } from "@/@types/shared/icons.types";

const XTwitter = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "25";
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
        d="M4.02696 0C2.13589 0 0.598389 1.5375 0.598389 3.42857V20.5714C0.598389 22.4625 2.13589 24 4.02696 24H21.1698C23.0609 24 24.5984 22.4625 24.5984 20.5714V3.42857C24.5984 1.5375 23.0609 0 21.1698 0H4.02696ZM19.943 4.5L14.3823 10.8536L20.9234 19.5H15.802L11.7948 14.2554L7.20375 19.5H4.6591L10.6055 12.7018L4.33232 4.5H9.58232L13.2091 9.29464L17.3984 4.5H19.943ZM17.918 17.9786L8.81625 5.94107H7.30017L16.5037 17.9786H17.918Z"
        fill={fill ?? "#F2F2F2"}
        className={className}
      />
    </svg>
  );
};

export default XTwitter;
