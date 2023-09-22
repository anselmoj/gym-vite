/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

interface IShowAthletesSuccessAction {
  data: {
    gender: string
    name: string
    is_active: boolean
    id: number
  }
}

export default function showSuccess(
  draft: Draft<IAthleteInitialData>,
  action: PayloadAction<IShowAthletesSuccessAction>,
): void {
  draft.show.isLoading = false
  draft.show.data = action.payload.data
}
