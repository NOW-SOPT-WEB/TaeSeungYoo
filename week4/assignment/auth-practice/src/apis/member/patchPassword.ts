import { PatchPasswordProps } from '@typings/apiType';

import instance from '../index';

export const patchPassword = async (patchPasswordData: PatchPasswordProps, memberId: number) => {
  const response = await instance.patch(`/member/password`, patchPasswordData, {
    headers: {
      memberId,
    },
  });
  return response;
};
