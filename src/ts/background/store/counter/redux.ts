import { createActions, createReducer } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	increment: null,
	decrement: null,
})

export const counterTypes = Types
export default Creators

/* ------------- Reducer ------------- */

export interface ICounterReducer {
	count: number
}


const INITIAL_STATE: ICounterReducer = {
	count: 0,
}

export const handleIncrement = (state: ICounterReducer = INITIAL_STATE): ICounterReducer => {
	return { ...state, count: state.count + 1 }
}
export const handleDecrement = (state: ICounterReducer = INITIAL_STATE): ICounterReducer => {
	return { ...state, count: state.count - 1 }
}

// map our action types to our reducer functions
export const HANDLERS = {
	[Types.INCREMENT]: handleIncrement,
	[Types.DECREMENT]: handleDecrement,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
