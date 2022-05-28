// (Specifically for Landing Page)
export const socialMediaLists: socialLists[] = [
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/pages/category/Photography-Videography/Wiins-109652504066491/',
    src: '../../../../../assets/img/core/icon/Facebook.svg',
  },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/wiins___/',
    src: '../../../../../assets/img/core/icon/Instagram.svg',
  },
  {
    name: 'Linkedin',
    path: 'https://www.linkedin.com/company/espace-wiin-s/',
    src: '../../../../../assets/img/core/icon/Linkedin.svg',
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/espace_s',
    src: '../../../../../assets/img/core/icon/Twitter.svg',
  },
  {
    name: 'Github',
    path: 'https://github.com/etsraphael/WiinsWebDapp',
    src: '../../../../../assets/img/core/icon/Github.svg',
  },
];

// (Specifically for Coming Soon)
export const socialIconsLists: socialLists[] = [
  {
    name: 'Discord',
    path: 'https://discord.gg/Kpdh29U6',
    src: '../../../../assets/img/core/icon/Discord.svg',
  },
  {
    name: 'Github',
    path: 'https://github.com/etsraphael/WiinsWebDapp',
    src: '../../../../assets/img/core/icon/Github.svg',
  },
];

export interface socialLists {
  name: string;
  path: string;
  src: string;
}
