import instance from '../index';

export const getInfo = async (memberId: number) => {
  const response = await instance.get('/member/info', {
    headers: {
      memberId,
    },
  });
  return response;
};
