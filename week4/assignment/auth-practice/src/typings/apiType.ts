export interface PostJoinProps {
  authenticationId: string;
  password: string;
  nickname: string;
  phone: string;
}

export interface PostLoginProps {
  authenticationId: string;
  password: string;
}

export interface PatchPasswordProps {
  previousPassword: string;
  newPassword: string;
  newPasswordVerification: string;
}
