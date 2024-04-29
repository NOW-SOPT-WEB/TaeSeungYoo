import { CardContainer } from "./styles";
import cardImg from "@img/card/card1.png";

const Card = ({
  img = cardImg,
  size = "hard",
  onClick = () => {},
  className = "",
  ...props
}) => {
  return (
    <CardContainer
      imgSrc={img}
      className={`card ${className}`}
      size={size}
      onClick={onClick}
      {...props}
    ></CardContainer>
  );
};

export default Card;
