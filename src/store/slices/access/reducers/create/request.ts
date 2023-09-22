/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAccessInitialData } from '../..'

export interface ICreateAccessRequestAction {
  data: {
    gym_student_id: number
    type: string
  }
  onSuccess(): void
}

export default function createRequest(
  draft: Draft<IAccessInitialData>,
  _: PayloadAction<ICreateAccessRequestAction>,
): void {
  draft.create.isLoading = true
}
