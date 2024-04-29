import { BoardContainer } from "./styles";
import Button from "@components/Button/index.jsx";
import Card from "@components/Card/index.jsx";
import { useCard } from "@hooks";
import { cardImages } from "@img/card/index.js";

const Board = () => {
  const {
    level,
    cardArray,
    score,
    handleChangeLevel,
    handleClickReset,
    handleClickCard,
  } = useCard();
  return (
    <BoardContainer>
      <header className="board__header">
        <section className={"board__score-section"}>
          <div className="board__score">{`Score: ${score} / ${cardArray.length / 2}`}</div>
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
              <Card
                className={"card__cover"}
                imgSrc={cardImages[0]}
                size={level}
                onClick={() => {
                  handleClickCard(index);
                }}
              />
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
