import { MainContainer } from "./styles.js";
import Header from "@components/Header/index.jsx";
import Board from "@components/Board/index.jsx";
import Modal from "@components/modal/index.jsx";
import { useCard } from "@hooks";
import { useRef } from "react";

const Main = () => {
  const modalRef = useRef();
  const {
    level,
    cardArray,
    score,
    handleChangeLevel,
    handleClickReset,
    handleClickCard,
  } = useCard({ modalRef });
  return (
    <MainContainer>
      <Modal modalRef={modalRef} controller={{ handleClickReset }} />
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
