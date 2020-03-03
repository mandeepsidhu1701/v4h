import {Home, Articles, Quotes} from './pages';

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
    name: 'Home',
    component: Home,
    menu: 'intro',
    image: introHome
  },
  {
    path: '/intro/compass',
    name: 'Creation Compass',
    component: null,
    menu: 'intro',
    image: introCopmpass
  },
  {
    path: '/intro/charter',
    name: 'Charter',
    component: null,
    menu: 'intro',
    image: introCharter
  },
  {
    path: '/intro/metamorphosis',
    name: 'Metamorphosis',
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
    name: 'Quotes & Affirmations ',
    component: Quotes,
    menu: 'content',
    image: contentQuotes
  },
  {
    path: '/content/articles',
    name: 'Articles',
    component: Articles,
    menu: 'content',
    image: contentArticles
  },
  {
    path: '/content/videos',
    name: 'Videos & Visualizations',
    component: null,
    menu: 'content',
    image: contentVideos
  },
  {
    path: '/content/initiatives',
    name: 'Sanctuary Initiatives',
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
    name: 'Health',
    component: null,
    menu: 'organize',
    image: organizeHealth
  },
  {
    path: '/organize/prosperity',
    name: 'Prosperity',
    component: null,
    menu: 'organize',
    image: organizePros
  },
  {
    path: '/organize/inspiration',
    name: 'Inspiration',
    component: null,
    menu: 'organize',
    image: organizeIns
  },
  {
    path: '/organize/joy',
    name: 'Joy',
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
    name: 'Contribute',
    component: null,
    menu: 'network',
    image: networkContribute
  },
  {
    path: '/network/sponsor',
    name: 'Sponsor',
    component: null,
    menu: 'network',
    image: networkSponsor
  },
  {
    path: '/network/disperse',
    name: 'Disperse',
    component: null,
    menu: 'network',
    image: networkDisperse
  },
  {
    path: '/profile',
    name: 'Profile',
    component: null,
    menu: 'network',
    image: networkProfile
  }
];

export default routes;
