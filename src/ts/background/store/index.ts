import { combineReducers } from 'redux';
import { reducer as counterReducer, ICounterReducer } from './counter/redux';
import { reducer as redditReducer, IRedditReducer } from './reddit/redux';
import { reducer as settingsReducer, IAppSettingsReducer } from './settings/redux';


export interface IAppState {
	settings: IAppSettingsReducer
	counter: ICounterReducer
	reddit: IRedditReducer
}

const reducers = combineReducers<IAppState>({
	settings: settingsReducer,
	counter: counterReducer,
	reddit: redditReducer,
});

export default reducers;
