import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import httpClient from '../../../../services'
import { IEditAthleteRequestAction } from '../reducers/edit/request'
import { athleteActions } from '..'

interface ListAthleteRequestBody {
  gender: string
  name: string
}

export default function* edit(
  action: PayloadAction<IEditAthleteRequestAction>,
) {
  try {
    const body: ListAthleteRequestBody = {
      name: action.payload.data.name,
      gender: action.payload.data.gender,
    }

    yield call(
      httpClient.put,
      `http://localhost:3334/gym-students/${action.payload.id}`,
      body,
    )

    yield put(athleteActions.editSuccess())
    action.payload.onSuccess()
  } catch (error) {
    yield put(athleteActions.editFailure())
  }
}
