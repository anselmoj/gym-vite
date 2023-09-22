import { all, takeLatest } from 'redux-saga/effects'
import { athleteActions } from '..'
import list from './list'
import enable from './enable'
import disable from './disable'
import create from './create'
import edit from './edit'
import show from './show'
import select from './selectAthlete'

const athleteSagas = all([
  takeLatest(athleteActions.listRequest, list),
  takeLatest(athleteActions.enableRequest, enable),
  takeLatest(athleteActions.disableRequest, disable),
  takeLatest(athleteActions.createRequest, create),
  takeLatest(athleteActions.editRequest, edit),
  takeLatest(athleteActions.showRequest, show),
  takeLatest(athleteActions.selectRequest, select),
])

export default athleteSagas
