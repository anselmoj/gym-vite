import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export default function showFailure(draft: Draft<IAthleteInitialData>): void {
  draft.show.isLoading = false
}
