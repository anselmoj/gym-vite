/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export interface IEnableAthleteRequestAction {
  data: {
    id: number
  }
  functions: {
    success: () => void
  }
}

function enableRequest(
  draft: Draft<IAthleteInitialData>,
  _: PayloadAction<IEnableAthleteRequestAction>,
) {
  draft.enable.isLoading = true
}

export default enableRequest
