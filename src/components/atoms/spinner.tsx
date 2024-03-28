import { Icons } from "@/@types/components/atoms/icons.type";
import Icon from "./icons";
import { IIcon } from "@/@types/shared/icons.types";

export interface ISpinnerProps {
  icon?: IIcon;
}

const Spinner = ({ icon }: ISpinnerProps) => {
  return (
    <div className="spinner">
      <span>
        <Icon icon={Icons.SPINNER} {...icon} />
      </span>
    </div>
  );
};

export default Spinner;
