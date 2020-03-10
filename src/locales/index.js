import intl from 'react-intl-universal';
/**
 * I18N data constants.
 */
export const LABEL = 'label.';
export const APP_TITLE = 'app_title';
export const SECOND_GENOME = 'second_genome';
export const SIGN_UP = 'sign_up';
export const SIGN_IN = 'sign_in';
export const SITE_NAME = 'site_name';

export const locales = {
  'en-US': require('./en-US'),
  'de-DE': require('./de-DE')
};

export function loadLocales(lang = 'en-US') {
  return intl.init({
    currentLocale: lang,
    locales
  });
}
