import { HomeContainer, ArticlesContainer } from '../pages';

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
    path: '/intro/metamorphosis',
    name: 'Metamorphosis',
    component: null,
    menu: 'intro'
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
    menu: 'content'
  },
  {
    path: '/content/articles',
    name: 'Articles',
    component: ArticlesContainer,
    menu: 'content'
  },
  {
    path: '/content/videos',
    name: 'Videos & Visualizations',
    component: null,
    menu: 'content'
  },
  {
    path: '/content/initiatives',
    name: 'Sanctuary Initiatives',
    component: null,
    menu: 'content'
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
    menu: 'organize'
  },
  {
    path: '/organize/prosperity',
    name: 'Prosperity',
    component: null,
    menu: 'organize'
  },
  {
    path: '/organize/inspiration',
    name: 'Inspiration',
    component: null,
    menu: 'organize'
  },
  {
    path: '/organize/joy',
    name: 'Joy',
    component: null,
    menu: 'organize'
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
    menu: 'connect'
  },
  {
    path: '/connect/disperse',
    name: 'Disperse Content',
    component: null,
    menu: 'connect'
  },
  {
    path: '/connect/sponsor',
    name: 'Sponsor Content',
    component: null,
    menu: 'connect'
  },
  {
    path: '/connect/messenger',
    name: 'Messenger',
    component: null,
    menu: 'connect'
  },
]

export default routes
