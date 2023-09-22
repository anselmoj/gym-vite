import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export default function createFailure(draft: Draft<IAthleteInitialData>): void {
  draft.create.isLoading = false
}
