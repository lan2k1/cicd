import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('vi'),
  init: () => {},
  cacheUserLanguage: () => {},
};
/**
 * Config i18n for app
 */
i18n
  // .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',

    resources: resources,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    debug: false,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18n;
