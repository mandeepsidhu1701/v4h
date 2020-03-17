import Planting from '../assets/images/content/landing/planting.png';
import Group from '../assets/images/content/landing/group.png';
import isVideo from '../assets/videos/is.mp4'

const dummyText =
  'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum';

const dummyImage = '/images/home/16x9_wireframe.jpg';

export default {
  corePrincipals: [
    {name: 'VISION', text: dummyText, image: Planting},
    {name: 'MISSION', text: dummyText, image: Planting},
    {name: 'CHARTER', text: dummyText, image: Planting},
    {name: 'CREATION COMPASS', text: dummyText, image: Planting},
    {name: 'METAWHEEL', text: dummyText, image: Planting},
    {name: 'INITIATIVES', text: dummyText, image: dummyImage}
  ],
  volunteerVideoURL: isVideo, // replace this with official video url
  volunteerVideoPoster : Group,
  text:{
    inspireQuote:'"A dream you dream alone is only a dream. A dream you dream together is reality."',
    inspireQuoteAuther:'JOHN LENNON & YOKO ONO',
    siteDescription:'HCN is a "Metamorphic Media" site aimed at elevating Global Consciousness via valuable quotes, affirmations,\narticles, videos and visualizations. Content is being generated to integrate with the forth coming\n"Sanctuary Project" and the services of human and global advancement architecture that the project offers.\nEngage with HCN and holistically advance; physically, mentally, emotionally and spiritually, to possess\ngreater awareness and a surplus capacity to effortlessly help others and the progression of the planet. HCN\nis also a platform that brings together a network of like minded Conscious Creatures (conscious; consumers,\nproducers, creators and communicators) as a collective representation to transform our world. Consume,\nContribute, Disperse, and Sponsor media which uplifts the human spirit, empowers people and nurtures the\nplanet.',
    siteDescriptionSecondPara:'Second Genome, and it\'s messenger system, represents how we as humans and humanity have the ability to\nevolve beyond our current state to collectively create Inter-Generational Global Family Wealth. Connect as a\nConscious Creature on this site and learn more of what that means! ',
    aboutUs:'ABOUT US',
    aboutUsContent:'HCN and the Sanctuary Project are the ofspring of Vision for Humanity, a New Zealand charitable trust\nwith aims to create a Global Family and a Successful Planet. Long term, HCN is intended to disperse\ncontent from The Urban Sanctuary\'s health and wellbeing professionals, guides and workshops.',
    metamorphicTitle:'METAMORPHIC MEDIA',
    metamorphicText:'Elevating Global Consciousness through all forms of information and entertainment. Visualise a world\nwhere the media induces mental / emotional well-bring and social cohesion.',
    metamorphicCaption:'Vision for Media, vision for Humanity',
    metamorphicButton:'TAKE ME DEEPER',
    videoTitle:'OUR VOLUNTEER BASED HCN TEAM',
    videoCaption:'HCN is currently being established by a band of dedicated volunteers directed by the VFH founder Kim\nLarking. Watch this brief video to see out team (video of volunteers and me talking about HCN).',
    urbanButton:'VISIT NOW',
    metawheelTitle:'TAKE THE METAWHEEL JOURNEY',
    metawheelText:'Sanctuary Human Advancement Architecture',
  },
};
