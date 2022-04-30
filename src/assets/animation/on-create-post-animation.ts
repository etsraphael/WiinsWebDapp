import { state, style, trigger } from '@angular/animations';

export const SpaceStoryCreatePostAnimation = [
  trigger('onWrittenPost', [
    state(
      'default',
      style({
        width: '50%',
        transition: 'all 0.5s',
      })
    ),
    state(
      'post',
      style({
        width: '100%',
        transition: 'all 0.5s',
      })
    ),
    state(
      'picture',
      style({
        padding: 0,
        width: '0%',
        transition: 'all 0.5s',
      })
    ),
  ]),
  trigger('onPicturePost', [
    state(
      'default',
      style({
        width: '50%',
        transition: 'all 0.5s',
      })
    ),
    state(
      'post',
      style({
        padding: 0,
        width: '0%',
        transition: 'all 0.5s',
      })
    ),
    state(
      'picture',
      style({
        width: '100%',
        transition: 'all 0.5s',
      })
    ),
  ]),
];
