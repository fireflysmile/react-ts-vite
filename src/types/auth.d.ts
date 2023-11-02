declare namespace Auth {
  export type UserCertificate = {
    email: string;
    password: string;
  };

  export interface User {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
  }

  export interface UserAuthentication {
    expireAt: number;
    token: string;
    accessToken: stringing;
    user: User;
  }
}
