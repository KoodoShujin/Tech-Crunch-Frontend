import { IIcon } from "@/@types/shared/icons.types";

const Calendar = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "24";
  height = height ?? "25";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.03052 7.70775H22.6218M5.90085 2.40867V0M17.4432 2.40867V0M2.23485 2.40867H21.4175C22.0826 2.40867 22.6218 2.94787 22.6218 3.61301V22.7957C22.6218 23.4608 22.0826 24 21.4175 24H2.23485C1.56972 24 1.03052 23.4608 1.03052 22.7957V3.61301C1.03052 2.94787 1.56972 2.40867 2.23485 2.40867ZM4.18588 11.2389H7.14854V14.2015H4.18588V11.2389ZM10.275 11.2389H13.2377V14.2015H10.275V11.2389ZM16.287 11.2389H19.2497V14.2015H16.287V11.2389ZM4.29186 16.9041H7.25452V19.8667H4.29186V16.9041ZM10.3858 16.9041H13.3485V19.8667H10.3858V16.9041ZM16.3978 16.9041H19.3605V19.8667H16.3978V16.9041Z"
        stroke={stroke ?? "#F2F2F2"}
        strokeWidth={strokeWidth ?? "2"}
        className={className}
      />
    </svg>
  );
};

export default Calendar;
