import { useEffect, useState } from "react";

const useCard = () => {
  const [level, setLevel] = useState("normal"); // easy, normal, hard
  const [cardArray, setCardArray] = useState([]);

  const handleClickReset = () => {
    setCardArray(getRandomCardArray(level));
  };

  const handleChangeLevel = (event) => {
    const label = event.target.textContent.toLowerCase();
    if (label === level) return;

    setLevel(label);
    setCardArray(getRandomCardArray(label));
  };

  const getRandomCardArray = (label) => {
    let tempArray = [];
    let cardNum = 7;
    if (label === "easy") {
      cardNum = 5;
    } else if (label === "hard") {
      cardNum = 9;
    }
    for (let i = 1; i <= cardNum; i++) {
      tempArray.push({ num: i, isOpen: false }, { num: i, isOpen: false });
    }
    tempArray.sort(() => Math.random() - 0.5);
    return tempArray;
  };

  const handleClickCard = (index) => {
    const newCardArray = cardArray.map((card, i) => {
      if (i === index) {
        return { ...card, isOpen: !card.isOpen }; // 클릭된 카드의 isOpen 값을 반전
      }
      return card;
    });
    setCardArray(newCardArray);
  };

  useEffect(() => {
    setCardArray(getRandomCardArray("normal"));
  }, []);

  return {
    level,
    cardArray,
    handleChangeLevel,
    handleClickReset,
    handleClickCard,
  };
};

export default useCard;
