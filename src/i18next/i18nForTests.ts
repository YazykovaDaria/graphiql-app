import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../public/locales/en/translation.json';

i18n.use(initReactI18next).init({
  returnEmptyString: false,
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        ...enTranslation,
      },
    },
  },
});

export default i18n;
