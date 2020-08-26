import { put, takeLatest, call } from 'redux-saga/effects'
import redditActions, { redditTypes } from './redux'
import { getShowerThought } from './api'

/* ------------- Worker Sagas ------------- */
function* showerThought() {
	try {
		// sets loading to true
		yield put(redditActions.showerThoughtFetching())
		// makes api call
		const response = yield call(getShowerThought)
		// dispatch a success action to the store with the new showerThought
		yield put(redditActions.showerThoughtFulfilled(response))
	} catch (error) {
		// dispatch a failure action to the store with the error
		yield put(redditActions.showerThoughtRejected(error))
	}
}

/* ------------- Watcher Sagas ------------- */

export const redditSagas = [
	// some sagas only receive an action
	takeLatest(redditTypes.SHOWER_THOUGHT_REQUEST_START, showerThought),
]
