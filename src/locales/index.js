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
// Header
export const HEADER_INTROL = 'header_introl';
export const HEADER_CONTENT = 'header_content';
export const HEADER_ORGANIZE = 'header_organize';
export const HEADER_NETWORK = 'header_network';
export const HEADER_INTROL_SUB = 'header_introl_sub';
export const HEADER_CONTENT_SUB = 'header_content_sub';
export const HEADER_ORGANIZE_SUB = 'header_organize_sub';
export const HEADER_NETWORK_SUB = 'header_network_sub';
export const HEADER_TITLE_LEFT = 'header_title_left';
export const HEADER_TITLE_RIGHT = 'header_title_right';

export const HEADER_INTROL_MENU_HOME = 'header_introl_menu_home';
export const HEADER_INTROL_MENU_COMPASS = 'header_introl_menu_cc';
export const HEADER_INTROL_MENU_CHARTER = 'header_introl_menu_charter';
export const HEADER_INTROL_MENU_META = 'header_introl_menu_meta';

export const HEADER_CONTENT_MENU_QUOTES = 'header_content_menu_quotes';
export const HEADER_CONTENT_MENU_ARTICLES = 'header_content_menu_articles';
export const HEADER_CONTENT_MENU_VIDEOS = 'header_content_menu_videos';
export const HEADER_CONTENT_MENU_SANCTUARY = 'header_content_menu_sanctuary';

export const HEADER_ORGANIZE_MENU_HEALTH = 'header_org_menu_health';
export const HEADER_ORGANIZE_MENU_PROSPERITY = 'header_org_menu_prosperity';
export const HEADER_ORGANIZE_MENU_INSPAIRATION = 'header_org_menu_inspairation';
export const HEADER_ORGANIZE_MENU_JOY = 'header_org_menu_joy';

export const HEADER_NETWORK_MENU_CONTRIBUTE = 'header_network_menu_contribute';
export const HEADER_NETWORK_MENU_SPONSOR = 'header_network_menu_sponsor';
export const HEADER_NETWORK_MENU_DISPERSE = 'header_network_menu_disperse';
export const HEADER_NETWORK_MENU_PROFILE = 'header_network_menu_profile';


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
