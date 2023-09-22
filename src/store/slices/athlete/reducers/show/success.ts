/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

// interface IShowAthletesSuccessAction {
//   data: {
//     gender: string
//     name: string
//   }
// }

export default function showSuccess(
  draft: Draft<IAthleteInitialData>,
  // _: PayloadAction<IShowAthletesSuccessAction>,
): void {
  draft.list.isLoading = false
}
