import routes from '../../../data/routes'

const globeLink = '/globe'
const sanctuaryLink = '/sanctuary'

const contentSubmenu = routes.filter(route => (
  route.menu === 'content'
)).map((route, index) => (
  {
    key: index,
    title: route.name,
    image: '/images/submenu/submenu 1.png',
    link: route.path,
    globeLink: globeLink,
    sanctuaryLink: sanctuaryLink

  }
))

const organizeSubmenu = routes.filter(route => (
  route.menu === 'organize'
)).map((route, index) => (
  {
    key: index,
    title: route.name,
    image: '/images/submenu/submenu 1.png',
    link: route.path,
    globeLink: globeLink,
    sanctuaryLink: sanctuaryLink

  }
))

const connectSubmenu = routes.filter(route => (
  route.menu === 'connect'
)).map((route, index) => (
  {
    key: index,
    title: route.name,
    image: '/images/submenu/submenu 1.png',
    link: route.path,
    globeLink: globeLink,
    sanctuaryLink: sanctuaryLink

  }
))

const introSubmenu = routes.filter(route => (
  route.menu === 'intro'
)).map((route, index) => (
  {
    key: index,
    title: route.name,
    image: '/images/submenu/submenu 1.png',
    link: route.path,
    globeLink: globeLink,
    sanctuaryLink: sanctuaryLink

  }
))

export { contentSubmenu, connectSubmenu, organizeSubmenu, introSubmenu }