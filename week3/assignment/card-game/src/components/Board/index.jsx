import { BoardContainer } from "./styles";
import Button from "@components/Button/index.jsx";
import Card from "@components/Card/index.jsx";
import { useCard } from "@hooks";
import { cardImages } from "@img/card/index.js";

const Board = () => {
  const { level, cardArray, handleChangeLevel, handleClickReset } = useCard();
  return (
    <BoardContainer>
      <header className="board__header">
        <section className={"board__score-section"}>
          <div className="board__score">Score: 0 / 5</div>
          <Button
            className={"header__reset-btn"}
            label={"다시하기"}
            onClick={handleClickReset}
          />
        </section>
        <section className="board__level-section">
          <Button label={"Easy"} onClick={handleChangeLevel} />
          <Button label={"Normal"} onClick={handleChangeLevel} />
          <Button label={"Hard"} onClick={handleChangeLevel} />
        </section>
      </header>
      <section className="board__cards">
        {cardArray.map((num, index) => {
          return (
            <Card key={`card-${index}`} imgSrc={cardImages[num]} size={level} />
          );
        })}
      </section>
    </BoardContainer>
  );
};

export default Board;
