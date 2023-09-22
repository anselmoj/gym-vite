import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'

import { IEnableAthleteRequestAction } from '../reducers/enable/request'
import httpClient from '../../../../services'
import { athleteActions } from '..'

export default function* enable(
  action: PayloadAction<IEnableAthleteRequestAction>,
) {
  try {
    yield call(
      httpClient.patch,
      `http://localhost:3334/gym-students/${action.payload.data.id}/enable`,
    )
    yield put(athleteActions.enableSuccess())
    action.payload.functions.success()
  } catch (error) {
    yield put(athleteActions.enableFailure())
  }
}
