import {Home, Articles, Quotes, Videos, Health} from './pages';

import introHome from './assets/images/layout/submenu/intro-home.png';
import introCopmpass from './assets/images/layout/submenu/intro-compass.png';
import introCharter from './assets/images/layout/submenu/intro-charter.png';
import introMeta from './assets/images/layout/submenu/intro-metamorphosis.png';
import contentQuotes from './assets/images/layout/submenu/content-quotes.png';
import contentArticles from './assets/images/layout/submenu/content-articles.png';
import contentInit from './assets/images/layout/submenu/content-initiatives.png';
import contentVideos from './assets/images/layout/submenu/content-videos.png';
import networkContribute from './assets/images/layout/submenu/network-contribute.png';
import networkDisperse from './assets/images/layout/submenu/network-disperse.png';
import networkProfile from './assets/images/layout/submenu/network-profile.png';
import networkSponsor from './assets/images/layout/submenu/network-sponsor.png';
import organizeHealth from './assets/images/layout/submenu/organize-health.png';
import organizeIns from './assets/images/layout/submenu/organize-inspiration.png';
import organizeJoy from './assets/images/layout/submenu/organize-joy.png';
import organizePros from './assets/images/layout/submenu/organize-prosperity.png';

import * as messageKeys from '@/locales';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    menu: null
  },
  //Intro Route
  {
    path: '/intro',
    name: 'Intro',
    component: null,
    menu: null
  },
  {
    path: '/',
    name: messageKeys.HEADER_INTROL_MENU_HOME,
    component: Home,
    menu: 'intro',
    image: introHome
  },
  {
    path: '/intro/compass',
    name: messageKeys.HEADER_INTROL_MENU_COMPASS,
    component: null,
    menu: 'intro',
    image: introCopmpass
  },
  {
    path: '/intro/charter',
    name: messageKeys.HEADER_INTROL_MENU_CHARTER,
    component: null,
    menu: 'intro',
    image: introCharter
  },
  {
    path: '/intro/metamorphosis',
    name: messageKeys.HEADER_INTROL_MENU_META,
    component: null,
    menu: 'intro',
    image: introMeta
  },
  //Content routes
  {
    path: '/content',
    name: 'Content',
    component: null,
    menu: null
  },
  {
    path: '/content/quotes',
    name: messageKeys.HEADER_CONTENT_MENU_QUOTES,
    component: Quotes,
    menu: 'content',
    image: contentQuotes
  },
  {
    path: '/content/articles',
    name: messageKeys.HEADER_CONTENT_MENU_ARTICLES,
    component: Articles,
    menu: 'content',
    image: contentArticles
  },
  {
    path: '/content/videos',
    name: messageKeys.HEADER_CONTENT_MENU_VIDEOS,
    component: Videos,
    menu: 'content',
    image: contentVideos
  },
  {
    path: '/content/initiatives',
    name: messageKeys.HEADER_CONTENT_MENU_SANCTUARY,
    component: null,
    menu: 'content',
    image: contentInit
  },
  //Organize Route
  {
    path: '/organize',
    name: 'Organize',
    component: null,
    menu: null
  },
  {
    path: '/organize/health',
    name: messageKeys.HEADER_ORGANIZE_MENU_HEALTH,
    component: Health,
    menu: 'organize',
    image: organizeHealth
  },
  {
    path: '/organize/prosperity',
    name: messageKeys.HEADER_ORGANIZE_MENU_PROSPERITY,
    component: null,
    menu: 'organize',
    image: organizePros
  },
  {
    path: '/organize/inspiration',
    name: messageKeys.HEADER_ORGANIZE_MENU_INSPAIRATION,
    component: null,
    menu: 'organize',
    image: organizeIns
  },
  {
    path: '/organize/joy',
    name: messageKeys.HEADER_ORGANIZE_MENU_JOY,
    component: null,
    menu: 'organize',
    image: organizeJoy
  },
  //Network Route
  {
    path: '/network',
    name: 'Network',
    component: null,
    menu: null
  },
  {
    path: '/network/contribute',
    name: messageKeys.HEADER_NETWORK_MENU_CONTRIBUTE,
    component: null,
    menu: 'network',
    image: networkContribute
  },
  {
    path: '/network/sponsor',
    name: messageKeys.HEADER_NETWORK_MENU_SPONSOR,
    component: null,
    menu: 'network',
    image: networkSponsor
  },
  {
    path: '/network/disperse',
    name: messageKeys.HEADER_NETWORK_MENU_DISPERSE,
    component: null,
    menu: 'network',
    image: networkDisperse
  },
  {
    path: '/profile',
    name: messageKeys.HEADER_NETWORK_MENU_PROFILE,
    component: null,
    menu: 'network',
    image: networkProfile
  }
];

export default routes;
