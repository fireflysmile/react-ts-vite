export type State = {
  locale: string;
};

export type Actions = {
  changeLanguage: (lang: string) => void;
  reset?: () => void;
};

export type SetState<T extends State> = {
  _(
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: boolean | undefined,
    actionName?: string,
  ): void;
}['_'];
