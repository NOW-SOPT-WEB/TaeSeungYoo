import { PatchPasswordProps } from '@typings/apiType';
import { AxiosError } from 'axios';

import instance from '../index';

export const patchPassword = async (patchPasswordData: PatchPasswordProps, memberId: number) => {
  try {
    const response = await instance.patch(`/member/password`, patchPasswordData, {
      headers: {
        memberId,
      },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
