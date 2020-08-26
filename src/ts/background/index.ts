import { createStore, applyMiddleware, compose, } from 'redux';
import { wrapStore } from 'webext-redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './store';
import sagas from './sagas'
import logger from 'redux-logger'


const sagaMiddleware = createSagaMiddleware()
const middlewares = [];
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === `development`) {

	middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
sagaMiddleware.run(sagas)

wrapStore(store);





// on NewTab action
chrome.tabs.onUpdated.addListener((tabId: number, info, tab: any): void => {
	if (info.status === 'complete') {
		/* checking & injecting stuff */
		sendMessageToContentToInjectScript()
	}
});
function doInCurrentTab(tabCallback: any) {
	chrome.tabs.query({ currentWindow: true, active: true }, (tabArray) => {
		tabCallback(tabArray[0])
	})
}

function sendMessageToContentToInjectScript() {
	doInCurrentTab((tab: any) => {
		// Send a message to a tab which has your content script injected
		console.log('sending message to tab to inject script: ' + tab.url)
		if (tab && tab.id) {
			chrome.tabs.sendMessage(tab.id, {
				type: 'ADD_INJECTED_SCRIPT',
			})
		}

	})
}
