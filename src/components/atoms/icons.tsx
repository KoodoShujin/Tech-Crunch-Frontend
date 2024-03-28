import { IconMap, Icons } from "@/@types/components/atoms/icons.type";
import { IIcon } from "@/@types/shared/icons.types";
import Image from "next/image";

export interface IIconProps {
  icon: Icons;
}

const Icon = ({ icon, ...props }: IIconProps & IIcon) => {
  const IconJsx = IconMap[icon];

  return <IconJsx {...props} />;
};

export default Icon;
