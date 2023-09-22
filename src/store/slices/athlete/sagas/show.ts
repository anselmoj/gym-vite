import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import httpClient from '../../../../services'
import { IShowAthleteRequestAction } from '../reducers/show/request'
import { athleteActions } from '..'
import { AxiosResponse } from 'axios'

interface ShowUserResponse {
  gender: string
  name: string
  is_active: boolean
  id: number
}

export default function* show(
  action: PayloadAction<IShowAthleteRequestAction>,
) {
  try {
    const response: AxiosResponse<ShowUserResponse> = yield call(
      httpClient.get,
      `http://localhost:3334/gym-students/${action.payload.data.id}`,
    )

    yield put(
      athleteActions.showSuccess({
        data: {
          gender: response.data.gender,
          id: response.data.id,
          is_active: response.data.is_active,
          name: response.data.name,
        },
      }),
    )
  } catch (error) {
    yield put(athleteActions.showFailure())
  }
}
