import {
  ButtonStates,
  ButtonVariants,
} from "@/@types/components/atoms/button.types";
import { clsx } from "clsx";
import { ReactNode } from "react";
import Spinner from "./spinner";

export interface IButtonProps {
  variant?: ButtonVariants;
  state?: ButtonStates;
  children: string | ReactNode;
  onClick?: FuncNoArg;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  className = "",
  state = ButtonStates.DEFAULT,
  variant = ButtonVariants.DEFAULT,
}: IButtonProps) => {
  const btnClass = clsx("button", variant, state, className);

  return (
    <button className={btnClass} onClick={onClick} disabled={disabled}>
      {!loading ? (
        <>{children}</>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </button>
  );
};

export default Button;
