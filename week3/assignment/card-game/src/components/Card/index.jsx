import { CardContainer } from "./styles";

const Card = ({
  imgSrc,
  size = "normal",
  onClick = () => {},
  className = "",
  ...props
}) => {
  return (
    <CardContainer
      imgSrc={imgSrc}
      className={`card ${className}`}
      size={size}
      onClick={onClick}
      {...props}
    ></CardContainer>
  );
};

export default Card;
