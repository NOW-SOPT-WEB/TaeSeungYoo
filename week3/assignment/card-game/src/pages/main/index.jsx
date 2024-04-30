import { MainContainer } from "./styles.js";
import Header from "@components/Header/index.jsx";
import Board from "@components/Board/index.jsx";
import { useCard } from "@hooks";

const Main = () => {
  const {
    level,
    cardArray,
    score,
    handleChangeLevel,
    handleClickReset,
    handleClickCard,
  } = useCard();
  return (
    <MainContainer>
      <Header
        params={{
          cardArray,
          score,
        }}
        controller={{ handleClickReset }}
      />
      <Board
        params={{ level, cardArray }}
        controller={{ handleChangeLevel, handleClickCard }}
      />
    </MainContainer>
  );
};

export default Main;
