import { DEFAULT_LANGUAGE } from 'config/constants';
import type { State } from './types';

const initialState: State = {
  locale: DEFAULT_LANGUAGE,
};

export default initialState;
