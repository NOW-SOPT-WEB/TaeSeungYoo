import { getInfo, patchPassword } from '@apis/member';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MyPageContainer } from './styles';

const Index = () => {
  const navigate = useNavigate();
  const { memberId } = useParams();
  const memberIdNumber = Number(memberId);

  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [phone, setPhone] = useState();

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

  // getInfo fun
  const fetchInfo = async (id: number) => {
    try {
      const response = await getInfo(id);
      const { data } = response.data;
      const { authenticationId, nickname, phone } = data;
      setId(authenticationId);
      setNickname(nickname);
      setPhone(phone);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInfo(memberIdNumber);
  }, []);

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
              onClick={async () => {
                if (!previousPassword || !newPassword || !newPasswordVerification) {
                  alert('모든 항목을 입력해주세요.');
                  return;
                }
                const response = await patchPassword(
                  { previousPassword, newPassword, newPasswordVerification },
                  memberIdNumber
                );

                const { code, message } = response && response.data;
                if (code === 200) {
                  alert('비밀번호가 성공적으로 변경되었습니다.');
                } else {
                  alert(message);
                }
              }}>
              비밀번호 변경
            </button>
          </section>
        )}
      </section>
      <section className="my-page__button">
        <button type="button" onClick={() => navigate(`/${memberIdNumber}`)}>
          홈으로
        </button>
      </section>
    </MyPageContainer>
  );
};

export default Index;
