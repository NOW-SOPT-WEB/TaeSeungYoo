import { HeaderContainer } from "./styles";
import Button from "@components/Button/index.jsx";

const Header = ({ params, controller }) => {
  const { score, cardArray } = params;
  const { handleClickReset } = controller;
  return (
    <HeaderContainer>
      <div></div>
      <section className="header__center">
        <h1 className={"header__title"}>썬구리 카드 게임</h1>
        <div className="header__score">{`Score: ${score} / ${cardArray.length / 2}`}</div>
      </section>
      <section className="header__right">
        <Button
          className={"header__reset-btn"}
          label={"다시하기"}
          onClick={handleClickReset}
        />
      </section>
    </HeaderContainer>
  );
};

export default Header;
