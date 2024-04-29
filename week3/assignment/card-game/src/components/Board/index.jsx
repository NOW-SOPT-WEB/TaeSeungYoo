import { BoardContainer } from "./styles";
import Button from "@components/Button/index.jsx";
import Card from "@components/Card/index.jsx";
import { useCard } from "@hooks";
import { cardImages } from "@img/card/index.js";

const Board = () => {
  const { level, cardArray, handleChangeLevel } = useCard();
  return (
    <BoardContainer>
      <header className="board__header">
        <div className="board__score">Score: 0 / 5</div>
        <div className="board__level-buttons">
          <Button label={"Easy"} onClick={handleChangeLevel} />
          <Button label={"Normal"} onClick={handleChangeLevel} />
          <Button label={"Hard"} onClick={handleChangeLevel} />
        </div>
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
