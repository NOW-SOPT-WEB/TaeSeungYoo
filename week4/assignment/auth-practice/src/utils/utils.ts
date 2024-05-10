export const validatePassword = (value: string) => {
  if (value) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(value.trim());
  }
  return false;
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const numbers = phoneNumber.replace(/\D/g, '');

  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  }
};
