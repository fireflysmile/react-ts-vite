export type State = {
  userInfo: Auth.User;
  accessToken: string;
};

export type Actions = {
  signUp: (credentials: Auth.UserCertificate) => Promise<void>;
  signIn: (credentials: Auth.UserCertificate) => Promise<void>;
  signOut: () => Promise<void>;
};

export type SetState<T extends State> = {
  _(
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: boolean | undefined,
    actionName?: string,
  ): void;
}['_'];
