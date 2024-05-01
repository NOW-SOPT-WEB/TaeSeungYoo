import { useEffect, useState } from "react";

const useCard = ({ modalRef }) => {
  // 게임 난이도 easy, normal, hard
  const [level, setLevel] = useState("normal");
  // 카드 배열 [{num, isOpen}, ...]
  const [cardArray, setCardArray] = useState([]);
  // 첫번쨰 뒤집은 카드
  const [firstCard, setFirstCard] = useState({});
  // 두번째 뒤집은 카드
  const [secondCard, setSecondCard] = useState({});
  // 점수
  const [score, setScore] = useState(0);

  // 두 카드를 비교 중인지 여부
  const [checkingCard, setCheckingCard] = useState(false);

  // 랜덤한 카드 배열 생성
  const getRandomCardArray = (label) => {
    let tempArray = [];
    // 난이도에 따라 카드 수가 조정
    let cardNum = 7;
    if (label === "easy") {
      cardNum = 5;
    } else if (label === "hard") {
      cardNum = 9;
    }
    // Set은 중복을 제거함. 따라서 nCr과 같이 동작함
    const numbers = new Set();
    while (numbers.size < cardNum) {
      numbers.add(Math.floor(Math.random() * 16) + 1);
    }
    // numbers를 2번씩 넣어서 쌍을 만듦
    numbers.forEach((num) =>
      tempArray.push({ num, isOpen: false }, { num, isOpen: false }),
    );
    // 랜덤하게 섞어주기
    tempArray.sort(() => Math.random() - 0.5);
    return tempArray;
  };

  // 게임 리셋. 3가지의 경우에 사용됨 [1. 게임 클리어했을 때 2. 난이도 변경했을 때 3. Reset 버튼 눌렀을 때]
  const handleReset = (curLevel = level) => {
    setFirstCard({});
    setSecondCard({});
    setScore(0);
    setCardArray(getRandomCardArray(curLevel));
  };

  // 모달 닫았을 때(1. 게임 클리어했을 때)
  const handleClickModalClose = () => {
    modalRef.current.close();
    handleReset();
  };

  // 2. 난이도 변경했을 때
  const handleChangeLevel = (event) => {
    const label = event.target.textContent.toLowerCase();
    if (label === level) return;
    setLevel(label);
    handleReset(label);
  };

  // 카드 클릭했을 때
  const handleClickCard = (index) => {
    // 클릭한 카드의 num과 isOpen 상태
    const { num, isOpen } = cardArray[index];

    // 뒤집은 카드를 클릭으로 다시 뒤집는 경우는 없음
    // 두 카드를 비교 중인 경우에는 다른 카드를 뒤집을 수 없음
    if (isOpen || checkingCard) return;

    const newCardArray = cardArray.map((card, i) => {
      if (i === index) {
        return { ...card, isOpen: !card.isOpen };
      }
      return card;
    });
    setCardArray(newCardArray);

    if (Object.keys(firstCard).length === 0) {
      // 첫번째 카드인 경우
      setFirstCard({ index, num });
    } else {
      // 두번째 카드인 경우. checkingCard(지금 비교중인지 여부)를 true로 변경
      setCheckingCard(true);
      setSecondCard({ index, num });
    }
  };

  // 처음 게임 시작
  useEffect(() => {
    setCardArray(getRandomCardArray("normal"));
  }, []);

  // 두 카드를 비교
  useEffect(() => {
    // checkingCard(지금 비교중인지 여부)가 true인 경우에만 실행
    if (checkingCard) {
      if (firstCard.num === secondCard.num) {
        // 두 카드가 같은 경우 (맞음)
        setScore((prevState) => prevState + 1);
        setFirstCard({});
        setSecondCard({});
        // 카드 비교가 끝났다고 상태를 변경
        setCheckingCard(false);
      } else {
        // 두 카드가 다른 경우 (틀림)
        // 1초 후에 카드를 다시 뒤집음
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
          // 카드 비교가 끝났다고 상태를 변경
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

  // 게임 종료 확인
  useEffect(() => {
    const goal = level === "easy" ? 5 : level === "normal" ? 7 : 9;
    if (score === goal) {
      // 카드 뒤집히는 모션 잠시 기다려줌
      setTimeout(() => {
        modalRef.current.showModal();
      }, 500);
    }
  }, [score, level]);

  return {
    level,
    cardArray,
    score,
    handleClickModalClose,
    handleChangeLevel,
    handleReset,
    handleClickCard,
  };
};

export default useCard;
