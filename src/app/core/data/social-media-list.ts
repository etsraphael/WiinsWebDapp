// (Specifically for Landing Page)
export const socialMediaLists: socialLists[] = [
  {
    name: 'facebook',
    path: 'https://www.facebook.com/pages/category/Photography-Videography/Wiins-109652504066491/',
    src: '../../../../../assets/img/core/icon/facebook.svg',
  },
  {
    name: 'instagram',
    path: 'https://www.instagram.com/wiins___/',
    src: '../../../../../assets/img/core/icon/instagram.svg',
  },
  {
    name: 'linkedin',
    path: 'https://www.linkedin.com/company/espace-wiin-s/',
    src: '../../../../../assets/img/core/icon/linkedin.svg',
  },
  {
    name: 'twitter',
    path: 'https://twitter.com/espace_s',
    src: '../../../../../assets/img/core/icon/twitter.svg',
  },
  {
    name: 'github',
    path: 'https://github.com/etsraphael/WiinsWebDapp',
    src: '../../../../../assets/img/core/icon/github.svg',
  },
];

// (Specifically for Coming Soon)
export const socialIconsLists: socialLists[] = [
  {
    name: 'discord',
    path: 'https://discord.gg/Kpdh29U6',
    src: '../../../assets/img/coming-soon/discord.svg',
  },
  {
    name: 'github',
    path: 'https://github.com/etsraphael/WiinsWebDapp',
    src: '../../../../assets/img/core/icon/github.svg',
  },
];

export interface socialLists {
  name: string;
  path: string;
  src: string;
}
