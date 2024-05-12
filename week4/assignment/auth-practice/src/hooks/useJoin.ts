import { postJoin } from '@apis/member';
import { formatPhoneNumber, validatePassword } from '@utils/utils';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useJoin = () => {
  const navigate = useNavigate();

  // input focus를 위한 ref
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  // id, password, nickname, phoneNumber를 관리하는 state
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // id, password, nickname, phoneNumber 에러 여부를 관리하는 state
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  // id input이 변경될 때 호출되는 함수
  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  // password input이 변경될 때 호출되는 함수
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // nickname input이 변경될 때 호출되는 함수
  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  // phoneNumber input이 변경될 때 호출되는 함수
  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  // 회원가입 버튼 클릭 시 호출되는 함수
  // id, password, nickname, phoneNumber가 유효한지 검사하는 함수
  const validateJoin = () => {
    // id, password, nickname, phoneNumber 에러 여부 초기화
    setIdError(false);
    setPasswordError(false);
    setNicknameError(false);
    setPhoneNumberError(false);

    // id가 입력되지 않았을 경우 alert 출력 후 focus
    if (!id) {
      alert('아이디를 입력해주세요.');
      if (idRef.current) {
        idRef.current.focus();
      }
      setIdError(true);
      return false;
    }

    // password가 입력되지 않았을 경우 alert 출력 후 focus
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
      setPasswordError(true);
      return false;
    }

    // password 형식이 맞지 않을 경우 alert 출력 후 focus
    if (!validatePassword(password)) {
      alert('비밀번호 형식이 맞지 않습니다.');
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
      setPasswordError(true);
      return false;
    }

    // nickname이 입력되지 않았을 경우 alert 출력 후 focus
    if (!nickname) {
      alert('닉네임을 입력해주세요.');
      if (nicknameRef.current) {
        nicknameRef.current.focus();
      }
      setNicknameError(true);
      return false;
    }

    // phoneNumber가 입력되지 않았을 경우 alert 출력 후 focus
    if (!phoneNumber) {
      alert('전화번호를 입력해주세요.');
      if (phoneNumberRef.current) {
        phoneNumberRef.current.focus();
      }
      setPhoneNumberError(true);
      return false;
    }

    return true;
  };

  // 회원가입 버튼 클릭 시 호출되는 함수
  const handleClickJoin = async () => {
    // id, password, nickname, phoneNumber가 유효하지 않을 경우 return
    if (!validateJoin()) return;
    const response = await postJoin({ authenticationId: id, password, nickname, phone: phoneNumber });
    const { code, message } = response && response.data;

    if (code === 201) {
      alert('회원가입이 완료되었습니다.');
      navigate('/auth/login');
    } else {
      alert(message);
    }
  };

  // 뒤로가기 버튼 클릭 시 호출되는 함수
  // login에도 있고 join에도 있는 함수라서 공통으로 빼는게 좋을 듯
  const handleClickBack = () => {
    navigate(-1);
  };

  return {
    idRef,
    passwordRef,
    nicknameRef,
    phoneNumberRef,
    id,
    password,
    nickname,
    phoneNumber,
    idError,
    passwordError,
    nicknameError,
    phoneNumberError,
    handleChangeId,
    handleChangePassword,
    handleChangeNickname,
    handleChangePhoneNumber,
    handleClickJoin,
    handleClickBack,
  };
};

export default useJoin;
