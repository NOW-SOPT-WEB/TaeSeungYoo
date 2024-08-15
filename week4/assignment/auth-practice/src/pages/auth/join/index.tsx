import InputForm from '@components/inputForm';
import { useJoin } from '@hooks';

import { JoinContainer } from './styles';

const Index = () => {
  const {
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
  } = useJoin();

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
        <button type="button" onClick={handleClickJoin}>
          회원가입
        </button>
        <button type="button" onClick={handleClickBack}>
          뒤로가기
        </button>
      </section>
    </JoinContainer>
  );
};

export default Index;
