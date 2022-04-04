export const lgListData: lgInterface[] = [
  { language: 'Français', abbr: 'Fr', available: true },
  { language: 'English', abbr: 'En', available: true },
  { language: 'Deutsch', abbr: 'De', available: false },
  { language: '日本語', abbr: 'Ja', available: false },
  { language: '한국어', abbr: 'Ko', available: false },
  { language: 'Português', abbr: 'Pt', available: false },
  { language: 'ਪੰਜਾਬੀ', abbr: 'Pa', available: false },
  { language: 'русский', abbr: 'Ru', available: false },
  { language: 'Español', abbr: 'Es', available: false },
];

export interface lgInterface {
  language: string;
  abbr: string;
  available: boolean;
}
