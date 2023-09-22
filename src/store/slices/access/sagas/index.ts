import { all, takeLatest } from 'redux-saga/effects'
import { accessActions } from '..'
import list from './list'
import create from './create'

const sagas = all([
  takeLatest(accessActions.listRequest, list),
  takeLatest(accessActions.createRequest, create),
])

export default sagas
