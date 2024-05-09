import loginImg from '@assets/img/login-logo.png';

import { LoginContainer } from './styles';

const Index = () => {
  return (
    <LoginContainer>
      <h1 className="login__title">로그인</h1>
      <img className="login__img" src={loginImg} alt="login-logo" />
      <section className="login__input">
        <h3>ID</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type="password" />
      </section>
      <section className="login__button">
        <button type="button">로그인</button>
        <button type="button">회원가입</button>
      </section>
    </LoginContainer>
  );
};

export default Index;
