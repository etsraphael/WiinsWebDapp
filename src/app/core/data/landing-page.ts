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
    title: 'LANDING_PAGE.space-news-feed-disover.title',
    desc: 'LANDING_PAGE.space-news-feed-disover.text',
    imgList: [
      '../../../../../assets/img/landing-page/news-feed.svg',
      '../../../../../assets/img/landing-page/news-feed.svg',
    ],
  },
  {
    title: 'LANDING_PAGE.space-messenger.title',
    desc: 'LANDING_PAGE.space-messenger.text',
    imgList: [
      '../../../../../assets/img/landing-page/messenger-phone-1.svg',
      '../../../../../assets/img/landing-page/messenger-phone-2.svg',
    ],
  },
  {
    title: 'LANDING_PAGE.space-profil.title',
    desc: 'LANDING_PAGE.space-profil.text',
    imgList: [
      '../../../../../assets/img/landing-page/profile-phone.svg',
    ],
  },
  {
    title: 'LANDING_PAGE.space-music-video.title',
    desc: 'LANDING_PAGE.space-music-video.text',
    imgList: [
      '../../../../../assets/img/landing-page/phone-music-1.svg',
      '../../../../../assets/img/landing-page/phone-music-2.svg',
      '../../../../../assets/img/landing-page/phone-video-1.svg',
      '../../../../../assets/img/landing-page/phone-video-2.svg',
    ],
  },
];

export const coFounderData: coFounderInterface[] = [
  {
    name: 'Raphaël',
    img: '../../../../../assets/img/landing-page/raphael.svg',
    role: 'LANDING_PAGE.space-team.fullstack-developper'
  },
  {
    name: 'Lévine',
    img: '../../../../../assets/img/landing-page/levine.svg',
    role: 'LANDING_PAGE.space-team.manager'
  },
  {
    name: 'Nathanaël',
    img: '../../../../../assets/img/landing-page/nathanael.svg',
    role: 'LANDING_PAGE.space-team.front-end-developper'
  }
]

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

export interface coFounderInterface {
  name: string;
  img: string;
  role: string
}
