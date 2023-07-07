import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    home: 'Home',
  },
  ar: {
    home: 'الرئيسية',
  },
};

const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en", // set locale
  fallbackLocale: "eg", // set fallback locale
  messages, // set locale messages
});

export default i18n; 
