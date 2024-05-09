import { patchPassword } from '@apis/member';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MyPageContainer } from './styles';

const Index = () => {
  const navigate = useNavigate();
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);

  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordVerification, setNewPasswordVerification] = useState('');

  const handleChangePreviousPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreviousPassword(e.target.value);
  };
  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const handleChangeNewPasswordVerification = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPasswordVerification(e.target.value);
  };

  return (
    <MyPageContainer>
      <h1>마이페이지</h1>
      <section className="my-page__info">
        <div className="info__item">
          <div>아이디</div>
          <div>test</div>
        </div>
        <div className="info__item">
          <div>닉네임</div>
          <div>test</div>
        </div>
        <div className="info__item">
          <div>전화번호</div>
          <div>010-1234-5678</div>
        </div>
      </section>
      <section className="my-page__change-password">
        <button onClick={() => setIsOpenChangePassword((prev) => !prev)}>
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
            <button
              type="button"
              onClick={() => {
                patchPassword(
                  {
                    previousPassword,
                    newPassword,
                    newPasswordVerification,
                  },
                  788
                );
              }}>
              비밀번호 변경
            </button>
          </section>
        )}
      </section>
      <section className="my-page__button">
        <button type="button" onClick={() => navigate('/')}>
          홈으로
        </button>
      </section>
    </MyPageContainer>
  );
};

export default Index;
