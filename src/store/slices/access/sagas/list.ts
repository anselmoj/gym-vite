import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import httpClient from '../../../../services'
import { accessActions } from '..'
import { IListAccessRequestAction } from '../reducers/list/request'

interface ListAccessRequestQuery {
  page: number
}

interface ListAccessResponse {
  list: {
    date_time: string
    gym_student: {
      id: number
      name: string
    }
    id: number
    type: string
  }[]
  total_pages: number
}

export default function* list(action: PayloadAction<IListAccessRequestAction>) {
  try {
    const params: ListAccessRequestQuery = {
      page: action.payload.data.page,
    }

    const response: AxiosResponse<ListAccessResponse> = yield call(
      httpClient.get,
      'http://localhost:3334/access',
      { params },
    )

    if (response.status === 204) {
      yield put(
        accessActions.listSuccess({
          data: {
            list: [],
          },
        }),
      )
      return
    }

    yield put(
      accessActions.listSuccess({
        data: {
          totalPages: 1,
          list: response.data.list,
        },
      }),
    )
  } catch (error) {
    yield put(accessActions.listFailure())
  }
}
