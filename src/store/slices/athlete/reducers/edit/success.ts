import { Draft } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

export default function editSuccess(draft: Draft<IAthleteInitialData>): void {
  draft.edit.isLoading = false
}
