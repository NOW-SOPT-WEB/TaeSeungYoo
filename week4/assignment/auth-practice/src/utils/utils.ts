// 비밀번호 유효성 검사 함수
export const validatePassword = (value: string) => {
  if (value) {
    // 비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(value.trim());
  }
  return false;
};

// 전화번호 형식 변환 함수
export const formatPhoneNumber = (phoneNumber: string) => {
  const numbers = phoneNumber.replace(/\D/g, '');

  // 현재 입력된 전화번호 글자수에 따라서 -를 추가해주는 로직
  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  }
};
