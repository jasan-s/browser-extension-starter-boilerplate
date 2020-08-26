import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './App';

import { createDomAnchor } from '../../scripts/dom';

createDomAnchor('rwm-root');
export const proxyStore = new Store();

proxyStore.ready().then(() => {
	ReactDOM.render(
		<Provider store={proxyStore}>
			<App />
		</Provider>
		, document.getElementById('rwm-root'));
});
