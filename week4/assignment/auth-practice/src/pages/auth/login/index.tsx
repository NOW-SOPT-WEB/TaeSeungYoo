import loginImg from '@assets/img/login-logo.png';
import InputForm from '@components/inputForm';
import { useLogin } from '@hooks';

import { LoginContainer } from './styles';

const Index = () => {
  const {
    id,
    idInfoText,
    password,
    passwordInfoText,
    handleChangeId,
    handleChangePassword,
    handleClickLogin,
    handleClickBack,
  } = useLogin();

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
          infoText={idInfoText ?? ''}
        />
        <InputForm
          type="password"
          title="비밀번호"
          value={password}
          onChange={handleChangePassword}
          placeholder="비밀번호를 입력해주세요."
          infoText={passwordInfoText ?? ''}
        />
      </section>
      <section className="login__button">
        <button type="button" onClick={handleClickLogin}>
          로그인
        </button>
        <button type="button" onClick={handleClickBack}>
          회원가입
        </button>
      </section>
    </LoginContainer>
  );
};

export default Index;
