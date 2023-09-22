import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

interface IListAthletesRequestAction {
  data: {
    page: number
  }
}

export default function listRequest(
  draft: Draft<IAthleteInitialData>,
  action: PayloadAction<IListAthletesRequestAction>,
): void {
  draft.list.isLoading = true
  draft.list.withError = false
  draft.list.data = []
  draft.list.pagination.currentPage = action.payload.data.page
}

export type { IListAthletesRequestAction }
