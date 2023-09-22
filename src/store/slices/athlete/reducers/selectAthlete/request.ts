/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export interface ISelectAthletesRequestAction {
  data: {
    page: number
  }
}

export default function selectRequest(
  draft: Draft<IAthleteInitialData>,
  _: PayloadAction<ISelectAthletesRequestAction>,
): void {
  draft.selectAthlete.isLoading = true
  draft.selectAthlete.data = []
}
