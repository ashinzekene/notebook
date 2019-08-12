export interface Settings {
  theme: AppTheme;
}

export type AppTheme = 'dark'|'pink'| 'blue'| 'black'| 'red'| 'green'|'purple';

type ThemeObject = { [K in AppTheme]: string };

export  const themes: ThemeObject = {
  dark: 'Low light',
  pink: 'Pink',
  blue: 'Blue',
  purple: 'Purple',
  black: 'Black',
  red: 'Red',
  green: 'Green',
};
