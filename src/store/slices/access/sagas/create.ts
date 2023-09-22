import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import httpClient from '../../../../services'
import { ICreateAccessRequestAction } from '../reducers/create/request'
import { accessActions } from '..'

interface ListAccessRequestBody {
  gym_student_id: number
  type: string
}

export default function* create(
  action: PayloadAction<ICreateAccessRequestAction>,
) {
  try {
    const body: ListAccessRequestBody = {
      gym_student_id: action.payload.data.gym_student_id,
      type: action.payload.data.type,
    }

    yield call(httpClient.post, 'http://localhost:3334/access', body)

    yield put(accessActions.createSuccess())
    action.payload.onSuccess()
  } catch (error) {
    yield put(accessActions.createFailure())
  }
}
