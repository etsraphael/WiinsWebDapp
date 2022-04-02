export const landingPageNavData: btnLandingPageInterface[] = [
  {
    name: 'Ecosystem',
    title: 'LANDING_PAGE.on-boarding.ecosystem',
    fragment: 'ecosystem',
  },
  { name: 'Team', title: 'LANDING_PAGE.on-boarding.team', fragment: 'team' },
  {
    name: 'Token ZION',
    title: 'LANDING_PAGE.on-boarding.token-zion',
    fragment: 'token',
  },
  {
    name: 'Contact',
    title: 'LANDING_PAGE.on-boarding.contact',
    fragment: 'contact',
  },
];

export interface btnLandingPageInterface {
  name: string;
  title: string;
  fragment: string;
}
