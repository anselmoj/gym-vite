import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export default function listFailure(draft: Draft<IAthleteInitialData>): void {
  draft.list.isLoading = false
  draft.list.withError = true
}
