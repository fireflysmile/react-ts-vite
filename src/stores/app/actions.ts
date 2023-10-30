import type { SetState, Actions, State } from './types';

const createAction = (set: SetState<State>): Actions => ({
  changeLanguage: (lang: string): void => {
    set(() => ({ locale: lang }));
    updateLocale(lang);
  },
});

export default createAction;
