export const lgListData: lgInterface[] = [
  { language: 'Français', abbr: 'Fr', available: true },
  { language: 'English', abbr: 'En', available: true },
];

export interface lgInterface {
  language: string;
  abbr: string;
  available: boolean;
}
