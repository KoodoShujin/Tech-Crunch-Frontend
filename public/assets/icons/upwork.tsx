import { IIcon } from "@/@types/shared/icons.types";

const UpWork = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  className,
}: IIcon) => {
  width = width ?? "24";
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
        d="M3.42857 0C1.5375 0 0 1.5375 0 3.42857V20.5714C0 22.4625 1.5375 24 3.42857 24H20.5714C22.4625 24 24 22.4625 24 20.5714V3.42857C24 1.5375 22.4625 0 20.5714 0H3.42857ZM14.5071 12.9804C14.7857 13.4304 15.7714 14.5821 17.2661 14.5821C18.6161 14.5821 19.6714 13.5 19.6714 11.9196C19.6714 10.3393 18.6321 9.25714 17.2661 9.25714C15.9 9.25714 14.8607 10.1518 14.5071 12.9804ZM13.0768 10.7411C13.4679 9.10714 14.8286 7.52143 17.2661 7.52143C19.6821 7.52143 21.6 9.40714 21.6 11.925C21.6 14.4429 19.6768 16.3125 17.2661 16.3125C17.2339 16.3125 17.2071 16.3125 17.175 16.3125C17.1482 16.3125 17.1161 16.3125 17.0893 16.3125H17.0839C16.3071 16.2857 15.5464 16.0554 14.8929 15.6375C14.6411 15.4875 14.4054 15.3161 14.175 15.1286L13.4893 19.3286H11.5125L12.5518 13.4036C11.4375 11.8446 10.8589 10.0607 10.6125 9.13393V11.9464C10.6125 14.5179 8.97857 16.3125 6.6375 16.3125C5.45893 16.3125 4.44107 15.8839 3.70179 15.0643C2.98393 14.2714 2.5875 13.1625 2.5875 11.9411V7.75714H4.52679L4.51071 11.9464C4.51071 13.4679 5.2875 14.5875 6.64286 14.5875C7.99821 14.5875 8.68929 13.4679 8.68929 11.9464V7.75714H12.0536C12.3107 8.79107 12.6375 9.90536 13.0821 10.7357L13.0768 10.7411Z"
        fill={fill ?? "#F2F2F2"}
        className={className}
      />
    </svg>
  );
};

export default UpWork;
