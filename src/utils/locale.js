const localeJson = [
  "common",
  "auth",
  "title",
  "serviceRequest",
  "user",
  "document",
  "procedure",
  "page",
  "client",
  "home",
  "callManagement",
  "widget"
];

const getLocaleJson = (type, locale) => {
  // eslint-disable-next-line import/no-dynamic-require
  const json = require(`../translations/${type}/${locale}.json`);
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage = json[key];
    return Object.assign(formattedMessages, {
      [`${type}.${key}`]: formattedMessage
    });
  };
  return Object.keys(json).reduce(flattenFormattedMessages, {});
};

export const getLocale = locale => {
  const mergeLocale = (mergedLocale, type) =>
    Object.assign(mergedLocale, getLocaleJson(type, locale));
  const locales = localeJson.reduce(mergeLocale, {});
  const messages = {
    [locale]: {
      ...locales
    }
  };
  return messages[locale];
};

export const LOCALE_STORAGE_KEY = {
  LOCALE: "locale"
};

export const getLocaleData = () => ({
  locale:
    localStorage.getItem(LOCALE_STORAGE_KEY.LOCALE) ||
    sessionStorage.getItem(LOCALE_STORAGE_KEY.LOCALE)
});

export const setLocaleData = (locale, persist) => {
  if (persist) {
    localStorage.setItem(LOCALE_STORAGE_KEY.LOCALE, locale);
  } else {
    sessionStorage.setItem(LOCALE_STORAGE_KEY.LOCALE, locale);
  }
};
