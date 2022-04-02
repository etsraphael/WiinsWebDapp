export const landingPageNavData: btnLandingPageInterface[] = [
  {
    name: 'Ecosystem',
    id: 'ecosystem',
    title: 'LANDING_PAGE.on-boarding.ecosystem'
  },
  { name: 'Team', id: 'team', title: 'LANDING_PAGE.on-boarding.team' },
  {
    name: 'Token',
    id: 'token',
    title: 'LANDING_PAGE.on-boarding.token'
  },
  {
    name: 'Contact',
    id: 'contact',
    title: 'LANDING_PAGE.on-boarding.contact'
  },
];

export interface btnLandingPageInterface {
  name: string;
  id: string;
  title: string;
}
