import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import httpClient from '../../../../services'
import { athleteActions } from '..'
import { ISelectAthletesRequestAction } from '../reducers/selectAthlete/request'
import { AxiosResponse } from 'axios'

interface ListSelectAthleteRequestQuery {
  page: number
}

interface ListSelectAthleteResponse {
  list: {
    gender: string
    is_active: boolean
    name: string
    id: number
  }[]
  total_pages: number
}

export default function* select(
  action: PayloadAction<ISelectAthletesRequestAction>,
) {
  try {
    const params: ListSelectAthleteRequestQuery = {
      page: action.payload.data.page,
    }

    const response: AxiosResponse<ListSelectAthleteResponse> = yield call(
      httpClient.get,
      'http://localhost:3334/gym-students',
      { params },
    )

    yield put(
      athleteActions.selectSuccess({
        data: {
          list: response.data.list,
        },
      }),
    )
  } catch (error) {
    yield put(athleteActions.selectFailure())
  }
}
