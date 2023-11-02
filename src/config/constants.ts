import langEn from 'i18n/en.json';
import langJa from 'i18n/ja.json';

export { default as RESOURCES } from './resources';

export const I18N_DATA = {
  en: langEn,
  ja: langJa,
};

export const IMAGE_FILE_TYPE = '.png,.jpg,.jpeg';
export const MAX_UPLOAD_IMAGE_SIZE = 1;

export const DEFAULT_LANGUAGE = 'en';
export const DATE_FORMAT = 'DD/MM/YYYY';
export const SPACE_KEY_CODE = 32;
export const EMAIL_REGEX = /^[\w_+.]+@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/;
export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
