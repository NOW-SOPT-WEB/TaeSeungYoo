import { postJoin } from '@apis/member';
import InputForm from '@components/inputForm';
import { validatePassword, formatPhoneNumber } from '@utils/utils';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { JoinContainer } from './styles';

const Index = () => {
  const navigate = useNavigate();

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  const validateJoin = () => {
    setIdError(false);
    setPasswordError(false);
    setNicknameError(false);
    setPhoneNumberError(false);
    if (!id) {
      alert('아이디를 입력해주세요.');
      if (idRef.current) {
        idRef.current.focus();
      }
      setIdError(true);
      return false;
    }

    if (!password) {
      alert('비밀번호를 입력해주세요.');
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
      setPasswordError(true);
      return false;
    }

    if (!validatePassword(password)) {
      alert('비밀번호 형식이 맞지 않습니다.');
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
      setPasswordError(true);
      return false;
    }

    if (!nickname) {
      alert('닉네임을 입력해주세요.');
      if (nicknameRef.current) {
        nicknameRef.current.focus();
      }
      setNicknameError(true);
      return false;
    }

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

  return (
    <JoinContainer>
      <h1>회원가입</h1>
      <section className="join__input">
        <InputForm
          ref={idRef}
          type="text"
          title="아이디"
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={handleChangeId}
          error={idError}
        />
        <InputForm
          ref={passwordRef}
          type="password"
          title="비밀번호"
          value={password}
          onChange={handleChangePassword}
          placeholder="비밀번호를 입력해주세요."
          infoText="비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다."
          error={passwordError}
        />
        <InputForm
          ref={nicknameRef}
          type="text"
          title="닉네임"
          placeholder="닉네임를 입력해주세요."
          value={nickname}
          onChange={handleChangeNickname}
          error={nicknameError}
        />
        <InputForm
          ref={phoneNumberRef}
          type="text"
          title="전화번호"
          placeholder="전화번호를 입력해주세요."
          value={phoneNumber}
          onChange={handleChangePhoneNumber}
          infoText="전화번호 형식은 010-1234-5678 입니다."
          error={phoneNumberError}
        />
      </section>
      <section className="join__button">
        <button
          type="button"
          onClick={async () => {
            if (!validateJoin()) return;
            const response = await postJoin({ authenticationId: id, password, nickname, phone: phoneNumber });
            const { code, message } = response && response.data;

            if (code === 201) {
              alert('회원가입이 완료되었습니다.');
              navigate('/auth/login');
            } else {
              alert(message);
            }
          }}>
          회원가입
        </button>
        <button type="button" onClick={() => navigate(-1)}>
          뒤로가기
        </button>
      </section>
    </JoinContainer>
  );
};

export default Index;
