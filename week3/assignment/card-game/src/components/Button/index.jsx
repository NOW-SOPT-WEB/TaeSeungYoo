import { ButtonContainer } from "./styles";
import { css } from "@emotion/react";

const Button = ({
  label,
  variant = "primary",
  size = "medium",
  onClick = () => {},
  className = "",
  customStyle = css``,
  ...props
}) => {
  return (
    <ButtonContainer
      type={"button"}
      className={`button ${className}`}
      customStyle={customStyle}
      variant={variant}
      size={size}
      onClick={onClick}
      {...props}
    >
      {label}
    </ButtonContainer>
  );
};

export default Button;
