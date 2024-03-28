import { IIcon } from "@/@types/shared/icons.types";

const Lock = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "22";
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
        d="M10.6491 20.1656V22.7325M1.7362 9.80982H19.562C19.9686 9.80982 20.2982 10.1394 20.2982 10.546V24.2638C20.2982 24.6704 19.9686 25 19.562 25H1.7362C1.32961 25 1 24.6704 1 24.2638V10.546C1 10.1394 1.32961 9.80982 1.7362 9.80982ZM10.6491 1C12.1187 1 13.5281 1.58379 14.5672 2.62295C15.6064 3.66211 16.1902 5.07151 16.1902 6.5411V9.80982H5.10797V6.5411C5.10797 5.07151 5.69177 3.66211 6.73093 2.62295C7.77009 1.58379 9.17949 1 10.6491 1ZM12.4945 18.3153C12.4945 19.3345 11.6683 20.1607 10.6491 20.1607C9.62989 20.1607 8.80368 19.3345 8.80368 18.3153C8.80368 17.2962 9.62989 16.4699 10.6491 16.4699C11.6683 16.4699 12.4945 17.2962 12.4945 18.3153Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
    </svg>
  );
};

export default Lock;
