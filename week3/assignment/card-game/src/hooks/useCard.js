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
    initCardArray(label);
  };

  const getRandomCardArray = (num) => {
    let tempArray = [];
    for (let i = 1; i <= num; i++) {
      tempArray.push(i, i);
    }
    tempArray.sort(() => Math.random() - 0.5);

    return tempArray;
  };

  const initCardArray = (label) => {
    let cardNum = 7;
    if (label === "easy") {
      cardNum = 5;
    } else if (label === "hard") {
      cardNum = 9;
    }
    setCardArray(getRandomCardArray(cardNum));
  };

  useEffect(() => {
    setCardArray(getRandomCardArray(7));
  }, []);

  return { level, cardArray, handleChangeLevel, handleClickReset };
};

export default useCard;
