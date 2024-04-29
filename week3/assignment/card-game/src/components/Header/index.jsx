import { HeaderContainer } from "./styles";
import Button from "@components/Button/index.jsx";

const Header = () => {
  return (
    <HeaderContainer>
      <div className={"header__left"}></div>
      <h1 className={"header__title"}>썬구리 카드 게임</h1>
      <div className="header__button-wrapper">
        <Button className={"header__reset-btn"} label={"Reset"} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
