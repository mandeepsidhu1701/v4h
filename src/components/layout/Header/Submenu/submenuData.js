import routes from '../../../../routes';

import * as messageKeys from '@/locales';

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
    name: messageKeys.HEADER_INTROL,
    submenu: introSubmenu
  },
  {
    name: messageKeys.HEADER_CONTENT,
    submenu: contentSubmenu
  },
  {
    name: messageKeys.HEADER_ORGANIZE,
    submenu: organizeSubmenu
  },
  {
    name: messageKeys.HEADER_NETWORK,
    submenu: networkSubmenu
  }
];

export default menuData;
