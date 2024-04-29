import { BoardContainer } from "./styles";
import Button from "@components/Button/index.jsx";
import Card from "@components/Card/index.jsx";

const Board = () => {
  return (
    <BoardContainer>
      <header className="board__header">
        <div className="board__score">Score: 0 / 5</div>
        <div className="board__level-buttons">
          <Button label={"Easy"} />
          <Button label={"Normal"} />
          <Button label={"Hard"} />
        </div>
      </header>
      <section className="board__cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </BoardContainer>
  );
};

export default Board;
