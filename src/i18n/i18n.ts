import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import enGBTranslation from './locales/en_GB.json';
import zhCNTranslation from './locales/zh_CN.json';

const resources: Resource = {
    'en_GB': { translation: enGBTranslation },
    'zh_CN': { translation: zhCNTranslation },
};

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
    resources,
    lng: 'en_GB',
    fallbackLng: 'en_GB',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
