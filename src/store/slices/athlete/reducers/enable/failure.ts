import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export default function enableFailure(draft: Draft<IAthleteInitialData>) {
  draft.enable.isLoading = false
}
