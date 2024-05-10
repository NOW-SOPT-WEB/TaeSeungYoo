import { postLogin } from '@apis/member';
import loginImg from '@assets/img/login-logo.png';
import InputForm from '@components/inputForm';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginContainer } from './styles';

const Index = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <LoginContainer>
      <h1 className="login__title">로그인</h1>
      <img className="login__img" src={loginImg} alt="login-logo" />
      <section className="login__input">
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
        />
      </section>
      <section className="login__button">
        <button
          type="button"
          onClick={async () => {
            const response = await postLogin({ authenticationId: id, password });
            const { code, message } = response && response.data;

            if (code === 200) {
              const memberId = response && response.headers.location;

              alert('로그인 성공');
              navigate(`/${memberId}`);
            } else {
              alert(message);
            }
          }}>
          로그인
        </button>
        <button type="button" onClick={() => navigate('/auth/join')}>
          회원가입
        </button>
      </section>
    </LoginContainer>
  );
};

export default Index;
