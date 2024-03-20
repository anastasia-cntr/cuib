"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  small?: boolean;
  icon?: IconType;
  outline?: boolean;
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label, onClick, disabled, small, icon: Icon, outline, bgColor, textColor
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md w-full transition flex items-center justify-center hover:opacity-70
      ${small ? 'text-sm py-3 font-regular' : 'text-lg py-3 font-semibold'}
      ${outline ? 'outline outline-2' : 'outline-none'}
      ${bgColor}
      ${textColor}`}>
      {label}
      {Icon && <Icon size={23} className="absolute left-9" />}
    </button>
  );
}

export default Button;