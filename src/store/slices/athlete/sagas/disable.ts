import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import httpClient from '../../../../services'
import { IDisableAthleteRequestAction } from '../reducers/disable/request'
import { athleteActions } from '..'

export default function* disable(
  action: PayloadAction<IDisableAthleteRequestAction>,
) {
  try {
    yield call(
      httpClient.patch,
      `http://localhost:3334/gym-students/${action.payload.data.id}/disable`,
    )
    yield put(athleteActions.disableSuccess())
    action.payload.functions.success()
  } catch (error) {
    yield put(athleteActions.disableFailure())
  }
}
