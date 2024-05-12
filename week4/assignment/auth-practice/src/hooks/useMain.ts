import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const useMain = () => {
  const navigate = useNavigate();
  const { memberId } = useParams();
  useEffect(() => {
    if (!memberId) {
      navigate('/auth/login');
    }
  }, []);

  const handleClickMyPage = () => {
    navigate(`/user/my-page/${memberId}`);
  };

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
