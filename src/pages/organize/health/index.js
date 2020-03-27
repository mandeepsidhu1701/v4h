import React from 'react';
import SectionHeading from '../Sections/SectionHeading';
import SectionContent from '../Sections/SectionContent';
import {Container, withStyles} from '@material-ui/core';

import {styles} from './HealthStyle';

function Health({classes}) {
  const title = 'HEALTH';
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci elit, tincidunt quis ligula a, semper molestie tortor. Ut ut libero ullamcorper, tincidunt risus nec, dapibus felis. Morbi tortor dolor, posuere placerat sapien nec, condimentum varius leo. Pellentesque at fringilla risus, ut ultricies sapien. Nunc rhoncus nunc non purus congue, et dictum risus pulvinar. Donec non ante quam. Pellentesque bibendum, turpis et laoreet mattis, quam libero volutpat augue, a consequat diam nulla eget nisi. ';
  const questions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Quisque tempus enim eu eros molestie, eget porta tellus fermentum. Pellentes in ultricies tortor, ac fringilla libero.'
  ];
  const articleContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque luctus nibh ornare ultricies. Sed consequat commodo urna, eu pellentesque enim luctus quis. Suspendisse arcu elit, ullamcorper non mauris et, hendrerit consectetur sem. Aenean ac pretium turpis. Pellentesque vitae justo luctus, sodales enim a, suscipit libero. Sed consequat euismod convallis.  Donec auctor augue id ipsum dictum, vitae euismod……..';

  return (
    <div className={classes.backgroundWrapper}>
      <div className={classes.content}>
        <Container maxWidth="lg">
          <SectionHeading title={title} description={description}></SectionHeading>{' '}
          <SectionContent questions={questions} articleContent={articleContent} />
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styles)(Health);
