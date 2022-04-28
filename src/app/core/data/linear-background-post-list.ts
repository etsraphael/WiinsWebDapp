import { BackgroundPostModel } from "../model/publication/feed-publication.model";

export const linearBgPost: BackgroundPostModel[] = [
  new BackgroundPostModel(['red', 'green'], {
    start: [0, 0],
    end: [1, 1],
  }),

  // choice1 = 'linear-gradient(135deg, #1BB7E9 10%, #2B418D 100%)';
  //   choice2 = 'linear-gradient(135deg, #5CC928 0%, #157155 100%)';
  //   choice3 = 'linear-gradient(135deg, #D92E2E 10%, #6C1B1B 100%)';
  //   choice4 = 'linear-gradient(135deg, #E11FD9 5%, #761D72 100%)';
  //   choice5 = 'linear-gradient(135deg, #FB8A06 10%, #844C0A 100%)';
  //   choice6 = 'linear-gradient(135deg, #FBF10E 0%, #898400 100%)';
  // found your stuff there https://uigradients.com/#TaranTado
];