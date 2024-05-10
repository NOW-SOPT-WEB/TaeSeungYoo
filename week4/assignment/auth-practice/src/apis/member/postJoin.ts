import { PostJoinProps } from '@typings/apiType';
import { AxiosError } from 'axios';

import instance from '../index';

export const postJoin = async (joinData: PostJoinProps) => {
  try {
    const response = await instance.post('/member/join', joinData);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
