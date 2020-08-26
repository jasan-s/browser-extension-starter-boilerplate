import { all } from 'redux-saga/effects'

/* ------------- Sagas ------------- */

import { redditSagas } from '../store/reddit/saga'

/* ------------- Combine All Sagas in Single RootSaga ------------- */

export default function* rootSaga() {
	yield all([...redditSagas])
}
