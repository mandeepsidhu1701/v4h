import React from 'react';
import * as messageKeys from '@/locales';
import {styles} from './HealthStyle';
// Styled Component
import {Container, withStyles} from '@material-ui/core';
import SectionHeading from '../Sections/SectionHeading';
import SectionContent from '../Sections/SectionContent';
// Resources
import articleBg from '@/assets/images/organize/health_article.png';
import videoBg from '@/assets/images/organize/health_video.png';
import globeIcon from '@/assets/images/icons/globe-02.png';
import sanctuaryIcon from '@/assets/images/icons/sanctuary-03.png';
import humanImage from '@/assets/images/layout/landing/personHealth.png';
import InitiativesBg from '@/assets/images/organize/InitiativesBg.png';

// Heading mock data
const title = messageKeys.ORGANIZE_HEALTHPAGE_TITLE;
const subHeadingData = [messageKeys.ORGANIZE_HEALTHPAGE_SUBTITLE_1, messageKeys.ORGANIZE_HEALTHPAGE_SUBTITLE_2];

const themeColor = '#52ac0a';
const btnColor = '#5fd26e';

// Section content mock data
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci elit, tincidunt quis ligula a, semper molestie tortor. Ut ut libero ullamcorper, tincidunt risus nec, dapibus felis. Morbi tortor dolor, posuere placerat sapien nec, condimentum varius leo. Pellentesque at fringilla risus, ut ultricies sapien. Nunc rhoncus nunc non purus congue, et dictum risus pulvinar. Donec non ante quam. Pellentesque bibendum, turpis et laoreet mattis, quam libero volutpat augue, a consequat diam nulla eget nisi. ';
const questions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Quisque tempus enim eu eros molestie, eget porta tellus fermentum. Pellentes in ultricies tortor, ac fringilla libero.'
];
const articleContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque luctus nibh ornare ultricies. Sed consequat commodo urna, eu pellentesque enim luctus quis. Suspendisse arcu elit, ullamcorper non mauris et, hendrerit consectetur sem. Aenean ac pretium turpis. Pellentesque vitae justo luctus, sodales enim a, suscipit libero. Sed consequat euismod convallis.  Donec auctor augue id ipsum dictum, vitae euismod……..';

const videoDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus velit, aliquet sed quam sit amet, pellentesque porttitor eros. In hac habitasse platea dictumst.';
const videoName = 'VIDEO NAME';

const guideContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci elit, tincidunt quis ligula a, semper molestie tortor. Ut ut libero ullamcorper, tincidunt risus nec, dapibus felis. Morbi tortor dolor, posuere placerat sapien nec, condimentum varius leo. Pellentesque at fringilla risus, ut ultricies sapien. Nunc rhoncus nunc non purus congue, et dictum risus pulvinar. Donec non ante quam. Pellentesque bibendum, turpis et laoreet mattis, quam libero volutpat augue, a consequat diam nulla eget nisi. ';

function Health({classes}) {
  const subHeading = () => {
    return (
      <React.Fragment>
        <div className={classes.oneLink}>
          <img className={classes.linkIcon} src={globeIcon} />
          <span>{subHeadingData[0]}</span>
        </div>
        <div className={classes.oneLink}>
          <img className={classes.linkIcon} src={sanctuaryIcon} />
          <span>{subHeadingData[1]}</span>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className={classes.backgroundWrapper}>
      <div className={classes.content}>
        <Container maxWidth="lg">
          <SectionHeading
            humanImage={humanImage}
            title={title}
            description={description}
            subHeading={subHeading}
          ></SectionHeading>{' '}
          <SectionContent
            questions={questions}
            articleContent={articleContent}
            textColor={themeColor}
            btnColor={btnColor}
            btnTitle={title}
            articleBg={articleBg}
            videoBg={videoBg}
            videoDescription={videoDescription}
            videoName={videoName}
            guideContent={guideContent}
            initiativesBg={InitiativesBg}
          />
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styles)(Health);
