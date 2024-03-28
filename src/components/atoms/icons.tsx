import { IconMap, Icons } from "@/@types/components/atoms/icons.type";
import { IIcon } from "@/@types/shared/icons.types";
import Image from "next/image";

interface IIconProp {
  icon: Icons;
}

const Icon = ({ icon, ...props }: IIconProp & IIcon) => {
  const IconJsx = IconMap[icon];

  return <IconJsx {...props} />;
};

export default Icon;
