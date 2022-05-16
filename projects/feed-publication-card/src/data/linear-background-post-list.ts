import { BackgroundPostModel } from '@wiins/common-models';

/* 
  Orientations configuration:
  [0, 0] bottom-left
  [1, 0] top-left
  [1, 1] top-right
  [0, 1] bottom-right
*/

export const linearBgPost: BackgroundPostModel[] = [
  new BackgroundPostModel(['#8E2DE2', '#4A00E0'], {
    start: [1, 1],
    end: [0, 0],
  }),
  new BackgroundPostModel(['red', 'green'], {
    start: [0, 0],
    end: [1, 0],
  }),
  new BackgroundPostModel(['blue', 'pink'], {
    start: [1, 0],
    end: [0, 1],
  }),
];
