/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export interface ICreateAthleteRequestAction {
  data: {
    name: string
    gender: string
    is_active: boolean
  }
  onSuccess(): void
}

export default function createRequest(
  draft: Draft<IAthleteInitialData>,
  _: PayloadAction<ICreateAthleteRequestAction>,
): void {
  draft.create.isLoading = true
}
