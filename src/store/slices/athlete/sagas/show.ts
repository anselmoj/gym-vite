import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import httpClient from '../../../../services'
import { IShowAthleteRequestAction } from '../reducers/show/request'
import { athleteActions } from '..'

// interface ShowUserResponse {
//   name: string
//   gender: string
// }

export default function* show(
  action: PayloadAction<IShowAthleteRequestAction>,
) {
  try {
    yield call(
      httpClient.get,
      `http://localhost:3334/gym-students/${action.payload.data.id}`,
    )

    yield put(athleteActions.showSuccess())
  } catch (error) {
    yield put(athleteActions.showFailure())
  }
}
