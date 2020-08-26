import { DefaultTheme } from 'styled-components';

export type ThemeTypes = 'light' | 'dark';

export const lightTheme: DefaultTheme = {
	backgroundColor: 'lightblue',
	color: '#424242'
};

export const darkTheme: DefaultTheme = {
	backgroundColor: '#181818',
	color: '#fff'
};

export const themes = {
	light: lightTheme,
	dark: darkTheme,
};
