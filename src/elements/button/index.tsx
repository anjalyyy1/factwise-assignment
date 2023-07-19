import { ButtonWrapper } from "elements/button/button.styles";

type ButtonProps = {
  label: string;
  isPrimary: boolean;
};

const Button = ({ label, isPrimary }: ButtonProps) => {
  return <ButtonWrapper isPrimary={isPrimary}> {label} </ButtonWrapper>;
};

export default Button;
