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
};
