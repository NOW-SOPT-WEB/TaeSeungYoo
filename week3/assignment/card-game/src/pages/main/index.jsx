import { MainContainer } from "./styles.js";
import Header from "@components/Header/index.jsx";
import Board from "@components/Board/index.jsx";

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <Board />
    </MainContainer>
  );
};

export default Main;
