/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export interface IEditAthleteRequestAction {
  data: {
    name: string
    gender: string
  }
  id: number
  onSuccess(): void
}

export default function editRequest(
  draft: Draft<IAthleteInitialData>,
  _: PayloadAction<IEditAthleteRequestAction>,
): void {
  draft.edit.isLoading = true
}
