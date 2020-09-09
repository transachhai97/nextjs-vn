import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationVI from '@/locales/vi/index.json';
import translationEN from '@/locales/en/index.json';

const resources = {
    en: {
        translation: translationEN,
    },
    vi: {
        translation: translationVI,
    },
};

i18next.use(initReactI18next).init({
    lng: 'vi',
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    resources,
});

export default i18next;
