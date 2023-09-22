import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import httpClient from '../../../../services'
import { ICreateAthleteRequestAction } from '../reducers/create/request'
import { athleteActions } from '..'

interface ListAthleteRequestBody {
  gender: string
  is_active: boolean
  name: string
}

export default function* create(
  action: PayloadAction<ICreateAthleteRequestAction>,
) {
  try {
    const body: ListAthleteRequestBody = {
      gender: action.payload.data.gender,
      name: action.payload.data.name,
      is_active: action.payload.data.is_active,
    }

    yield call(httpClient.post, 'http://localhost:3334/gym-students', body)

    yield put(athleteActions.createSuccess())
    action.payload.onSuccess()
  } catch (error) {
    yield put(athleteActions.createFailure())
  }
}
