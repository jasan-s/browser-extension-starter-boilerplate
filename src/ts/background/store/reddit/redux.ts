import { createActions, createReducer } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	showerThoughtRequestStart: null,
	showerThoughtFetching: null,
	showerThoughtFulfilled: ['showerThought'],
	showerThoughtRejected: ['error'],
})

export const redditTypes = Types
export default Creators

/* ------------- Reducer ------------- */

export interface IRedditReducer {
	fetching: boolean
	showerThought?: string
	error?: string
}


const INITIAL_STATE: IRedditReducer = {
	showerThought: undefined,
	fetching: false,
	error: undefined,
}

export const handleShowerThoughtFetching = (state: IRedditReducer = INITIAL_STATE): IRedditReducer => {
	return { ...state, fetching: true }
}

export const handleShowerThoughtFulfilled =
	(state: IRedditReducer = INITIAL_STATE, action: typeof Types): IRedditReducer => {
		return {
			...state,
			fetching: false,
			showerThought: action.showerThought,
			error: undefined,
		}
	}

export const handleShowerThoughtRejected =
	(state: IRedditReducer = INITIAL_STATE, action: typeof Types): IRedditReducer => {
		return {
			...state,
			fetching: false,
			showerThought: undefined,
			error: action.error,
		}
	}

// map our action types to our reducer functions
export const HANDLERS = {
	[Types.SHOWER_THOUGHT_FETCHING]: handleShowerThoughtFetching,
	[Types.SHOWER_THOUGHT_FULFILLED]: handleShowerThoughtFulfilled,
	[Types.SHOWER_THOUGHT_REJECTED]: handleShowerThoughtRejected,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
