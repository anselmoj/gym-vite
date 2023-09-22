import { all } from 'redux-saga/effects'
import userSagas from './slices/athlete/sagas'

function* rootSagas() {
  yield all([userSagas])
}

export default rootSagas
