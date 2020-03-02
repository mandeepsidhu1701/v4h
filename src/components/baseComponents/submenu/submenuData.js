import routes from '../../../data/routes';

const globeLink = '/globe';
const sanctuaryLink = '/sanctuary';

const contentSubmenu = routes
  .filter((route) => route.menu === 'content')
  .map((route, index) => ({
    key: index,
    title: route.name,
    image: route.image,
    link: route.path,
    globeLink: globeLink,
    sanctuaryLink: sanctuaryLink
  }));

const organizeSubmenu = routes
  .filter((route) => route.menu === 'organize')
  .map((route, index) => ({
    key: index,
    title: route.name,
    image: route.image,
    link: route.path,
    globeLink: globeLink,
    sanctuaryLink: sanctuaryLink
  }));

const networkSubmenu = routes
  .filter((route) => route.menu === 'network')
  .map((route, index) => ({
    key: index,
    title: route.name,
    image: route.image,
    link: route.path,
    globeLink: globeLink,
    sanctuaryLink: sanctuaryLink
  }));

const introSubmenu = routes
  .filter((route) => route.menu === 'intro')
  .map((route, index) => ({
    key: index,
    title: route.name,
    image: route.image,
    link: route.path,
    globeLink: globeLink,
    sanctuaryLink: sanctuaryLink
  }));

const menuData = [
  {
    name: 'Intro',
    submenu: introSubmenu
  },
  {
    name: 'Content',
    submenu: contentSubmenu
  },
  {
    name: 'Organize',
    submenu: organizeSubmenu
  },
  {
    name: 'Network',
    submenu: networkSubmenu
  }
];

export default menuData;
