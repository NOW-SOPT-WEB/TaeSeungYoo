import { PostLoginProps } from '@typings/apiType';

import instance from '../index';

export const postLogin = async (loginData: PostLoginProps) => {
  const response = await instance.post(`/member/login`, loginData);
  return response;
};
