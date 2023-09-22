import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export default function selectFailure(draft: Draft<IAthleteInitialData>): void {
  draft.selectAthlete.isLoading = false
}
