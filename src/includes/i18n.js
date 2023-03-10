import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import de from "@/locales/de.json";

export default createI18n({
  locale: "de",
  fallbackLocale: "en",
  messages: {
    en,
    de,
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
      },
    },
    de: {
      currency: {
        style: "currency",
        currency: "EUR",
      },
    },
  },
});
