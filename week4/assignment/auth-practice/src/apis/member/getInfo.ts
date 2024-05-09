import instance from '../index';

export const getInfo = async (memberId: number) => {
  const response = await instance.get('/member/info', {
    headers: {
      memberId, // 요청 헤더에 'id' 키로 id 값을 추가
    },
  });
  return response;
};
