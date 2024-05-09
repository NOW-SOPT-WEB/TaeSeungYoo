import instance from '../index';

export const getInfo = async (id: number) => {
  const response = await instance.get('/member/info', {
    headers: {
      id, // 요청 헤더에 'id' 키로 id 값을 추가
    },
  });
  return response;
};
