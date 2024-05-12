import { postLogin } from '@apis/member';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [idInfoText, setIdInfoText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordInfoText, setPasswordInfoText] = useState('');

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = async () => {
    setIdInfoText('');
    setPasswordInfoText('');
    if (!id) {
      setIdInfoText('아이디를 입력해주세요.');
      return;
    }
    if (!password) {
      setPasswordInfoText('비밀번호를 입력해주세요.');
      return;
    }
    const response = await postLogin({ authenticationId: id, password });
    const { code, message } = response && response.data;

    if (code === 200) {
      const memberId = response && response.headers.location;

      alert('로그인 성공');
      navigate(`/${memberId}`);
    } else {
      alert(message);
    }
  };

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
