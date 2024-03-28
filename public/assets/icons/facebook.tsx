import { IIcon } from "@/@types/shared/icons.types";

const Facebook = ({
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
        d="M4.0272 0C2.13613 0 0.598633 1.5375 0.598633 3.42857V20.5714C0.598633 22.4625 2.13613 24 4.0272 24H9.28792V16.1893H6.45935V12H9.28792V10.1946C9.28792 5.52857 11.3986 3.36429 15.9843 3.36429C16.8522 3.36429 18.3522 3.53571 18.9683 3.70714V7.5C18.6468 7.46786 18.0843 7.44643 17.3826 7.44643C15.1326 7.44643 14.2647 8.29821 14.2647 10.5107V12H18.7433L17.9718 16.1893H14.2593V24H21.1701C23.0611 24 24.5986 22.4625 24.5986 20.5714V3.42857C24.5986 1.5375 23.0611 0 21.1701 0H4.0272Z"
        fill={fill ?? "#F2F2F2"}
        className={className}
      />
    </svg>
  );
};

export default Facebook;
