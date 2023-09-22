import { all } from 'redux-saga/effects'
import athleteSagas from './slices/athlete/sagas'
import accessSagas from './slices/access/sagas'

function* rootSagas() {
  yield all([athleteSagas, accessSagas])
}

export default rootSagas
