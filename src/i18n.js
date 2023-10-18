import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./data/translations/en";
import pl from "./data/translations/pl";

const resources = {
  en: { translation: en },
  pl: { translation: pl },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
