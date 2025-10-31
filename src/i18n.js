import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ja from './locales/ja/translation.json'
import en from './locales/en/translation.json'
import zh from './locales/zh/translation.json'
import ko from './locales/ko/translation.json'


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ja: { translation: ja },
            en: { translation: en },
            zh: { translation: zh },
            ko: { translation: ko }
        },
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    })


export default i18n