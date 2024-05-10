import MainVideo from '@assets/video/main-video.mp4';
import { useNavigate, useParams } from 'react-router-dom';

import { MainContainer } from './styles';

const Index = () => {
  const navigate = useNavigate();
  const { memberId } = useParams();
  return (
    <MainContainer>
      <h1>메인 페이지</h1>
      <video src={MainVideo} controls autoPlay>
        {/* srcLang은 kind 속성값이 “subtitles”인 경우에만 사용할 수 있다고 하는데 lint 때문에 일단 추가 */}
        <track kind="captions" srcLang="ko" label="Korean" />
      </video>
      <section className="join__button">
        <button type="button" onClick={() => navigate(`/user/my-page/${memberId}`)}>
          내 정보
        </button>
        <button type="button" onClick={() => navigate('/auth/join')}>
          회원가입
        </button>
      </section>
    </MainContainer>
  );
};

export default Index;
