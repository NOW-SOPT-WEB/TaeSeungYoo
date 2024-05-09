import { PostJoinProps } from '@typings/apiType';

import instance from '../index';

export const postJoin = async (joinData: PostJoinProps) => {
  const response = await instance.post('/member/join', joinData);
  return response;
};
