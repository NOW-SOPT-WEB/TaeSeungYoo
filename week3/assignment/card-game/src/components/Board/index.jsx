import { BoardContainer } from "./styles";
import Button from "@components/Button/index.jsx";
import Card from "@components/Card/index.jsx";
import { cardImages } from "@img/card/index.js";

const Board = ({ params, controller }) => {
  const { level, cardArray } = params;
  const { handleChangeLevel, handleClickCard } = controller;
  return (
    <BoardContainer>
      <header className="board__header">
        <Button label={"Easy"} onClick={handleChangeLevel} />
        <Button label={"Normal"} onClick={handleChangeLevel} />
        <Button label={"Hard"} onClick={handleChangeLevel} />
      </header>
      <section className="board__cards">
        {cardArray.map((card, index) => {
          return (
            <div
              key={`card-${index}`}
              className={
                cardArray[index].isOpen
                  ? "card__wrapper card--open"
                  : "card__wrapper card--close"
              }
            >
              {/*카드 뒷면(커버)*/}
              <Card
                className={"card__cover"}
                imgSrc={cardImages[0]}
                size={level}
                onClick={() => {
                  handleClickCard(index);
                }}
              />
              {/*카드 앞면(그림)*/}
              <Card
                className={"card__img"}
                imgSrc={cardImages[card.num]}
                size={level}
              />
            </div>
          );
        })}
      </section>
    </BoardContainer>
  );
};

export default Board;
