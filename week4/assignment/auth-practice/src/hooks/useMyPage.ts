import { getInfo, patchPassword } from '@apis/member';
import { validatePassword } from '@utils/utils.ts';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const useMyPage = () => {
  const navigate = useNavigate();

  // memberId를 useParams로 받아옴
  const { memberId } = useParams();
  const memberIdNumber = Number(memberId);

  // id, nickname, phone를 관리하는 state
  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [phone, setPhone] = useState();

  // 비밀번호 변경 모달 오픈 여부를 관리하는 state
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);

  // 비밀번호 변경 input을 관리하는 state
  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordVerification, setNewPasswordVerification] = useState('');

  // 기존 비밀번호 input이 변경될 때 호출되는 함수
  const handleChangePreviousPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreviousPassword(e.target.value);
  };
  // 새 비밀번호 input이 변경될 때 호출되는 함수
  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  // 새 비밀번호 확인 input이 변경될 때 호출되는 함수
  const handleChangeNewPasswordVerification = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPasswordVerification(e.target.value);
  };

  // id를 서버로 전송하여 회원 정보 요청
  const fetchInfo = async (id: number) => {
    try {
      // id를 서버로 전송하여 회원 정보 요청
      const response = await getInfo(id);
      const { data } = response.data;
      const { authenticationId, nickname, phone } = data;
      // id, nickname, phone state에 값 설정
      setId(authenticationId);
      setNickname(nickname);
      setPhone(phone);
    } catch (error) {
      console.error(error);
    }
  };

  // 비밀번호 변경 모달 토글 함수
  const handleClickToggleChangePassword = () => {
    setIsOpenChangePassword((prev) => !prev);
  };
  // 비밀번호 변경 버튼 클릭 시 호출되는 함수
  const handleClickChangePassword = async () => {
    // 기존 비밀번호, 새 비밀번호, 새 비밀번호 확인이 입력되지 않았을 경우 alert 출력 후 return
    if (!previousPassword || !newPassword || !newPasswordVerification) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    // 새 비밀번호와 새 비밀번호 확인이 일치하지 않을 경우 alert 출력 후 return
    if (!validatePassword(newPassword)) {
      alert('비밀번호 형식이 맞지 않습니다.');
      return;
    }

    // 비밀번호 변경 요청
    const response = await patchPassword({ previousPassword, newPassword, newPasswordVerification }, memberIdNumber);

    // 비밀번호 변경 성공 시 alert 출력
    const { code, message } = response && response.data;
    if (code === 200) {
      alert('비밀번호가 성공적으로 변경되었습니다.');
    } else {
      alert(message);
    }
  };

  // 홈 버튼 클릭 시 호출되는 함수
  const handleClickHome = () => {
    navigate(`/${memberIdNumber}`);
  };

  // 페이지 진입 시 회원 정보 요청
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
