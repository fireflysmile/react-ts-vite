import { I18N_DATA, DEFAULT_LANGUAGE } from 'config/constants';

useI18n(initReactI18next).init({
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  resources: {
    en: {
      translation: I18N_DATA.en,
    },
    ja: {
      translation: I18N_DATA.ja,
    },
  },
});

export default i18nInstance;
