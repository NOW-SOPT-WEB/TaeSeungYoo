import { getInfo, patchPassword } from '@apis/member';
import { validatePassword } from '@utils/utils.ts';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const useMyPage = () => {
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

  const handleClickToggleChangePassword = () => {
    setIsOpenChangePassword((prev) => !prev);
  };
  const handleClickChangePassword = async () => {
    if (!previousPassword || !newPassword || !newPasswordVerification) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    if (!validatePassword(newPassword)) {
      alert('비밀번호 형식이 맞지 않습니다.');
      return;
    }
    const response = await patchPassword({ previousPassword, newPassword, newPasswordVerification }, memberIdNumber);

    const { code, message } = response && response.data;
    if (code === 200) {
      alert('비밀번호가 성공적으로 변경되었습니다.');
    } else {
      alert(message);
    }
  };

  const handleClickHome = () => {
    navigate(`/${memberIdNumber}`);
  };

  useEffect(() => {
    fetchInfo(memberIdNumber);
  }, []);

  return {
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
  };
};

export default useMyPage;
