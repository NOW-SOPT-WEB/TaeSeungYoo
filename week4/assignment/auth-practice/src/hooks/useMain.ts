import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const useMain = () => {
  const navigate = useNavigate();
  // memberId를 useParams로 받아옴
  const { memberId } = useParams();

  // memberId가 없을 경우(로그인 안된 상태) 로그인 페이지로 이동
  useEffect(() => {
    if (!memberId) {
      navigate('/auth/login');
    }
  }, []);

  // 마이페이지 버튼 클릭 시 호출되는 함수
  const handleClickMyPage = () => {
    navigate(`/user/my-page/${memberId}`);
  };

  // 회원가입 버튼 클릭 시 호출되는 함수
  const handleClickJoin = () => {
    navigate('/auth/join');
  };

  return {
    memberId,
    handleClickMyPage,
    handleClickJoin,
  };
};

export default useMain;
