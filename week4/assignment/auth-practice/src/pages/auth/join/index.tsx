import { postJoin } from '@apis/member';
import InputForm from '@components/inputForm';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { JoinContainer } from './styles';

const Index = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
    setPhoneNumber(e.target.value);
  };

  return (
    <JoinContainer>
      <h1>회원가입</h1>
      <section className="join__input">
        <InputForm
          type="text"
          title="아이디"
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={handleChangeId}
        />
        <InputForm
          type="password"
          title="비밀번호"
          value={password}
          onChange={handleChangePassword}
          placeholder="비밀번호를 입력해주세요."
          infoText="비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파베싱 포함되어야 합니다."
        />
        <InputForm
          type="text"
          title="닉네임"
          placeholder="닉네임를 입력해주세요."
          value={nickname}
          onChange={handleChangeNickname}
        />
        <InputForm
          type="text"
          title="전화번호"
          placeholder="전화번호를 입력해주세요."
          value={phoneNumber}
          onChange={handleChangePhoneNumber}
          infoText="전화번호 형식은 010-1234-5678 입니다."
        />
      </section>
      <section className="join__button">
        <button
          type="button"
          onClick={() => {
            postJoin({ authenticationId: id, password, nickname, phone: phoneNumber });
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
