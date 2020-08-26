import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Counter from './components/Counter'
import { lightTheme, darkTheme } from '../../styles/themes'

const App: React.FC = () => {

	useEffect(() => {
		console.log('app mounted')
		addInjectedScriptToPage()
	}, [])

	const addInjectedScriptToPage = () => {
		// inject a script into the page
		const injected = document.createElement('script');
		injected.src = chrome.extension.getURL('injected.js');
		(document.head || document.documentElement).appendChild(injected);
		// remove from page
		injected.onload = () => {
			injected.parentNode?.removeChild(injected);
		};
	}
	return (
		<ThemeProvider theme={darkTheme}>
			<React.Fragment>
				<AppContainer>
					<Counter />
				</AppContainer>
			</React.Fragment>
		</ThemeProvider >
	)

}

export default App

const AppContainer = styled('div')`
  position: fixed;
  z-index: 9;
  bottom: 0;
  right: 0;
  background-color: ${(p) => p.theme.backgroundColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
