import { PayloadAction } from '@reduxjs/toolkit'
import { IListAthletesRequestAction } from '../reducers/list/request'
import { call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import httpClient from '../../../../services'
import { athleteActions } from '..'

interface ListAthleteRequestQuery {
  page: number
}

interface ListAthleteResponse {
  list: {
    gender: string
    is_active: boolean
    name: string
    id: number
  }[]
  total_pages: number
}

export default function* list(
  action: PayloadAction<IListAthletesRequestAction>,
) {
  try {
    const params: ListAthleteRequestQuery = {
      page: action.payload.data.page,
    }

    const response: AxiosResponse<ListAthleteResponse> = yield call(
      httpClient.get,
      'http://localhost:3334/gym-students',
      { params },
    )

    if (response.status === 204) {
      yield put(
        athleteActions.listSuccess({
          data: {
            list: [],
          },
        }),
      )
      return
    }

    yield put(
      athleteActions.listSuccess({
        data: {
          totalPages: 1,
          list: response.data.list,
        },
      }),
    )
  } catch (error) {
    yield put(athleteActions.listFailure())
  }
}
