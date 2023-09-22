import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export default function disableFailure(draft: Draft<IAthleteInitialData>) {
  draft.disable.isLoading = false
}
