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
      'https://bafybeigeqixt6k7vjtghxwij7l3w3e4zbnp6nsoh566zx5a4gsti5sz54q.ipfs.nftstorage.link/?filename=news-feed-1.svg',
      'https://bafybeifnprfwe6ejydz72jnvvpz7rdlvmakz6crxmylaa6smpax3s6apou.ipfs.nftstorage.link/?filename=news-feed-2.svg',
    ],
  },
  {
    title: 'LANDING_PAGE.space-messenger.title',
    desc: 'LANDING_PAGE.space-messenger.text',
    imgList: [
      'https://bafkreibpqgcfumlwfbvxqoiqfuy6ugfadkvs2kpsxwo7l6tzebyz3bv3ou.ipfs.nftstorage.link/?filename=messenger-phone-1.svg',
      'https://bafkreicmpfrcsbiejkm3cjnjop22ykshr5brawcjsdnesstgmhb65kvo54.ipfs.nftstorage.link/?filename=messenger-phone-2.svg',
    ],
  },
  {
    title: 'LANDING_PAGE.space-profil.title',
    desc: 'LANDING_PAGE.space-profil.text',
    imgList: [
      'https://bafybeiawtlny3v6e23l54mubbundc3uckiy5catmovvgtk2hoccewa2ifi.ipfs.nftstorage.link/?filename=profile-phone.svg',
    ],
  },
  {
    title: 'LANDING_PAGE.space-music-video.title',
    desc: 'LANDING_PAGE.space-music-video.text',
    imgList: [
      'https://bafybeiej6zvf5p3gimwcvupjmid6u2rjzglr4jzhapcitep2w7nox4xtl4.ipfs.nftstorage.link/?filename=phone-music-1.svg',
      'https://bafkreiauphlnvsh35shh2q2z5orr2jhbbabwvxh5vbwamty5wmos5whqpe.ipfs.nftstorage.link/?filename=phone-music-2.svg',
      'https://bafkreicflyvetyl2pgfdvhj7mn5qvmpj5ls7cjjfiio7f2amoh44eqesiu.ipfs.nftstorage.link/?filename=phone-video-1.svg',
      'https://bafkreigzlrpds7o2c5m4vntavc6m36kxmzr4piap53ga4pjrcbyqpaq5jq.ipfs.nftstorage.link/?filename=phone-video-2.svg',
    ],
  },
];

export const coFounderData: coFounderInterface[] = [
  {
    name: 'Raphaël',
    img: 'https://bafkreidfqrs4kzm3dh4fwpj6zggbsoy7llsa76u4fbao6v2a5kqmentvli.ipfs.nftstorage.link/?filename=raphael.svg',
    role: 'LANDING_PAGE.space-team.fullstack-developper',
  },
  {
    name: 'Lévine',
    img: 'https://bafkreidpiumnpayeogblrdpicrfxcity4jajsyabck3wkhq36wol2fqgvm.ipfs.nftstorage.link/?filename=levine.svg',
    role: 'LANDING_PAGE.space-team.manager',
  },
  {
    name: 'Nathanaël',
    img: 'https://bafkreigqy3sjd57dskrdmbze4s5z7locjvr4srh5k6x4wikkhfbrrlyyde.ipfs.nftstorage.link/?filename=nathanael.svg',
    role: 'LANDING_PAGE.space-team.front-end-developper',
  },
];

export const firstCommunityData: string[] = [
  'Richard R.',
  'Hakim D.',
  'Méryline D.',
  'Thierry T.',
  'Josh',
  'Celine D.',
  'Tony',
];

export const repositoryLinkData: repositoryLinkInterface[] = [
  {
    desc: 'Web : Web3, Angular, NgrxStore, Bootstrap (OpenSource)',
    link: 'https://github.com/etsraphael/WiinsWebDapp',
  },
  {
    desc: 'App : Web3, React Native, Redux (OpenSource)',
    link: 'https://github.com/etsraphael/WiinsApp',
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

export interface coFounderInterface {
  name: string;
  img: string;
  role: string;
}

export interface repositoryLinkInterface {
  desc: string;
  link: string;
}
