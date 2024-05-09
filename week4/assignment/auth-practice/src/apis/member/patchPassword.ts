import { PatchPasswordProps } from '@typings/apiType';

import instance from '../index';

export const patchPassword = async (loginData: PatchPasswordProps) => {
  const response = await instance.patch(`/member/password`, loginData);
  return response;
};
