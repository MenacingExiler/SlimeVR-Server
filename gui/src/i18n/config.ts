import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import fr from './fr/translation.json';
import vi from './vi/translation.json';

export const defaultNS = 'tanslations';

export const langs = [
  {
    name: 'English',
    key: 'en',
  },
  {
    name: 'Français',
    key: 'fr',
  },
  {
    name: 'Tiếng Việt',
    key: 'vi',
  },
];

export const resources = {
  en: {
    tanslations: en,
  },
  fr: {
    tanslations: fr,
  },
  vi: {
    tanslations: vi,
  },
};

i18next.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  resources,
  fallbackLng: 'en',
  defaultNS,
});

export default i18next;
