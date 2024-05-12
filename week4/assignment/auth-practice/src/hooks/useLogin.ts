import { postLogin } from '@apis/member';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();

  // id를 관리하는 state
  const [id, setId] = useState('');
  // id 에러 메시지를 관리하는 state
  const [idInfoText, setIdInfoText] = useState('');
  // password를 관리하는 state
  const [password, setPassword] = useState('');
  // password 에러 메시지를 관리하는 state
  const [passwordInfoText, setPasswordInfoText] = useState('');

  // id input이 변경될 때 호출되는 함수
  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  // password input이 변경될 때 호출되는 함수
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleClickLogin = async () => {
    // id, password 에러 메시지 초기화
    setIdInfoText('');
    setPasswordInfoText('');

    // id, password가 입력되지 않았을 경우 에러 메시지 설정 후 return
    if (!id) {
      setIdInfoText('아이디를 입력해주세요.');
      return;
    }
    if (!password) {
      setPasswordInfoText('비밀번호를 입력해주세요.');
      return;
    }

    // id, password를 서버로 전송하여 로그인 요청
    const response = await postLogin({ authenticationId: id, password });
    const { code, message } = response && response.data;

    if (code === 200) {
      const memberId = response && response.headers.location;

      // 로그인 성공 시 memberId를 path로 설정하고 alert로 '로그인 성공' 메시지 출력
      alert('로그인 성공');
      navigate(`/${memberId}`);
    } else {
      // 로그인 실패 시 alert로 message 출력
      alert(message);
    }
  };

  // 뒤로가기 버튼 클릭 시 호출되는 함수
  const handleClickBack = () => {
    navigate(-1);
  };

  return {
    id,
    idInfoText,
    password,
    passwordInfoText,
    handleChangeId,
    handleChangePassword,
    handleClickLogin,
    handleClickBack,
  };
};

export default useLogin;
