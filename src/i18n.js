import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as English from "./Components/Strings/English"
import * as Hebrew from "./Components/Strings/Hebrew"

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    // Force english on:
    lng: 'he',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // here we will place our translations...
    resources: {
      en: {
        translation: English
      },
      he: {
        translation: Hebrew
      }
    }
  });

export default i18n;