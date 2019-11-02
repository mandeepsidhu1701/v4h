import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  BackArrow, Dots, ChristmasDate, Comment, Envelope, 
  ForwardArrow, Favorite, FavoriteOrigin, ThumbUp,
  TagCord, WallClock
} from './icons';

export class Icon extends Component {
  icons = {
    'back-arrow': BackArrow,
    'forward-arrow': ForwardArrow,
    'dots': Dots,
    'christmas-date': ChristmasDate,
    'comment': Comment,
    'envelope': Envelope,
    'favorite': Favorite,
    'favorite-o': FavoriteOrigin,
    'thumb-up': ThumbUp,
    'tag-cord': TagCord,
    'wall-clock': WallClock
  }
  GetIcons = (name) => {
    return this.icons[name];
  }
  render() {
    const { name, ...other } = this.props;
    const Icon = this.GetIcons(name);
    return (
      <SvgIcon {...other}>
        <Icon />
      </SvgIcon>
    )
  }
}

export default Icon
