import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { IAppState } from '../../../background/store';
import counterActions from '../../../background/store/counter/redux';
import redditActions from '../../../background/store/reddit/redux';

const Counter: React.FC = () => {
	const showerThought = useSelector((state: IAppState) => state.reddit.showerThought)
	const count = useSelector((state: IAppState) => state.counter.count)

	const dispatch = useDispatch()

	const increment = () => {
		dispatch(counterActions.increment())
	}

	const decrement = () => {
		dispatch(counterActions.decrement())
	}
	const showerThoughtRequestStart = () => {
		dispatch(redditActions.showerThoughtRequestStart())
	}
	return (
		<CounterContainer >
			<Display>
				ShowerThought: {showerThought}
				<hr />
				Count: {count}
			</Display>
			<Controls>
				<Button onClick={showerThoughtRequestStart}>Get Showerthought</Button>
				<Button onClick={increment}>+</Button>
				<Button onClick={decrement}>-</Button>

			</Controls>
		</CounterContainer >
	)
}

export default Counter

const CounterContainer = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	padding: 5px;
	margin: 5px;
	background-color: ${p => p.theme.backgroundColor};
`;

const Display = styled('div')`
	font-size: 1rem;
	justify-self: center;
	text-align: center;
	color: ${p => p.theme.color};
`;

const Controls = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 200px;
`;

const Button = styled('button')`
	display: inline-block;
	position: relative;
	border: 1px solid transparent;
	border-bottom: 4px solid rgba(0,0,0,0.21);
	border-radius: 4px;
	background: linear-gradient(rgba(27,188,194,1) 0%, rgba(24,163,168,1) 100%);
	color: white;
	text-shadow: 0 1px 0 rgba(0,0,0,0.15);
	text-decoration: none;
	cursor: pointer;
	outline: none;
	user-select: none;
	margin-top: 1.6em;
	&:active {
		background: #169499;
	}
`;
