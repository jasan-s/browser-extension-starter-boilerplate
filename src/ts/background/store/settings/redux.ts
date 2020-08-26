import { createActions, createReducer } from 'reduxsauce'
import { ThemeTypes } from './../../../styles/themes';


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	darkTheme: null,
	lightTheme: null,
})

export const counterTypes = Types
export default Creators

/* ------------- Reducer ------------- */

export interface IAppSettingsReducer {
	theme: ThemeTypes;
}

const INITIAL_STATE: IAppSettingsReducer = {
	theme: 'light'
};

export const setDarkTheme = (state: IAppSettingsReducer = INITIAL_STATE): IAppSettingsReducer => {
	return { ...state, theme: 'dark' }
}
export const setLightTheme = (state: IAppSettingsReducer = INITIAL_STATE): IAppSettingsReducer => {
	return { ...state, theme: 'light' }
}

// map our action types to our reducer functions
export const HANDLERS = {
	[Types.DARK_THEME]: setDarkTheme,
	[Types.LIGHT_THEME]: setLightTheme,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
