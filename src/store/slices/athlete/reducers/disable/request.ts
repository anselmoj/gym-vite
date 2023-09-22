/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IAthleteInitialData } from '../../index'

export interface IDisableAthleteRequestAction {
  data: {
    id: number
  }
  functions: {
    success: () => void
  }
}

export default function disableRequest(
  draft: Draft<IAthleteInitialData>,
  _: PayloadAction<IDisableAthleteRequestAction>,
) {
  draft.disable.isLoading = true
}
