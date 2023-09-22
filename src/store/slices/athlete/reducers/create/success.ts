import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export default function createSuccess(draft: Draft<IAthleteInitialData>): void {
  draft.create.isLoading = false
}
