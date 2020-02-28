import {HomeContainer, ArticlesContainer} from '../pages';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeContainer,
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
    component: HomeContainer,
    menu: 'intro',
    image: '/images/submenu/intro-home.png'
  },
  {
    path: '/intro/compass',
    name: 'Creation Compass',
    component: null,
    menu: 'intro',
    image: '/images/submenu/intro-compass.png'
  },
  {
    path: '/intro/charter',
    name: 'Charter',
    component: null,
    menu: 'intro',
    image: '/images/submenu/intro-charter.png'
  },
  {
    path: '/intro/metamorphosis',
    name: 'Metamorphosis',
    component: null,
    menu: 'intro',
    image: '/images/submenu/intro-metamorphosis.png'
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
    component: null,
    menu: 'content',
    image: '/images/submenu/content-quotes.png'
  },
  {
    path: '/content/articles',
    name: 'Articles',
    component: ArticlesContainer,
    menu: 'content',
    image: '/images/submenu/content-articles.png'
  },
  {
    path: '/content/videos',
    name: 'Videos & Visualizations',
    component: null,
    menu: 'content',
    image: '/images/submenu/content-videos.png'
  },
  {
    path: '/content/initiatives',
    name: 'Sanctuary Initiatives',
    component: null,
    menu: 'content',
    image: '/images/submenu/content-initiatives.png'
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
    image: '/images/submenu/organize-health.png'
  },
  {
    path: '/organize/prosperity',
    name: 'Prosperity',
    component: null,
    menu: 'organize',
    image: '/images/submenu/organize-prosperity.png'
  },
  {
    path: '/organize/inspiration',
    name: 'Inspiration',
    component: null,
    menu: 'organize',
    image: '/images/submenu/organize-inspiration.png'
  },
  {
    path: '/organize/joy',
    name: 'Joy',
    component: null,
    menu: 'organize',
    image: '/images/submenu/organize-joy.png'
  },
  //Connect Route
  {
    path: '/connect',
    name: 'Network',
    component: null,
    menu: null
  },
  {
    path: '/connect/contribute',
    name: 'Contribute Content',
    component: null,
    menu: 'connect',
    image: '/images/submenu/network-contribute.png'
  },
  {
    path: '/connect/sponsor',
    name: 'Sponsor Content',
    component: null,
    menu: 'connect',
    image: '/images/submenu/network-sponsor.png'
  },
  {
    path: '/connect/disperse',
    name: 'Disperse Content',
    component: null,
    menu: 'connect',
    image: '/images/submenu/network-disperse.png'
  },
  {
    path: '/connect/profile',
    name: 'Profile',
    component: null,
    menu: 'connect',
    image: '/images/submenu/network-profile.png'
  }
];

export default routes;
