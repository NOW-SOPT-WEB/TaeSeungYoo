import { useMyPage } from '@hooks';

import { MyPageContainer } from './styles';

const Index = () => {
  const {
    id,
    nickname,
    phone,
    isOpenChangePassword,
    previousPassword,
    newPassword,
    newPasswordVerification,
    handleChangePreviousPassword,
    handleChangeNewPassword,
    handleChangeNewPasswordVerification,
    handleClickToggleChangePassword,
    handleClickChangePassword,
    handleClickHome,
  } = useMyPage();
  return (
    <MyPageContainer>
      <h1>마이페이지</h1>
      <section className="my-page__info">
        <div className="info__item">
          <div>아이디</div>
          <div>{id}</div>
        </div>
        <div className="info__item">
          <div>닉네임</div>
          <div>{nickname}</div>
        </div>
        <div className="info__item">
          <div>전화번호</div>
          <div>{phone}</div>
        </div>
      </section>
      <section className="my-page__change-password">
        <button onClick={handleClickToggleChangePassword}>
          비밀번호 변경
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        {isOpenChangePassword && (
          <section className="change-password__input">
            <input
              type="text"
              placeholder="기존 비밀번호"
              value={previousPassword}
              onChange={handleChangePreviousPassword}
            />
            <input type="text" placeholder="새로운 비밀번호" value={newPassword} onChange={handleChangeNewPassword} />
            <input
              type="text"
              placeholder="새로운 비밀번호 확인"
              value={newPasswordVerification}
              onChange={handleChangeNewPasswordVerification}
            />
            <button type="button" onClick={handleClickChangePassword}>
              비밀번호 변경
            </button>
          </section>
        )}
      </section>
      <section className="my-page__button">
        <button type="button" onClick={handleClickHome}>
          홈으로
        </button>
      </section>
    </MyPageContainer>
  );
};

export default Index;
