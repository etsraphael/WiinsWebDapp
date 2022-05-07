export const landingPageNavData: btnLandingPageInterface[] = [
  {
    name: 'Ecosystem',
    id: 'ecosystem',
    title: 'LANDING_PAGE.on-boarding.ecosystem',
  },
  { name: 'Team', id: 'team', title: 'LANDING_PAGE.on-boarding.team' },
  {
    name: 'Token',
    id: 'token',
    title: 'LANDING_PAGE.on-boarding.token',
  },
  {
    name: 'Contact',
    id: 'contact',
    title: 'LANDING_PAGE.on-boarding.contact',
  },
];

export const dataSectionWithCarousel: landingPageSectionWithCarousel[] = [
  {
    title: 'title1',
    desc: 'lksdafdso fnsdlfnjsd kfjdskf ksdjhfk dksfjhs dfksdjhfsdkjf sdkfj',
    imgList: [
      '../../../../../assets/img/landing-page/news-feed.svg',
      '../../../../../assets/img/landing-page/news-feed.svg',
    ],
  },
  {
    title: 'title2',
    desc: 'lksdafdso fnsdlfnjsd kfjdskf ksdjhfk dksfjhs dfksdjhfsdkjf sdkfj',
    imgList: [
      '../../../../../assets/img/landing-page/news-feed.svg',
      '../../../../../assets/img/landing-page/news-feed.svg',
    ],
  },
  {
    title: 'title3',
    desc: 'lksdafdso fnsdlfnjsd kfjdskf ksdjhfk dksfjhs dfksdjhfsdkjf sdkfj',
    imgList: [
      '../../../../../assets/img/landing-page/news-feed.svg',
      '../../../../../assets/img/landing-page/news-feed.svg',
    ],
  },
];

export interface landingPageSectionWithCarousel {
  title: string;
  desc: string;
  imgList: string[];
}

export interface btnLandingPageInterface {
  name: string;
  id: string;
  title: string;
}
