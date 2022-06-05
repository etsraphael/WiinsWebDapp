export const navigationRoute: navbarButton[] = [
  { icon: 'bi-house', link: '', fontSize: '2rem' },
  { icon: 'bi-music-note-beamed', link: '', fontSize: '2rem' },
  { icon: 'bi-chat-right-text', link: '', fontSize: '1.7rem' },
  { icon: 'bi-collection-play', link: '', fontSize: '2rem' },
  { icon: 'bi-people-fill', link: '', fontSize: '2rem' },
];

export interface navbarButton {
  icon: string;
  link: string;
  fontSize: string;
}
