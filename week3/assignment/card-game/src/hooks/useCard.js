import { useEffect, useState } from "react";

const useCard = ({ modalRef }) => {
  const [level, setLevel] = useState("normal"); // easy, normal, hard
  const [cardArray, setCardArray] = useState([]); // {num, isOpen}
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [score, setScore] = useState(0);

  const [checkingCard, setCheckingCard] = useState(false);

  const handleClickReset = () => {
    setCardArray(getRandomCardArray(level));
    setFirstCard({});
    setSecondCard({});
    setScore(0);
  };

  const handleChangeLevel = (event) => {
    const label = event.target.textContent.toLowerCase();
    if (label === level) return;

    setLevel(label);
    setScore(0);
    setFirstCard({});
    setSecondCard({});
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
    const numbers = new Set();

    while (numbers.size < cardNum) {
      numbers.add(Math.floor(Math.random() * 16) + 1);
    }
    numbers.forEach((num) =>
      tempArray.push({ num, isOpen: false }, { num, isOpen: false }),
    );
    tempArray.sort(() => Math.random() - 0.5);
    return tempArray;
  };

  const handleClickCard = (index) => {
    const { num, isOpen } = cardArray[index];
    if (isOpen || checkingCard) return; // 뒤집은 카드를 클릭으로 다시 뒤집는 경우는 없음

    const newCardArray = cardArray.map((card, i) => {
      if (i === index) {
        return { ...card, isOpen: !card.isOpen };
      }
      return card;
    });
    setCardArray(newCardArray);

    if (Object.keys(firstCard).length === 0) {
      setFirstCard({ index, num });
    } else {
      setCheckingCard(true);
      setSecondCard({ index, num });
    }
  };

  useEffect(() => {
    setCardArray(getRandomCardArray("normal"));
  }, []);

  useEffect(() => {
    if (checkingCard) {
      // 맞음
      if (firstCard.num === secondCard.num) {
        setScore((prevState) => prevState + 1);
        setFirstCard({});
        setSecondCard({});
        setCheckingCard(false);
        // 틀림
      } else {
        setTimeout(() => {
          const newCardArray = cardArray.map((card, i) => {
            if (i === firstCard.index || i === secondCard.index) {
              return { ...card, isOpen: false };
            }
            return card;
          });
          setCardArray(newCardArray);
          setFirstCard({});
          setSecondCard({});
          setCheckingCard(false);
        }, 1000);
      }
    }
  }, [
    cardArray,
    checkingCard,
    firstCard.index,
    firstCard.num,
    secondCard.index,
    secondCard.num,
  ]);

  useEffect(() => {
    const goal = level === "easy" ? 5 : level === "normal" ? 7 : 9;
    if (score === goal) {
      setTimeout(() => {
        modalRef.current.showModal();
      }, 500);
    }
  }, [score, level]);

  return {
    level,
    cardArray,
    score,
    handleChangeLevel,
    handleClickReset,
    handleClickCard,
  };
};

export default useCard;
