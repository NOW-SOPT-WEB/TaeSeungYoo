import { PostLoginProps } from '@typings/apiType';
import { AxiosError } from 'axios';

import instance from '../index';

export const postLogin = async (loginData: PostLoginProps) => {
  try {
    const response = await instance.post(`/member/login`, loginData);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
