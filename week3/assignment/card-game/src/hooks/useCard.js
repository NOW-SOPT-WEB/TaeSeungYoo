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
      tempArray.push(i, i);
    }
    tempArray.sort(() => Math.random() - 0.5);
    return tempArray;
  };

  useEffect(() => {
    setCardArray(getRandomCardArray("normal"));
  }, []);

  return { level, cardArray, handleChangeLevel, handleClickReset };
};

export default useCard;
