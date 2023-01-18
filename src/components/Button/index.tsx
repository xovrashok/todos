import React from "react";
import { Button } from "./styles";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: string;
}
const Buttons = ({ onClick, children, className }: ButtonProps) => {
  return <Button onClick={onClick} className={className}>{children}</Button>;
};

export default Buttons;
