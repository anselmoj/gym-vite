/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export interface IShowAthleteRequestAction {
  data: {
    id: number
  }
}

export default function showRequest(
  draft: Draft<IAthleteInitialData>,
  _: PayloadAction<IShowAthleteRequestAction>,
): void {
  draft.show.isLoading = true
}
