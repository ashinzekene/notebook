export interface Settings {
  theme: AppTheme;
}

export type AppTheme = 'dark'|'pink'| 'blue'| 'black'| 'red'| 'green';

type ThemeObject = { [K in AppTheme]: string };

export  const themes: ThemeObject = {
  dark: 'Low light',
  pink: 'Pink',
  blue: 'Blue',
  black: 'Black',
  red: 'Red',
  green: 'Green',
};
