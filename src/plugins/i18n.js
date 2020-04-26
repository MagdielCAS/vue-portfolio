import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "../lang/en.json";
import br from "../lang/pt-BR.json";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: `br`,
  fallbackLocale: `br`,
  messages: {
    en,
    br
  }
});

export const languages = [
  { value: "br", flag: "br" },
  { value: "en", flag: "us" },
];
